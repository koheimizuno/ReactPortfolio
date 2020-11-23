import { motion } from 'framer';
import { Component, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Project } from './Project';
import { FocusedProject } from './FocusedProject';

export class Projects extends Component {

    constructor(props) {
        super(props);
        this.state = {
            projects: [],
            focused: null
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

        this.focusProject = this.focusProject.bind(this);
        this.closeFocusedProject =  this.closeFocusedProject.bind(this);
    }

    focusProject(id) {
        this.setState({focused: id});
    }

    closeFocusedProject(){
        this.setState({focused: null});
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
            ? this.state.projects.map((p,i) => {
                return <Project project={p} onClick={()=>{this.focusProject(i)}}/>
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
                <Container style={{position:"relative"}}>
                    <Row>
                        {projects}
                    </Row>
                    {this.state.focused !== null 
                    ? <FocusedProject project={this.state.projects[this.state.focused]} onClose={this.closeFocusedProject}/>
                    : null}
                </Container>
            </motion.div>
        );
    }
}