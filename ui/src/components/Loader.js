import React, {Component} from "react";

class Loader extends Component {
    getStyle() {
        if(!this.props.isLoading) {
            return {
                display: "none"
            };
        }

        return {
            backgroundImage: "url(" + this.props.image + ")"
        };
    }

    render() {
        let audio = this.props.isLoading ? (
            <audio
                autoPlay
                hidden>
                    <source
                        src={this.props.sound}
                        type="audio/mpeg"
                    />
            </audio>
        ) : "";

        return (
            <div
                className="component--loader"
                style={this.getStyle()}>
                    {audio}
            </div>
        );
    }
}

export default Loader;