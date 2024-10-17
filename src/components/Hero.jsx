import { HamburgerIcon } from "@chakra-ui/icons"
import { Box , VStack , HStack , Text , UnorderedList , ListItem, Link, Button , useTheme, IconButton } from "@chakra-ui/react"
import { listHover , borderBtn , shadedBtn } from './style.js'

const Hero = () => {

    const theme = useTheme();
    const purple = theme.colors.purple[900]; //for before pseudo element
    const purpleH = theme.colors.purple[700]; //for hamburger hover

  return (
    <Box 
    isolation={'isolate'}
    position={'relative'}
        css={{
            '&::before' : {
                content: '""',
                position: 'absolute',
                top: '0',
                left: '0',
                right: '0', 
                height: '100%',
                backgroundColor: `${purple}`,
                zIndex: '-1',
                transform: 'skewY(-5deg)',
                padding: '20px'
            }
        }}
        textColor={'white'}
        id="hero"
        marginBottom={20}
    >
        <VStack spacing={{
            base: 10,
            lg: 16,
            md: 14,
            sm: 10
        }} >
            <IconButton backgroundColor={'transparent'} position={'absolute'} top={5} right={5}
                display={{
                    base:'block',
                    lg:'none',
                }}
                _hover={{
                    backgroundColor: 'transparent'
                }}
            >
                <HamburgerIcon boxSize={12} textColor={'white'} rounded={'lg'} _hover={{
                        backgroundColor: `${purpleH}`
                    }}
                    transition={'all 0.15s ease-in'}
                    padding={1.5}
                    
                />
            </IconButton>

            <HStack width={"full"} justifyContent={"space-between"} paddingX={{
                    base: 0,
                    lg: 20,
                    sm: 0
                }}
                paddingTop={3}
                alignItems={'center'}
                borderBottom={{
                    base:'1px solid white',
                    lg: 'none',
                    sm: '1px solid white'
                }}
                display={{
                    base: 'none',
                    lg: 'flex',
                    sm: 'none'
                }}
            >
                <Text as="header" fontSize={34} fontWeight={"bold"} textColor={'purple.600'} >Scroller
                    <Text as="span" textColor={'white'}>.text </Text>
                </Text>
                <UnorderedList styleType="none" m={0} p={0} >
                    <HStack as="li" spacing={20} fontSize={{
                        base: 12,
                        lg: 20,
                        sm: 12
                    }}>
                        <ListItem>
                            <Link href="#scroller" sx={listHover}>
                            Scroller
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="#about" sx={listHover}>
                            About
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="#contact" sx={listHover}>
                            Contact
                            </Link>
                        </ListItem>
                    </HStack>
                </UnorderedList>
            </HStack>

            <HStack
                justifyContent={'space-between'}
                paddingX={{
                    base: 5,
                    lg: 24,
                    sm: 5
                }}
                spacing={{
                    base: 12,
                    lg: 36,
                    sm: 12
                }}
                paddingTop={{
                    base: 20,
                    lg:0,
                    sm: 20
                }} boxSizing="border-box"
            >
                <VStack spacing={{
                        base: 9,
                        lg: 14,
                        sm: 10
                    }}
                    alignItems={'start'}
                    w={{
                        base:'full',
                        lg: '50%',
                        md: '50%',
                        sm: '70%'
                    }}
                >
                    <Text as="header" fontSize={{
                        base: '2xl',
                        lg: '6xl',
                        sm: '2xl'
                    }} fontWeight={"bold"} textAlign={"left"} textTransform={"uppercase"} 
                        textColor={{
                            base:'purple.600',
                            lg: 'white'
                        }}
                    >
                        Scroller.
                        <Text as="span" fontSize={{
                            base: 'md',
                            lg: '4xl',
                            sm: 'md'
                        }} fontWeight={400} textAlign={"left"} textTransform={"uppercase"}
                            textColor={{
                                base:'white',
                                lg: 'white'
                            }}
                        >
                        text
                        </Text>
                    </Text>

                    <VStack alignItems={'start'} spacing={{
                        base:6,
                        lg: 6,
                        sm: 3
                    }} >
                        <Text as='p' fontSize={{
                            base:"md",
                            lg: 22,
                        }}>
                        Take away the hassel of scrolling contents manually. Let us do the scrolling.
                        </Text>
                        <HStack spacing={4}>
                            <Link href="#scroller">
                                <Button sx={shadedBtn}>
                                    Get Started
                                </Button>
                            </Link>
                            <Link href="#about">
                                <Button sx={borderBtn}>
                                    Learn more
                                </Button>
                            </Link>
                        </HStack>
                    </VStack>

                </VStack>
                <Box boxSize='sm'
                    display={{
                        base: 'none',
                        lg: 'grid',
                        md: 'grid',
                        sm:'none'
                    }}
                    alignItems= "center"
                >
                    {/* <Image src='src/img/Cartoonizing Faces_2.png' alt="Cartoonizing Faces_2.png"
                        w={72}
                    /> */}
                    <Box
                        backgroundImage={"url('src/img/Cartoonizing Faces_2.png')"} correct
                        backgroundRepeat={'no-repeat'}
                        backgroundSize={'cover'}
                        width={96} 
                        height={80}
                        border="1px solid red" 
                        textColor={'black'}
                        fontWeight={'bold'}
                        fontSize={44}
                        display={'flex'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        opacity={0.5}
                    > DUMMY IMAGE </Box>
                </Box>
            </HStack>

        </VStack>
    </Box>
  )
}

export default Hero