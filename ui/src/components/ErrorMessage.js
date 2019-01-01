import React, {Component} from "react";

class ErrorMessage extends Component {
    render() {
        return (
            <div
                className={"component--error-message"}>
                {this.props.error}
            </div>
        );
    }
}

export default ErrorMessage;