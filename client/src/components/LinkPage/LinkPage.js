import React from 'react';
import { Stack, Text, Button } from '@chakra-ui/react';

const LinkPage = () => {

  const LinkCard = ({title = "Sample", urlParam = "www.test.com"}) => (
    <Stack p="4" boxShadow="lg" m="4" borderRadius="sm">
      <Stack direction="row" alignItems="center">
        <Text fontWeight="bold">{title}</Text>        
      </Stack>

      <Stack
        direction={{ base: 'column', md: 'row' }}
        justifyContent="space-between">
        <Text fontSize={{ base: 'sm' }} textAlign={'left'} maxW={'4xl'}>
          {urlParam}
        </Text>
        <Stack direction={{ base: 'column', md: 'row' }}>
          <Button variant="outline" colorScheme="blue">
            OK
          </Button>
          <Button colorScheme="blue">OK</Button>
        </Stack>
      </Stack>
    </Stack>
  )

  return (
    <>
    <LinkCard />
    <LinkCard />
    </>
  )
}

export default LinkPage




// export default function SimpleCookiePreference() {
//   return (
    
//   );
// }