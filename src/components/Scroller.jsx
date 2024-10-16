import { Box, Button, Center, HStack, IconButton, Text, Textarea, VStack } from "@chakra-ui/react";
import { borderBtn , shadedBtn } from './style.js';
import { useState } from "react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";


const Scroller = () => {

  const [ userInput , setUserinput ] = useState("");
  let [ count , setCount ] = useState(0);

  const handelInput = (e)=>{
    setUserinput(e.target.value);
  }
  const Reset = ()=>{
    setUserinput("");
  }

  const handelCount = (inr)=>{
    console.log("inr:",inr)
    console.log('count: ', count)
    count+= inr;
    if( count < 0 ){
      count = 0
    }else if( count > 5 ){
      count = 5
    }
    setCount(count);
  }

  return (
    <Box id="scroller" marginY={24}>
      <Center>
        <VStack w={{
          base:'100%',
          lg: '50%',
          md: '70%'
        }} p={4}>
          {/* For top button section */}
            <HStack spacing={4} alignItems={'flex-end'} w={'full'} justifyContent={'space-between'} paddingX={4}>
              <HStack>
                <Button sx={shadedBtn}>
                  Start Scroll
                </Button>
                <Button sx={borderBtn} onClick={Reset}>
                  Reset
                </Button>
              </HStack>
              <VStack spacing={0}>
                <Text as={'span'} borderTop="1px solid" borderX="1px solid" borderColor="purple.500" w={'full'} textAlign={'center'} roundedTop={4}
                  textColor={'white'} backgroundColor={'purple.500'}
                >
                  Speed
                </Text>
                <HStack borderBottom="1px solid" borderX="1px solid" borderColor="purple.500" roundedBottom={4}>
                  {/* For Control Buttons */}
                  {/* Minus Buttons */}
                  <IconButton onClick={()=>(handelCount(-1))} backgroundColor={'gray.700'} roundedRight={3} roundedLeft={0} >
                    <MinusIcon color={'white'} />
                  </IconButton>
                  {/* Count */}
                  <Text paddingX={4} textColor={'white'}>
                    {count}
                  </Text>
                  {/* Add Button */}
                  <IconButton onClick={()=>(handelCount(1))} backgroundColor={'gray.700'} roundedRight={0} roundedLeft={3}  >
                    <AddIcon color={'white'} />
                  </IconButton>
                </HStack>
              </VStack>

            </HStack>
            <Textarea
              id="uInput"
              onChange={handelInput}
              placeholder="Enter your text here"
              borderColor="gray.500"
              rows={17}
              resize={'none'}
              textColor="white"
              value={userInput}
              sx={{
                '&::-webkit-scrollbar': {
                  width: '8px',
                },
                '&::-webkit-scrollbar-track': {
                  backgroundColor: 'gray.600',
                },
                '&::-webkit-scrollbar-thumb': {
                  backgroundColor: 'gray.800',
                  border: '1px solid',
                  borderColor: 'gray.600',
                  borderRadius: '12px',
                },
                '&:hover , &:active , &:focus':{
                  borderColor: 'gray.600'
                }
              }}
            />
        </VStack>
      </Center>
    </Box>
  )
}

export default Scroller