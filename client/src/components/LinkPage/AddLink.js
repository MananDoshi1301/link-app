import React from 'react'

import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';

const AddLink = () => {  

  return (
    <>
    <Flex
      minH={'85vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack
        spacing={4}
        w={'full'}
        maxW={'md'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={12}>
        <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
          Enter Link Details
        </Heading>


        <FormControl id="password" isRequired>
          <FormLabel>Title</FormLabel>
          <Input type="password" />
        </FormControl>

        
        <FormControl id="email" isRequired>
          <FormLabel>URL</FormLabel>
          <Input
            // placeholder="your-email@example.com"
            _placeholder={{ color: 'gray.500' }}
            type="email"
          />
        </FormControl>




        <Stack spacing={6}>
          <Button
            bg={'blue.400'}
            color={'white'}
            _hover={{
              bg: 'blue.500',
            }}>
            Submit
          </Button>
        </Stack>
      </Stack>
    </Flex>
    </>
  )
}

export default AddLink
// export default function ResetPasswordForm(): JSX.Element {
//   return (
    
//   );
// }