import React from 'react';

class GetQuotes extends React.Component {

    renderQuotes = (quotes) => {
        return(
                <>
                    <thead>
                        <tr className="table-header table-row">
                            <th>#</th>
                            <th>Quote</th>
                            <th>Added By</th>
                        </tr>
                    </thead>
                    <tbody>
                        { quotes.map(quote => (
                            <tr className="table-row" key={quote.id}>
                                <td>{quote.id}</td>
                                <td className="quote-text">{quote.quote}</td>
                                <td>trollabot</td>
                            </tr>
                        ))}
                    </tbody>
                </>

        )

    }

    render() {
        const { stream } = this.props;

        console.log(stream[0].quotes.id, 'from GetQuotes');

        return (
            <>
                { stream[0].quotes.id === null ? this.renderQuotes([]) : this.renderQuotes(stream[0].quotes) }
            </>
        );
    }
}

export default GetQuotes;