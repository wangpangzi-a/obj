import React, { Component } from 'react';
import "../../styles/zzy/HomeTop.css"
import "../../fonter/iconfont.css"
import { Select,Dropdown } from "element-react"

class HomeTop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            d: "",
            time: "",
            value: ''
        }
    }

   componentDidMount() {
	   setInterval(()=>{
		  this.dateToString() 
	   },1000)  
   }

   dateToString() {
	   var d = new Date();
	   var _y = d.getFullYear();
	   var _m = this.zero(d.getMonth()+1);
	   var _d = this.zero(d.getDate());
	   var _h = this.zero(d.getHours());
	   var _mi = this.zero(d.getMinutes());
	   var _s = this.zero(d.getSeconds());
	   var arr = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
	   var str = _y + "-" + _m + "-" + _d + " ";
	   str += " "+arr[d.getDay()];
	   str += _h + ":" + _mi + ":" + _s;
	   this.setState({
		   time:str
	   })      
   }

    zero(v) {
        return v < 10 ? "0" + v : v;
    }

    xianshi() {
        this.setState({

        })
    }

    render() {
        return (
            <div className="home-top">
                <div className="man-sys">
                    <a href="#">小区管理系统</a>
                    <div className="many">
                        <i className="iconfont icon-gengduo"></i>
                    </div>
                    <div className="top-right">
                        <ul className="top-right-ul">
                            <li className="right-time">{this.state.time}</li>
                            <li className="message">
                                <i className="iconfont icon-laba"></i>
                                <p><span>2</span></p>
                            </li>
                            <li className="message">
                                <i className="iconfont icon-lingdang"></i>
                                <p><span>2</span></p>
                            </li>
                            <li className="picture">
                                <div></div>
                            </li>
                            <li className="username">
                                <Dropdown menu={(
                                    <Dropdown.Menu>
                                        <Dropdown.Item>个人信息</Dropdown.Item>
                                        <Dropdown.Item>切换账号</Dropdown.Item>
                                        <Dropdown.Item>退出</Dropdown.Item>
                                    </Dropdown.Menu>
                                )}>
                                    <span className="el-dropdown-link">
                                        admin<i className="el-icon-caret-bottom el-icon--right"></i>
                                    </span>
                                </Dropdown>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeTop;