import React from 'react';
import {
  Box,
  Flex,
  Avatar,
  // Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  // useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

const Navbar = ({ details }) => {

  const { colorMode, toggleColorMode } = useColorMode();
  // const { isOpen, onOpen, onClose } = useDisclosure();

  // const NavLink = ({ children }) => (
  //   <Link
  //     px={2}
  //     py={1}
  //     rounded={'md'}
  //     _hover={{
  //       textDecoration: 'none',
  //       bg: useColorModeValue('gray.200', 'gray.700'),
  //     }}
  //     href={'#'}>
  //     {children}
  //   </Link>
  // );

  const NavbarComp = () => (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <Box>My Link App</Box>

        <Flex alignItems={'center'}>
          <Stack direction={'row'} spacing={7}>
            <Button onClick={toggleColorMode}>
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>

            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={'https://avatars.dicebear.com/api/male/username.svg'}
                />
              </MenuButton>
              <MenuList alignItems={'center'}>
                <br />
                <Center>
                  <Avatar
                    size={'2xl'}
                    src={'https://avatars.dicebear.com/api/male/username.svg'}
                  />
                </Center>
                <br />
                <Center>
                  <p>{`Hello ${details.email}!`}</p>
                </Center>
                <br />
                <MenuDivider />
                {
                  details.email === "user" ? (
                    <>
                      <Link to={'./signin'}><MenuItem>Sign In</MenuItem></Link>
                      <Link to={'./signup'}><MenuItem>Sign Up</MenuItem></Link>
                    </>
                  ) : (
                    <>
                      <MenuItem>Logout</MenuItem>
                    </>
                  )
                }
              </MenuList>
            </Menu>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  )
  return (
    <>
      <NavbarComp />
    </>
  )
}

export default Navbar