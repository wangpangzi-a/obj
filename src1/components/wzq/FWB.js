import React, { Component } from 'react'
import E from 'wangeditor'
export default class FWB extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            coo:"1"
        }

    }
    componentDidMount() {
        
        const editor = new E('#toolbar-container','#text-container')
        editor.config.height = 500
        this.setState({
            coo:editor.txt.text()
        })

        editor.create()


    }
    dian(e){
        console.log(e.target.value)
    }
    add(ev){
        
        // console.log(ev.target.value)
        console.log("ada",this.refs.mm)
    //    this.setState({
    //        coo:e.target.value
    //    })
    }
    add2(e){
        console.log(e.target)
       this.setState({
           coo:e.target.value
       })
    }
    render() {
        return (
            <div>
                <div id="toolbar-container" ></div>
                <p>------ 我是分割线 ------</p>
                <div id="text-container" style={{height:"500px"}} ref="mm" onClick={(ev)=>{this.add(ev)}} ></div>
                
                <input type="text" value={this.state.coo} onChange={(e)=>{this.add2(e)}}  />
                <input type="button" value="asdad" onClick={(ev)=>{this.dian(ev)}} />
            </div>
        )
    }

}


