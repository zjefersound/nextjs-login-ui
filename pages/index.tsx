import { Heading, Grid, Flex, Input, Link, Button, Text } from "@chakra-ui/core";

import Divider from '../components/Divider';

export default function Home() {
  return (
    <>
      <Flex
        zIndex={-1}
        position='fixed'
        bottom={0}
        left={0}
      >
        <img src='/background-image.png' alt="" width='600'/>
      </Flex>
      <Grid
        zIndex={2}
        as="main"
        height="100vh"
        templateColumns="1fr 480px 480px 1fr"
        templateRows="1fr 480px 1fr"
        templateAreas="
          '. . . .'
          '. logo form .'
          '. . . .'
        "
        justifyContent="center"
        alignItems="center"
      >
        <Flex
          gridArea="logo"
          flexDir="column"
          alignItems="flex-start"
        >
          <img src='/white-logo.png' alt="" width='80'/>
          <Heading 
            size="2xl" 
            lineHeight="shorter"
            marginTop={16}
          >
            Sua plataforma de marketing de influência
          </Heading>
        </Flex>

        <Flex
          gridArea="form"
          height="100%"
          backgroundColor="gray.700"
          borderRadius="md"
          flexDir="column"
          alignItems="stretch"
          padding={16}
        >
          <Input 
            height="3rem"
            backgroundColor="gray.800"
            focusBorderColor="pink.500"
            borderRadius="sm"
            placeholder="E-mail"
          />
          <Input 
            height="3rem"
            backgroundColor="gray.800"
            focusBorderColor="pink.500"
            borderRadius="sm"
            placeholder="Senha"
            type='password'
            marginTop={2}
          />
          <Link
            alignSelf="flex-start"
            marginTop={2}
            fontSize="sm"
            color="pink.600"
            fontWeight="bold"
            _hover={{ color: 'pink.500' }}
          >
            Esqueci minha senha
          </Link>

          <Button
            marginTop={6}
            height='3rem'
            borderRadius='sm'
            border={0}
            backgroundColor="pink.500"
            _hover={{ backgroundColor: "pink.600"}}
            _active={{ backgroundColor: "pink.700"}}
            
          >
            Entrar
          </Button>
          <Text
            textAlign="center"
            fontSize="sm"
            color="gray.300"
            marginTop={6}
          >
            Não tem uma conta? {"   "}
            <Link
              color="pink.600"
              fontWeight="bold"
              _hover={{ color: 'pink.500' }}
            >
              Cadastrar-se
            </Link>
          </Text>
          
          <Divider />

          <Flex alignItems="center">
            <Text fontSize='sm'>Ou entre com</Text>
            <Button
              height="3rem"
              flex='1'
              backgroundColor='#3b5998'
              borderRadius='sm'
              _hover={{ backgroundColor: "#274986"}}
              _active={{ backgroundColor: "274986"}}
              marginLeft={6}
            >
              Facebook
            </Button>
          </Flex>
        </Flex>
      </Grid>
    </>
  )
}
