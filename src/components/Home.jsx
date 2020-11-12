import { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import './Home.scss'
import { Title } from "./Title";

export class Home extends Component {

    constructor(props){
        super(props);

        this.state = {
            titleFocus: true
        }

        this.toggleFocus = this.toggleFocus.bind(this);
    }

    componentDidMount() {
        document.getElementById('loader').remove();
    }

    toggleFocus()
    {
        this.setState({
            titleFocus: !this.state.titleFocus
        });
    }

    render() {
        return (
            <div className="portfolio">
                <div style={{height:"100vh", backdropFilter:"blur(4px)"}}>
                    <Title focus={this.state.titleFocus}/>
                    <button style={{position:"absolute", bottom:"0"}}onClick={this.toggleFocus}>Change</button>
                </div>
            </div>
        );
    }
}