
$(function () {
    map();
    function map() {
		
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('map'));
		
		
		
var data21 = [
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
var data12 = [
     {name: '西藏', value: 137378.05},
     {name: '上海', value: 143.4},
     {name: '福建', value: 4047.78},
     {name: '广西', value: 4476.04},
     {name: '广东', value: 1921},
     {name: '山西', value: 294.98},
     {name: '云南', value: 3637.91},
     {name: '海南', value: 4130.76},
     {name: '辽宁', value: 1247.83},
     {name: '吉林', value: 1674.49},
     {name: '宁夏', value: 168.03},
     {name: '江西', value: 4836.01},
     {name: '青海', value: 15687.17},
     {name: '内蒙古', value: 2052.68},
     {name: '四川', value: 3587.16},
     {name: '陕西', value: 1041.91},
     {name: '重庆', value: 1626.5},
     {name: '江苏', value: 472.01},
     {name: '贵州', value: 2801.82},
     {name: '北京', value: 193.24},
     {name: '新疆', value: 4055.51},
     {name: '浙江', value: 2641.29},
     {name: '山东', value: 283.93},
     {name: '甘肃', value: 1038.36},
     {name: '河南', value: 282.58},
     {name: '黑龙江', value: 2194.61},
     {name: '河北', value: 324.24},
     {name: '湖南', value: 3005.68},
     {name: '安徽', value: 1172.63},
	 {name: '天津', value: 237.99},
     {name: '湖北', value: 1410.97}
];
var data13 = [
     {name: '西藏', value: 142530.58},
     {name: '上海', value: 116.9},
     {name: '福建', value: 3062.75},
     {name: '广西', value: 4376.83},
     {name: '广东', value: 2131.24},
     {name: '山西', value: 349.55},
     {name: '云南', value: 3652.24},
     {name: '海南', value: 5636.8},
     {name: '辽宁', value: 1055.17},
     {name: '吉林', value: 2208.17},
     {name: '宁夏', value: 175.25},
     {name: '江西', value: 3155.33},
     {name: '青海', value: 11216.59},
     {name: '内蒙古', value: 3848.6},
     {name: '四川', value: 3052.88},
     {name: '陕西', value: 941.26},
     {name: '重庆', value: 1603.87},
     {name: '江苏', value: 357.56},
     {name: '贵州', value: 2174.15},
     {name: '北京', value: 118.59},
     {name: '新疆', value: 4251.88},
     {name: '浙江', value: 1697.2},
     {name: '山东', value: 300.45},
     {name: '甘肃', value: 1042.33},
     {name: '河南', value: 226.44},
     {name: '黑龙江', value: 3702.13},
     {name: '河北', value: 240.57},
     {name: '湖南', value: 2373.56},
     {name: '安徽', value: 974.52},
	 {name: '天津', value: 101.49},
     {name: '湖北', value: 1364.91}
];
var data14 = [
     {name: '西藏', value: 140200},
     {name: '上海', value: 194.79},
     {name: '福建', value: 3217.99},
     {name: '广西', value: 4203.31},
     {name: '广东', value: 1608.43},
     {name: '山西', value: 305.06},
     {name: '云南', value: 3673.28},
     {name: '海南', value: 4265.96},
     {name: '辽宁', value: 332.37},
     {name: '吉林', value: 1112.23},
     {name: '宁夏', value: 152.98},
     {name: '江西', value: 3600.64},
     {name: '青海', value: 13675.45},
     {name: '内蒙古', value: 2149.89},
     {name: '四川', value: 3148.47},
     {name: '陕西', value: 932.84},
     {name: '重庆', value: 2155.94},
     {name: '江苏', value: 502.34},
     {name: '贵州', value: 3461.12},
     {name: '北京', value: 95.15},
     {name: '新疆', value: 3186.91},
     {name: '浙江', value: 2057.33},
     {name: '山东', value: 152.07},
     {name: '甘肃', value: 766.99},
     {name: '河南', value: 300.67},
     {name: '黑龙江', value: 2463.08},
     {name: '河北', value: 144.27},
     {name: '湖南', value: 2680.11},
     {name: '安徽', value: 1285.36},
	 {name: '天津', value: 76.08},
     {name: '湖北', value: 1574.33}
];
var data15 = [
     {name: '西藏', value: 120120.96},
     {name: '上海', value: 264.82},
     {name: '福建', value: 3468.67},
     {name: '广西', value: 5096.54},
     {name: '广东', value: 1792.43},
     {name: '山西', value: 257.11},
     {name: '云南', value: 3959.3},
     {name: '海南', value: 2184.86},
     {name: '辽宁', value: 408.05},
     {name: '吉林', value: 1203.48},
     {name: '宁夏', value: 138.41},
     {name: '江西', value: 4394.48},
     {name: '青海', value: 10057.6},
     {name: '内蒙古', value: 2141.21},
     {name: '四川', value: 2717.17},
     {name: '陕西', value: 881.06},
     {name: '重庆', value: 1518.65},
     {name: '江苏', value: 730.53},
     {name: '贵州', value: 3278.7},
     {name: '北京', value: 124.01},
     {name: '新疆', value: 3994.25},
     {name: '浙江', value: 2547.48},
     {name: '山东', value: 171.52},
     {name: '甘肃', value: 635.03},
     {name: '河南', value: 303.66},
     {name: '黑龙江', value: 2129.84},
     {name: '河北', value: 182.46},
     {name: '湖南', value: 2839.14},
     {name: '安徽', value: 1495.28},
	 {name: '天津', value: 83.56},
     {name: '湖北', value: 1740.9}
];
var data16 = [
     {name: '西藏', value: 141746.56},
     {name: '上海', value: 252.33},
     {name: '福建', value: 5468.69},
     {name: '广西', value: 4522.73},
     {name: '广东', value: 2250.64},
     {name: '山西', value: 365.1},
     {name: '云南', value: 4391.67},
     {name: '海南', value: 5359.96},
     {name: '辽宁', value: 757.08},
     {name: '吉林', value: 1781.99},
     {name: '宁夏', value: 142.96},
     {name: '江西', value: 4850.62},
     {name: '青海', value: 10375.95},
     {name: '内蒙古', value: 1695.49},
     {name: '四川', value: 2843.31},
     {name: '陕西', value: 713.91},
     {name: '重庆', value: 1994.72},
     {name: '江苏', value: 928.58},
     {name: '贵州', value: 3009.46},
     {name: '北京', value: 161.6},
     {name: '新疆', value: 4596.05},
     {name: '浙江', value: 2378.11},
     {name: '山东', value: 222.59},
     {name: '甘肃', value: 646.45},
     {name: '河南', value: 354.83},
     {name: '黑龙江', value: 2217.05},
     {name: '河北', value: 279.69},
     {name: '湖南', value: 3229.11},
     {name: '安徽', value: 2018.15},
	 {name: '天津', value: 121.58},
     {name: '湖北', value: 2552.61}
];
var data17 = [
     {name: '西藏', value: 142311.3},
     {name: '上海', value: 140.56},
     {name: '福建', value: 2711.88},
     {name: '广西', value: 4912.06},
     {name: '广东', value: 1611.87},
     {name: '山西', value: 352.65},
     {name: '云南', value: 4602.41},
     {name: '海南', value: 4165.74},
     {name: '辽宁', value: 425.98},
     {name: '吉林', value: 1447.33},
     {name: '宁夏', value: 159.19},
     {name: '江西', value: 3592.47},
     {name: '青海', value: 13188.86},
     {name: '内蒙古', value: 1227.54},
     {name: '四川', value: 2978.87},
     {name: '陕西', value: 1174.48},
     {name: '重庆', value: 2142.92},
     {name: '江苏', value: 490.27},
     {name: '贵州', value: 2947.44},
     {name: '北京', value: 137.21},
     {name: '新疆', value: 4206.41},
     {name: '浙江', value: 1592.07},
     {name: '山东', value: 226.14},
     {name: '甘肃', value: 912.54},
     {name: '河南', value: 443.25},
     {name: '黑龙江', value: 1957.06},
     {name: '河北', value: 184.53},
     {name: '湖南', value: 2795.46},
     {name: '安徽', value: 1260.83},
	 {name: '天津', value: 83.36},
     {name: '湖北', value: 2118.94}
];
var data18 = [
     {name: '西藏', value: 136804.7},
     {name: '上海', value: 159.85},
     {name: '福建', value: 1982.93},
     {name: '广西', value: 3732.55},
     {name: '广东', value: 1683.41},
     {name: '山西', value: 328.57},
     {name: '云南', value: 4582.32},
     {name: '海南', value: 4495.7},
     {name: '辽宁', value: 539.41},
     {name: '吉林', value: 1775.32},
     {name: '宁夏', value: 214.6},
     {name: '江西', value: 2479.18},
     {name: '青海', value: 16018.32},
     {name: '内蒙古', value: 1823.03},
     {name: '四川', value: 3548.16},
     {name: '陕西', value: 964.8},
     {name: '重庆', value: 1697.22},
     {name: '江苏', value: 470.64},
     {name: '贵州', value: 2726.18},
     {name: '北京', value: 164.17},
     {name: '新疆', value: 3482.56},
     {name: '浙江', value: 1520.45},
     {name: '山东', value: 342.4},
     {name: '甘肃', value: 1266.58},
     {name: '河南', value: 354.62},
     {name: '黑龙江', value: 2675.06},
     {name: '河北', value: 217.7},
     {name: '湖南', value: 1952.01},
     {name: '安徽', value: 1328.88},
	 {name: '天津', value: 112.93},
     {name: '湖北', value: 1450.21}
];
var data19 = [
     {name: '西藏', value: 129407.19},
     {name: '上海', value: 199.09},
     {name: '福建', value: 3446.8},
     {name: '广西', value: 4258.75},
     {name: '广东', value: 1808.89},
     {name: '山西', value: 261.31},
     {name: '云南', value: 3166.39},
     {name: '海南', value: 2685.47},
     {name: '辽宁', value: 587.76},
     {name: '吉林', value: 1876.18},
     {name: '宁夏', value: 182.21},
     {name: '江西', value: 4405.41},
     {name: '青海', value: 15182.49},
     {name: '内蒙古', value: 1765.47},
     {name: '四川', value: 3288.94},
     {name: '陕西', value: 1279.84},
     {name: '重庆', value: 1600.06},
     {name: '江苏', value: 287.45},
     {name: '贵州', value: 3092.9},
     {name: '北京', value: 114.21},
     {name: '新疆', value: 3473.45},
     {name: '浙江', value: 2281},
     {name: '山东', value: 194.06},
     {name: '甘肃', value: 1233.54},
     {name: '河南', value: 175.21},
     {name: '黑龙江', value: 4017.54},
     {name: '河北', value: 149.85},
     {name: '湖南', value: 3037.27},
     {name: '安徽', value: 850.91},
	 {name: '天津', value: 51.89},
     {name: '湖北', value: 1036.31}
];
var data20 = [
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
		setInterval(() => {
			dt = new Date();
			var s=dt.getSeconds();
			
			var newDatas = function(s){
			    if( s >= 57 ){
			     return convertData(data21);
			    }else if( s >= 54 ){
			     return convertData(data20);
			    }else if( s >= 51 ){
			     return convertData(data19);
			    }else if( s >= 48 ){
			     return convertData(data18);
			    }else if( s >= 45 ){
			     return convertData(data17);
			    }else if( s >= 42 ){
			     return convertData(data16);
			    }else if( s >= 39 ){
			     return convertData(data15);
			    }else if( s >= 36 ){
			     return convertData(data14);
			    }else if( s >= 33 ){
			     return convertData(data13);
			    }else if( s >= 30 ){
			     return convertData(data12);
			    }else if( s >= 27 ){
			     return convertData(data21);
			    }else if( s >= 24 ){
			     return convertData(data20);
			    }else if( s >= 21 ){
			     return convertData(data19);
			    }else if( s >= 18 ){
			     return convertData(data18);
			    }else if( s >= 15 ){
			     return convertData(data17);
			    }else if( s >= 12 ){
			     return convertData(data16);
			    }else if( s >= 9 ){
			     return convertData(data15);
			    }else if( s >= 6 ){
			     return convertData(data14);
			    }else if( s >= 3 ){
			     return convertData(data13);
			    }else{
			     return convertData(data12);
			    };
			 };
			 
		let newData = newDatas(s);
		myChart.setOption({
		          series: [{
		              data: newData,
		          }]
		      });
			  
		  }, 3000);
		
		
		
		
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }


})