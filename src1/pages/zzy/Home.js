import React, { Component } from 'react';
import "../../styles/zzy/Home.css"
import HomeTop from "../../components/zzy/HomeTop"
import HomeLeft from "../../components/zzy/HomeLeft"
import HomeRight from "../../components/zzy/HomeRight"

class Home extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
    render() {
        return (
            <div className="box">
				<div className="box-top">
					<HomeTop/>
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