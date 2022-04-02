import React, { useRef, useState } from 'react';
import {
  Stack, Text, Button, useToast,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure
} from '@chakra-ui/react';
import { CopyIcon, DeleteIcon, ExternalLinkIcon } from '@chakra-ui/icons';


const DisplayLinks = ({ linkData = [], deleteLink }) => {

  const toast = useToast();

  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = useRef()

  const [delLink, setDelLink] = useState({});

  const LinkCard = ({ title = "Sample", urlParam = "www.test.com", linkId = "" }) => (
    <>
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
            {/* Copy btn */}
            <Button variant="solid" colorScheme="blue"
              onClick={
                async () => {
                  try {
                    await navigator.clipboard.writeText(urlParam)
                    toast({
                      title: `Text Copied Successfully!`,
                      variant: 'solid',
                      isClosable: true,
                    })
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

            {/* Externally open window */}
            <Button
              onClick={
                () => {
                  window.open(urlParam)
                }
              }
              variant="outline"
              colorScheme="green"><ExternalLinkIcon /></Button>

            {/* Delete Button */}
            <Button
              onClick={
                () => {
                  setDelLink({
                    title, urlParam, linkId
                  })
                  onOpen();
                }
              }
              colorScheme="red"><DeleteIcon /></Button>
          </Stack>
        </Stack>
      </Stack>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Delete '{delLink.title}'
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='red'
                onClick={
                  () => {
                    deleteLink(delLink.linkId)
                    onClose()
                  }
                }
                ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )

  return (
    <>
      {
        linkData.map((item, key) => (
          <LinkCard title={item.title} urlParam={item.url} linkId={item._id} key={key} />
        ))
      }
    </>
  )
}

export default DisplayLinks