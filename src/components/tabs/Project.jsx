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
        <div className="project-card w-100" onClick={props.onClick}>
            {project.img &&
                <img className="background" src={project.img}></img>
            }
            <div className="project-container">
                <p>{project.title}</p>
            </div>
        </div>
    );

    return (
        <Col xs="6" sm="6" md="4">
            {content}
        </Col>
    )
}