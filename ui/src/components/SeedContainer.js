import React, {Component} from "react";
import SeedHandler from "../handlers/SeedHandler";
import ActionInput from "./ActionInput";
import ActionButton from "./ActionButton";
import ErrorMessage from "./ErrorMessage";

class SeedContainer extends Component {
    render() {
        return (
            <header
                className="component--seeder">
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        this.props.onSetSeed(this.props.seed.seed);
                    }}>
                        <ActionInput
                            icon="jna-icon-leaf"
                            maxLength={SeedHandler.SEED_LENGTH}
                            value={this.props.seed.seed}
                            onChange={this.props.onSeedType}
                        />
                        <ActionButton
                            icon="jna-icon-retweet"
                            theme="theme--primary-reverse"
                            value="Set"
                            onClick={(e) => {
                                e.preventDefault();
                                this.props.onSetSeed(this.props.seed.seed);
                            }}
                        />
                        <ActionButton
                            icon="jna-icon-random"
                            theme="theme--secondary-reverse"
                            value="Random"
                            onClick={(e) => {
                                e.preventDefault();
                                let seed = SeedHandler.getRandomSeed();
                                this.props.onSetSeed(seed);
                            }}
                        />
                    </form>

                    {this.props.seed.error && <ErrorMessage error={this.props.seed.error} />}
            </header>
        );
    }
}

export default SeedContainer;
