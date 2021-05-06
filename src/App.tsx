import * as React from "react";
import Smartphone from "./assets/smartphone.webp";
import CardHand from "./assets/mao_cartao.webp";
import CardCentral from "./assets/bg_0.webp";
import CardSmartphone from "./assets/card_smartphone.webp";
import {
  ChakraProvider,
  CSSReset,
  Box,
  theme,
  Text,
  Heading,
  Flex,
  Spacer,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
  Link,
  Image,
  Center,
} from "@chakra-ui/react";

import { ColorModeSwitcher } from "./components/ColorModeSwitcher";
import LandingPage from "./pages/LandingPage";

export const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <ChakraProvider theme={theme}>
        <CSSReset />
        <Flex bg="#ffffff" color="#000000">
          <Box p="2">
            <Heading size="md">Logo Nubank</Heading>
          </Box>
          <Menu isLazy>
            <MenuButton p="2">Página Inicial</MenuButton>
          </Menu>
          <Menu isLazy>
            <MenuButton p="2">Para você</MenuButton>
            <MenuList>
              {/* MenuItems are not rendered unless Menu is open */}
              <MenuItem>New Window</MenuItem>
              <MenuItem>Open Closed Tab</MenuItem>
              <MenuItem>Open File</MenuItem>
            </MenuList>
          </Menu>
          <Menu isLazy>
            <MenuButton p="2">Conta PJ </MenuButton>
          </Menu>
          <Menu isLazy>
            <MenuButton p="2">O Nubank </MenuButton>
            <MenuList>
              {/* MenuItems are not rendered unless Menu is open */}
              <MenuItem>New Window</MenuItem>
              <MenuItem>Open Closed Tab</MenuItem>
              <MenuItem>Open File</MenuItem>
            </MenuList>
          </Menu>
          <Menu isLazy>
            <MenuButton p="2">Perguntas</MenuButton>
          </Menu>
          <Spacer />
          <Box>
            <Button>Login</Button>
          </Box>
        </Flex>
        <Flex color="white">
          {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
          <Box flex="1" bg="rgb(138, 5, 190)" pt="64" pb="64" pl="32" pr="16">
            <Text fontSize="5xl">
              Pix: um novo jeito de fazer transferências e pagamentos
            </Text>
            <Link>Saiba como funciona</Link>
          </Box>
          <Center flex="1" bg="rgb(138, 5, 190)">
            <Image src={CardCentral} alt="Smartphone" mr="32" />
          </Center>
          <Box flex="1" bg="rgb(138, 5, 190)">
            <Text>Form</Text>
          </Box>
        </Flex>
        <Flex color="white">
          {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
          <Box
            flex="1"
            bg="rgb(245, 245, 245)"
            pt="64"
            pb="64"
            pl="32"
            pr="16"
            color="black"
          >
            <Text
              fontSize="3rem"
              fontWeight="500"
              lineHeight="1.16"
              color="rgb(138, 5, 190)"
            >
              Conta do Nubank
            </Text>
            <Text fontSize="3rem" fontWeight="500" lineHeight="1.16" mb="32">
              Nossa conta digital com mais de 20 milhões de clientes em todo o
              Brasil.
            </Text>
            <Link fontSize="1.25rem" fontWeight="500" lineHeight="1.16">
              Segura e sem complicações
            </Link>
          </Box>
          <Center flex="1" bg="rgb(245, 245, 245)">
            <Image src={Smartphone} alt="Smartphone" mr="32" />
          </Center>
        </Flex>
        <Flex color="white">
          {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
          <Box
            flex="1"
            bg="white"
            pt="64"
            pb="64"
            pl="32"
            pr="16"
            color="black"
          >
            <Text
              fontSize="3rem"
              fontWeight="500"
              lineHeight="1.16"
              color="rgb(138, 5, 190)"
            >
              Cartão de Crédito
            </Text>
            <Text fontSize="3rem" fontWeight="500" lineHeight="1.16" mb="32">
              Pode chamar ele de roxinho. Além disso, pode chamar ele de
              moderno, gratuito e prático também.
            </Text>
            <Link fontSize="1.25rem" fontWeight="500" lineHeight="1.16">
              Saiba mais
            </Link>
          </Box>
          <Box
            display="flex"
            flex="1"
            alignItems="flex-end"
            justifyContent="center"
            bg="#ffffff"
          >
            <Image src={CardHand} alt="Card Hand" htmlWidth="290px" />
          </Box>
        </Flex>
        <Flex color="white">
          {/* <ColorModeSwitcher justifySelf="flex-end" /> */}

          <Box
            flex="1"
            bg="rgb(83, 0, 130)"
            color="white"
            pt="64"
            pb="64"
            pl="32"
            pr="16"
          >
            <Text
              fontSize="3rem"
              fontWeight="500"
              lineHeight="1.16"
              color="rgb(192, 147, 251)"
              textDecoration="underline"
            >
              Rewards
            </Text>
            <Text
              fontSize="3rem"
              fontWeight="500"
              mb="16"
              lineHeight="1.16"
              color="#ffffff"
            >
              Um programa de pontos justo e fácil de usar.
            </Text>
            <Link fontSize="1.25rem" fontWeight="500">
              Saiba mais
            </Link>
          </Box>
          <Center flex="1" bg="rgb(83, 0, 130)" p="16">
            <Image src={CardSmartphone} alt="Card Hand" htmlWidth="420px" />
          </Center>
        </Flex>
        <Flex
          bgImage="url('https://nubank.com.br/_next/static/images/2af80081db969ec5f038fea9b4547563-challenge-system-large.jpg.webp')"
          bgPosition="center"
          bgRepeat="no-repeat"
        >
          <Box flex="1" color="white" pt="64" pb="64" pl="32" pr="16">
            <Text fontSize="3rem" fontWeight="500" mb="16" lineHeight="1.16">
              Reinventando a relação das pessoas com o dinheiro
            </Text>
            <Link fontSize="1.25rem" fontWeight="500">
              Saiba mais
            </Link>
          </Box>
          <Spacer />
        </Flex>
        <Flex
          bgImage="url('https://nubank.com.br/_next/static/images/a62f6c940498e28242d4ad84f4730942-nucommunity@3x.jpg.webp')"
          bgPosition="center"
          bgRepeat="no-repeat"
        >
          {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
          <Box flex="1" color="white" pt="64" pb="64" pl="32" pr="32">
            <Text fontSize="3rem" fontWeight="500" mb="16">
              NuCommunity
            </Text>
            <Text fontSize="3rem" fontWeight="500" mb="16" lineHeight="1.16">
              A comunidade oficial do Nubank
            </Text>
            <Link fontSize="1.25rem" fontWeight="500">
              Saiba mais
            </Link>
          </Box>
          <Spacer />
        </Flex>
        <Flex
          bgImage="url('https://nubank.com.br/_next/static/images/416d4c91b7b626c7ab23f3352eca9ea6-holding-device-smile@3x.jpg.webp')"
          bgPosition="center"
          bgRepeat="no-repeat"
        >
          {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
          <Box flex="1" color="white" pt="64" pb="64" pl="32" pr="32">
            <Text fontSize="3rem" fontWeight="500" mb="32" lineHeight="1.16">
              Um blog para você repensar o seu dinheiro
            </Text>
            <Link fontSize="1.25rem" fontWeight="500">
              Conheça o Fala, Nubank
            </Link>
          </Box>
          <Spacer />
        </Flex>
        <Flex color="white">
          {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
          <Box flex="1" bg=" rgb(25, 25, 25)" p="8" color="white">
            <Text fontSize="5xl" color="rgb(138, 5, 190)">
              Cartão de Crédito
            </Text>
            <Text fontSize="5xl">
              Pode chamar ele de roxinho. Além disso, pode chamar ele de
              moderno, gratuito e prático também.
            </Text>
            <Link>Saiba mais</Link>
          </Box>
          <Box flex="1" bg="rgb(25, 25, 25)" p="8" color="white">
            <Text>Image</Text>
          </Box>
        </Flex>
        <Flex color="white">
          {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
          <Box flex="1" bg=" rgb(25, 25, 25)" p="8" color="white">
            <Text fontSize="2xl">
              © 2021 Nu Pagamentos S.A. 18.236.120/0001-58 Rua Capote Valente,
              39 - São Paulo, SP - 05409-000
            </Text>
          </Box>
          <Box flex="1" bg="rgb(25, 25, 25)" p="8" color="white">
            <Text>Image</Text>
          </Box>
        </Flex>
        <Flex color="white">
          {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
          <Box flex="1" bg=" rgb(25, 25, 25)" p="8" color="white">
            <Text fontSize="2xl">English</Text>
            <Text fontSize="2xl">Portugues</Text>
          </Box>
        </Flex>
      </ChakraProvider>
    </>
  );
};
