import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  ModalContent,
} from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

const CertModal = ({ item }) => {
  const { title, url } = item;
  const { onOpen, onClose, isOpen } = useDisclosure();
  return (
    <>
      <Button
        variant="link"
        onClick={onOpen}
        textAlign="left"
        fontWeight="normal"
        height="auto"
        whiteSpace="normal"
        aria-label={`Open certificate: ${title}`}
      >
        {title}
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        motionPreset="slideInBottom"
        isCentered
        size={{ base: 'full', md: '5xl', xl: '6xl' }}
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent
          mx={{ base: '0', md: '4' }}
          maxH={{ base: '100dvh', md: '90dvh' }}
        >
          <ModalHeader as="h2" pr="12" fontSize={{ base: 'md', md: 'xl' }}>
            {title}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody p={{ base: '3', md: '8' }}>
            <Image
              src={url}
              alt={title}
              width={1280}
              height={720}
              style={{
                width: '100%',
                maxHeight: 'calc(90dvh - 120px)',
                height: 'auto',
                objectFit: 'contain',
              }}
              quality={100}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CertModal;
