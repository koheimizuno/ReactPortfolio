import { Col, Container, Row } from "reactstrap";
import { Footer } from "./Footer";
import { AnimatePresence, motion } from 'framer';

import './Title.scss';
export function Title(props) {

    let initialCss = {
        position: "absolute",
        height: 0,
    }
    
    let animateCss = {
        position: "absolute",
        height: "auto",
        minHeight: props.focus ? "100vh" : "1vh",
        left:0,
        right:0,
    };
    let colCss = {
        flex: props.focus ? "0 0 100%" : "0 0 50%"
    }
    let h1Css = {
        fontSize: props.focus ? "8vw" : "4vw"
    }
    return (
        <AnimatePresence>
            <motion.div initial={initialCss} animate={animateCss} className="title vw-100 align-items-center d-flex">
                    <Row className="dark vw-100 mx-auto">
                        <motion.div className="col" animate={colCss}>
                            <motion.h1 className="my-1" initial={h1Css} animate={h1Css}>Oliver Beckwith</motion.h1>
                        </motion.div>
                    </Row>
            </motion.div>
        </AnimatePresence>
    );
}