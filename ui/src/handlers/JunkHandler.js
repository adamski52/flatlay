import fetch from "cross-fetch";
import SeedHandler from "./SeedHandler";
import ProjectsHandler from "./ProjectsHandler";

class JunkHandler {
    static ITEM_VARIANCE = 2;
    static ITEM_MIN = 2;
    static MAX_ROTATE = 40;
    static JUNK_RESIZE = "JUNK_RESIZE";

    static SEEDLESS = [
        require("../assets/junk/calculator.png"),
        require("../assets/junk/chalk.png"),
        require("../assets/junk/clothespin.png"),
        require("../assets/junk/money.png"),
        require("../assets/junk/pens.png"),
        require("../assets/junk/portfolio.png"),
        require("../assets/junk/scissors.png"),
        require("../assets/junk/steno.png"),
        require("../assets/junk/cappuccino.png"),
        require("../assets/junk/coffee.png"),
        require("../assets/junk/latte.png"),
        require("../assets/junk/cactus.png"),
        require("../assets/junk/unsplash-book.png"),
        require("../assets/junk/plant.png"),
        require("../assets/junk/succulent.png"),
        require("../assets/junk/succulent2.png")
    ];

    static SEEDED = {
        ZELDA: [
            require("../assets/junk/red-rupee.png"),
            require("../assets/junk/blue-rupee.png"),
            require("../assets/junk/yellow-rupee.png"),
            require("../assets/junk/purple-rupee.png"),
            require("../assets/junk/red-rupee.png"),
            require("../assets/junk/blue-rupee.png"),
            require("../assets/junk/yellow-rupee.png"),
            require("../assets/junk/purple-rupee.png"),
            require("../assets/junk/red-rupee.png"),
            require("../assets/junk/blue-rupee.png"),
            require("../assets/junk/yellow-rupee.png"),
            require("../assets/junk/purple-rupee.png"),
            require("../assets/junk/red-rupee.png"),
            require("../assets/junk/blue-rupee.png"),
            require("../assets/junk/yellow-rupee.png"),
            require("../assets/junk/purple-rupee.png"),
            require("../assets/junk/red-rupee.png"),
            require("../assets/junk/blue-rupee.png"),
            require("../assets/junk/yellow-rupee.png"),
            require("../assets/junk/purple-rupee.png"),
            require("../assets/junk/red-rupee.png"),
            require("../assets/junk/blue-rupee.png"),
            require("../assets/junk/yellow-rupee.png"),
            require("../assets/junk/purple-rupee.png"),
            require("../assets/junk/red-rupee.png"),
            require("../assets/junk/blue-rupee.png"),
            require("../assets/junk/yellow-rupee.png"),
            require("../assets/junk/purple-rupee.png")
        ],
        MARIO: [
            require("../assets/junk/coins.png"),
            require("../assets/junk/coins.png"),
            require("../assets/junk/coins.png"),
            require("../assets/junk/coins.png"),
            require("../assets/junk/coins.png"),
            require("../assets/junk/coins.png"),
            require("../assets/junk/coins.png"),
            require("../assets/junk/coins.png"),
            require("../assets/junk/coins.png"),
            require("../assets/junk/coins.png"),
            require("../assets/junk/coins.png"),
            require("../assets/junk/coins.png")
        ],
        SONIC: [
            require("../assets/junk/rings.png"),
            require("../assets/junk/rings.png"),
            require("../assets/junk/rings.png"),
            require("../assets/junk/rings.png"),
            require("../assets/junk/rings.png"),
            require("../assets/junk/rings.png"),
            require("../assets/junk/rings.png"),
            require("../assets/junk/rings.png"),
            require("../assets/junk/rings.png"),
            require("../assets/junk/rings.png"),
            require("../assets/junk/rings.png"),
            require("../assets/junk/rings.png")
        ],
        VALVE: [
            require("../assets/junk/crowbar.png"),
            require("../assets/junk/crowbar.png"),
        ],
        IDKFA: [
            require("../assets/junk/bullets.png"),
            require("../assets/junk/chainsaw.png"),
            require("../assets/junk/bullets.png")
        ],
        NUKES: [
            require("../assets/junk/caps.png"),
            require("../assets/junk/caps.png"),
            require("../assets/junk/caps.png"),
            require("../assets/junk/caps.png"),
            require("../assets/junk/caps.png"),
            require("../assets/junk/caps.png"),
            require("../assets/junk/caps.png"),
            require("../assets/junk/caps.png"),
            require("../assets/junk/caps.png"),
            require("../assets/junk/caps.png"),
            require("../assets/junk/caps.png"),
            require("../assets/junk/caps.png"),
            require("../assets/junk/caps.png"),
            require("../assets/junk/caps.png")
        ],
        ISAAC: [],
        DRWHO: []
    };

    static REQUIRED = [
        require("../assets/junk/mouse-keyboard.png"),
        require("../assets/junk/phone.png"),
        require("../assets/junk/postit.png")
    ];

    static INITIAL_STATE = {
        junk: [],
        scale: JunkHandler.getScale(window.innerWidth)
    };

    static getScale(width) {
        if(width >= 768) {
            return 1;
        }

        let pct = (width / 768);
        return Math.max(.5, pct);
    }

    static getPosition(verticalEdge, numItems, index) {
        let y = verticalEdge === "top" ? "50px" : "-500px",
            delta = 100 / (numItems-1);

        return {
            [verticalEdge]: y,
            left: (delta * index) + "%"
        };
    }

    static getRandomItems(arr, min, variance, verticalEdge) {
        let items = [].concat(arr),
            numItems = min + Math.round(Math.seededRandom() * variance);

        return items
            .shuffle()
            .slice(0, numItems)
            .map((url, index) => {
                return {
                    url: url,
                    position: JunkHandler.getPosition(verticalEdge, numItems, index),
                    rotation: JunkHandler.getRandomRotation(JunkHandler.MAX_ROTATE)
                };
            });
    }

    static reducer(state = JunkHandler.INITIAL_STATE, action) {
        switch (action.type) {
            case SeedHandler.SEED_SET:
                return Object.assign({}, state, {
                    junk: JunkHandler.getRandomJunk(action.seed)
                });

            case JunkHandler.JUNK_RESIZE:
                return Object.assign({}, state, {
                    scale: JunkHandler.getScale(action.width)
                });

            default:
                return state;
        }
    }

    static getRandomJunk(seed) {
        let special = SeedHandler.getSpecialPrimary(seed),
            junk;

        if(special) {
            junk = JunkHandler.SEEDED[special];
            return JunkHandler.getRandomItems(junk, junk.length, 0, "bottom");
        }

        junk = JunkHandler.getRandomItems(JunkHandler.SEEDLESS, JunkHandler.ITEM_MIN, JunkHandler.ITEM_VARIANCE, "top")
        let required = JunkHandler.getRandomItems(JunkHandler.REQUIRED, JunkHandler.REQUIRED.length, 0, "bottom");

        return [].concat(junk, required)
    }

    static getRandomRotation(max) {
        let isPositive = Math.round(Math.seededRandom() * 2),
            rotation = Math.round(Math.seededRandom() * max);

        return isPositive ? rotation : -rotation;
    }

    static onResize(width) {
        return {
            type: JunkHandler.JUNK_RESIZE,
            width: width
        };
    }
}

export default JunkHandler;