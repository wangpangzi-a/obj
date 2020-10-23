// import React, { Component } from 'react'
// import { Upload,Dialog } from 'element-react';
// import 'element-theme-default';

// export default class SC extends Component {
//     constructor(props) {
//         super(props);
      
//         this.state = {
//           dialogImageUrl: '../../assets/wzq/3.png',
//           dialogVisible: false,
//           ac:null
//         };
//       }

//       add(a){
//         console.log(a)
//         this.setState({
//           ac:a.data
//         })
//       }
//       render() {
//         const { dialogImageUrl, dialogVisible } = this.state;
//         return (
//           <div>
//             <Upload
//               autoUpload={true}
//               showFileList={true}
//               action="http://10.35.167.193:10000/shangchaun"
//               name="img"
//               listType="picture-card"
//               fileList={()=>{this.a()}}
//               onPreview={file => this.handlePictureCardPreview(file)}
//               onRemove={(file, fileList) => this.handleRemove(file, fileList)}
//               onSuccess={(file, fileList)=>{this.add(file, fileList)}}
//               // beforeUpload={(file, fileList) => this.a(file, fileList)}
//               // onPreview={(file, fileList)=>{this.b(file, fileList)}}
//             >
//               <i className="el-icon-plus"></i>
//             </Upload>
//             <Dialog
//               visible={dialogVisible}
//               size="tiny"
//               onCancel={() => this.setState({ dialogVisible: false })}
//             >
//               <img width="100%" src={this.state.dialogImageUrl} alt="" />
//               <img  alt=''width='100%' src={this.state.ac}  />
//             </Dialog>
//           </div>
//         )
//       }
      
//       handleRemove(file, fileList) {
//         console.log("hh")
//         console.log(file, fileList);
//       }
      
//       handlePictureCardPreview(file) {
//         console.log("hhhhh",file.url)
//         this.setState({
//           dialogImageUrl: file.url,
//           dialogVisible: true,
//         })
//       }
      
// }
