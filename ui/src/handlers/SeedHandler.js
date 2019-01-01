import fetch from "cross-fetch";

class SeedHandler {
    static SEED_TYPE = "SEED_TYPE";
    static SEED_SET = "SEED_SET";
    static SEED_ERROR = "SEED_ERROR";

    static SEED_LENGTH = 5;
    static VALID_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("");

    static INITIAL_STATE = {
        seed: SeedHandler.getTodaysSeed(),
        error: undefined
    };

    static SPECIAL_SEEDS = {
        ISAAC: ["ISAAC", "BIRTH", "CHEST", "SHEOL", "BOUND", "BSMNT", "CELLR", "TEARS", "MOMMY"],
        ZELDA: ["ZELDA", "RUPEE", "TRI4C", "GANON"],
        MARIO: ["MARIO", "COINS", "LUIGI", "PEACH", "BOWSR", "BOWZR", "STOOL", "KOOPA"],
        SONIC: ["SONIC", "RINGS", "SPEED", "TAILS"],
        VALVE: ["VALVE", "GAUSS"],
        IDKFA: ["IDKFA", "IDDQD", "DOOM1", "DOOM2", "DOOM3", "DOOM4"],
        DRWHO: ["DRWHO", "TRDIS", "DALEK", "CYBER"],
        NUKES: ["NUKES", "VEGAS", "NEVER", "VAULT", "HOUSE", "SMART"]
    };

    static reducer(state = SeedHandler.INITIAL_STATE, action) {
        switch (action.type) {
            case SeedHandler.SEED_TYPE:
                return Object.assign({}, state, {
                    seed: action.seed,
                    error: undefined
                });

            case SeedHandler.SEED_SET:
                return Object.assign({}, state, {
                    seed: action.seed,
                    error: undefined
                });

            case SeedHandler.SEED_ERROR:
                return Object.assign({}, state, {
                    error: action.error
                });

            default:
                return state;
        }
    }

    static getTodaysSeed() {
        let today = new Date(),
            month = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"][today.getMonth()],
            date = today.getDate();

        if(date < 10) {
            date = "0" + date;
        }

        return month + date;
    }

    static getSpecialPrimary(seed) {
        for(let key in SeedHandler.SPECIAL_SEEDS) {
            if(!SeedHandler.SPECIAL_SEEDS.hasOwnProperty(key)) {
                continue;
            }

            if(SeedHandler.SPECIAL_SEEDS[key].indexOf(seed) > -1) {
                return key;
            }
        }
    }

    static getRandomSeed() {
        let chars = [].concat(SeedHandler.VALID_CHARS);
        chars = chars.shuffle(true);

        return chars.splice(0, SeedHandler.SEED_LENGTH).join("");
    }

    static onType(seed) {
        return {
            type: SeedHandler.SEED_TYPE,
            seed: seed
        };
    }

    static setSeed(seed) {
        if(seed.match(/[A-Z0-9]{5}/) === null) {
            return {
                type: SeedHandler.SEED_ERROR,
                error: "Seeds must be " + SeedHandler.SEED_LENGTH + " alphanumeric characters"
            };
        }

        return {
            type: SeedHandler.SEED_SET,
            seed: seed
        };
    }
}

export default SeedHandler;