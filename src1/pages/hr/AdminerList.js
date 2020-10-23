import React, { Component } from 'react';
import { Button,DatePicker,Input,Tag,MessageBox,Message,Pagination } from 'element-react';
import 'element-theme-default';

import '../../styles/hr/RightTop.css'
import '../../styles/hr/Operate.css'
import '../../styles/hr/Community.css'


export default class AdminerList extends Component {
    constructor(props) {
		super();
		this.state = {
			bool:false,
			list:[
				{
					id:"02001",
					name:"老田",
					phone:"111",
					email:"@qq.com",
					role:"超级管理员",
					time:"2020-12-10 19:17:04"
				}
			]
		};
    }
	
	rightTop(){
		const {value1, value2} = this.state
		
		return (
			<div className="rightTop">
				<input placeholder="日期..." disabled className="date"/>
				<DatePicker
					value={value1}
					placeholder="开始日"
					onChange={date=>{
						console.debug('DatePicker1 changed: ', date);
						this.setState({value1: date});
					}}
					disabledDate={time=>time.getTime() < Date.now() - 8.64e7}
				/>
				<DatePicker
					value={value2}
					className="end"
					placeholder="结束日"
					onChange={date=>{
						console.debug('DatePicker1 changed: ', date);
						this.setState({value2: date});
						console.log(date.toLocaleString().split(" ")[0].split("/").join("-"));
					}}
					disabledDate={time=>time.getTime() < Date.now() - 8.64e7}
				/>
				<Input placeholder="标题" className="login"/>
				<Button type="info"><i className="el-icon-search"></i></Button>
			</div>
		)
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
			var lt = [...this.state.list];
			lt.splice(idx,1);
			this.setState({
				list:lt
			});
			Message({
				type: 'success',
				message: '删除成功!'
			});
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
					<td>{item.name}</td>
					<td>{item.phone}</td>
					<td>{item.email}</td>
					<td>{item.role}</td>
					<td>{item.time}</td>
					<td><Button type="info" disabled={this.state.bool}>启动</Button></td>
					<td>
						<i className="el-icon-edit"></i>
						<i className="el-icon-delete" onClick={()=>this.del(index)}></i>
					</td>
				</tr>
			)
		})
	}

	pageShow(){
		return (
			<div className="first">
				<Pagination layout="prev, pager, next" total={30}/>
			</div>
		)
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