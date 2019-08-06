import React, { Component } from 'react';

class Course extends Component {
    getUrlParameter = (string, searchString) => {
        searchString = searchString.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        let regex = new RegExp('[\\?&]' + searchString + '=([^&#]*)');
        let results = regex.exec(string);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };

    render () {
        console.log(this.props);
        const courseTitle = this.getUrlParameter(this.props.location.search, 'courseTitle');
        return (
            <div>
                <h1>{courseTitle}</h1>
                <p>You selected the Course with ID: {this.props.match.params.id}</p>
            </div>
        );
    }
}

export default Course;
