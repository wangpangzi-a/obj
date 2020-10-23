import React, { Component } from 'react'
import './Home.css'
import HD from '../../components/wzq/HD'
import TS from '../../components/wzq/TS'
import TCW from '../../components/wzq/TCW'
import NEWHD from '../../components/wzq/NEWHD'
import ZYBX from '../../components/wzq/ZYBX'
import XTXX from '../../components/wzq/XTXX'
import SC from '../../components/wzq/SC'
// import './themes/kindeditor-all'
// import './themes/zh-CN'
export default class Home extends Component {
    constructor(){
        super();
        console.log("window",window)
    }
    render() {
        return (
            <div >
                <div className="a" >
                    <p style={{fontSize:"20px"}}>欢迎使用小区物业管理系统！v1.0   登录次数：520</p>
                </div>
                <div className='b' >
                        <img  src={require("../../assets/wzq/1.png")} alt="" />
                        <div>
                            <p>45</p>
                            <p>总栋数</p>
                        </div>
                        <img  src={require("../../assets/wzq/2.png")} alt="" />
                        <div>
                            <p>600</p>
                            <p>总户数</p>
                        </div>
                        <img  src={require("../../assets/wzq/3.png")} alt="" />
                        <div>
                            <p>8310</p>
                            <p>总人数</p>
                        </div>
                        <img  src={require("../../assets/wzq/4.png")} alt="" />
                        <div>
                            <p>1314</p>
                            <p>总栋数</p>
                        </div>
                        
                </div>
                <div className="c">

                    <div className="CC"><p style={{ marginBottom:"20px"}}>小区人数</p><HD /></div>
                    <div className="CC"><p style={{ marginBottom:"20px"}}>投诉/满意度</p><TS /></div>
                    <div className="CC"><p style={{ marginBottom:"20px"}}>小区停车位</p><TCW /></div>
                    <div className="CC"><p style={{ marginBottom:"20px"}}>最新活动</p><NEWHD /> </div>
                    <div className="CC"><p style={{ marginBottom:"20px"}}>最新保修</p><ZYBX /></div>
                    <div className="CC"><p style={{ marginBottom:"20px"}}>系统信息</p><XTXX/></div>
                  
                </div>
                <SC />
            </div>
        )
    }
}
