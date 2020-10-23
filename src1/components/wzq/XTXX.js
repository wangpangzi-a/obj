import React, { Component } from 'react'
import {Table} from 'element-react';
import 'element-theme-default';
export default class XTXX extends React.Component {
    constructor(props) {
        super(props);
      
        this.state = {
          columns: [
            {
              label: "服务器信息",
              prop: "date",
              width: 140
            },
            {
                label: "",
                prop: "name",
                width: 285
              }


          ],
          data: [{
            date: '服务器计算机名',
            name:"http://127.0.0.1/"
          }, {
            date: '服务器IP地址',
            name:"http://127.0.0.1/"
          }, {
            date: '服务器域名',
            name:"www.xxx.net"
          }, 
          {
            date: '服务器IIS版本',
            name:"80"
          },
          {
            date: '本文件所在文件夹',
            name:"Microsoft-IIS/6.0"
          },
          {
            date: '服务器操作系统',
            name:"D:\WebSite"
          },
          {
            date: '系统所在文件夹',
            name:"Microsoft Windows NT 5.2.3790 Service Pack 2"
          },
          {
            date: '服务器脚本超时时间',
            name:"30000秒"
          },{
            date: '服务器的语言种类',
            name:"Chinese (People's Republic of China)"
          }]
        }
      }
      
      render() {
        return (
          <Table
            style={{width: '100%'}}
            columns={this.state.columns}
            data={this.state.data}
            stripe={true}
          />
        )
      }
      
}
 
        
