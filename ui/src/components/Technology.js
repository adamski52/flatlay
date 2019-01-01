import React, {Component} from "react";

class Technology extends Component {
    render() {
        return (
            <div
                className={"component--technology " + this.props.technology.icon_class}
            />
        );
    }
}

export default Technology;
