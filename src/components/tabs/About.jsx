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
            <Container className="about">
                <p>
                    I am an enthusiastic programmer that loves to tackle challenges head on and find the simplest and most optimised solutions. 
                    I enjoy applying my knowledge practically and getting my head wrapped around a tough problem while programming. 
                    Self-learning through experimentation is a passion of mine, and I am always working away at a project.
                </p>
                <p>
                    Driven to create the best projects that I feel I am capable of, I am always pushing myself into new and challenging areas of learning and research. 
                    I find well documented code with appropriate variable naming conventions extremely satisfying, and so always strive to keep my own projects this way where appropriate.
                </p>
                <h2 className="pt-3">Achievements</h2>
                <div className="achievements">
                    <ul>
                        <li>
                            <a className="hover underline" href="https://www.bradford.ac.uk/news/archive/2019/professor-rae-earnshaw-scholarships-support-10-students.php">
                                Awarded the highly competitive “Professor Rae Earnshaw” Scholarship
                            </a>
                        </li>
                        <li>
                            First place in the University of Bradford's second 48 hour game jam
                        </li>
                    </ul>
                </div>
                <h2 className="pt-3">Want to contact me?</h2>
                <p>Get in touch for any reason: about a project, more information about me, or just to say hi!</p>
                <Row>
                    <Col className="text-center" xs="1">
                    <i className="fas fa-envelope"></i>
                    </Col>
                    <Col xs="auto">
                        <a className="hover underline" href="mailto:oliver.beckwith1@gmail.com">oliver.beckwith1@gmail.com</a>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center" xs="1">
                        <i className="fab fa-linkedin"></i>
                    </Col>
                    <Col xs="auto">
                        <a className="hover underline" href="https://linkedin.com/in/OliverBeckwith">OliverBeckwith</a>
                    </Col>
                </Row>
            </Container>
        </motion.div>
    );
}