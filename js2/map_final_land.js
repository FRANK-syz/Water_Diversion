
$(function () {
    map();
    function map() {
		
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('map'));
		
		
		
var data21 = [
     {name: '西藏', value: 38.60431},
     {name: '上海', value: 77.65467},
     {name: '福建', value: 68.76141},
     {name: '广西', value: 73.52496},
     {name: '广东', value: 77.78605},
     {name: '山西', value: 13.00182},
     {name: '云南', value: 47.12764},
     {name: '海南', value: 117.0525},
     {name: '辽宁', value: 32.45319},
     {name: '吉林', value: 21.53386},
     {name: '宁夏', value: 1.761529},
     {name: '江西', value: 92.96261},
     {name: '青海', value: 12.1345},
     {name: '内蒙古', value: 7.305536},
     {name: '四川', value: 63.91688},
     {name: '陕西', value: 41.87919},
     {name: '重庆', value: 97.44644},
     {name: '江苏', value: 50.92334},
     {name: '贵州', value: 68.28043},
     {name: '北京', value: 35.34525},
     {name: '新疆', value: 4.62019},
     {name: '浙江', value: 138.4778},
     {name: '山东', value: 33.59599},
     {name: '甘肃', value: 6.396919},
     {name: '河南', value: 42.68547},
     {name: '黑龙江', value: 21.97627},
     {name: '河北', value: 19.10826},
     {name: '湖南', value: 92.43264},
     {name: '安徽', value: 66.14748},
	 {name: '天津', value: 31.87294},
     {name: '湖北', value: 67.69249}
];
var data20 = [
     {name: '西藏', value: 40.25394},
     {name: '上海', value: 84.42604},
     {name: '福建', value: 68.90642},
     {name: '广西', value: 100.8893},
     {name: '广东', value: 103.5704},
     {name: '山西', value: 7.204471},
     {name: '云南', value: 52.47682},
     {name: '海南', value: 90.32508},
     {name: '辽宁', value: 25.185},
     {name: '吉林', value: 27.48944},
     {name: '宁夏', value: 2.083529},
     {name: '江西', value: 110.3739},
     {name: '青海', value: 14.57956},
     {name: '内蒙古', value: 3.904189},
     {name: '四川', value: 70.75333},
     {name: '陕西', value: 20.61291},
     {name: '重庆', value: 99.53606},
     {name: '江苏', value: 55.25508},
     {name: '贵州', value: 83.1202},
     {name: '北京', value: 14.87614},
     {name: '新疆', value: 4.574502},
     {name: '浙江', value: 105.7198},
     {name: '山东', value: 24.00262},
     {name: '甘肃', value: 9.354635},
     {name: '河南', value: 25.30656},
     {name: '黑龙江', value: 26.08384},
     {name: '河北', value: 7.423099},
     {name: '湖南', value: 109.3798},
     {name: '安徽', value: 95.88502},
	 {name: '天津', value: 10.65101},
     {name: '湖北', value: 99.91589}
];
var data19 = [
     {name: '西藏', value: 39.37483},
     {name: '上海', value: 69.58655},
     {name: '福建', value: 123.611},
     {name: '广西', value: 100.4266},
     {name: '广东', value: 131.7369},
     {name: '山西', value: 6.085026},
     {name: '云南', value: 44.73596},
     {name: '海南', value: 86.45303},
     {name: '辽宁', value: 16.23611},
     {name: '吉林', value: 23.73321},
     {name: '宁夏', value: 2.386588},
     {name: '江西', value: 134.3397},
     {name: '青海', value: 13.24537},
     {name: '内蒙古', value: 3.470304},
     {name: '四川', value: 60.07903},
     {name: '陕西', value: 24.33169},
     {name: '重庆', value: 64.64847},
     {name: '江苏', value: 23.56018},
     {name: '贵州', value: 69.88203},
     {name: '北京', value: 14.18423},
     {name: '新疆', value: 4.969132},
     {name: '浙江', value: 136.0887},
     {name: '山东', value: 12.48418},
     {name: '甘肃', value: 7.472244},
     {name: '河南', value: 10.44221},
     {name: '黑龙江', value: 27.76471},
     {name: '河北', value: 5.758863},
     {name: '湖南', value: 108.3164},
     {name: '安徽', value: 40.43137},
	 {name: '天津', value: 6.486703},
     {name: '湖北', value: 34.94522}
];
var data18 = [
     {name: '西藏', value: 40.78718},
     {name: '上海', value: 55.75577},
     {name: '福建', value: 70.55589},
     {name: '广西', value: 87.35025},
     {name: '广东', value: 120.7111},
     {name: '山西', value: 7.623481},
     {name: '云南', value: 64.35644},
     {name: '海南', value: 143.266},
     {name: '辽宁', value: 14.92961},
     {name: '吉林', value: 22.56554},
     {name: '宁夏', value: 2.754046},
     {name: '江西', value: 75.2436},
     {name: '青海', value: 13.85915},
     {name: '内蒙古', value: 3.575676},
     {name: '四川', value: 64.53103},
     {name: '陕西', value: 18.24508},
     {name: '重庆', value: 68.04118},
     {name: '江苏', value: 38.47722},
     {name: '贵州', value: 61.22967},
     {name: '北京', value: 21.10336},
     {name: '新疆', value: 4.904598},
     {name: '浙江', value: 89.28407},
     {name: '山东', value: 21.95603},
     {name: '甘肃', value: 7.880363},
     {name: '河南', value: 21.04545},
     {name: '黑龙江', value: 18.57962},
     {name: '河北', value: 8.326251},
     {name: '湖南', value: 69.3219},
     {name: '安徽', value: 62.59036},
	 {name: '天津', value: 14.09457},
     {name: '湖北', value: 48.79918}
];
var data17 = [
     {name: '西藏', value: 41.5901},
     {name: '上海', value: 48.98439},
     {name: '福建', value: 95.66962},
     {name: '广西', value: 113.4122},
     {name: '广东', value: 113.8},
     {name: '山西', value: 8.142553},
     {name: '云南', value: 64.24269},
     {name: '海南', value: 131.547},
     {name: '辽宁', value: 11.81557},
     {name: '吉林', value: 18.49511},
     {name: '宁夏', value: 2.039964},
     {name: '江西', value: 108.3767},
     {name: '青海', value: 11.32044},
     {name: '内蒙古', value: 2.401088},
     {name: '四川', value: 53.9201},
     {name: '陕西', value: 22.0621},
     {name: '重庆', value: 85.20074},
     {name: '江苏', value: 39.95164},
     {name: '贵州', value: 65.7842},
     {name: '北京', value: 17.18252},
     {name: '新疆', value: 5.817214},
     {name: '浙江', value: 92.19842},
     {name: '山东', value: 14.42843},
     {name: '甘肃', value: 6.353356},
     {name: '河南', value: 26.20461},
     {name: '黑龙江', value: 13.63987},
     {name: '河北', value: 7.017188},
     {name: '湖南', value: 98.72009},
     {name: '安徽', value: 58.77862},
	 {name: '天津', value: 10.41076},
     {name: '湖北', value: 71.109}
];
var data16 = [
     {name: '西藏', value: 40.64708},
     {name: '上海', value: 87.88377},
     {name: '福建', value: 191.1399},
     {name: '广西', value: 106.5139},
     {name: '广东', value: 156.3428},
     {name: '山西', value: 8.386454},
     {name: '云南', value: 60.92935},
     {name: '海南', value: 167.869},
     {name: '辽宁', value: 21.03083},
     {name: '吉林', value: 22.92194},
     {name: '宁夏', value: 1.894117},
     {name: '江西', value: 145.4387},
     {name: '青海', value: 8.827844},
     {name: '内蒙古', value: 3.304498},
     {name: '四川', value: 51.16192},
     {name: '陕西', value: 13.33748},
     {name: '重庆', value: 76.43082},
     {name: '江苏', value: 75.41901},
     {name: '贵州', value: 66.69761},
     {name: '北京', value: 20.23847},
     {name: '新疆', value: 6.244396},
     {name: '浙江', value: 136.1402},
     {name: '山东', value: 14.08947},
     {name: '甘肃', value: 4.712397},
     {name: '河南', value: 20.89061},
     {name: '黑龙江', value: 15.49893},
     {name: '河北', value: 10.56891},
     {name: '湖南', value: 113.3908},
     {name: '安徽', value: 93.249},
	 {name: '天津', value: 15.13564},
     {name: '湖北', value: 85.29891}
];
var data15 = [
     {name: '西藏', value: 33.73685},
     {name: '上海', value: 92.34999},
     {name: '福建', value: 120.1671},
     {name: '广西', value: 116.0981},
     {name: '广东', value: 126.1826},
     {name: '山西', value: 5.878648},
     {name: '云南', value: 54.48349},
     {name: '海南', value: 67.91514},
     {name: '辽宁', value: 11.35259},
     {name: '吉林', value: 15.53608},
     {name: '宁夏', value: 1.742588},
     {name: '江西', value: 131.0395},
     {name: '青海', value: 8.490694},
     {name: '内蒙古', value: 4.160646},
     {name: '四川', value: 48.5305},
     {name: '陕西', value: 16.37832},
     {name: '重庆', value: 56.84678},
     {name: '江苏', value: 59.19025},
     {name: '贵州', value: 72.17806},
     {name: '北京', value: 16.37832},
     {name: '新疆', value: 5.312933},
     {name: '浙江', value: 147.3239},
     {name: '山东', value: 10.77016},
     {name: '甘肃', value: 3.778539},
     {name: '河南', value: 17.78768},
     {name: '黑龙江', value: 14.95518},
     {name: '河北', value: 6.854823},
     {name: '湖南', value: 99.07627},
     {name: '安徽', value: 68.45399},
	 {name: '天津', value: 10.25059},
     {name: '湖北', value: 57.83016}
];
var data14 = [
     {name: '西藏', value: 38.6691},
     {name: '上海', value: 67.92983},
     {name: '福建', value: 110.5348},
     {name: '广西', value: 94.97849},
     {name: '广东', value: 108.5705},
     {name: '山西', value: 6.942433},
     {name: '云南', value: 50.36019},
     {name: '海南', value: 131.4134},
     {name: '辽宁', value: 9.255216},
     {name: '吉林', value: 14.35106},
     {name: '宁夏', value: 1.907376},
     {name: '江西', value: 106.8517},
     {name: '青海', value: 11.43802},
     {name: '内蒙古', value: 4.166767},
     {name: '四川', value: 55.89935},
     {name: '陕西', value: 17.27437},
     {name: '重庆', value: 83.40055},
     {name: '江苏', value: 40.60648},
     {name: '贵州', value: 75.89551},
     {name: '北京', value: 12.46021},
     {name: '新疆', value: 4.151489},
     {name: '浙江', value: 116.7644},
     {name: '山东', value: 9.493602},
     {name: '甘肃', value: 4.548462},
     {name: '河南', value: 17.54985},
     {name: '黑龙江', value: 17.34771},
     {name: '河北', value: 5.38644},
     {name: '湖南', value: 92.88794},
     {name: '安徽', value: 58.29785},
	 {name: '天津', value: 9.10541},
     {name: '湖北', value: 52.06138}
];
var data13 = [
     {name: '西藏', value: 38.6642},
     {name: '上海', value: 40.38331},
     {name: '福建', value: 104.3973},
     {name: '广西', value: 98.14762},
     {name: '广东', value: 144.1558},
     {name: '山西', value: 7.914286},
     {name: '云南', value: 49.7786},
     {name: '海南', value: 172.0528},
     {name: '辽宁', value: 29.37531},
     {name: '吉林', value: 28.4836},
     {name: '宁夏', value: 2.159294},
     {name: '江西', value: 93.24352},
     {name: '青海', value: 9.302014},
     {name: '内蒙古', value: 7.436554},
     {name: '四川', value: 53.98939},
     {name: '陕西', value: 17.37949},
     {name: '重庆', value: 61.56595},
     {name: '江苏', value: 28.83046},
     {name: '贵州', value: 47.51227},
     {name: '北京', value: 14.30531},
     {name: '新疆', value: 5.459649},
     {name: '浙江', value: 95.90984},
     {name: '山东', value: 18.65591},
     {name: '甘肃', value: 6.165346},
     {name: '河南', value: 13.19645},
     {name: '黑龙江', value: 26.07796},
     {name: '河北', value: 8.92294},
     {name: '湖南', value: 81.66294},
     {name: '安徽', value: 43.85294},
	 {name: '天津', value: 11.72412},
     {name: '湖北', value: 44.99261}
];
var data12 = [
     {name: '西藏', value: 36.74322},
     {name: '上海', value: 48.84032},
     {name: '福建', value: 136.9827},
     {name: '广西', value: 98.24637},
     {name: '广东', value: 139.8136},
     {name: '山西', value: 6.629114},
     {name: '云南', value: 49.2851},
     {name: '海南', value: 124.8343},
     {name: '辽宁', value: 34.71103},
     {name: '吉林', value: 21.59342},
     {name: '宁夏', value: 2.178235},
     {name: '江西', value: 142.3781},
     {name: '青海', value: 12.89842},
     {name: '内蒙古', value: 3.953388},
     {name: '四川', value: 63.21444},
     {name: '陕西', value: 19.18288},
     {name: '重庆', value: 61.89562},
     {name: '江苏', value: 37.96168},
     {name: '贵州', value: 60.93688},
     {name: '北京', value: 22.77549},
     {name: '新疆', value: 5.143488},
     {name: '浙江', value: 149.816},
     {name: '山东', value: 17.54308},
     {name: '甘肃', value: 6.120637},
     {name: '河南', value: 16.44617},
     {name: '黑龙江', value: 15.45687},
     {name: '河北', value: 11.95053},
     {name: '湖南', value: 102.6712},
     {name: '安徽', value: 52.49562},
	 {name: '天津', value: 26.37926},
     {name: '湖北', value: 46.34384}
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
    '浙江':[120.19,29],
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
				if(val[2]>120){
					return 50;
				}else if(val[2]>80){
				return 40;
				}
				else if(val[2]>15){
				return val[2]/2;	
				}
				else if(val[2]>12){
				return val[2]/1.5	
				}
				else{
					return 5;}
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