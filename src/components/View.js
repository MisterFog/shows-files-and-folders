import React, { Component } from 'react';
import Folder from './Folder';
import File from './File';
import data from '../Data.json';

class View extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            searchQuery: '',
            expandedFolders: new Set(props.expandedFolders)
        };
    }

    componentDidMount() {
        this.setState({ data });
    }

    handleSearch = (e) => {
        this.setState({ searchQuery: e.target.value });
    }

    filterData = (data, query) => {
        if (!query) return data;

        const lowerCaseQuery = query.toLowerCase();

        return data.reduce((filtered, item) => {
            if (item.type === 'FOLDER') {
                const children = this.filterData(item.children, query);
                if (children.length > 0) {
                    filtered.push({ ...item, children });
                }
            } else if (item.type === 'FILE' && item.name.toLowerCase().includes(lowerCaseQuery)) {
                filtered.push(item);
            }
            return filtered;
        }, []);
    }

    renderTree = (data) => {
        return data.map((item) => {
            if (item.type === 'FOLDER') {
                return (
                    <Folder key={item.name} name={item.name} isOpen={this.state.expandedFolders.has(item.name)}>
                        {this.renderTree(item.children)}
                    </Folder>
                );
            } else if (item.type === 'FILE') {
                return (
                    <File key={item.name} name={item.name} mimeType={item.mimeType} />
                );
            }
            return null;
        });
    }

    render() {
        const { data, searchQuery } = this.state;
        const filteredData = this.filterData(data, searchQuery);

        return (
            <div>
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={this.handleSearch}
					className='search'
                />
                <div>
                    {this.renderTree(filteredData)}
                </div>
            </div>
        );
    }
}

View.defaultProps = {
    expandedFolders: []
};

export default View;
