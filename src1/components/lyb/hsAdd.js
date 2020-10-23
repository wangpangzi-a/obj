import React, { Component } from 'react';
import { Input,Button,DatePicker } from 'element-react';
import "../../styles/lyb/hsadd.css"
import { Link } from "react-router-dom";
import 'element-theme-default';
import Axios from 'axios';
class hsAdd extends Component {
    constructor(props) {
        super(props)
        this.state = {}
      }
    fun1(){
        this.props.history.push({pathname:'/add',
        query:{data:{
            type:"text",
            placeholder:"请输入",
            label:"用户名"
        } }})
    }
    fun2(){
     
    }
    render() {
        const {value1, value2} = this.state;
        return (
            <div className="fromadd">
                <ul>
                    <li>
                    <DatePicker
                        value={value1}
                        placeholder="选择日期"
                        onChange={date=>{
                            console.debug('DatePicker1 changed: ', date)
                            this.setState({value1: date})
                        }}
                        disabledDate={time=>time.getTime() < Date.now() - 8.64e7}
                    />
                    </li>
                    <li>
                        <Input
                            type="textarea"
                            autosize={{ minRows: 2, maxRows: 4}}
                            placeholder="请输入内容"
                        />
                    </li>
                    <li>
                    {/* <Button type="primary" onClick={this.fun1}>添加</Button> */}
                    <Link to={{pathname:'/add',query:{data:[{
                                type:"text",
                                placeholder:"请输入",
                                label:"用户名",
                                name:"userName",
                                maxLength:16
                            },{
                                type:"redio",
                                placeholder:{
                                    sex:"sex",
                                    sex1:"男",
                                    sex2:"女"
                                },
                                label:"用户名"
                            },
                            {
                                type:"text",
                                placeholder:"请输入",
                                label:"年龄",
                                name:"age",
                                maxLength:16
                            },
                            {
                                type:"text",
                                placeholder:"请输入",
                                label:"爱好",
                                name:"hellob"
                            },
                            {
                                type:"textarea",
                                placeholder:"请输入",
                                label:"用户名",
                                name:"tishi"
                            },
                            {
                                type:"button",
                                placeholder:"提交",
                                fun:"1"
                            }
                            
                            
                            ]},fun:()=>{this.fun2()}}} >
                         <Button type="primary">添加</Button>
                    </Link>
                    </li>
                </ul>
            </div>

        );
    }
}

export default hsAdd;