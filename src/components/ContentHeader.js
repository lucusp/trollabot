import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';


class ContentHeader extends React.Component {
    render(){
        const { stream } = this.props;
        const data = stream != null ? stream.map(stream => stream) : '';
        const randomQuote = data[0].quotes[Math.floor(Math.random() * data[0].quotes.length)];

        return(
            <div className="content-header">
                <h1 className="content-title">{ data[0].stream } / quotes</h1>
                <blockquote className="content-subtitle">
                    <FaQuoteLeft />
                    { ' ' } 
                        { randomQuote ? randomQuote.quote : ' Select a stream from the drop down menu ' }
                    { ' ' }
                    <FaQuoteRight />
                </blockquote>
            </div>
        )
    }
}

export default ContentHeader;