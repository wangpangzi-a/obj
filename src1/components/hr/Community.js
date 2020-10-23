import React from 'react';
import { Button,MessageBox,Message,Pagination} from 'element-react';

import '../../styles/hr/Community.css'

export default class Community extends React.Component {
    constructor(props){
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
				},
				{
					id:"02341",
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
				},
				{
					id:"02341",
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
					<td>{item.num}</td>
					<td>{item.name}</td>
					<td>{item.location}</td>
					<td>{item.area}</td>
					<td>{item.dong}</td>
					<td>{item.hu}</td>
					<td>{item.green}</td>
					<td>{item.img}</td>
					<td>{item.kainame}</td>
					<td>{item.wuname}</td>
					<td>{item.time}</td>
					<td><Button type="info" disabled={this.state.bool}>显示</Button></td>
					<td>
						<i className="el-icon-circle-close"  onClick={()=>this.jinyong(index)}></i>
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
			<div>
				<table>
					<thead>
						<tr>
							<th><input type="checkbox"/></th>
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
}
