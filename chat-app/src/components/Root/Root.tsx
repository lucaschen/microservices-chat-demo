import { gql } from "@apollo/client";
import { Spinner } from "@blueprintjs/core";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";

import apolloClient from "#root/api/apolloClient";
import userSessionAtom from "#root/recoil/atoms/userSession";

const SpinnerWrapper = styled.div`
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const query = gql`
  {
    userSession(me: true) {
      user {
        username
      }
    }
  }
`;

const Root = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userSession, setUserSession] = useRecoilState(userSessionAtom);

  useEffect(() => {
    apolloClient.query({ query }).then((res) => {
      const userSession = res.data?.userSession ?? null;

      setUserSession(userSession);
      setIsLoading(false);
    });
  }, []);

  return isLoading ? (
    <SpinnerWrapper>
      <Spinner />
    </SpinnerWrapper>
  ) : (
    <pre>{JSON.stringify(userSession, null, 2)}</pre>
  );
};

export default Root;
