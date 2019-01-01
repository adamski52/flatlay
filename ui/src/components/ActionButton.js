import React, {Component} from "react";

class ActionButton extends Component {
    getClasses() {
        return [
            "btn",
            "component--action-button",
            this.props.theme || "",
            this.props.icon || ""
        ].join(" ");
    }

    render() {
        return (
            <button
                className={this.getClasses()}
                onClick={this.props.onClick}>
                    {this.props.value}
            </button>
        );
    }
}

export default ActionButton;