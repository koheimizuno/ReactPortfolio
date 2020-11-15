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
        <div className="pb-100 w-100" style={{backgroundImage: `url("${project.img}")`}}>
            <p>{project.title}</p>
        </div>
    );

    return (
        <Col>
            {content}
        </Col>
    )
}