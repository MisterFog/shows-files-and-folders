import React, { Component } from 'react';

class File extends Component {
    render() {
        const { name } = this.props;
        return (
            <div>
                {name}
            </div>
        );
    }
}

export default File;
