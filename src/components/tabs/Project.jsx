import { Component } from 'react';
import { Col } from 'reactstrap';
import './Project.scss';

export function Project(props) {

    let project = props.project;

    let content;

    if (project == null) {
        content = <p>Error</p>
    }

    content = (
        <div className="project-card w-100"
            style={{ backgroundImage: `url("${project.img}")`, cursor: project.link===undefined?"default":"pointer" }}
            onClick={project.link===undefined ? null : ()=>{window.open(project.link)}}>
            <p>{project.title}</p>
        </div>
    );

    return (
        <Col xs="6" sm="4" md="3">
            {content}
        </Col>
    )
}