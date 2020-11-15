import { motion } from 'framer';
import { Container, Row, Col } from 'reactstrap';

export function About(props) {

    let initialCss = {
        opacity: 0
    }
    let animateCss = {
        opacity: 1
    }
    let exitCss = {
        opacity: 0
    }

    return (
        <motion.div
            initial={initialCss}
            animate={animateCss}
            exit={exitCss}>
            <Container>
                <p>
                    Programmer and web developer, I am always looking to learn.
                    Primarily working with .NET and React, I enjoy creating both standalone applications, web services and APIs, and games.
                </p>
                <h2 className="pt-3">Want to contact me?</h2>
                <p>Get in touch for any reason: about a project, more information about me, or just to say hi!</p>
                <Row>
                    <Col className="text-center" xs="1">
                    <i className="fas fa-envelope"></i>
                    </Col>
                    <Col xs="auto">
                        <a className="hover" href="mailto:oliver.beckwith1@gmail.com">oliver.beckwith1@gmail.com</a>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center" xs="1">
                        <i className="fab fa-linkedin"></i>
                    </Col>
                    <Col xs="auto">
                        <a className="hover" href="https://linkedin.com/in/OliverBeckwith">OliverBeckwith</a>
                    </Col>
                </Row>
            </Container>
        </motion.div>
    );
}