import React from "react";
import { useRouteError } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/Navbar";

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  return (
    <div>
      <ErrorContainer id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <i>{error.statusText || error.message}</i>
      </ErrorContainer>
      <Navbar />
    </div>
  );
}

export default ErrorPage;
