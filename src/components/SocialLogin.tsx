import { FaComment, FaGithub } from "react-icons/fa";
import { Box, Button, Divider, HStack, Text, VStack } from "@chakra-ui/react";
export default function SocialLogin() {
  const kakaoParams = {
    client_id: "9cf47aee6f8c50d82647b65c1d4413c4",
    redirect_uri: "http://127.0.0.1:3000/social/kakao",
    response_type: "code",
  };
  const params = new URLSearchParams(kakaoParams).toString();
  const githubParams = {
    client_id: "13ac15f26c831d65a1a3",
    scope: "read:user,user:email",
  };
  // const kakaoUrl = `https://kauth.kakao.com/oauth/authorize?${new URLSearchParams(
  //   kakaoParams
  // ).toString()}`;
  const githubUrl = `https://github.com/login/oauth/authorize?${new URLSearchParams(
    githubParams
  ).toString()}`;
  return (
    <Box mb={4}>
      <HStack my={8}>
        <Divider />
        <Text textTransform={"uppercase"} color="gray.500" fontSize="xs" as="b">
          Or
        </Text>
        <Divider />
      </HStack>
      <VStack>
        <Button
          as="a"
          href="https://github.com/login/oauth/authorize?client_id=13ac15f26c831d65a1a3&scope=read:user,user:email"
          w="100%"
          leftIcon={<FaGithub />}
        >
          Continue with Github
        </Button>
        <Button
          as="a"
          href={`https://kauth.kakao.com/oauth/authorize?${params}`}
          w="100%"
          leftIcon={<FaComment />}
          colorScheme={"yellow"}
        >
          Continue with Kakao
        </Button>
      </VStack>
    </Box>
  );
}
