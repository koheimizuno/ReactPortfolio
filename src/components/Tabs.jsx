import { Component } from "react"
import { AnimatePresence, motion } from "framer";
import { Container } from "reactstrap";
import { About } from "./tabs/About";

import "./Tabs.scss";
export class Tabs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tab: 0,
        }
        const tabCount = 1;
        //About
    }



    render() {
        let initialCss = {
            height: "0vh"
        };
        let animateCss = {
            height: "85vh"
        }

        let tab;
        switch (this.state.tab) {
            case 0: tab = <About />; break;
        }

        return this.props.visible &&
            (
                <AnimatePresence>
                    <motion.div className="tabs" initial={initialCss} animate={animateCss}>
                        <Container className="h-100 dark">
                            {tab}
                        </Container>
                    </motion.div>
                </AnimatePresence>
            );
    }
}