import React, { Component } from 'react';

class File extends Component {
    render() {
        const { name, mimeType } = this.props;
        return (
            <div>
                {name} ({mimeType})
            </div>
        );
    }
}

export default File;
