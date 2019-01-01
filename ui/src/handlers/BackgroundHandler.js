import fetch from "cross-fetch";
import SeedHandler from "./SeedHandler";

class BackgroundHandler {
    static SEEDLESS = [
        require("../assets/backgrounds/wood-50s.jpg"),
        require("../assets/backgrounds/paper-brown.jpg"),
        require("../assets/backgrounds/stone-tan.jpg"),
        require("../assets/backgrounds/stone-granite.jpg"),
        require("../assets/backgrounds/wood-oak.jpg"),
        require("../assets/backgrounds/wood-pine.jpg")
    ];

    static SEEDED = {
        ZELDA: require("../assets/backgrounds/ZELDA.jpg"),
        MARIO: require("../assets/backgrounds/MARIO.jpg"),
        SONIC: require("../assets/backgrounds/SONIC.jpg"),
        VALVE: require("../assets/backgrounds/VALVE.jpg"),
        IDKFA: require("../assets/backgrounds/IDKFA.jpg"),
        ISAAC: require("../assets/backgrounds/ISAAC.jpg"),
        DRWHO: require("../assets/backgrounds/DRWHO.jpg"),
        NUKES: require("../assets/backgrounds/NUKES.jpg")
    };

    static INITIAL_STATE = {
        url: ""
    };

    static reducer(state = BackgroundHandler.INITIAL_STATE, action) {
        switch (action.type) {
            case SeedHandler.SEED_SET:
                let special = SeedHandler.getSpecialPrimary(action.seed),
                    url = special ? BackgroundHandler.SEEDED[special] : [].concat(BackgroundHandler.SEEDLESS).shuffle()[0];

                return Object.assign({}, state, {
                    url: url
                });

            default:
                return state;
        }
    }
}

export default BackgroundHandler;