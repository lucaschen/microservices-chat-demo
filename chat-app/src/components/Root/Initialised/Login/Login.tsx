import { gql, useMutation } from "@apollo/client";
import { Button, Card, Classes, Elevation, FormGroup, InputGroup, Intent } from "@blueprintjs/core";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import styled from "styled-components";

import userSessionAtom from "#root/recoil/atoms/userSession";
import useGenerateId from "#utils/hooks/forms/useGenerateId";
import toaster from "#utils/misc/toaster";

interface FormData {
  password: string;
  username: string;
}

const Form = styled.form`
  margin: auto;
  width: 25rem;
`;

const Heading = styled.strong.attrs({ className: Classes.HEADING })`
  display: block;
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
`;

const LargeFormGroup = styled(FormGroup)`
  .bp3-label {
    font-size: 1rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

const mutation = gql`
  mutation ($password: String!, $username: String!) {
    createUserSession(password: $password, username: $username) {
      user {
        username
      }
    }
  }
`;

const Login = () => {
  const { formState, handleSubmit, register } = useForm<FormData>();
  const [createUserSession] = useMutation(mutation);
  const generateId = useGenerateId();
  const [, setUserSession] = useRecoilState(userSessionAtom);

  const onSubmit = async ({ password, username }: FormData) => {
    try {
      const result = await createUserSession({ variables: { password, username } });

      if (result.data.createUserSession) setUserSession(result.data.createUserSession);
    } catch (err) {
      toaster.show({ intent: Intent.DANGER, message: "Something went wrong! Please try again." });
    }
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Card elevation={Elevation.TWO}>
          <Heading>Chat App</Heading>
          <LargeFormGroup label="Username" labelFor={generateId("username")}>
            <InputGroup
              autoFocus
              disabled={formState.isSubmitting}
              id={generateId("username")}
              large
              {...register("username")}
            />
          </LargeFormGroup>
          <LargeFormGroup label="Password" labelFor={generateId("password")}>
            <InputGroup
              disabled={formState.isSubmitting}
              id={generateId("password")}
              large
              type="password"
              {...register("password")}
            />
          </LargeFormGroup>
          <Button intent={Intent.PRIMARY} large loading={formState.isSubmitting} type="submit">
            Login
          </Button>
        </Card>
      </Form>
    </Wrapper>
  );
};

export default Login;
