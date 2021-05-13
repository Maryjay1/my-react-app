import React from 'react';
import Container from '@material-ui/core/Container';
import AppBar from './AppBar';
import List from './Checkbox';

function App() {
  return (
    <Container>
      <AppBar />
      <List />
      <div className='App'>{/* todos??? */}</div>
    </Container>
  );
}

export default App;
