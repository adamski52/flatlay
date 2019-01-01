import React, {Component} from "react";
import ProjectTechnologies from "./ProjectTechnologies";
import ProjectActions from "./ProjectActions";
import ProjectTitle from "./ProjectTitle";

class Project extends Component {
    getStyle() {
        return {
            transform: "rotate(" + this.props.project.rotation + "deg)",
            backgroundImage: "url(" + this.props.project.thumbnail_url
        };
    }

    render() {
        return (
            <div
                className={"component--project" + (this.props.isActive ? " active" : "")}
                style={this.getStyle()}
                onClick={this.props.onProjectClick}>
                    <ProjectTitle
                        project={this.props.project}
                    />
                    <ProjectActions
                        onViewCode={this.props.onViewCode}
                        onViewLive={this.props.onViewLive}
                        onHeart={this.props.onHeart}
                        project={this.props.project}
                    />
                    <ProjectTechnologies
                        project={this.props.project}
                    />
            </div>
        );
    }
}

export default Project;