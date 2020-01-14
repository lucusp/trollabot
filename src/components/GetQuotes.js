import React from 'react';
import axios from 'axios';

class GetQuotes extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            loading: true
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/comments')
            .then(resp => {
                const quotes = resp.data.map(quote => quote);
                this.setState({loading: false, quotes});
            })
        
    }

    renderQuotes = (quotes) => {
        return(
                <>
                    <tr className="table-header table-row">
                        <th>#</th>
                        <th>Quote</th>
                        <th>Added By</th>
                    </tr>
                    { quotes.map(quote => (
                        <tr className="table-row" key={quote.id}>
                            <td>{quote.id}</td>
                            <td className="quote-text">{quote.body}</td>
                            <td>trollabot</td>
                        </tr>
                    ))}
                </>

        )

    }

    render() {
        const { loading, quotes } = this.state;

        return (
            <div>
                { loading ? 'Loading...' : this.renderQuotes(quotes)}
            </div>
        );
    }
}

export default GetQuotes;