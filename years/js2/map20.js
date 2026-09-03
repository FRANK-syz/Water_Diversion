
$(function () {
    map();
    function map() {
		
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('map'));
		
		
var data = [
     {name: '西藏', value: 126473.18},
     {name: '上海', value: 235.86},
     {name: '福建', value: 1832.49},
     {name: '广西', value: 4229.18},
     {name: '广东', value: 1294.95},
     {name: '山西', value: 329.76},
     {name: '云南', value: 3813.48},
     {name: '海南', value: 2626.81},
     {name: '辽宁', value: 930.85},
     {name: '吉林', value: 2418.82},
     {name: '宁夏', value: 152.99},
     {name: '江西', value: 3731.27},
     {name: '青海', value: 17107.35},
     {name: '内蒙古', value: 2091.74},
     {name: '四川', value: 3871.91},
     {name: '陕西', value: 1062.41},
     {name: '重庆', value: 2397.69},
     {name: '江苏', value: 641.33},
     {name: '贵州', value: 3448.22},
     {name: '北京', value: 117.84},
     {name: '新疆', value: 3111.28},
     {name: '浙江', value: 1598.69},
     {name: '山东', value: 370.28},
     {name: '甘肃', value: 1628.74},
     {name: '河南', value: 411.85},
     {name: '黑龙江', value: 4419.23},
     {name: '河北', value: 196.23},
     {name: '湖南', value: 3189.91},
     {name: '安徽', value: 2099.53},
	 {name: '天津', value: 95.96},
     {name: '湖北', value: 3006.68}
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
    '青海':[96,35],
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
					return 90;
				}else if(val[2]>10000){
				return 60;
				}
				else if(val[2]>800){
				return val[2] / 100;	
				}
				else if(val[2]>600){
				return 8;	
				}
				else{
					return val[2]/80};
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
            type:"effectScatter",
            rippleEffect: {
                period: 10,
                scale: 2,
                brushType: 'stroke'
            },
            itemStyle: {
                normal: {
                    color: 'skyblue',
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
        }

    ]
};


		
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }


})