import React from 'react';
import Menu from './components/Menu';
import Header from './components/Header';
import ContentHeader from './components/ContentHeader';
import Content from './components/Content';
import Footer from './layout/Footer';
//import temp data
import TempData from './data/data.json';


class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      loading: true,
      stream: [{'stream':'Streamer', 'quotes': {'id': null, 'quote':'Select a stream from the drop down menu'}}]
    }
  }

  componentDidMount(){
    //simulate api call
    setTimeout(() => {
      const data = TempData.map(quotes => quotes);
      this.setState({ loading: false, data });
    })
  }

  selectStream = (streamName) => {
    this.setState({ stream: this.state.data.filter(stream => stream.stream === streamName) });
  }

  render() {
    const { loading, stream, data } = this.state;

    return (
      <div className="container">
        <Menu />
        <div className="main">
          { 
          
            loading ? 'Loading...' : 
            
            <>
              <Header data={data} selectStream={this.selectStream} />
              <ContentHeader stream={stream} />
              <Content stream={stream} />
            </>
          }
          <Footer />
        </div>

      </div>
    )
  }
};

export default App;
