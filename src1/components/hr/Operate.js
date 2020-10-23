import React from 'react';
import { Button} from 'element-react';

import '../../styles/hr/Operate.css'

export default class Operate extends React.Component {
    constructor(props){
        super();
		this.state = {};
    }

    render() {
		return (
			<div className="operate">
				<Button type="danger"><i className="el-icon-delete">批量删除</i></Button>
				<Button type="info"><i className="el-icon-plus">添加</i></Button>
				<span>共有数据&nbsp;:&nbsp;<input disabled className="data" value="2" />&nbsp;条</span>
			</div>
		)
    }
}
