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
            <table className="pure-table pure-table-striped" style={{ paddingTop: "45px" }}>
                <thead>
                    <tr>
                        <th>Channel</th>
                        <th>#</th>
                        <th>Quote</th>
                        <th>Added By</th>
                    </tr>
                </thead>
                <tbody>
                    { quotes.map(quote => (
                        <tr key={quote.id}>
                            <td>Daut</td>
                            <td>{quote.id}</td>
                            <td>{quote.body}</td>
                            <td>trollabot</td>
                        </tr>
                    ))}
                </tbody>
            </table>

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