import React from 'react';


class Header extends React.Component {
    render(){
        const { data } = this.props;
        return(
            <div className="header">
                <ul>
                    <li>
                        <a href="#" className="btn stream-toggle">Streams</a>
                        <ul className="dropdown">
                            { data.map(name => (
                                <li key={name.stream}>
                                    <a href="#" name={name.stream} 
                                    onClick={this.props.selectStream.bind(this, name.stream)}>
                                        {name.stream}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Header;