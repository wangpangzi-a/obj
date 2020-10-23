import React from 'react';
import { Button,DatePicker,Input } from 'element-react';

import 'element-theme-default';
import '../../styles/hr/RightTop.css'

export default class RightTop extends React.Component {
    constructor(props){
        super();
		this.state = {};
    }

    render() {
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
}
