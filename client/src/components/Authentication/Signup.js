import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  // ButtonGroup
} from '@chakra-ui/react'

const Signup = () => {

  const [cred, setCred] = useState({
    email: "",
    password: ""
  })

  const handleInputChange = (e) => {
    setCred({ ...cred, [e.target.name]: e.target.value });
    console.log(cred.email);
  }

  const isError = cred === ''
  return (
    <div>
      {/* <FormControl isRequired>
        <FormLabel htmlFor='email'>Email address</FormLabel>
        <Input id='email' type='email' autoComplete={false} />
        <FormHelperText>We'll never share your email.</FormHelperText>
        <Button colorScheme='blue'>Button</Button>
      </FormControl> */}

      <FormControl isInvalid={isError}>
        <FormLabel htmlFor='email'>Email</FormLabel>
        <Input
          id='email'
          type='email'
          name={'email'}
          value={cred.email}
          onChange={handleInputChange}
        />
        {!isError ? (
          <FormHelperText>
            We'll never share your email.
          </FormHelperText>
        ) : (
          <FormErrorMessage>Email is required.</FormErrorMessage>
        )}
        <Button colorScheme='blue'>Button</Button>
      </FormControl>
    </div>
  )
}

export default Signup