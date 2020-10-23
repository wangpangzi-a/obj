import React, { Component } from 'react';
import { Input,Radio,Button } from 'element-react';
import "../../styles/lyb/hsadd.css"
import 'element-theme-default';
class add extends Component {
    constructor(props){
        super(props);
        this.state = {value:"男"};
    }
    onChange(value) {
        // console.log("value",value)
        this.setState({ value });
    }
    onChang1(ev,str){
        this.setState({[str]:ev},()=>{
        console.log(this.state); 
        });
    }
    componentDidMount(){
        
    }
    fun1(str){
        this.props.location.query.fun1(this.state);
    }
    show(){
        // console.log(this.props.location.query);
        if(this.props.location.query===""||this.props.location.query===undefined)
        {}
        else{
        let str=this.props.location.query.data;
        
        return str.map((item,index)=>{
           if(item.type==="text")
           {
              return (<li key={index}>
                         <Input placeholder={item.placeholder} prepend={item.label} maxLength={item.maxLength} name={item.name} onChange={(ev)=>{this.onChang1(ev,item.name)}}/>
                   </li>
              )
           }
           if(item.type==="redio")
           {
              return (<li key={index}>
                        <div className="sex"><Input disabled placeholder="性别" /></div>
                        <Radio value={item.placeholder.sex1} checked={this.state.value === item.placeholder.sex1} onChange={this.onChange.bind(this)}>{item.placeholder.sex1}</Radio>
                        <Radio value={item.placeholder.sex2} checked={this.state.value === item.placeholder.sex2} onChange={this.onChange.bind(this)}>{item.placeholder.sex2}</Radio>
                   </li>
              )
           }
           if(item.type==="button")
           {
            return (<li key={index}>
                        <Button type="primary" onClick={()=>this.fun1()} >{item.placeholder}</Button>
                 </li>
                )
           }
           if(item.type="textarea")
           {
            return (<li key={index}>
                        <Input
                        type="textarea"
                        autosize={{ minRows: 2, maxRows: 4}}
                        placeholder={item.placeholder}
                        onChange={(ev)=>{this.onChang1(ev,item.name)}}
                        /> 
                </li>
              )
           }
         });
    } }
    render() {
        return (
             <div className="fromadd">
                <ul>
                    {this.show()}
                </ul>
            </div>
        );
    }
}

export default add;