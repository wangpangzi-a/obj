import React, { Component } from 'react';
import { Route,NavLink } from "react-router-dom";
import "../../styles/zzy/HomeRight.css";
import { Tag } from "element-react"
import Apart from "../../pages/hr/Apart"
import Housemain from "../../pages/hr/Housemain"
import Add from "../../components/lyb/add"
import AdminerList from "../../pages/hr/AdminerList"
import Home from "../../pages/wzq/Home"
import store from "../../store/store.js"


class HomeRight extends Component {
    constructor(props) {
        // console.log("store.getState().list",store.getState().list);
        super(props);
        console.log("propshomeright",props)
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
            console.log("store.getState().list后",store.getState().list);
        });
    }
    componentDidMount(){
        console.log("store.getState().list前",store.getState().list);
        console.log("this.state.tags",this.state.tags)
        // if(this.props.location.query.name)
        // console.log(this.props.location.query.name);
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
                    <Route path="/Home/Apart/Add"  exact={true} component={Add}/>
                    <Route path="/Home/Housemain" component={Housemain}/>
                    <Route path="/Home/AdminerList" component={AdminerList}/>
                </div>
            </div>
        );
    }
}

export default HomeRight;