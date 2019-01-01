import React, {Component} from "react";
import ActionButton from "./ActionButton";

class ProjectActions extends Component {
    onViewLive(e) {
        e.preventDefault();
        e.stopPropagation();

        this.props.onViewLive(this.props.project);
    }

    onViewCode(e) {
        e.preventDefault();
        e.stopPropagation();

        this.props.onViewCode(this.props.project);
    }

    onHeart(e) {
        e.preventDefault();
        e.stopPropagation();

        this.props.onHeart(this.props.project);
    }

    render() {
        return (
            <div
                className="component--project-actions">
                    <ActionButton
                        value={"View Live"}
                        theme="theme--primary"
                        icon="jna-icon-code"
                        onClick={(e) => {
                            this.onViewLive(e);
                        }}
                    />

                    <ActionButton
                        value={"View Code"}
                        theme="theme--secondary"
                        icon="jna-icon-code-fork"
                        onClick={(e) => {
                            this.onViewCode(e);
                        }}
                    />

                    <ActionButton
                        value={this.props.project.hearts.length}
                        theme="theme--accent"
                        icon="jna-icon-heart"
                        onClick={(e) => {
                            this.onHeart(e);
                        }}
                    />
            </div>
        );
    }
}

export default ProjectActions;