
$(function () {
    map();
    function map() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('map'));
var data = [
     {name: '西藏', value: 120461.75},
     {name: '上海', value: 216.6},
     {name: '福建', value: 1817.68},
     {name: '广西', value: 3065.23},
     {name: '广东', value: 965.07},
     {name: '山西', value: 596.56},
     {name: '云南', value: 3433.49},
     {name: '海南', value: 3362.2},
     {name: '辽宁', value: 1206.27},
     {name: '吉林', value: 1923.75},
     {name: '宁夏', value: 128.63},
     {name: '江西', value: 3142.32},
     {name: '青海', value: 14190.4},
     {name: '内蒙古', value: 3926.3},
     {name: '四川', value: 3493.4},
     {name: '陕西', value: 2155.77},
     {name: '重庆', value: 2338.58},
     {name: '江苏', value: 589.8},
     {name: '贵州', value: 2831.13},
     {name: '北京', value: 280.04},
     {name: '新疆', value: 3124.16},
     {name: '浙江', value: 2067.5},
     {name: '山东', value: 516.65},
     {name: '甘肃', value: 1118.01},
     {name: '河南', value: 695.32},
     {name: '黑龙江', value: 3800.19},
     {name: '河北', value: 505.1},
     {name: '湖南', value: 2699.33},
     {name: '安徽', value: 1445.9},
	 {name: '天津', value: 288.41},
     {name: '湖北', value: 2054.08}
];
var geoCoordMap = {
    '西藏':[91.11,29.97],    
    '上海':[121.48,31.22],
    '福建':[118,26],
    '广西':[108.33,22.84],
    '广东':[113.23,23.16],
    '山西':[112.53,37.87],
    '云南':[102.73,25.04],
    '海南':[110.35,20.02],
    '辽宁':[123.38,41.8],
    '吉林':[125.35,43.88],
    '宁夏':[106.27,38.47],
    '江西':[115.89,28.68],
    '青海':[98,36.56],
    '内蒙古':[111.65,40.82],
    '四川':[104.06,30.67],
    '陕西':[108.95,34.27],
    '重庆':[106.54,29.59],
    '江苏':[119.5,32.04],
    '贵州':[106.71,26.57],
    '北京':[116.46,39.92],
    '新疆':[87.68,43.77],
    '浙江':[120.19,30.26],
    '山东':[117,36.65],
    '甘肃':[103.73,36.03],
    '河南':[113.65,34.76],
    '黑龙江':[126.63,45.75],
    '河北':[114.48,38.03],
    '湖南':[113,28.21],
    '安徽':[117.27,31.86],
	'天津':[117.2,39.13],
    '湖北':[114.31,30.52]
};
var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    return res;
};

option = {
   // backgroundColor: '#404a59',
  /***  title: {
        text: '实时行驶车辆',
        subtext: 'data from PM25.in',
        sublink: 'http://www.pm25.in',
        left: 'center',
        textStyle: {
            color: '#fff'
        }
    },**/
    tooltip : {
        trigger: 'item',
		formatter: function (params) {
		      if(typeof(params.value)[2] == "undefined"){
		      	return params.name + ' : ' + params.value;
		      }else{
		      	return params.name + ' : ' + params.value[2];
		      }
		    }
    },
  
    geo: {
        map: 'china1',
        label: {
            emphasis: {
                show: false
            }
        },
        roam: false,
		zoom:1.2,
        itemStyle: {
            normal: {
                areaColor: 'rgba(2,37,101,.5)',
                borderColor: 'rgba(112,187,252,.5)'
            },
            emphasis: {
                areaColor: 'rgba(2,37,101,.8)'
            }
        }
    },
    series : [
        {
            name: '人均水资源量',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData(data),
            symbolSize: function (val) {
				if(val[2]>100000){
					return 150;
				}else if(val[2]>10000){
                return 100;
				}
				else if(val[2]>800){
				return val[2] / 75;	
				}
				else if(val[2]>600){
				return 10.75;	
				}
				else{
					return val[2]/45;}
            },
            label: {
                normal: {
                   formatter: '{b}',
                    position: 'right',
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: 'skyblue'
                }
            }
        }

    ]
};
		
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }

})

