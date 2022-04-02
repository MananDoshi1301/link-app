import React, { useEffect, useState, useCallback } from 'react';
import { Stack, Text, Button, useToast } from '@chakra-ui/react';
import {CopyIcon, DeleteIcon} from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom';
import DisplayLinks from './DisplayLinks';


const LinkPage = ({details, setDetails}) => {

  const [linkData, setLinkData] = useState([]);
  const navigate = useNavigate();
  // const toast = useToast();

  const getLinks = useCallback(async () => {
    
    try{                 
      const res = await fetch(`/link-page/${details.id}`,{
        method: "GET",
        headers: {
          'Accept': "application/json",
          // 'Content-Type': 'application/json'  
        }
      })
      const data = await res.json();      
      setLinkData(data.data);

    } catch(err) {
      // console.log(err);
    }
  }, [details.id])

  useEffect(() => {   

    const session = JSON.parse(sessionStorage.getItem('details'));
      
    if(details.isLoggedIn === false && session === null){        
      navigate("/please-log-in");
      return 0;
    }

    if(!details.id){
      const newDetails = {
        email: session.email,
        id: session.id,
        isLoggedIn: true
      }      
      setDetails(newDetails);                
    }
     
    getLinks(); 
  }, [details.id, details.isLoggedIn, setDetails, getLinks, navigate])


  // const LinkCard = ({title = "Sample", urlParam = "www.test.com"}) => (
  //   <Stack p="4" boxShadow="lg" m="4" borderRadius="sm">
  //     <Stack direction="row" alignItems="center">
  //       <Text fontWeight="bold">{title}</Text>        
  //     </Stack>

  //     <Stack
  //       direction={{ base: 'column', md: 'row' }}
  //       justifyContent="space-between">
  //       <Text fontSize={{ base: 'sm' }} textAlign={'left'} maxW={'4xl'}>
  //         {urlParam}
  //       </Text>
  //       <Stack direction={{ base: 'column', md: 'row' }}>
  //         <Button variant="outline" colorScheme="blue" 
  //         onClick={
  //           async ()=>{
  //             try {
  //               await navigator.clipboard.writeText(urlParam)                
  //               toast({
  //                 title: `Text Copied Successfully!`,
  //                 variant: 'solid',
  //                 isClosable: true,
  //               })                
  //               // console.log('Async: Copying to clipboard was successful!');
  //             } catch (err) {
  //               console.log(err);
  //               toast({
  //                 title: `Some error did not copy text!`,
  //                 status: 'error',
  //                 isClosable: true,
  //               })
  //             }
  //           }            
  //         }
  //         >
  //           <CopyIcon />
  //         </Button>
  //         <Button colorScheme="blue"><DeleteIcon /></Button>
  //       </Stack>
  //     </Stack>
  //   </Stack>
  // )

  return (
    <>
    {
      // linkData.map((item, key) => (
      //   <LinkCard title={item.title} urlParam={item.url} key={key} />
      // ))
    }
    <DisplayLinks linkData={linkData} />
    </>
  )
}

export default LinkPage




// export default function SimpleCookiePreference() {
//   return (
    
//   );
// }