import { Card, Classes, Elevation, FormGroup, InputGroup } from "@blueprintjs/core";
import styled from "styled-components";

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

const Login = () => {
  return (
    <Wrapper>
      <Form>
        <Card elevation={Elevation.TWO}>
          <Heading>Chat App</Heading>
          <LargeFormGroup label="Username">
            <InputGroup autoFocus large />
          </LargeFormGroup>
          <LargeFormGroup label="Password">
            <InputGroup large type="password" />
          </LargeFormGroup>
        </Card>
      </Form>
    </Wrapper>
  );
};

export default Login;
