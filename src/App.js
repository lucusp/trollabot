import React from 'react';
import Menu from './components/Menu';
import Header from './components/Header';
import Content from './components/Content';


class App extends React.Component {
  render() {
    return (
      <div id="layout">
        <Menu />
        <div id="main">
          <Header />
          <Content />
        </div>
      </div>
    )
  }
};

export default App;
