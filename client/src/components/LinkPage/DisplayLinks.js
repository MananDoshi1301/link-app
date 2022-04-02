import React from 'react';
import { Stack, Text, Button, useToast } from '@chakra-ui/react';
import { CopyIcon, DeleteIcon } from '@chakra-ui/icons';


const DisplayLinks = ({ linkData = [] }) => {

  const toast = useToast();
  const LinkCard = ({ title = "Sample", urlParam = "www.test.com" }) => (
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
          <Button variant="outline" colorScheme="blue"
            onClick={
              async () => {
                try {
                  await navigator.clipboard.writeText(urlParam)
                  toast({
                    title: `Text Copied Successfully!`,
                    variant: 'solid',
                    isClosable: true,
                  })
                  // console.log('Async: Copying to clipboard was successful!');
                } catch (err) {
                  console.log(err);
                  toast({
                    title: `Some error did not copy text!`,
                    status: 'error',
                    isClosable: true,
                  })
                }
              }
            }
          >
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

export default DisplayLinks