import React, { Component } from 'react';
import "../../styles/zzy/Home.css"
import HomeTop from "../../components/zzy/HomeTop"
import HomeLeft from "../../components/zzy/HomeLeft"
import HomeRight from "../../components/zzy/HomeRight"

class Home extends Component {
    constructor(props){
        super(props);
        console.log("this.props.location.query",this.props.location.query.img);
    }
    
    render() {
        return (
            <div className="box">
				<div className="box-top">
					<HomeTop props={this.props.location.query.img}/>
				</div> 
                <div className="box-bottom">
                    <HomeLeft history={this.props.history}/>
                    <HomeRight history={this.props.history}/>
                </div>   
            </div>
        );
    }
}

export default Home;