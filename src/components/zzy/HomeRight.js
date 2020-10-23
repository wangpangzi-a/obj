import React, { Component } from 'react';
import { BrowserRouter, Route,Link,withRouter,NavLink } from "react-router-dom";
import "../../styles/zzy/HomeRight.css";
import { Tag } from "element-react"
import Apart from "../../pages/hr/Apart"
import Housemain from "../../pages/hr/Housemain"
import Human from "../../pages/hr/Human"
import CarP from "../../pages/hr/CarP"
import Add from "../../components/lyb/add"
import AdminerList from "../../pages/hr/AdminerList"
import Home from "../../pages/wzq/Home"
import store from "../../store/store.js"


class HomeRight extends Component {
    constructor(props) {
        super(props);
        console.log("store.getState().list.tags",store.getState().list);
        this.state = {
            tags:store.getState().list,
            val:[]
        }
    }

    handleClose(tag) {
        const { tags } = this.state;
        tags.splice(tags.map(el => el.key).indexOf(tag.key), 1);
        this.setState({ tag },()=>{
            this.props.history.goBack();
        });
    }

    render() {
        return (
            <div className="box1">
                <div className="right-top">
                {
                        this.state.tags.map(tag => {
                            return (
                                <Tag
                                    key={tag.key}
                                    closable={true}
                                    type={tag.type}
                                    color="#f2f2f2"
                                    closeTransition={false}
                                    onClose={this.handleClose.bind(this, tag)}>
									<NavLink to={tag.path} activeClassName="bian" >{tag.name}</NavLink>
								</Tag>
                            )
                        })
                    }
                </div>
                <div className="right-bottom">
                    <Route path="/Home" exact={true} component={Home}/>
                    <Route path="/Home/Apart" exact={true} component={Apart}/>
                    <Route path="/Home/Add"  exact={true} component={Add}/>
                    <Route path="/Home/Housemain" component={Housemain}/>
                    <Route path="/Home/Human" component={Human}/>
                    <Route path="/Home/CarP" component={CarP}/>
                    <Route path="/Home/AdminerList" component={AdminerList}/>
                </div>
            </div>
        );
    }
}

export default HomeRight;