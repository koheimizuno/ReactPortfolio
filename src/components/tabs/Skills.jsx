import { render } from '@testing-library/react';
import { motion } from 'framer';
import { Component } from 'react';
import { Row, Col } from 'reactstrap';

import './Skills.scss';

export class Skills extends Component {
    constructor(props){
        super(props);

        this.state = {
            skills: undefined
        }
    }

    componentDidMount() {
        this.loadSkills();
    }

    async loadSkills() {
        const response = await fetch("skills.json");
        let skills;
        try{
            skills = await response.json();
        }
        catch(e){}
        this.setState({ skills: skills });
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

        let skills;

        if (this.state.skills===null || (this.state.skills && this.state.skills.length == 0))
            skills = <Col>Error Loading Skills</Col>;
        else if (this.state.skills)
            skills = this.state.skills.map((cat) => 
                {
                    return <div className="skill-category">
                        <h1>{cat.category}</h1>
                        <Row>
                            {cat.skills.map((skill) => {
                                return <Col className="skill-box">
                                        <div className="skill-tooltip">{skill.ability}</div>
                                        <p className="skill-text">{skill.name}</p>
                                    </Col>
                            })}
                        </Row>
                    </div>;
                });

        return (
            <motion.div
                initial={initialCss}
                animate={animateCss}
                exit={exitCss}
                className="container">
                {skills}
            </motion.div>
        );
    }
}