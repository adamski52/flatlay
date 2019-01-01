import React, {Component} from "react";

class ProjectTitle extends Component {
    render() {
        return (
            <h3
                className="component--project-title">
                    {this.props.project.name}
            </h3>
        );
    }
}

export default ProjectTitle;