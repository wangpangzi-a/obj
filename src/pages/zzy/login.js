import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import "../../styles/zzy/login.css";
import { Message } from "element-react"
import axios from 'axios';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper.scss';
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
            threeRef:React.createRef(),
          
        }
       }

       // componentDidMount(){
       //  new Swiper('.swiper-container', {
       //      // direction: 'vertical',//竖向轮播
       //      loop: true,//无缝轮播
       //      autoplay:{
       //          delay:100,
       //          stopOnLastSlide:false,
       //          disableOnInteraction:true
       //      },
       //      pagination: {//小圆点分页
       //          el: '.swiper-pagination',
       //      },
       //      navigation: {//左右分页
       //          nextEl: '.swiper-button-next',
       //          prevEl: '.swiper-button-prev',
       //      },
       //      // scrollbar: {//下划线分页
       //      //     el: '.swiper-scrollbar',
       //      // }
       //  })
       // }
	   
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
        console.log(this.state.firstRef.current.value);
        console.log(this.state.twoRef.current.value)
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
                    axios({
                        url:"http://10.35.167.42:8082/login",
                        method:"get",
                        params:{
                            loginname:this.state.firstRef.current.value,
                            password:this.state.twoRef.current.value
                        },
                    }).then(res=>{
                        console.log(res.data.data.img);
                        if(res.data.code==1){
                            this.props.history.push({ pathname: "/Home",query:{"img":res.data.data.img }});
                        }
                    })
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
                {/* <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                 >
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                 </Swiper> */}
            </div>
        )
    }
}

export default login;