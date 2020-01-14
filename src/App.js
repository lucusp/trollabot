import React from 'react';
import Menu from './layout/Menu';
import Header from './layout/Header';
import ContentHeader from './layout/ContentHeader';
import Content from './layout/Content';
import Footer from './layout/Footer';


class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Menu />
        <div className="main">
          <Header />
          <ContentHeader />
          <Content />
          <Footer />
        </div>

      </div>
    )
  }
};

export default App;
