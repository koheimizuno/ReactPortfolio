import { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import './Home.scss'
import { Title } from "./Title";
import { Tabs } from "./Tabs";

export class Home extends Component {

    constructor(props){
        super(props);

        this.state = {
            titleFocus: true,
            height: window.innerHeight
        }

        this.toggleTitleFocus = this.toggleTitleFocus.bind(this);
        this.handleResize = this.handleResize.bind(this);
    }

    componentDidMount() {
        document.getElementById('loader').remove();

        window.addEventListener("resize",this.handleResize)
    }

    handleResize(){
        this.setState({height:window.innerHeight});
    }

    toggleTitleFocus()
    {
        this.setState({
            titleFocus: !this.state.titleFocus
        });
    }

    render() {

        return (
            <div className="portfolio" style={{height:`${this.state.height}px`}}>
                <div style={{height:"100%", backdropFilter:"blur(4px)"}}>
                    <Title focus={this.state.titleFocus} onFocusToggle={this.toggleTitleFocus}/>
                    <Tabs visible={!this.state.titleFocus}/>
                </div>
            </div>
        );
    }
}