import React, { Component } from 'react';

class Alert extends Component {
    constructor(props) {
        super(props);
        this.color = null;
    }

    getStyle = () => {
        return {
            color: this.color
        };
    }

    render() {
        return (
        <div className="Alert" style={this.getStyle()}>
            <p>{this.props.text}</p>
        </div>
        );
    }
}

class InfoAlert extends Alert {
    constructor(props) {
        super(props);
        this.color = 'blue';
        this.top = '130px';
    }
}

class ErrorAlert extends Alert {
    constructor(props) {
        super(props);
        this.color = 'red';
        this.top = '115px';
    }
}

class WarningAlert extends Alert {
    constructor (props) {
        super(props);
        this.color = 'orange';
    }
}

export { InfoAlert, ErrorAlert, WarningAlert };