import {combineReducers} from "redux";
import ProjectsHandler from "./ProjectsHandler";
import JunkHandler from "./JunkHandler";
import BackgroundHandler from "./BackgroundHandler";
import SeedHandler from "./SeedHandler";
import LoaderHandler from "./LoaderHandler";

class AppHandler {
    static reducer = combineReducers({
        junk: JunkHandler.reducer,
        seed: SeedHandler.reducer,
        background: BackgroundHandler.reducer,
        projects: ProjectsHandler.reducer,
        loader: LoaderHandler.reducer
    });
}

export default AppHandler;