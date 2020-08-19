import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import * as echarts from 'echarts';
import * as $ from 'jquery';
@Component({
  selector: 'app-p1',
  templateUrl: './p1.component.html',
  styleUrls: ['./p1.component.css']
})
export class P1Component implements OnInit, AfterViewInit {
  @ViewChild('map', null) map: any;
  option1 = {};
  option3 = {};
  option4 = {};
  option5 = {};
  option6 = {};
  constructor() { }

  ngOnInit() {
    this.option1 = {
      color: ['#3398DB'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
          type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      legend: {
        show: true,
        bottom: 6,
        left: 'center',
        data: ['年用电量']
      },
      grid: {
        // top: '20%',
        left: '3%',
        right: '4%',
        bottom: '13%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          // 坐标轴
          axisLine: {
            show: false
          },
          axisLabel: {
            interval: '0',
            rotate: '45'
          },
          axisTick: {
            show: false
          },
          data: ['沈阳', '大连', '抚顺', '鞍山', '本溪', '营口', '铁岭', '丹东', '锦州', '辽阳', '阜新', '朝阳', '盘锦', '葫芦岛'],
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: '单位：亿千瓦时',
          nameTextStyle: {
            padding: [0, 0, 0, 30]    // 四个数字分别为上右下左与原位置距离
          },
          // 坐标轴
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          }
        }
      ],
      series: [
        {
          name: '年用电量',
          type: 'bar',
          barWidth: '60%',
          data: [2.7, 	11.8, 	19.8, 	73.1, 	66.3, 	37.0, 	0.6, 	4.3, 	2.9, 	15.8, 	0.7, 	18.7, 	0.0, 	0.1],
          itemStyle: {
            normal: {
              label: {
                show: true, // 开启显示
                position: 'top', // 在上方显示
                textStyle: { // 数值样式
                  color: 'black',
                  fontSize: 12
                }
              }
            }
          },
        }
      ]
    };
    this.option3 = {
      color: ['#3398DB'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
          type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      legend: {
        show: true,
        bottom: 6,
        left: 'center',
        data: ['钢材年产量']
      },
      grid: {
        // top: '20%',
        left: '3%',
        right: '4%',
        bottom: '13%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          // 坐标轴
          axisLine: {
            show: false
          },
          axisLabel: {
            interval: 'auto'
          },
          axisTick: {
            show: false
          },
          // tslint:disable-next-line:max-line-length
          data: [2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
        }
      ],
      yAxis: [
        {
          type: 'value',
          scale: true,
          name: '单位：万吨',
          nameTextStyle: {
            padding: [0, 0, 0, -30]    // 四个数字分别为上右下左与原位置距离
          },
          // 坐标轴
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
        }
      ],
      series: [
        {
          name: '钢材年产量',
          type: 'bar',
          barWidth: '60%',
          data: [4364.31, 4285.27,
                 4935.55, 5669.42, 5761.07, 5923.5, 6863, 6950.8, 6321.6, 5906.31, 6392.99, 6899.12, 7254.43],
          itemStyle: {
            normal: {
              label: {
                show: false, // 开启显示
                position: 'top', // 在上方显示
                textStyle: { // 数值样式
                  color: 'black',
                  fontSize: 12
                }
              }
            }
          },
        }
      ]
    };
    this.option6 = {
      color: ['#3398DB'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
          type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter(params) {
          let result = params[0].name;
          // tslint:disable-next-line:only-arrow-functions
          params.forEach(function(item) {
            result += '<br/>';
            // tslint:disable-next-line:max-line-length
            result += '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' + item.color + '"></span>';
            result += item.seriesName + '：';
            result += isNaN(item.value.toFixed(2)) ? 0 : item.value.toFixed(2);
          });
          return result;
        }
      },
      legend: {
        show: true,
        bottom: 6,
        left: 'center',
        data: ['单位产量耗电量']
      },
      grid: {
        // top: '20%',
        left: '3%',
        right: '4%',
        bottom: '13%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          // 坐标轴
          axisLine: {
            show: false
          },
          axisLabel: {
            interval: 'auto'
          },
          axisTick: {
            show: false
          },
          // tslint:disable-next-line:max-line-length
          data: [2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
        }
      ],
      yAxis: [
        {
          type: 'value',
          scale: true,
          name: '单位：千瓦/吨',
          // 坐标轴
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
        }
      ],
      series: [
        {
          name: '单位产量耗电量',
          type: 'bar',
          barWidth: '60%',
          data: [376.1757096, 380.4055814, 421.2350023, 426.9228666, 468.4484356, 446.4622076, 417.297269, 400.7417239,
                382.0563349, 414.1353594, 370.1768889, 369.2075951, 349.6504743],
          itemStyle: {
            normal: {
              label: {
                show: false, // 开启显示
                position: 'top', // 在上方显示
                textStyle: { // 数值样式
                  color: 'black',
                  fontSize: 12
                }
              }
            }
          },
        }
      ]
    };
    this.option4 = {
      color: ['#F2F21E', '#BDD2EF'],
      // title: {
      //   text: '堆叠区域图'
      // },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        show: true,
        bottom: 6,
        left: 'center',
        data: ['辽宁钢铁行业用电量', '辽宁第二产业用电量']
      },
      grid: {
        // top: '20%',
        left: '3%',
        right: '4%',
        bottom: '20%',
        containLabel: true
      },
      yAxis: [
        {
          type: 'category',
          // 坐标轴
          axisLine: {
            show: false
          },
          axisLabel: {
            interval: 'auto'
          },
          axisTick: {
            show: false
          },
          data: [2014, 2015, 2016, 2017, 2018, 2019]
        }
      ],
      xAxis: [
        {
          type: 'value',
          // scale: true,
          // name: '单位：千瓦时',
          // 坐标轴
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
        splitLine: {
            show: false
          }
        }
      ],
      series: [
        {
          name: '辽宁钢铁行业用电量',
          type: 'bar',
          stack: '总量',
          label: {
            show: true,
            position: 'insideRight',
            formatter(params) {
              return params.value + '%';
            }
          },
          data: [20, 21, 21, 23, 23, 24],
        },
        {
          name: '辽宁第二产业用电量',
          type: 'bar',
          stack: '总量',
          label: {
            show: true,
            position: 'insideRight',
            formatter(params) {
              return params.value + '%';
            }
          },
          data: [80, 79, 79, 77, 77, 76],
        }

      ]
    };

    // this.option4 = {
    //   // title: {
    //   //   text: '基础雷达图'
    //   // },
    //   tooltip: {},
    //   // legend: {
    //   //   data: ['辽宁第二产业用电量', '辽宁钢铁行业用电量']
    //   // },
    //   radar: {
    //     // shape: 'circle',
    //     name: {
    //       textStyle: {
    //         color: '#fff',
    //         backgroundColor: '#999',
    //         borderRadius: 3,
    //         padding: [2, 5]
    //       }
    //     },
    //     indicator: [
    //       { name: '2014', max: 114933889565.00},
    //       { name: '2015', max: 106575897169.00},
    //       { name: '2016', max: 106251615140.00},
    //       { name: '2017', max: 111758209763.00},
    //       { name: '2018', max: 120622859661.00},
    //       { name: '2019', max: 125894679536.00}
    //     ]
    //   },
    //   series: [{
    //     name: '第二产业 vs 钢铁行业',
    //     type: 'radar',
    //     // areaStyle: {normal: {}},
    //     data: [
    //       {
    //         value: [114933889565.00, 106575897169.00, 106251615140.00, 111758209763.00, 120622859661.00, 125894679536.00],
    //         name: '辽宁第二产业用电量'
    //       },
    //       {
    //         value: [27854755743, 24152073265, 24460118146, 23665371487, 25472075035, 25365148906],
    //         name: '辽宁钢铁行业用电量'
    //       }
    //     ]
    //   }]
    // };
    this.option5 = {
      color: ['#3398DB', '#ED7F04'],
      // color: ['#07c2d3',  '#99cc33'],
      // title: {
      //   // text: '辽宁省GDP发展趋势'
      // },
      tooltip : {
        trigger: 'axis',
        axisPointer : {
          type : 'shadow'
        }
      },
      legend: {
        show: true,
        bottom: 6,
        left: 'center',
        data: ['合同容量', '用户数量']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '13%',
        containLabel: true
      },
      xAxis:  {
        type: 'category',
        // 坐标轴
        axisLine: {
          show: false
        },
        axisLabel: {
          interval: '0',
          rotate: '45'
        },
        axisTick: {
          show: false
        },
        data: ['沈阳', '大连', '鞍山', '抚顺', '本溪', '丹东', '锦州', '营口', '阜新', '辽阳', '铁岭', '朝阳', '葫芦岛'],

  },
      yAxis: [
        {
          type: 'value',
          scale: true,
          name: '单位：万千伏安',
          nameTextStyle: {
            padding: [0, 0, 0, 20]    // 四个数字分别为上右下左与原位置距离
          },
          // 坐标轴
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          }
        },
        {
          type: 'value',
          scale: true,
          name: '单位：户',
          // 坐标轴
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false
          }
        },
      ],
      series: [
        {
          name:  '合同容量',
          type: 'bar',
          barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [12.52,	68.37,	406.91,	62.83,	326.41,	12.62,	10.45,	257.14, 2.44,	129.41, 12.83, 124.12, 4.4
          ]
        },
        {
          name: '用户数量',
          type: 'line',
          smooth: true,
          yAxisIndex: 1,
          // tslint:disable-next-line:max-line-length
          data: [20,	19,	190,	26,	60,	17,	9,	7,	12,	334, 19, 138, 29]
         },
      ]
    };
  }
  ngAfterViewInit(): void {
    const _this = this;
    const count = {沈阳市: [2.7],
      大连市: [11.8],
      鞍山市: [73.1],
      抚顺市: [19.8],
      本溪市: [66.3],
      丹东市: [4.3],
      锦州市: [2.9],
      营口市: [37.0],
      阜新市: [0.7],
      辽阳市: [15.8],
      盘锦市: [0.0],
      铁岭市: [0.6],
      朝阳市: [18.7],
      葫芦岛市: [0.1]};
    const citylist = ['沈阳市',
      '大连市',
      '鞍山市',
      '抚顺市',
      '本溪市',
      '丹东市',
      '锦州市',
      '营口市',
      '阜新市',
      '辽阳市',
      '盘锦市',
      '铁岭市',
      '朝阳市',
      '葫芦岛市'];
    const geoCoordMap = [];
    const data = [];
    const map: any = this.map.nativeElement;
    const liaoning = 'assets/map/json/province/liaoning.json';
    // tslint:disable-next-line:no-shadowed-variable
    const convertData = function(data) {
      const res = [];
      for (let i = 0; i < data.length; i++) {
        const geoCoord = geoCoordMap[i].cp;
        // var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
          res.push({
            name: data[i].name,
            value: geoCoord.concat(data[i].value)
          });
        }
      }
      console.log(res);
      return res;
    };

    echarts.extendsMap = function(id, opt) {
      // 实例
      const chart = echarts.init(map);

      let curGeoJson = {};



      const defaultOpt = {
        mapName: 'china',     // 地图展示
        goDown: false,        // 是否下钻
        bgColor: '#fff',   // 画布背景色
        activeArea: [],       // 区域高亮,同echarts配置项
        data: [],
      };
      if (opt) { opt = this.util.extend(defaultOpt, opt); }



      const option = {
        backgroundColor: '#fff',
        tooltip: {
          trigger: 'item',
          formatter(params) {
            let s = '';
            s += '年用电量: ' + params.value[2] + ' 亿千瓦时';
            return s;
          }
        },
        graphic: [],
        geo: {
          map: opt.mapName,
          roam: false,
          zoom: 1.3,
          label: {
            normal: {
              show: true,
              textStyle: {
                color: '#fff'
              }
            },
            emphasis: {
              textStyle: {
                color: '#fff'
              }
            }
          },
          itemStyle: {
              normal: {
                areaColor: '#3a7fd5',
                borderColor: '#0a53e9',//线
                shadowColor: '#092f8f',//外发光
                shadowBlur: 20
              },
              emphasis: {
                areaColor: '#0a2dae',//悬浮区背景
              }
          }
        },
        series: [
          {
            name: '点',
            type: 'scatter',
            coordinateSystem: 'geo',
            symbol: 'pin',
            symbolSize: [30, 30],
            label: {
              normal: {
                formatter: '{@[2]}',
                show: true,
                textStyle: {
                  color: '#fff',
                  fontSize: 9,
                }
              }
            },
            itemStyle: {
              normal: {
                color: '#FF86A6', // 标志气泡颜色
              }
            },
            zlevel: 1,
            data: convertData(data),
          }
        ]
    };
      chart.setOption(option);


      return chart;
    };

    $.getJSON(liaoning, function(geoJson) {
      echarts.registerMap('辽宁', geoJson);
      geoJson.features.forEach((feature, index) => {
        const properties = feature.properties;
        const cp = properties.cp;
        const name = properties.name;

        geoCoordMap.push({name, cp});
        // --------注意data是外界ajax请求返回数据，如果要看效果，则将接口修改一下不传入data，下方100为假数据------
        data.push({name, value: [count[name][0]]});
      });
      console.log(data);
      const myChart = echarts.extendsMap('chart-panel', {
        bgColor: '#fff', // 画布背景色
        mapName: '辽宁',    // 地图名
        goDown: false,       // 是否下钻
        data: [],

      });
    });
  }

}
