import HttpService from "../Http.service";
import Project from "../components/Project";

class ProjectsHandler {
    static FETCH_BEGIN = "PROJECTS_FETCH_BEGIN";
    static FETCH_SUCCESS = "PROJECTS_FETCH_SUCCESS";
    static FETCH_ERROR = "PROJECTS_FETCH_ERROR";
    static PROJECTS_CHANGE = "PROJECTS_CHANGE";
    static VIEW_LIVE = "PROJECTS_VIEW_LIVE";
    static VIEW_CODE = "PROJECTS_VIEW_CODE";
    static HEART_BEGIN = "PROJECTS_HEART_BEGIN";
    static HEART_SUCCESS = "PROJECTS_HEART_SUCCESS";
    static HEART_ERROR = "PROJECTS_HEART_ERROR";

    static INITIAL_STATE = {
        projects: [],
        currentIndex: 0
    };

    static currentProjects = ProjectsHandler.INITIAL_STATE.projects;
    static currentIndex = ProjectsHandler.INITIAL_STATE.currentIndex;

    static reducer(state = ProjectsHandler.INITIAL_STATE, action) {
        switch(action.type) {
            case ProjectsHandler.FETCH_SUCCESS:
                ProjectsHandler.currentProjects = action.projects;

                return Object.assign({}, state, {
                    projects: action.projects
                });

            case ProjectsHandler.PROJECTS_CHANGE:
                let currentIndex = state.currentIndex + action.delta;
                if(currentIndex >= state.projects.length) {
                    currentIndex = 0;
                }

                if(currentIndex < 0) {
                    currentIndex = state.projects.length - 1;
                }

                return Object.assign({}, state, {
                    currentIndex: currentIndex
                });

            case ProjectsHandler.VIEW_LIVE:
            case ProjectsHandler.VIEW_CODE:
                window.open(action.url, "_blank");
                return state;

            default:
                return state;
        }
    }

    static handleProjectRotation(projects) {
        return projects.map((project) => {
            let existingProject = ProjectsHandler.currentProjects.find((currentProject) => {
                return currentProject.id === project.id;
            });

            // project has already been loaded.  we dont want to redo its rotation.
            if(existingProject) {
                return {
                    ...project,
                    rotation: existingProject.rotation
                };
            }

            // its a new project (or an initial load), so set rotation
            return {
                ...project,
                rotation: ((Math.round(Math.seededRandom() * 20) < 10) ? 1 : -1) * Math.round(Math.seededRandom() * 7)
            };
        });
    }

    static handleProjectSelection(projects) {
        // in the event we re-fetch it's possible that a new project was added.  this could throw off the index.  so adjust if necessary.
        if(!ProjectsHandler.currentProjects.length) {
            ProjectsHandler.currentIndex = 0;
            return projects;
        }

        let currentProject = ProjectsHandler.currentProjects[ProjectsHandler.currentIndex];
        for(let i = 0; i < projects.length; i++) {
            if(projects[i].id === currentProject.id) {
                ProjectsHandler.currentIndex = i;
                return projects;
            }
        }

        return projects;
    }


    static fetch() {
        return (dispatch) => {
            dispatch(ProjectsHandler.onFetchBegin());

            return HttpService.get("/projects/")
                .then(ProjectsHandler.handleProjectSelection)
                .then(ProjectsHandler.handleProjectRotation)
                .then((json) => {
                    dispatch(ProjectsHandler.onFetchSuccess(json));
                    return json;
                }).catch((error) => {
                    dispatch(ProjectsHandler.onFetchError(error));
                    return error;
                });
        };
    }

    static heart(project) {
        return (dispatch) => {
            let data = {
                project: project.url // TODO:  Would prefer to pass the ID here.  Have to change away from hyperlinkedrelatedfield in API.
            };

            dispatch(ProjectsHandler.onHeartBegin(project));

            return HttpService.post("/hearts/", data)
                .then((json) => {
                    dispatch(ProjectsHandler.onHeartSuccess());
                    dispatch(ProjectsHandler.fetch());
                    return json;
                }).catch((error) => {
                    dispatch(ProjectsHandler.onHeartError(error));
                    return error;
                });
        };
    }

    static changeItem(delta) {
        return {
            type: ProjectsHandler.PROJECTS_CHANGE,
            delta: delta
        };
    }

    static onFetchBegin() {
        return {
            type: ProjectsHandler.FETCH_BEGIN
        };
    }

    static onFetchSuccess(projects) {
        return {
            type: ProjectsHandler.FETCH_SUCCESS,
            projects: projects
        };
    };

    static onFetchError(error) {
        return {
            type: ProjectsHandler.FETCH_ERROR,
            error: error
        };
    };

    static onViewLive(project) {
        return {
            type: ProjectsHandler.VIEW_LIVE,
            url: project.live_url
        };
    };

    static onViewCode(project) {
        return {
            type: ProjectsHandler.VIEW_CODE,
            url: project.code_url
        };
    };

    static onHeartBegin(project) {
        return {
            type: ProjectsHandler.HEART_BEGIN,
            project: project
        };
    }

    static onHeartSuccess(project) {
        return {
            type: ProjectsHandler.HEART_SUCCESS,
            project: project
        };
    };

    static onHeartError(error) {
        return {
            type: ProjectsHandler.HEART_ERROR,
            error: error
        };
    };
}

export default ProjectsHandler;