import React, { Component } from "react";
import { ErrorAlert } from "./Alert";

class NumberOfEvents extends Component {
    state = { num: 32, errorText: "" };
    
    changeNum = (value) => {
        this.setState({ num: value });
        console.log("function", this.props.updateNumberOfEvents);
        console.log("value", value);
        this.props.updateNumberOfEvents(value);
        if (value < 1 || value > 32) {
            this.setState({ errorText: "Select number from 1 to 32" });
        } else this.setState({ errorText: "" });
    };
    

    componentDidMount() {
        this.setState({ num: this.props.num || 32 });
    }
 
    render() {
        const { num, errorText } = this.state;
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
                <ErrorAlert text={errorText} />
            </div>
        );
    }
}
 
export default NumberOfEvents;