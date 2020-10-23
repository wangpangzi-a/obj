import React, { Component } from 'react';
import { Button,DatePicker,Input,MessageBox,Message,Pagination } from 'element-react';
import 'element-theme-default';

import '../../styles/hr/RightTop.css'
import '../../styles/hr/Operate.css'
import '../../styles/hr/Community.css'
import axios from "axios"


export default class AdminerList extends Component {
    constructor(props) {
		super();
		this.state = {
			date1:"",
			date2:"",
			bool:false,
			list:[
				// {
				// 	id:"02001",
				// 	name:"老田",
				// 	phone:"111",
				// 	email:"@qq.com",
				// 	role:"超级管理员",
				// 	time:"2020-12-10 19:17:04"
				// }
			]
		};
    }
	
	componentWillMount(){
		axios({
			url:"http://10.35.167.42:8082/findAdminByPage",
			method:"get",
			params:{"number":1}
		}).then(res=>{
			console.log("res.data",res.data.data.list);
			this.setState({
				list:res.data.data.list,
				totalN:res.data.data.total
			})
		})
	}

	rightTop(){
		const {value1, value2} = this.state
		
		return (
			<div className="rightTop">
				<input placeholder="日期..." disabled className="date"/>
				<DatePicker
					ref={e=>this.datepicker2 = e}
					value={value1}
					align="right"
					placeholder="选择日期"
					onChange={date=>{
						console.debug('DatePicker2 changed: ', date)
						this.setState({value1: date,date1:date.toLocaleString().split(" ")[0].split("/").join("-")})
					}}
		 		 />
				  <DatePicker
					ref={e=>this.datepicker2 = e}
					value={value2}
					align="right"
					placeholder="选择日期"
					onChange={date=>{
						console.debug('DatePicker2 changed: ', date)
						this.setState({value2: date,date2:date.toLocaleString().split(" ")[0].split("/").join("-")})
					}}
		 		 />
				<Input placeholder="标题" className="login"/>
				<Button type="info" onClick={()=>this.find()}><i className="el-icon-search"></i></Button>
			</div>
		)
	}
	
	find(){
		console.log(this.state.date1);
		console.log(this.state.date2);
		axios({
			url:"http://10.35.167.42:8082/findAdminByTime",
			method:"get",
			params:{"number":1,"time1":this.state.date1,"time2":this.state.date2}
		}).then(res=>{
			console.log(res.data.data);
			this.setState({
				list: res.data.data.list,
				totalN: res.data.data.total
			})
		})
	}

	operate(){
		return (
			<div className="operate">
				<Button type="danger"><i className="el-icon-delete">批量删除</i></Button>
				<Button type="info"><i className="el-icon-plus">添加</i></Button>
				<span>共有数据&nbsp;:&nbsp;<input disabled className="data" value="2" />&nbsp;条</span>
			</div>
		)
	}
	
	list(){
		return (
			<div>
				<table>
					<thead>
						<tr>
							<th><input type="checkbox"/></th>
							<th>ID</th>
							<th>登录名</th>
							<th>手机</th>
							<th>邮箱</th>
							<th>角色</th>
							<th>加入时间</th>
							<th>状态</th>
							<th>操作</th>
						</tr>
					</thead>
					<tbody>
						{this.xianshi()}
					</tbody>
				</table>
				{this.pageShow()}
			</div>
		)
	}
	
	jinyong(){
		MessageBox.msgbox({
			title: '信息',
			message: '确认要停用吗',
			showCancelButton: true
		}).then(action => {
			this.setState({
				bool:true
			})
			Message({
				type: 'info',
				message: 'action: ' + action
			});
		})
	}
	
	del(idx){
		MessageBox.confirm('此操作将永久删除该文件, 是否继续?', '提示', {
			type: 'warning'
		}).then(() => {
			axios({
				url: "http://10.35.167.53:8082/delAdmin",
				method: "get",
				params: { "id": idx }
			}).then(res => {
				console.log("res", res.data);
				if (res.data === "1") {
					// var lt = [...this.state.list];
					// lt.splice(index, 1);
					// this.setState({
					// 	list: lt
					// });

					axios({
						url: "http://10.35.167.53:8082/findAdminByPage",
						method: "get",
						params: { "number": 1 }
					}).then(res => {
						console.log("res.data", res.data.data.total);
						this.setState({
							list: res.data.data.list,
							totalN: res.data.data.total
						})
					})
					Message({
						type: 'success',
						message: '删除成功!'
					});
				}
			})
		}).catch(() => {
			Message({
				type: 'info',
				message: '已取消删除'
			});
		});
	}
	
	xianshi(){
		return this.state.list.map((item,index)=>{
			return (
				<tr key={index}>
					<td><input type="checkbox"/></td>
					<td>{item.id}</td>
					<td>{item.loginname}</td>
					<td>{item.phone}</td>
					<td>{item.mailbox}</td>
					<td>{item.roler.role}</td>
					<td>{item.time}</td>
					<td><Button type="info" disabled={this.state.bool}>启动</Button></td>
					<td>
						<i className="el-icon-edit"></i>
						<i className="el-icon-delete" onClick={()=>this.del(item.id)}></i>
					</td>
				</tr>
			)
		})
	}

	pageShow(){
		return (
			<div className="first">
				<Pagination layout="prev, pager, next"  total={this.state.totalN} pageSize={3} onCurrentChange={(currentPage)=>this.page(currentPage)}/>
			</div>
		)
	}

	page(currentPage){
		console.log(currentPage);
		axios({
			url:"http://10.35.167.42:8082/findAdminByPage",
			method:"get",
			params:{"number":currentPage}
		}).then(res=>{
			console.log("res.data",res.data.data.total);
			this.setState({
				list:res.data.data.list
			})
		})
	}

    render() {
        return (
			<div className="right-bottom">
				{this.rightTop()}
				{this.operate()}
				{this.list()}
			</div>
        );
    }
}