import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  CloseButton,
  HStack,
  useDisclosure,
} from "@chakra-ui/react";

const AlertBox = () => {
  const {
    isOpen: isVisible,
    onClose,
    onOpen,
  } = useDisclosure({ defaultIsOpen: true });

  return isVisible ? (
    <Box marginRight={3} marginTop={5}>
      <Alert
        padding={8}
        status="success"
        borderRadius={8}
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        justifyContent="space-between"
      >
        <AlertTitle fontSize={20}>
          Jump-start your library with games from Steam, PlayStation, Xbox or
          GOG. Integreted data from rawg.io api.
        </AlertTitle>
        <CloseButton borderRadius="full" onClick={onClose} />
      </Alert>
    </Box>
  ) : null;
};

export default AlertBox;
