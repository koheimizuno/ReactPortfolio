import { Component } from "react"
import { AnimatePresence, motion } from "framer";
import { Container, Row, Col } from "reactstrap";
import { About } from "./tabs/About";
import { Projects } from "./tabs/Projects";
import { Skills } from "./tabs/Skills";

import "./Tabs.scss";
export class Tabs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tab: 0,
        }
        const tabCount = 3;
        //About = 0
        //Projects = 1
        //CV = 2

        this.switchTab = this.switchTab.bind(this);
    }

    switchTab(i) {
        this.setState({ tab: i });
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
            case 1: tab = <Projects />; break;
            case 2: tab = <Skills />; break;
        }

        return this.props.visible &&
            (
                <AnimatePresence>
                    <motion.div className="tabs" initial={initialCss} animate={animateCss}>
                        <Container className="h-100">
                            <Row className="mx-0">
                                <Col xs={4}
                                    className={`tabSelector ${this.state.tab == 0 ? "--active" : ""}`}
                                    onClick={() => { this.switchTab(0) }}>
                                    About
                                </Col>
                                <Col xs={4}
                                    className={`tabSelector ${this.state.tab == 1 ? "--active" : ""}`}
                                    onClick={() => { this.switchTab(1) }}>
                                    Projects
                                </Col>
                                <Col xs={4}
                                    className={`tabSelector ${this.state.tab == 2 ? "--active" : ""}`}
                                    onClick={() => { this.switchTab(2) }}>
                                    Skills
                                </Col>
                            </Row>
                            <div className="dark h-100 overflow-auto pt-3">
                                <AnimatePresence>
                                    {tab}
                                </AnimatePresence>
                            </div>
                        </Container>
                    </motion.div>
                </AnimatePresence>
            );
    }
}