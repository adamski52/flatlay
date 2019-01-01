class LoaderHandler {
    static LOAD_START = "LOAD_START";
    static LOAD_END = "LOAD_END";

    static INITIAL_STATE = {
        isLoading: false
    };

    static IMAGES = [
        require("../assets/loaders/blobs.gif"),
        require("../assets/loaders/countdown.gif"),
        require("../assets/loaders/noise.gif"),
        require("../assets/loaders/scramble.gif"),
        require("../assets/loaders/static.gif"),
    ];

    static SOUNDS = [
        require("../assets/loaders/click-clack.mp3"),
        require("../assets/loaders/screech.mp3"),
        require("../assets/loaders/blip-chunk.mp3")
    ];

    static reducer(state = LoaderHandler.INITIAL_STATE, action) {
        switch (action.type) {
            case LoaderHandler.LOAD_START:
                let sound = LoaderHandler.SOUNDS.shuffle()[0],
                    image = LoaderHandler.IMAGES.shuffle()[0];

                return Object.assign({}, state, {
                    isLoading: true,
                    image: image,
                    sound: sound
                });

            case LoaderHandler.LOAD_END:
                return Object.assign({}, state, {
                    isLoading: false
                });

            default:
                return state;
        }
    }

    static startLoad() {
        return {
            type: LoaderHandler.LOAD_START
        };
    }

    static endLoad() {
        return {
            type: LoaderHandler.LOAD_END
        };
    }
}

export default LoaderHandler;