 $(window).load(function(){$(".loading").fadeOut()})  
$(function () {
    echarts_1();
echarts_4()
echarts_31()
function echarts_1() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart1'));

option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} %",
position:function(p){   //其中p为当前鼠标的位置
            return [p[0] + 10, p[1] - 10];
        }
    },
    legend: {
       orient: 'vertical',
top:'25%',
		right:0,
       itemWidth: 10,
        itemHeight: 10,
        data:['Ⅰ类','Ⅱ类','Ⅲ类','Ⅳ类','Ⅴ类','劣Ⅴ类'],
                textStyle: {
            color: 'rgba(255,255,255,.5)',
			fontSize:'12',
        }
    },
    series: [
        {
        	name:'占比',
            type:'pie',
			center: ['35%', '50%'],
            radius: ['40%', '50%'],
color: ['#0b27c9', '#3959cf','#2a69cf','#568de0','#7dc4e5','#a9daeb'],	
            label: {show:false},
			labelLine: {show:false},
            data:[
  
                {value:0, name:'Ⅰ类'},
                {value:0, name:'Ⅱ类'},
                {value:0, name:'Ⅲ类'},
                {value:0, name:'Ⅳ类'},
				{value:0, name:'Ⅴ类'},
				{value:0, name:'劣Ⅴ类'},
            ]
        }
    ]
};
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function echarts_4() {
        // 基于准备好的dom，初始化echarts实例
        var myChart2 = echarts.init(document.getElementById('echart3'));
option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['总水资源量（单位：亿立方米）'],

		top:'2%',
        textStyle: {
            color: "rgba(255,255,255,.5)",
		    fontSize: '12',

        },
        itemWidth: 12,
        itemHeight: 12,
        itemGap: 35
    },
    grid: {
        left: '0%',
		top:'40px',
        right: '0%',
        bottom: '0%',
       containLabel: true
    },
    xAxis: [{
        type: 'category',
      		data: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十'],
        axisLine: {
            show: true,
         lineStyle: {
                color: "rgba(255,255,255,.1)",
                width: 1,
                type: "solid"
            },
        },
		
        axisTick: {
            show: false,
        },
		axisLabel:  {
                interval: 0,
               // rotate:50,
                show: true,
                splitNumber: 15,
                textStyle: {
 					color: "rgba(255,255,255,.6)",
                    fontSize: '16',
                },
            },
    }],
    yAxis: [{
        type: 'value',
        axisLabel: {
           //formatter: '{value} %'
			show:true,
			 textStyle: {
 					color: "rgba(255,255,255,.6)",
                    fontSize: '14',
                },
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "rgba(255,255,255,.1	)",
                width: 1,
                type: "solid"
            },
        },
        splitLine: {
            lineStyle: {
               color: "rgba(255,255,255,.1)",
            }
        }
    }],
    series: [{
        name: '总水资源量（单位：亿立方米）',
        type: 'bar',
        data: [2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000],
        barWidth:'20%', //柱子宽度
       // barGap: 1, //柱子之间间距
        itemStyle: {
            normal: {
                color:'#2f89cf',
                opacity: 1,
				barBorderRadius: 5,
            }
        }
    },
	]
};

        // 使用刚指定的配置项和数据显示图表。
        myChart2.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function echarts_31() {
        // 基于准备好的dom，初始化echarts实例
	var myChart7 = echarts.init(document.getElementById('sysx')); 
	
	option7 = {
      //  backgroundColor: '#00265f',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        left: '0%',
		top:'10px',
        right: '0%',
        bottom: '0',
       containLabel: true
    },
    xAxis: [{
        type: 'category',
      		data: ['12', '13', '14', '15', '16', '17', '18', '19', '20', '21'],
        axisLine: {
            show: true,
         lineStyle: {
                color: "rgba(255,255,255,.1)",
                width: 1,
                type: "solid"
            },
        },
        axisTick: {
            show: false,
        },
		axisLabel:  {
                interval: 0,
               // rotate:50,
                show: true,
                splitNumber: 5,
                textStyle: {
 					color: "rgba(255,255,255,.6)",
                    fontSize: '12',
                },
            },
    }],
    yAxis: [{
        type: 'value',
		min:2000,
		max:2200,
        axisLabel: {
           //formatter: '{value} %'
			show:true,
			 textStyle: {
 					color: "rgba(255,255,255,.6)",
                    fontSize: '12',
                },
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "rgba(255,255,255,.1	)",
                width: 1,
                type: "solid"
            },
        },
        splitLine: {
			 show: false,
            lineStyle: {
               color: "rgba(255,255,255,.1)",
            }
        }
    }],
    series: [{
        name: '人均',
        type: 'line',
 //smooth: true,
        data: [2186.08, 2059.69, 2079.5, 2064, 2186.9, 2068.31, 2007.57, 2051.21, 2194, 2090.12],

        itemStyle: {
            normal: {
                color:'#2f89cf',
                opacity: 1,
				
				barBorderRadius: 5,
            }
        }
    }
	]
};
        // 使用刚指定的配置项和数据显示图表。
 
        myChart7.setOption(option7);
        window.addEventListener("resize",function(){
            myChart7.resize();
 
        });
    }
})



		
		
		


		









