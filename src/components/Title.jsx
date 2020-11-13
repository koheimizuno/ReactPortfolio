import { Col, Container, Row } from "reactstrap";
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
    let buttonCss = {
        width: props.focus ? "80px" : "40px",
        height: props.focus ? "80px" : "40px",
        left: `calc(50% - ${props.focus?"40px":"20px"})`,
        bottom: props.focus ? "0px" : "-40px",
        fontSize: props.focus ? "48px" : "32px",
        transform: props.focus ? "rotateX(0deg)" : "rotateX(180deg)"
    }
    return (
        <AnimatePresence>
            <motion.div initial={initialCss} animate={animateCss} className="title vw-100 align-items-center d-flex">
                    <Row className="dark vw-100 mx-auto">
                        <motion.div className="col" animate={colCss}>
                            <motion.h1 className="my-1" initial={h1Css} animate={h1Css}>Oliver Beckwith</motion.h1>
                        </motion.div>
                    </Row>
                    <motion.button className="focus-button" animate={buttonCss} onClick={props.onFocusToggle}>
                        <i className="fas fa-chevron-up"></i>
                    </motion.button>
            </motion.div>
        </AnimatePresence>
    );
}