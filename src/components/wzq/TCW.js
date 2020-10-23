import React from 'react';

var echarts = require('echarts/lib/echarts');
// 引入柱状图
require('echarts/lib/chart/pie');

// require('echarts/lib/component/title');
require('echarts/lib/component/tooltip');
require('echarts/lib/component/legend');

// 引入提示框和标题组件



class TCW extends React.Component {
	
	componentDidMount(){
		var myChart = echarts.init(document.getElementById('main2'));
		// 绘制图表
        var option = {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c} ({d}%)'
            },
            legend: {
                orient: 'vertical',
                left: 10,
                data: ['A区停车位', 'B区停车位', 'C区停车位', 'E区停车位', 'E区停车位']
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        {value: 335, name: 'A区停车位'},
                        {value: 310, name: 'B区停车位'},
                        {value: 234, name: 'C区停车位'},
                        {value: 135, name: 'D区停车位'},
                        {value: 1548, name: 'E区停车位'}
                    ]
                }
            ]
        };
		
        myChart.setOption(option);
	}
	
	  render() {
		return (
			<div>
				<div id="main2" style={{ width:480, height: 500}}></div>
			</div>
		)
	  }

}




export default TCW;

