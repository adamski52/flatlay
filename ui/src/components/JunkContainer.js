import React, {Component} from "react";
import Junk from "./Junk";

class JunkContainer extends Component {
    getJunk() {
        return this.props.junk.map((junk, index) => {
            return (
                <Junk
                    key={index}
                    junk={junk}
                    scale={this.props.scale}
                />
            )
        });
    }

    render() {
        return (
            <div
                className="component--junk-container">
                    {this.getJunk()}
            </div>
        );
    }
}

export default JunkContainer;