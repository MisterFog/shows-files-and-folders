import React, { Component } from 'react';

class Folder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: this.props.isOpen
        };
    }

    toggleFolder = () => {
        this.setState(prevState => ({ isOpen: !prevState.isOpen }));
    }

    render() {
        const { name, children } = this.props;
        const { isOpen } = this.state;

        return (
            <div style={{marginTop: '0.5rem'}}>
                <div onClick={this.toggleFolder} style={{ cursor: 'pointer' }}>
                    {isOpen ? '[-] ' : '[+] '} {name}
                </div>
                {isOpen && (
                    <div style={{ paddingLeft: 20 }}>
                        {children}
                    </div>
                )}
            </div>
        );
    }
}

Folder.defaultProps = {
    isOpen: false
};

export default Folder;
