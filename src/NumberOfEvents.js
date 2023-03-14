import React, { Component } from "react";

class NumberOfEvents extends Component {
    state = { num: 32, errorText: "" };
    
    changeNum = (value) => {
        this.setState({ num: value });
        if (value < 1 || value > 32) {
            this.setState({ errorText: "Select number from 1 to 32" });
            this.props.notify("Select number from 1 to 32");
        } else this.setState({ errorText: "" });
        this.props.updateNumberOfEvents(value);
    };
    

    componentDidMount() {
        this.setState({ num: this.props.num || 32 });
    }
 
    render() {
        const { num } = this.state;
        return (
            <div className="CitySearch">
                <label>
                    Number Of Events
                    <input
                        className="num"
                        type="number"
                        value={num}
                        onChange={(event) => this.changeNum(event.target.value)}
                    ></input>
                </label> 
            </div>
        );
    }
}
 
export default NumberOfEvents;