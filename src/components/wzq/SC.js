import React, { Component } from 'react'
import { Upload,Dialog,Message } from 'element-react';
import 'element-theme-default';
import axios from 'axios'
export default class SC extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      imageUrl: '',
      hidden : "none",
      hidden1:"block"
    };
  }
  
  render() {
      return(this.xuanra())
  }
  
  xuanra(){
    const { imageUrl } = this.state;
   

      return(
        <>
             <p style={{display:this.state.hidden}}> loading</p>
        <div style={{display:this.state.hidden1}}>
      <Upload
        className="avatar-uploader"
        // action="http://10.35.167.193:10000/shangchaun" 
         action="http://10.35.167.42:8082/addAdmin" 
        name="picture"
        showFileList={false}
        onSuccess={(res, file) => this.handleAvatarScucess(res, file)}
        beforeUpload={file => this.beforeAvatarUpload(file)}
      >
        { imageUrl ? <img src={imageUrl} width="100px" height="200px" className="avatar" /> : <i className="el-icon-plus avatar-uploader-icon"></i> }
      </Upload>


        </div>
        </>
      )

  }
  // componentWillUnmount(){
  //   this.setState = (state, callback) => {
  //     return;
  //   };
  // }
  handleAvatarScucess(res, file) {
    console.log("之hou")
    console.log("aa",file)
    this.setState({ 
      hidden : "none",
      hidden1:"block",
      imageUrl: URL.createObjectURL(file.raw)
     });
  }
  
  beforeAvatarUpload(file) {
    console.log("file",file)
    var params = new URLSearchParams();   
    params.append('picture', file);     
  
   axios(      {        
     method:'post',       
      url:'http://10.35.167.42:8082/addAdmin',         
       data:params      })  .then(res=>{ console.log("ress",res)            });



    console.log("之前")
    this.setState({ 

      hidden : "block",
      hidden1:"none"
     });

    const isJPG = file.type === 'image/jpeg';
    const isLt2M = file.size / 1024 / 1024 < 2;
  
    if (!isJPG) {
      Message('上传头像图片只能是 JPG 格式!');
    }
    if (!isLt2M) {
      Message('上传头像图片大小不能超过 2MB!');
    }
    return isJPG && isLt2M;



  }







    // constructor(props) {
    //     super(props);
      
    //     this.state = {
    //       dialogImageUrl: '../../assets/wzq/3.png',
    //       dialogVisible: false,
    //       aaa:"",
    //       mm:-100
    //     };
    //   }

    //   add(a){
    //     console.log(a)
    //     this.setState({
    //       aaa:a,
    //       mm:200
    //     })
    //   }
    //   render() {
    //     const { dialogImageUrl, dialogVisible } = this.state;
    //     return (
    //       <div>
    //         <img width="100px" src={this.state.aaa.data} alt="" style={{width:"150px",height:"150px",position:"absolute",zIndex:this.state.mm}} />
    //         <Upload 
              
    //           autoUpload={true}
    //           showFileList={false}
    //         // action="http://10.35.167.53:8082/upload"
    //           action="http://10.35.167.193:10000/shangchaun"  
    //           name="img"
    //           listType="picture-card"
    //           onPreview={file => this.handlePictureCardPreview(file)}
    //           onRemove={(file, fileList) => this.handleRemove(file, fileList)}
    //           onSuccess={(file, fileList)=>{this.add(file, fileList)}}
    //         >
    //           <i className="el-icon-plus"></i>
    //         </Upload>
    //         <Dialog
    //           visible={dialogVisible}
    //           size="tiny"
    //           onCancel={() => this.setState({ dialogVisible: false })}
    //         >
    //           <img width="100%" src={this.state.dialogImageUrl} alt="" />
    //         </Dialog>

    //       </div>
    //     )
    //   }
      
    //   handleRemove(file, fileList) {
    //     console.log("hh")
    //     console.log(file, fileList);
    //   }
      
    //   handlePictureCardPreview(file) {
    //     console.log("hhhhh",file.url)
    //     this.setState({
    //       dialogImageUrl: file.url,
    //       dialogVisible: true,
    //     })
    //   }
      
}
