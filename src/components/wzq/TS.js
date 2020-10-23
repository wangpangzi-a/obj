import React from 'react';

var echarts = require('echarts/lib/echarts');
// 引入柱状图
require('echarts/lib/chart/line');

require('echarts/lib/component/grid');
require('echarts/lib/component/tooltip');
require('echarts/lib/component/legend');
// require('echarts/lib/component/xAxis');
// require('echarts/lib/component/yAxis');

// 引入提示框和标题组件



class TS extends React.Component {
	
	componentDidMount(){
		var myChart = echarts.init(document.getElementById('main1'));
		// 绘制图表
        var colors = ['#5793f3', '#d14a61', '#675bba'];


        var option = {
            color: colors,
        
            tooltip: {
                trigger: 'none',
                axisPointer: {
                    type: 'cross'
                }
            },
            legend: {
                data:['投诉（次）', '满意度']
            },
            grid: {
                top: 70,
                bottom: 50
            },
            xAxis: [
                {
                    type: 'category',
                    axisTick: {
                        alignWithLabel: true
                    },
                    axisLine: {
                        onZero: false,
                        lineStyle: {
                            color: colors[1]
                        }
                    },
                    axisPointer: {
                        label: {
                            formatter: function (params) {
                                return '投诉  ' + params.value
                                    + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                            }
                        }
                    },
                    data: ['1月','3月','5月','7月','9月','11月']
                },
                {
                    type: 'category',
                    axisTick: {
                        alignWithLabel: true
                    },
                    axisLine: {
                        onZero: false,
                        lineStyle: {
                            color: colors[0]
                        }
                    },
                    axisPointer: {
                        label: {
                            formatter: function (params) {
                                return '满意度'   + params.value
                                    + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                            }
                        }
                    },
                    data: ['1月','3月','5月','7月','9月','11月']
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '投诉（次）',
                    type: 'line',
                    xAxisIndex: 1,
                    smooth: true,
                    data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
                },
                {
                    name: '满意度',
                    type: 'line',
                    smooth: true,
                    data: [3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7]
                }
            ]
        };
        
        myChart.setOption(option);
		

	}
	
	  render() {
		return (
			<div>
				<div id="main1" style={{ width:480, height: 500}}></div>
			</div>
		)
	  }

}




export default TS;

