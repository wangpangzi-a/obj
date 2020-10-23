import React, { Component } from 'react';
import { Button,DatePicker,Input,Tag,MessageBox,Message,Pagination } from 'element-react';
import 'element-theme-default';

import '../../styles/hr/RightTop.css'
import '../../styles/hr/Operate.css'
import '../../styles/hr/Community.css'

class Apart extends Component {
    constructor(props) {
		super();
		this.state = {
			bool:false,
			list:[
				{
					id:"02001",
					num:"XY20191210001",
					name:"金华万府",
					location:"西安市",
					area:12000,
					dong:12,
					hu:200,
					green:60,
					img:1,
					kainame:"西安市房产开发有限公司",
					wuname:"西安市房产开发物业有限公司",
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
							<th>所属小区</th>
							<th>栋数</th>
							<th>房产编码</th>
							<th>房产名称</th>
							<th>户主名称</th>
							<th>联系方式</th>
							<th>房间数</th>
							<th>单元</th>
							<th>楼层</th>
							<th>描述</th>
							<th>入住时间</th>
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
					<td>{item.dong}</td>
					<td>{item.num}</td>
					<td>{item.area}</td>
					<td>{item.dong}</td>
					<td>{item.hu}</td>
					<td>{item.green}</td>
					<td>{item.kainame}</td>
					<td>{item.wuname}</td>
					<td>欢迎</td>
					<td>{item.time}</td>
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

export default Apart;