import { Button, Flex, Image, Text } from "@chakra-ui/react";

function Home() {

  return (
    <Flex
      width="100%"
      height="100vh"
      flexDirection="column"
      alignItems="center"
      justifyContent="center">
      <Text color="gray.400" fontSize="md">Welcome abord</Text>
      <Flex marginTop="1rem" alignItems="center">
        <Image
          src="https://github.com/luisfilipepedroso.png"
          alt="User avatar"
          width="88px"
          height="88px"
          borderRadius="full"
          marginRight="1rem" />
        <Text color="gray.100" marginTop="0.5rem" fontSize="xl">Luis Filipe</Text>
      </Flex>

      <Button
        type="submit"
        marginTop="2rem"
        marginBottom="1rem"
        width="256px"
        backgroundColor="secondary.500"
        onClick={() => { }}>Sair</Button>
    </Flex>
  )
}

export default Home;