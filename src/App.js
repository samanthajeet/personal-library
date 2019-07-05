import React from "react";
import { withRouter } from "react-router";
import routes from "./routes";
import styled from "styled-components";

import Nav from "./components/Nav/Nav";

const Applicaiton = styled.div`
  font-family: "Nunito", sans-serif;
  background: #F9F9F9;
  height: 100%;
  width: 100vw;
  overflow-x: hidden;

  button: hover {
    cursor: pointer;
  }

`;

function App(props) {
  return (
    <Applicaiton className="App">
      <Nav history={props.history} />
      {routes}
    </Applicaiton>
  );
}

export default withRouter(App);
