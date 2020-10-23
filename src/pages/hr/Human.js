import React, { Component} from 'react';
import { Button, DatePicker, Input, MessageBox, Message, Pagination } from 'element-react';
import 'element-theme-default';
import '../../styles/hr/RightTop.css'
import '../../styles/hr/Operate.css'
import '../../styles/hr/Community.css'
import axios from "axios"

class Human extends Component {
	constructor(props) {
		super(props);
		this.state = {
			totalN:null,
			bool: false,
			list: []
		};
	}
	
	componentWillMount(){
		axios({
			url:"http://10.35.167.193:3000/xiaoquchaxun",
			method:"get",
			params:{"number":1}
		}).then(res=>{
			console.log(res.data)
			this.setState({
				list:res.data.data,
				totalN:res.data.num
			})
		})
	}
	
	rightTop() {
		const { value1, value2 } = this.state

		return (
			<div className="rightTop">
				<input placeholder="日期..." disabled className="date" />
				<DatePicker
					value={value1}
					placeholder="开始日"
					onChange={date => {
						console.debug('DatePicker1 changed: ', date);
						this.setState({ value1: date });
					}}
					disabledDate={time => time.getTime() < Date.now() - 8.64e7}
				/>
				<DatePicker
					value={value2}
					className="end"
					placeholder="结束日"
					onChange={date => {
						console.debug('DatePicker1 changed: ', date);
						this.setState({ value2: date });
						console.log(date.toLocaleString().split(" ")[0].split("/").join("-"));
					}}
					disabledDate={time => time.getTime() < Date.now() - 8.64e7}
				/>
				<Input placeholder="标题" className="login" />
				<Button type="info"><i className="el-icon-search"></i></Button>
			</div>
		)
	}
	edit(index){
		axios({
			url:"",
			data:{
				num:index
			}
		}).then(res=>{
			let str=res.data;
			this.props.history.push({
				pathname: '/Home/add', query: {
					data: [{
						type: "text",
						placeholder: "admin",
						label: "小区管理员",
						name: "adm",
						maxLength: 16
					}, {
						type: "text",
						placeholder: "小区名称",
						label: "小区名称",
						name: "communityName",
						maxLength: 16
					}, {
						type: "text",
						placeholder: "坐落地址",
						label: "坐落地址",
						name: "address;"
					},{
						type: "text",
						placeholder: "占地面积",
						label: "占地面积",
						name: "size"
					},
					{
						type: "text",
						placeholder: "开发商名称",
						label: "开发商名称",
						name: "boss"
					},
					{
						type: "text",
						placeholder: "物业公司名称",
						label: "物业公司名称",
						name: "property"
					},
					{
						type: "text",
						placeholder: "绿化率",
						label: "绿化率",
						name: "green"
					},
					{
						type: "text",
						placeholder: "总栋数",
						label: "总栋数",
						name: "numbers"
					},
					{
						type: "text",
						placeholder: "总户数",
						label: "总户数",
						name: "households"
					},
					{
						type: "redio",
						placeholder: {
							sex: "display",
							sex1: "显示",
							sex2: "隐藏"
						},
						label: "状态"
					},
					{
						type: "redio",
						placeholder: {
							sex: "sd",
							sex1: "显示",
							sex2: "隐藏"
						},
						label: "状态1"
					},
					{
						type: "textarea",
						placeholder: "小区简介",
						label: "小区简介",
						name: "remarks"
					},
					{
						type: "button",
						placeholder: "提交"
					}
					],
					fun1: (str) => this.sendaxios(str)
				}
			})
		})
	}
	fun1() {
		this.props.history.push({
			pathname: '/Home/add', query: {
				data: [{
					type: "text",
					placeholder: "admin",
					label: "小区管理员",
					name: "adm",
					maxLength: 16
				}, {
					type: "text",
					placeholder: "小区名称",
					label: "小区名称",
					name: "communityName",
					maxLength: 16
				}, {
					type: "text",
					placeholder: "坐落地址",
					label: "坐落地址",
					name: "address;"
				},{
					type: "text",
					placeholder: "占地面积",
					label: "占地面积",
					name: "size"
				},
				{
					type: "text",
					placeholder: "开发商名称",
					label: "开发商名称",
					name: "boss"
				},
				{
					type: "text",
					placeholder: "物业公司名称",
					label: "物业公司名称",
					name: "property"
				},
				{
					type: "text",
					placeholder: "绿化率",
					label: "绿化率",
					name: "green"
				},
				{
					type: "text",
					placeholder: "总栋数",
					label: "总栋数",
					name: "numbers"
				},
				{
					type: "text",
					placeholder: "总户数",
					label: "总户数",
					name: "households"
				},
				{
					type: "redio",
					placeholder: {
						sex: "display",
						sex1: "显示",
						sex2: "隐藏"
					},
					label: "状态"
				},
				{
					type: "redio",
					placeholder: {
						sex: "sd",
						sex1: "显示",
						sex2: "隐藏"
					},
					label: "状态1"
				},
				{
					type: "textarea",
					placeholder: "小区简介",
					label: "小区简介",
					name: "remarks"
				},
				{
					type: "button",
					placeholder: "提交"
				}
				],
				// swect:res.data,
				fun1: (str) => this.sendaxios(str)
			}

		})
	}
	sendaxios(str) {
		// axios({
		// 	url: "http://10.35.167.193:3000/xiaoquxiugai",
		// 	method: "get",
		// 	params: {
		// 		adm: str.adm,
		// 		communityName: str.communityName,
		// 		address: str.address,
		// 		size: str.size,
		// 		numbers: str.numbers,
		// 		households: str.households,
		// 		green: str.green,
		// 		display: str.value,
		// 		imgs: "无",
		// 		remarks: str.remarks,
		// 		boss: str.boss,
		// 		property: str.property,
		// 	}
		// }).then(res => { console.log(res)})
	}
	operate() {
		return (
			<div className="operate">
				<Button type="danger"><i className="el-icon-delete">批量删除</i></Button>
				<Button type="info" onClick={() => this.fun1()}><i className="el-icon-plus">添加</i></Button>
				<span>共有数据&nbsp;:&nbsp;<input disabled className="data" value="2" />&nbsp;条</span>
			</div>
		)
	}

	list() {
		return (
			<div>
				<table>
					<thead>
						<tr>
							<th><input type="checkbox" /></th>
							<th>ID</th>
							<th>所属小区</th>
							<th>所属房产</th>
							<th>成员名称</th>
							<th>成员照片（m2）</th>
							<th>身份证号</th>
							<th>联系方式</th>
							<th>职业</th>
							<th>出生日期</th>
							<th>性别</th>
							<th>成员类型</th>
							<th>备注</th>
							<th>创建时间</th>
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

	jinyong() {
		MessageBox.msgbox({
			title: '信息',
			message: '确认要停用吗',
			showCancelButton: true
		}).then(action => {
			this.setState({
				bool: true
			})
			Message({
				type: 'info',
				message: 'action: ' + action
			});
		})
	}

	del(idx,index) {
		MessageBox.confirm('此操作将永久删除该文件, 是否继续?', '提示', {
			type: 'warning'
		}).then(() => {
			axios({
				url:"http://10.35.167.193:3000/xiaoqushanchu",
				method:"get",
				params:{"id":idx}
			}).then(res=>{
				if(res.data === "1"){
					var lt = [...this.state.list];
					lt.splice(index, 1);
					this.setState({
						list: lt
					});
					
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

	xianshi() {
		return this.state.list.map((item, index) => {
			return (
				<tr key={index}>
					<td><input type="checkbox" /></td>
					<td>{item._id}</td>
					<td>{item.adm}</td>
					<td>{item.communityName}</td>
					<td>{item.households}</td>
					<td>{item.size}</td>
					<td>{item.property}</td>
					<td>{item.numbers}</td>
					<td>{item.green}</td>
					<td>{item.imgs}</td>
					<td>{item.remarks}</td>
					<td>{item.wuname}</td>
					<td>{item.time}</td>
					<td><Button type="info" disabled={this.state.bool}>显示</Button></td>
					<td>
						<i className="el-icon-circle-close" onClick={() => this.jinyong(index)}></i>
						<i className="el-icon-edit" onClick={()=>this.edit(index)}></i>
						<i className="el-icon-delete" onClick={() => this.del(item._id,index)}></i>
					</td>
				</tr>
			)
		})
	}
	

	pageShow() {
		return (
			<div className="first">
				<Pagination  layout="prev, pager, next" total={this.state.totalN} />
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

export default Human;