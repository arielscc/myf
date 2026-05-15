import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  ModalContent,
  Link,
} from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

const CertModal = ({ item }) => {
  const { title, url } = item;
  const { onOpen, onClose, isOpen } = useDisclosure();
  return (
    <>
      <Link onClick={onOpen} textAlign="left" fontWeight="normal">
        {title}
      </Link>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        motionPreset="slideInBottom"
        isCentered
        size="6xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody h="300px" p="10">
            <Image
              src={url}
              alt={title}
              width={1280}
              height={720}
              style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
              quality={100}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CertModal;
