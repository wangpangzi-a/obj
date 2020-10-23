import React, { Component } from 'react'
import { Table } from 'element-react';
import 'element-theme-default';
export default class NEWHD extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            columns: [
                {
                    label: "日期",
                    prop: "date",
                    width: 110
                },
                {
                    label: "姓名",
                    prop: "name",
                    width: 90
                },
                {
                    label: "地址",
                    prop: "address"
                }
            ],
            data: [{
                date: '2016-05-02',
                name: '小区活动1',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '小区活动2',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '小区活动3',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '小区活动4',
                address: '上海市普陀区金沙江路 1516 弄'
            }, {
                date: '2016-05-02',
                name: '小区活动5',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '小区活动6',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '小区活动7',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '小区活动8',
                address: '上海市普陀区金沙江路 1516 弄'
            }]
        }
    }

    render() {
        return (
            <div>
                <Table
                    style={{ width: '100%' }}
                    columns={this.state.columns}
                    maxHeight={500}
                    data={this.state.data}
                />
            </div >
        )
    }
}
