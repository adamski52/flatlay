import React, {Component} from "react";

class ActionInput extends Component {
    render() {
        return (
            <div
                className={"component--action-input " + this.props.icon}>
                    <input
                        type="text"
                        className={"form-control component--action-input " + this.props.icon}
                        maxLength={this.props.maxLength}
                        value={this.props.value}
                        onChange={this.props.onChange}
                    />
            </div>
        );
    }
}

export default ActionInput;