import React, { Component, Route } from 'react';
import { Button, DatePicker, Input, Tag, MessageBox, Message, Pagination } from 'element-react';
import 'element-theme-default';
import Add from "../../components/lyb/add"
import '../../styles/hr/RightTop.css'
import '../../styles/hr/Operate.css'
import '../../styles/hr/Community.css'
import axios from "axios"

class Apart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			totalN:null,
			bool: false,
			page:null,
			list: []
		};
	}
	
	componentWillMount(){
		axios({
			url:"http://10.35.167.193:3000/xiaoquchaxun",
			method:"get",
			params:{"number":1}
		}).then(res=>{
			this.setState({
				list:res.data.data,
				totalN:res.data.num
			})
		})
	}

	componentDidMount(){
		// console.log(this.props.location.pathname);
		// console.log(this.props.location.query.name);
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
	fun1() {
		this.props.history.push({
			pathname: '/Home/Apart/add', query: {
				data: [{
					type: "text",
					placeholder: "请输入",
					label: "用户名",
					name: "userName",
					maxLength: 16
				}, {
					type: "redio",
					placeholder: {
						sex: "sex",
						sex1: "男",
						sex2: "女"
					},
					label: "用户名"
				},
				{
					type: "text",
					placeholder: "请输入",
					label: "年龄",
					name: "age",
					maxLength: 16
				},
				{
					type: "text",
					placeholder: "请输入",
					label: "爱好",
					name: "hellob"
				},
				{
					type: "textarea",
					placeholder: "请输入",
					label: "用户名",
					name: "tishi"
				},
				{
					type: "button",
					placeholder: "提交",
					fun: "1"
				}
				],
			fun1:(str)=>this.sendaxios(str)
			}

		})
	}
	sendaxios(str) {
		let userName = this.state.userName;
		console.log("userName",str);
		if(str.userName==""||str.userName==undefined)
		{
			console.log("userName空")
		}
		else{
			console.log("userName不为空")
		}
		// axios({
		// 	url: "/adddddd",
		// 	method: "get",
		// 	params: {
		// 		userName: this.state.userName,
		// 		passWd: ""
		// 	}
		// })
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
							<th>小区编号</th>
							<th>小区名称</th>
							<th>坐落地址</th>
							<th>占地面积（m2）</th>
							<th>总栋数</th>
							<th>总户数</th>
							<th>绿化率（%）</th>
							<th>缩略图</th>
							<th>开发商名称</th>
							<th>物业公司名称</th>
							<th>创建时间</th>
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
				if(res.data == "1"){
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
						<i className="el-icon-edit"></i>
						<i className="el-icon-delete" onClick={() => this.del(item._id,index)}></i>
					</td>
				</tr>
			)
		})
	}

	change1(currentPage){
		this.setState({
			page:currentPage
		},()=>{
			console.log(this.state.page);
			axios({
				url:"http://10.35.167.193:3000/xiaoquchaxun",
				method:"get",
				params:{"number":this.state.page}
			}).then(res=>{
				
				this.setState({
					list:res.data.data,
					totalN:res.data.num
				})
			})
		})
	}

	pageShow() {
		return (
			<div className="first">
				<Pagination  layout="prev, pager, next" total={16} onCurrentChange={(currentPage)=>this.change1(currentPage)} pageSize={3} />
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