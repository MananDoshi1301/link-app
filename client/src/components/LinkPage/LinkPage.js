import React, { useEffect, useState } from 'react';
import { Stack, Text, Button } from '@chakra-ui/react';
import {CopyIcon, DeleteIcon} from '@chakra-ui/icons'

const LinkPage = ({userid}) => {

  const [linkData, setLinkData] = useState([]);

  const getLinks = async () => {
    try{     
      // console.log(userid) 
      const res = await fetch(`/link-page/${userid}`,{
        method: "GET",
        headers: {
          Accept: "application/json",
          'Content-Type': 'application/json'  
        }
      })
      const data = await res.json();
      // console.log(data.data);
      setLinkData(data.data);
    } catch(err) {
      console.log(err);
    }
  }


  useEffect(() => {
    
    getLinks();    
  }, [])


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
            <CopyIcon />
          </Button>
          <Button colorScheme="blue"><DeleteIcon /></Button>
        </Stack>
      </Stack>
    </Stack>
  )

  return (
    <>
    {
      linkData.map((item, key) => (
        <LinkCard title={item.title} urlParam={item.url} key={key} />
      ))
    }
    </>
  )
}

export default LinkPage




// export default function SimpleCookiePreference() {
//   return (
    
//   );
// }