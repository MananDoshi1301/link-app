import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  // FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  // ButtonGroup
} from '@chakra-ui/react'

const Signin = () => {

  const [cred, setCred] = useState({
    email: "",
    password: ""
  })

  const handleInputChange = (e) => {
    setCred({ ...cred, [e.target.name]: e.target.value });
  }

  const PostData = async (e) => {
    e.preventDefault();
    const { email, password } = cred;


    const response = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email, password
      })
    });

    const res_data = await response.json();
    console.log(res_data)
    if (response.status === 422 || !res_data) {
      window.alert("Invalid Login\n" + res_data.message);
    } else {
      window.alert(res_data.message);
    }

  }

  return (
    <div>

      <form method="post">

        <FormControl isRequired>
          <FormLabel htmlFor='email'>Email address</FormLabel>
          <Input id='email' type='email' name={'email'}
            value={cred.email}
            onChange={handleInputChange} />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>

        <FormControl isRequired>
          <FormLabel htmlFor='password'>Password</FormLabel>
          <Input id='password' type='password' name={'password'}
            value={cred.password}
            onChange={handleInputChange} />
          <FormHelperText>Your password is encrypted!</FormHelperText>
        </FormControl>

        <Button onClick={PostData} colorScheme='blue'>Button</Button>
      </form>
    </div>
  )
}

export default Signin