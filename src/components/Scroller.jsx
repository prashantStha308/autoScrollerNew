import { 
  Box, Button, Center, HStack, IconButton, Text, Textarea, useToast, VStack 
} from "@chakra-ui/react";
import { borderBtn, shadedBtn } from './style.js';
import { useRef, useState, useEffect } from "react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { scroller } from "./function.js";

const Scroller = () => {
  const [userInput, setUserInput] = useState("");
  const [count, setCount] = useState(0);
  const [speedDisplay, setSpeedDisplay] = useState('hidden');
  const [scrollClick, setScrollClick] = useState(0);

  const toast = useToast();
  const intervalID = useRef(null);

  const handleInput = (e) => {
    setUserInput(e.target.value);
  };

  const Reset = () => {
    setUserInput("");
    setCount(0);
    setSpeedDisplay('hidden');
    clearInterval(intervalID.current);
    intervalID.current = null;
  };

  const handleCount = (inr) => {
    setCount((prev) => {
      const newCount = Math.min(Math.max(prev + inr, 0), 5);
      if (newCount === 0) {
        clearInterval(intervalID.current);
        intervalID.current = null;
      } else {
        startScroll(newCount);
      }
      return newCount;
    });
  };

  const handleDisplay = (value) => {
    setSpeedDisplay(value);
  };

  const handleScrollClick = () => {
    if (!userInput && scrollClick === 0) {
      toast({
        title: 'Error',
        description: "No string found.",
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
      return;
    }

    setScrollClick((prevClick) => {
      const newClick = prevClick + 1;

      if (newClick === 1) {
        handleDisplay('visible');
        setCount(1);
        startScroll(1);
      } else if (newClick === 2) {
        handleDisplay('hidden');
        setScrollClick(0);
        setCount(0);
        clearInterval(intervalID.current);
        intervalID.current = null;
      }

      return newClick;
    });
  };

  const startScroll = (count) => {
    clearInterval(intervalID.current);
    intervalID.current = setInterval(() => {
      scroller(count , intervalID.current );
    }, 800);
  };

  useEffect(() => {
    return () => clearInterval(intervalID.current);
  }, []);

  return (
    <Box id="scroller" marginY={24}>
      <Center>
        <VStack w={{ base: '100%', lg: '50%', md: '70%' }} p={4}>
          <Text fontSize="4xl" fontWeight="bold">Scroller</Text>

          <HStack spacing={4} alignItems="flex-end" w="full" justifyContent="space-between" px={{ base: 0, lg: 4, md: 2, sm: 0 }}>
            <HStack>
              <Button sx={shadedBtn} onClick={handleScrollClick}>Start Scroll</Button>
              <Button sx={borderBtn} onClick={Reset}>Reset</Button>
            </HStack>

            <Box visibility={speedDisplay}>
              <VStack spacing={0}>
                <Text as="span" borderTop="1px solid" borderX="1px solid" borderColor="purple.500" w="full" textAlign="center" roundedTop={4}
                  textColor="white" bg="purple.500">
                  Speed
                </Text>
                <HStack borderBottom="1px solid" borderX="1px solid" borderColor="purple.500" roundedBottom={4}>
                  <IconButton onClick={() => handleCount(-1)} bg="gray.700" rounded={0} roundedBottomLeft={4} _hover={{ bg: 'gray.800' }}>
                    <MinusIcon color="white" />
                  </IconButton>
                  <Text px={4} textColor="white">{count}</Text>
                  <IconButton onClick={() => handleCount(1)} bg="gray.700" roundedBottomRight={4} rounded={0} _hover={{ bg: 'gray.800' }}>
                    <AddIcon color="white" />
                  </IconButton>
                </HStack>
              </VStack>
            </Box>
          </HStack>

          <Textarea
            id="uInput"
            onChange={handleInput}
            placeholder="Enter your text here"
            borderColor="gray.500"
            rows={17}
            resize="none"
            textColor="white"
            value={userInput}
            sx={{
              '&::-webkit-scrollbar': { width: '8px' },
              '&::-webkit-scrollbar-track': { bg: 'gray.600' },
              '&::-webkit-scrollbar-thumb': {
                bg: 'gray.800',
                border: '1px solid',
                borderColor: 'gray.600',
                borderRadius: '12px',
              },
              '&:hover, &:active, &:focus': { borderColor: 'gray.600' },
            }}
          />
        </VStack>
      </Center>
    </Box>
  );
};

export default Scroller;
