import React from 'react';
import {withRouter} from 'react-router'
import routes from './routes';
import styled from 'styled-components'

import Nav from './components/Nav/Nav'

const Applicaiton = styled.div`
font-family: 'Nunito', sans-serif;

button: hover{
  cursor: pointer;
}
`

function App(props) {
  return (
    <Applicaiton className="App">
      <Nav history={props.history} />
      {routes}
    </Applicaiton>
  );
}

export default withRouter(App);
