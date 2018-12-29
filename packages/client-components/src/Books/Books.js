import React, { Component } from 'react';
import { Query } from "react-apollo";

import booktitles from './graphql/queries/booktitles';

class Books extends Component {
    render() {
        return (
            <Query
                query={booktitles}
            >
                {({ loading, error, data }) => {
                    if (loading) return "Loading...";
                    if (error) return <p>Error :(</p>;

                    return <pre>{data.books[0].title}</pre>;
                }}
            </Query>)
    }
}

export default Books;