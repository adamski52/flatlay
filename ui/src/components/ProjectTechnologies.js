import React, {Component} from "react";
import Technology from "./Technology";

class ProjectTechnologies extends Component {
    getTechnologies() {
        return this.props.project.skills.map((technology, index) => {
            return (
                <Technology
                    key={index}
                    technology={technology}
                />
            )
        });
    }

    render() {
        return (
            <div
                className="component--project-technologies">
                    {this.getTechnologies()}
            </div>
        );
    }
}

export default ProjectTechnologies;