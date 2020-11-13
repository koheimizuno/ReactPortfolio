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

        this.toggleTitleFocus = this.toggleTitleFocus.bind(this);
    }

    componentDidMount() {
        document.getElementById('loader').remove();
    }

    toggleTitleFocus()
    {
        this.setState({
            titleFocus: !this.state.titleFocus
        });
    }

    render() {
        return (
            <div className="portfolio">
                <div style={{height:"100vh", backdropFilter:"blur(4px)"}}>
                    <Title focus={this.state.titleFocus} onFocusToggle={this.toggleTitleFocus}/>
                </div>
            </div>
        );
    }
}