import React, {Component} from "react";
import JunkContainer from "./JunkContainer";
import {connect} from "react-redux";
import Loader from "./Loader";
import ProjectsContainer from "./ProjectsContainer";
import ProjectsHandler from "../handlers/ProjectsHandler";
import SeedContainer from "./SeedContainer";
import SeedHandler from "../handlers/SeedHandler";
import LoaderHandler from "../handlers/LoaderHandler";
import JunkHandler from "../handlers/JunkHandler";

class App extends Component {
    constructor(props) {
        super(props);
        this.props.onSetSeed(this.props.seed.seed);
        this.props.onFetchProjects();
    }

    componentDidMount() {
        window.addEventListener("wheel", (e) => {
            // debounce?
            if (e.deltaY > 0) {
                this.props.onNext();
                return;
            }

            if (e.deltaY < 0) {
                this.props.onPrev();
            }
        });

        let touchStart,
            touchEnd,
            isTouch = false;

        window.addEventListener("touchstart", (e) => {
            isTouch = true;
            touchStart = {
                x: e.changedTouches[0].pageX,
                y: e.changedTouches[0].pageY
            };
        });

        window.addEventListener("touchend", (e) => {
            isTouch = false;
            touchEnd = {
                x: e.changedTouches[0].pageX,
                y: e.changedTouches[0].pageY
            };

            if(touchStart.x - touchEnd.x > 100) {
                this.props.onPrev();
                return;
            }

            if(touchEnd.x - touchStart.x > 100) {
                this.props.onNext();
                return;
            }
        });

        window.addEventListener("resize", (e) => {
            this.props.onResize(this.props.seed.seed);
        });
    }

    render() {
        let style = {
            backgroundImage: "url(" + this.props.background + ")"
        };

        return (
            <div
                className="component--app"
                style={style}>
                    <JunkContainer
                        junk={this.props.junk}
                        scale={this.props.scale}
                    />

                    <ProjectsContainer
                        projects={this.props.projects}
                        currentIndex={this.props.currentIndex}
                        onHeart={this.props.onHeart}
                        onViewCode={this.props.onViewCode}
                        onViewLive={this.props.onViewLive}
                        onProjectClick={this.props.onNext}
                    />

                    <SeedContainer
                        onSeedType={this.props.onSeedType}
                        onSetSeed={this.props.onSetSeed}
                        seed={this.props.seed}
                    />

                    <Loader
                        image={this.props.loadingImage}
                        sound={this.props.loadingSound}
                        isLoading={this.props.isLoading}
                    />
            </div>
        )
    }
}

export default connect(
    (state) => {
        return {
            background: state.background.url,
            junk: state.junk.junk,
            scale: state.junk.scale,
            seed: state.seed,
            projects: state.projects.projects,
            currentIndex: state.projects.currentIndex,
            isLoading: state.loader.isLoading,
            loadingImage: state.loader.image,
            loadingSound: state.loader.sound
        };
    },
    (dispatch) => {
        return {
            onSeedType: (e) => {
                let seed = e.target.value;
                dispatch(SeedHandler.onType(seed));
            },
            onSetSeed: (value) => {
                let action = SeedHandler.setSeed(value);
                if(action.error) {
                    dispatch(action);
                    return;
                }

                dispatch(LoaderHandler.startLoad());
                Math.setSeed(value);
                setTimeout(() => {
                    dispatch(action);
                    setTimeout(() => {
                        dispatch(LoaderHandler.endLoad());
                    }, 300);
                }, 100);
            },
            onFetchProjects: () => {
                dispatch(ProjectsHandler.fetch());
            },
            onNext: () => {
                dispatch(ProjectsHandler.changeItem(1));
            },
            onPrev: () => {
                dispatch(ProjectsHandler.changeItem(-1));
            },
            onResize: () => {
                dispatch(JunkHandler.onResize(window.innerWidth));
            },
            onViewLive: (project) => {
                dispatch(ProjectsHandler.onViewLive(project));
            },
            onViewCode: (project) => {
                dispatch(ProjectsHandler.onViewCode(project));
            },
            onHeart: (project) => {
                dispatch(ProjectsHandler.heart(project));
            }
        };
    }
)(App);
