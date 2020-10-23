import React, { Component } from 'react';
import { Button,DatePicker,Input,MessageBox,Message,Pagination } from 'element-react';
import 'element-theme-default';
import axios from "axios"
import '../../styles/hr/RightTop.css'
import '../../styles/hr/Operate.css'
import '../../styles/hr/Community.css'

class Apart extends Component {
    constructor(props) {
		super();
		this.state = {
			date1:"",
			date2:"",
			checkAll:false,
			list:[]
		};
	}
	
	componentWillMount(){
		axios({
			url:"http://10.35.167.42:8082/house/findall",
			method:"get",
			params:{"number":1}
		}).then(res=>{
			console.log("res.data",res.data.data);
			this.setState({
				list:res.data.data.list,
				totalN:res.data.data.total
			})
		})
	}
	
	removeS(){
		var li = [...this.state.list];
		let a1 = [];
		li.forEach(item=>{
			if(item.isChecked){
				a1.push(item.id);
			}
		})
		console.log("a1",a1);
	}

	fun1() {
		this.props.history.push({
			pathname: '/Home/add', query: {
				data: [{
					type: "text",
					placeholder: "请输入所属小区",
					label: "所属小区",
					name: "adm",
					maxLength: 16
				}, {
					type: "text",
					placeholder: "栋数",
					label: "栋数",
					name: "communityName",
					maxLength: 16
				}, {
					type: "text",
					placeholder: "控制在80汉字,150字符以内",
					label: "房产名称",
					name: "address;"
				},{
					type: "text",
					placeholder: "",
					label: "户主名称",
					name: "size"
				},
				{
					type: "text",
					placeholder: "",
					label: "联系方式",
					name: "boss"
				},
				{
					type: "text",
					placeholder: "",
					label: "房间数",
					name: "property"
				},
				{
					type: "text",
					placeholder: "请输入数字",
					label: "单元",
					name: "green"
				},
				{
					type: "text",
					placeholder: "请输入数字",
					label: "楼层",
					name: "numbers"
				}
					,
				{
					type: "time",
					name: "households"
				},
			
				{
					type: "textarea",
					placeholder: "请输入内容",
					label: "描述",
					name: "remarks"
				},
				{
					type: "button",
					placeholder: "提交"
				}

				],
				// swect:{remarks:"qweqweqe"},
				fun1: (str) => this.sendaxios(str)
			}

		})
	}

	sendaxios(str) {
		axios({
			url: "http://10.35.167.193:3000/xiaoquxiugai",
			method: "get",
			params: {
				adm: str.adm,
				communityName: str.communityName,
				address: str.address,
				size: str.size,
				numbers: str.numbers,
				households: str.households,
				green: str.green,
				display: str.value,
				imgs: "无",
				remarks: str.remarks,
				boss: str.boss,
				property: str.property,
			}
		}).then(res => { console.log(res)})
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
			url:"http://10.35.167.42:8082/house/likeFind",
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
				<Button type="danger" onClick={()=>this.removeS()}><i className="el-icon-delete">批量删除</i></Button>
				<Button type="info"  onClick={() => this.fun1()}><i className="el-icon-plus">添加</i></Button>
				<span>共有数据&nbsp;:&nbsp;<input disabled className="data" value={this.state.totalN} />&nbsp;条</span>
			</div>
		)
	}
	
	checkAll(){
		var li = [...this.state.list];
		var all = this.state.checkAll;
		all = ! all;
		
		for(var i = 0 ; i < li.length ;i++){
			li[i].isChecked = all;
			console.log(i,li[i].isChecked);
		}      
		
		this.setState({
			checkAll : all
		})
	}

	check(index){
		var li = [...this.state.list];
		li[index].isChecked = !li[index].isChecked;
		
		var every = li.every(item=>{
			return item.isChecked == true;
		})
		
		this.setState({
			list :li,
			checkAll : every
		})
	}
	
	list(){
		return (
			<div>
				<table>
					<thead>
						<tr>
							<th><input type="checkbox" checked={this.state.checkAll} onChange={()=>this.checkAll()}/></th>
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
			axios({
				url: "http://10.35.167.53:8082//house/delectById",
				method: "get",
				params: { "id": idx }
			}).then(res => {
				console.log("res", res.data.code);
				if (res.data.code === "1") {
					// var lt = [...this.state.list];
					// lt.splice(index, 1);
					// this.setState({
					// 	list: lt
					// });

					axios({
						url: "http://10.35.167.53:8082/house/findall",
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
					<td><input type="checkbox" checked={item.isChecked} onChange={()=>this.check(index)}/></td>
					<td>{item.id}</td>
					<td>{item.propertyName}</td>
					<td>{item.build.addRess}</td>
					<td>{item.build.communityNumber}</td>
					<td>{item.propertyName}</td>
					<td>{item.name}</td>
					<td>{item.phone}</td>
					<td>{item.roomnumber}</td>
					<td>{item.unit}</td>
					<td>{item.floor}</td>
					<td>欢迎</td>
					<td>{item.time}</td>
					<td>
						<i className="el-icon-edit"></i>
						<i className="el-icon-delete" onClick={()=>this.del(item.id)}></i>
					</td>
				</tr>
			)
		})
	}

	page(currentPage){
		console.log(currentPage);
		axios({
			url:"http://10.35.167.42:8082/house/findall",
			method:"get",
			params:{"number":currentPage}
		}).then(res=>{
			console.log("res.data",res.data.data.total);
			this.setState({
				list:res.data.data.list
			})
		})
	}
	
	pageShow(){
		return (
			<div className="first">
				<Pagination layout="prev, pager, next"  total={this.state.totalN} pageSize={3} onCurrentChange={(currentPage)=>this.page(currentPage)}/>
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