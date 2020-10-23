import React from 'react';

var echarts = require('echarts/lib/echarts');
// 引入柱状图
require('echarts/lib/chart/pie');

require('echarts/lib/component/title');
require('echarts/lib/component/tooltip');   
require('echarts/lib/component/legend');

// 引入提示框和标题组件



class HD extends React.Component {
	
	componentDidMount(){
		var myChart = echarts.init(document.getElementById('main'));
		// 绘制图表
        var  option = {
            title: {
                text: '小区人数统计',
                subtext: '（人）',
                left: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: ['A区', 'B区', 'C区', 'D区', 'E区']
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '60%'],
                    data: [
                        {value: 335, name: 'A区'},
                        {value: 310, name: 'B区'},
                        {value: 234, name: 'C区'},
                        {value: 135, name: 'D区'},
                        {value: 1548, name: 'E区'}
                    ],
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };
        
        myChart.setOption(option);
		

	}
	
	  render() {
		return (
			<div>
				<div id="main" style={{ width:480, height: 500}}></div>
			</div>
		)
	  }

}




export default HD;

