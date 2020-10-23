import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import "../../styles/zzy/login.css";
import { Message } from "element-react"
// import Captcha from "captcha-mini/demo/captcha.js";

class login extends Component {
    constructor(props) {
        super(props);
        // console.log("propslogin", props)
        this.state = {
            yanZhengCode: null,
            index: 0,
            t: null,
            imgs: ["0.jpeg", "1.jpeg", "2.jpg"],
            a:"",
            firstRef:React.createRef(),
            twoRef:React.createRef(),
            threeRef:React.createRef()
        }
       }

    getRandom(max, min, num) {
        const asciiNum = ~~(Math.random() * (max - min + 1) + min)
        if (!Boolean(num)) {
            return asciiNum
        }
        const arr = []
        for (let i = 0; i < num; i++) {
            arr.push(this.getRandom(max, min))
        }
        return arr;
    }

    componentWillMount() {
        this.randomNum();
        // Message('这是一条消息提示');
    }

    randomNum(){
		var arr = "1234567890abcdefghlimnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ";
		var str="";
        for (var i = 0; i < 4; i++) {
            var a = arr.charAt(Math.round(Math.random() * 59));
            str += a;
        }
		this.setState({
            a:str
        },()=>{
            console.log(this.state.a);
        })
	}

    loginFn() {
        if(this.state.firstRef.current.value==""){
            Message('用户名不能为空');
            return;
        }else{
            if(this.state.twoRef.current.value==""){
                Message('密码不能为空');
                return;
           }else{
                if(this.state.threeRef.current.value==""){
                    Message('验证码不能为空');
                    return;
                }else if(this.state.a!=this.state.threeRef.current.value){
                    Message('请确认验证码是否正确');
                    return;
                }else{
                    this.props.history.push({ pathname: "/Home" });
                }
           }
        }
    }

    huan(){
        this.randomNum();
    }

    render() {
        return (
            <div className="screenBg">
                <div className="login-box">
                    <div className="login-form">
                        <h1>小区管理系统后台登录</h1>
                        <div className="name">
                            <label>管理员账号：</label>
                            <input type="text" name="" id="" tabIndex="1" autoComplete="off" ref={this.state.firstRef} />
                        </div>
                        <div className="password">
                            <label>密 码：</label>
                            <input type="password" name="" maxLength="16" tabIndex="2" ref={this.state.twoRef} />
                        </div>
                        <div className="code">
                            <label>验证码：</label>
                            <input type="text" name="" maxLength="4" id="code" tabIndex="3" ref={this.state.threeRef} />
                            <div className="codeImg">
                               <span>{this.state.a}</span>
                            </div>
                            <p onClick={()=>this.huan()}>看不清，换一张</p>
                        </div>
                        <div className="remember" >
                            <input type="checkbox" id="remember" tabIndex="4" />
                            <label>记住密码</label>
                        </div>
                        <div className="login">
                            <button tabIndex="5" onClick={() => { this.loginFn() }}>登录</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default login;