import { AnimatePresence, motion } from 'framer';
import { Component, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Project } from './Project';
import { FocusedProject } from './FocusedProject';

import './Projects.scss';

export class Projects extends Component {

    constructor(props) {
        super(props);
        this.state = {
            projects: undefined,
            focused: null
        };
        
        this.focusProject = this.focusProject.bind(this);
        this.closeFocusedProject =  this.closeFocusedProject.bind(this);
    }

    componentDidMount() {
        this.loadProjects();
    }

    async loadProjects() {
        const response = await fetch("projects.json");
        let projects;
        try{
            projects = await response.json();
        }
        catch(e){}
        this.setState({ projects: projects });
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

        let projects = null;

        if (this.state.projects===null || (this.state.projects && this.state.projects.length == 0))
            projects = <Col>Error Loading Projects</Col>;
        else if (this.state.projects)
            projects = this.state.projects.map((p,i) => 
                {
                    return <Project project={p} onClick={()=>{this.focusProject(i)}}/>
                });

        return (
            <motion.div
                initial={initialCss}
                animate={animateCss}
                exit={exitCss}
                className="container"
                style={{position:"relative"}}>
                    <AnimatePresence>
                        {this.state.focused==null && 
                            <motion.div className="row"
                                initial={initialCss}
                                animate={animateCss}
                                exit={exitCss}>
                                {projects}
                            </motion.div>
                        }
                        {this.state.focused!==null && 
                            <FocusedProject project={this.state.projects[this.state.focused]} onClose={this.closeFocusedProject}/>
                        }
                    </AnimatePresence>
            </motion.div>
        );
    }
}