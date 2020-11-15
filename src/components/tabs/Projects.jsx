import { motion } from 'framer';
import { Component, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Project } from './Project';

export class Projects extends Component {

    constructor(props) {
        super(props);
        this.state = {
            projects: []
        };
    }

    componentDidMount() {
        this.loadProjects();
    }

    async loadProjects() {
        const response = await fetch("projects.json");
        const projects = await response.json();
        console.log(projects);
        this.setState({ projects: projects });
    }

    render() {
        let initialCss = {
            opacity: 0
        }
        let animateCss = {
            opacity: 1
        }
        let exitCss = {
            opacity: 0
        }

        let projects = this.state.projects.length > 0
            ? this.state.projects.map((p) => {
                return <Project project={p} />
            })
            : <Col>
                No projects
            </Col>
            ;

        return (
            <motion.div
                initial={initialCss}
                animate={animateCss}
                exit={exitCss}>
                <Container>
                    <Row>
                        {projects}
                    </Row>
                </Container>
            </motion.div>
        );
    }
}