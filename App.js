import React from 'react';
import styled from 'styled-components';

import AppContainer from './src/navigation';

function App() {
  return (
    <Wrapper>
      <AppContainer />
    </Wrapper>
  );
}

const Wrapper = styled.View`
  flex: 1;
`;

export default App;
