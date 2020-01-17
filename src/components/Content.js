import React from 'react';
import GetQuotes from './GetQuotes';

class Content extends React.Component {
    render(){
        
        
        return (            
            <table className="content-data">
                <GetQuotes stream={this.props.stream} />
            </table>
        )
    }
    
}


export default Content;