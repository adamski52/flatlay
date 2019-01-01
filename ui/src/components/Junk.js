import React, {Component} from "react";

class Loader extends Component {
    getStyle() {
        let transforms = [
            "rotate(" + this.props.junk.rotation + "deg)",
            "scale(" + this.props.scale + ")"
        ];

        return Object.assign({
            transform:  transforms.join(" "),
            backgroundImage: "url(" + this.props.junk.url + ")"
        }, this.props.junk.position);
    }

    render() {
        return (
            <div
                className="component--junk"
                style={this.getStyle()}
            />
        );
    }
}

export default Loader;