import React, {Component} from "react";
import Project from "./Project";

class ProjectsContainer extends Component {
    getProjects() {
        return this.props.projects.map((project, index) => {
            return (
                <Project
                    key={project.id}
                    project={project}
                    onViewLive={this.props.onViewLive}
                    onViewCode={this.props.onViewCode}
                    onHeart={this.props.onHeart}
                    onProjectClick={this.props.onProjectClick}
                    isActive={index === this.props.currentIndex}
                />
            )
        });
    }

    render() {
        return (
            <div
                className="col-xs-10 col-xs-push-1 col-sm-8 col-sm-push-2 col-md-6 col-md-push-3 component--projects-container">
                    {this.getProjects()}
            </div>
        );
    }
}

export default ProjectsContainer;