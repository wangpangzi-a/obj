import React, { Component } from 'react';
import { Input,Radio,Button,Upload,fileList,Message,DatePicker } from 'element-react';
import "../../styles/lyb/hsadd.css"
import 'element-theme-default';
class add extends Component {
    constructor(props){
        super(props);
        this.state = {value:""};
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
        if(this.props.location.query.swect)
        {
            // console.log(this.props.location.query.swect)
            let str=this.props.location.query.data;
            let swect=this.props.location.query.swect;
            str.map(item=>{
                let str=item.name;
                let str1=swect[str];
                this.setState({[item.name]:[str1] })
            })
        }
       console.log(this.state)

    }
    fun1(){
        this.props.location.query.fun1(this.state);
    }
    show(){
        // console.log(this.props.location.query);
        if(this.props.location.query)
        {
        let str=this.props.location.query.data;
        
        return str.map((item,index)=>{
           if(item.type==="text")
           {
              return (<li key={index}>
                         <Input placeholder={item.placeholder} value={this.state[item.name]} prepend={item.label} maxLength={item.maxLength} name={item.name} onChange={(ev)=>{this.onChang1(ev,item.name)}}/>
                   </li>
              )
           }
           if(item.type==="redio")
           {
              return (<li key={index}>
                        <div className="sex"><Input disabled placeholder={item.label} /></div>
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
           if(item.type==="textarea")
           {
            return (<li key={index}>
                        <Input
                        type="textarea"
                        autosize={{ minRows: 2, maxRows: 4}}
                        placeholder={item.placeholder}
                        value={this.state[item.name]}
                        onChange={(ev)=>{this.onChang1(ev,item.name)}}
                        /> 
                </li>
              )
           }
           if(item.type==="time")
           {
               
                const {time1} = this.state
               return(    
                <DatePicker
                value={time1}
                placeholder="选择日期"
                onChange={date=>{
                  console.debug('DatePicker1 changed: ', date)
                  this.setState({time1: date})
                }}
                disabledDate={time=>time.getTime() < Date.now() - 8.64e7}
                />
               )
           }
           if(item.type==="upde")
           {
            return (
                <Upload
                  className="upload-demo"
                  action="//jsonplaceholder.typicode.com/posts/"
                  onPreview={file => this.handlePreview(file)}
                  onRemove={(file, fileList) => this.handleRemove(file, fileList)}
                  fileList={fileList}
                  limit={3}
                  onExceed={(files, fileList) => {
                    Message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
                  }}
                  tip={<div className="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>}
                >
                  <Button size="small" type="primary">点击上传</Button>
                </Upload>
              )
           }
         });
    } }
    render() {
        
        // const fileList = [
        //     {name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg'}
        //   ];
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