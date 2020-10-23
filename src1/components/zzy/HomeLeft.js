import React, { Component } from 'react';
import "../../styles/zzy/HomeLeft.css";
import 'element-theme-default';
import { Menu, Layout } from "element-react"
import "../../fonter/iconfont.css"
import store from "../../store/store"

class HomeLeft extends Component {
    constructor(props) {
        super(props);
        console.log("propshomeleft", props);
        this.state = {
            key: 1,
            arr: []
        }
        console.log("listhehe",store.getState().list);
    }
    
    chuan(name, path) {
        this.setState({
            key: this.state.key + 1
        }, () => {
                store.dispatch({ type: "ADD", payload: { key: this.state.key, name: name, type: 'danger', path: path } });
                this.props.history.push({ pathname: path });
        })

    }

    render() {
        return (
            <div className="home-left">
                <div className="left-pic">
                    <p></p>
                </div>
                <div className="left-pic-content">你好，admin！欢迎回来</div>
                <div className="layout">
                    <Layout.Col span={8}>
                        <Menu defaultActive="2" className="el-menu-vertical-demo" >
                            <Menu.Item index="1"><p onClick={() => this.chuan("控制台", "/Home")}><i className="iconfont icon-home"></i>控制台</p></Menu.Item>
                            <Menu.SubMenu index="2" title={<span><i className="iconfont icon-gongyuloux-
    "></i>小区管理</span>}>
                                <Menu.Item index="2-1" ><p onClick={() => this.chuan("小区列表", "/Home/Apart")}>小区列表</p></Menu.Item>
                            </Menu.SubMenu>
                            <Menu.SubMenu index="3" title={<span><i className="iconfont icon-fangchanguanli-"></i>房产管理</span>}>
                                <Menu.Item index="3-1"><p onClick={() => this.chuan("房产管理", "/Home/Housemain")}>房产管理</p></Menu.Item>
                                <Menu.Item index="3-2">栋数管理</Menu.Item>
                            </Menu.SubMenu>
                            <Menu.SubMenu index="4" title={<span><i className="iconfont icon-yezhuxinxiguanli
    "></i>业主信息管理</span>}>
                                <Menu.Item index="4-1">人员管理</Menu.Item>
                                <Menu.Item index="4-2">车辆管理</Menu.Item>
                                <Menu.Item index="4-3">宠物管理</Menu.Item>
                            </Menu.SubMenu>
                            <Menu.SubMenu index="5" title={<span><i className="iconfont icon-p"></i>停车位管理</span>}>
                                <Menu.Item index="5-1">车位管理</Menu.Item>
                                <Menu.Item index="5-2">车位使用管理</Menu.Item>
                            </Menu.SubMenu>
                            <Menu.SubMenu index="6" title={<span><i className="iconfont icon-15shuangren
    "></i>管理员管理</span>}>
                                <Menu.Item index="6-1"><p onClick={() => this.chuan("管理员列表", "/Home/AdminerList")}>管理员列表</p></Menu.Item>
                                <Menu.Item index="6-2">用户组管理</Menu.Item>
                                <Menu.Item index="6-2">权限管理</Menu.Item>
                            </Menu.SubMenu>
                            <Menu.SubMenu index="7" title={<span><i className="iconfont icon-shezhi"></i>系统设置</span>}>
                                <Menu.Item index="7-1">系统设置</Menu.Item>
                                <Menu.Item index="7-2">个人设置</Menu.Item>
                            </Menu.SubMenu>
                        </Menu>
                    </Layout.Col>
                </div>
            </div>
        );
    }
}

export default HomeLeft;