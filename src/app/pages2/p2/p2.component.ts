import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-p2',
  templateUrl: './p2.component.html',
  styleUrls: ['./p2.component.css']
})
export class P2Component implements OnInit {
  option1 = {};
  option2 = {};
  option3 = {};
  option4 = {};
  option5 = {};
  option6 = {};
  option7 = {};
  option8 = {};
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
        data: ['实际当季同比']
      },
      grid: {
        top: '15%',
        left: '2%',
        right: '2%',
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
            interval: 'auto',
            rotate: '45'
          },
          axisTick: {
            show: false
          },
          // tslint:disable-next-line:max-line-length
          data: ['2015-03-31', '2015-06-30', '2015-09-30', '2015-12-31', '2016-03-31', '2016-06-30', '2016-09-30', '2016-12-31', '2017-03-31', '2017-06-30', '2017-09-30', '2017-12-31', '2018-03-31', '2018-06-30', '2018-09-30', '2018-12-31', '2019-03-31', '2019-06-30', '2019-09-30', '2019-12-31']
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: '单位：%',
          nameTextStyle: {
            padding: [0, 0, 0, 0]    // 四个数字分别为上右下左与原位置距离
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
          name: '实际当季同比',
          type: 'bar',
          barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [10.46, 2.06, 1.037862, -0.7743, 9.1, 6.898038, 5.30785, 8.746644, 4.401914, 3.06, 0.76, -3.38, 3.92, 3.62, 4.65, 3.45, 7.92, 6.39, 7.45, 6.84],
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
    this.option2 = {
      color: ['#3398DB', '#ED7F04', '#C8FF71'],
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
        bottom: 0,
        left: 'center',
        data: ['硅锰价格指数:辽宁地区', '高碳铬铁价格指数:辽宁地区', '焦炭价格指数:东北地区']
      },
      grid: {
        top: '15%',
        left: '2%',
        right: '2%',
        bottom: '16%',
        containLabel: true
      },
      xAxis:  {
        type: 'category',
        // 坐标轴
        axisLine: {
          show: false
        },
        axisLabel: {
          interval: 'auto',
          rotate: '45'
        },
        axisTick: {
          show: false
        },
        // tslint:disable-next-line:max-line-length
        data: ['2019-10-26', '2019-11-02', '2019-11-09', '2019-11-16', '2019-11-23', '2019-11-30', '2019-12-07', '2019-12-14', '2019-12-21', '2019-12-28', '2020-01-04', '2020-01-11', '2020-01-18', '2020-01-25', '2020-02-08', '2020-02-15', '2020-02-22', '2020-02-29', '2020-03-07', '2020-03-14', '2020-03-21', '2020-03-28', '2020-04-04', '2020-04-11', '2020-04-18', '2020-04-25']
      },
      yAxis: [
        {
          type: 'value',
          scale: true,
          name: '单位：元/吨',
          nameTextStyle: {
            padding: [0, 0, 0, -25]    // 四个数字分别为上右下左与原位置距离
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
          name: '单位：元/吨',
          // nameTextStyle: {
          //   padding: [0, 0, 0, 10]    // 四个数字分别为上右下左与原位置距离
          // },
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
          name:  '硅锰价格指数:辽宁地区',
          type: 'line',
          smooth: true,
          // tslint:disable-next-line:max-line-length
          data: [6875, 6570, 6260, 5940, 5960, 5975, 5965, 5970, 6040, 6275, 6493.75, 6545, 6460, 6450, 6990, 6930, 6635, 6420, 6230, 6070, 6125, 6330, 6955, 6881.25, 6950, 6975]
        },
        {
          name: '高碳铬铁价格指数:辽宁地区',
          type: 'line',
          smooth: true,
          // tslint:disable-next-line:max-line-length
          data: [6650, 6600, 6400, 6360, 6350, 6230, 6200, 6200, 6200, 6200, 6200, 6200, 6200, 6200, 6200, 6200, 6200, 6160, 6100, 5980, 5900, 5900, 5900, 5900, 5930, 6000]
        },
        {
          name: '焦炭价格指数:东北地区',
          type: 'line',
          smooth: true,
          yAxisIndex: 1,
          // tslint:disable-next-line:max-line-length
          data: [1826, 1826, 1785.2, 1775, 1775, 1775, 1808, 1824.8, 1859, 1869.2, 1910, 1910, 1910, 1910, 1910, 1910, 1910, 1881.8, 1818.2, 1769.6, 1709.4, 1707, 1691.4, 1656, 1656, 1656]
        }
      ]
    };
    this.option3 = {
      color: ['#FFC098'],
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
        data: ['高炉开工率(163家):全国']
      },
      grid: {
        top: '15%',
        left: '2%',
        right: '2%',
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
            interval: 'auto',
            rotate: '45'
          },
          axisTick: {
            show: false
          },
          // tslint:disable-next-line:max-line-length
          data: ['2019-10-25', '2019-11-01', '2019-11-08', '2019-11-15', '2019-11-22', '2019-11-29', '2019-12-06', '2019-12-13', '2019-12-20', '2019-12-27', '2020-01-03', '2020-01-10', '2020-01-17', '2020-01-23', '2020-02-07', '2020-02-14', '2020-02-21', '2020-02-28', '2020-03-06', '2020-03-13', '2020-03-20', '2020-03-27', '2020-04-03', '2020-04-10']
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: '单位：%',
          nameTextStyle: {
            padding: [0, 0, 0, 0]    // 四个数字分别为上右下左与原位置距离
          },
          scale: 'auto',
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
          name: '高炉开工率(163家):全国',
          type: 'bar',
          barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [63.54, 64.92, 64.23, 66.02, 65.33, 65.88, 66.85, 65.88, 65.75, 65.33, 66.71, 66.57, 66.71, 66.85, 64.09, 62.71, 61.88, 62.85, 63.54, 64.5, 65.06, 65.88, 66.99, 68.09],
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
      color: ['#3398DB', '#F2F21E'],
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
        data: ['产量:挖掘机:当月同比', '产量:汽车:累计同比']
      },
      grid: {
        top: '15%',
        left: '2%',
        right: '2%',
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
            interval: 'auto',
            rotate: '45'
          },
          axisTick: {
            show: false
          },
          // tslint:disable-next-line:max-line-length
          data: ['2019-03-31', '2019-04-30', '2019-05-31', '2019-06-30', '2019-07-31', '2019-08-31', '2019-09-30', '2019-10-31', '2019-11-30', '2019-12-31']
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: '单位：%',
          nameTextStyle: {
            padding: [0, 0, 0, 0]    // 四个数字分别为上右下左与原位置距离
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
          name: '产量:挖掘机:当月同比',
          type: 'bar',
          barWidth: '20%',
          // tslint:disable-next-line:max-line-length
          data: [27.5, 20.6, -4.4, -12, -22.7, 6.8, 18.1, 23.1, 17, 13],
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
        },
        {
          name: '产量:汽车:累计同比',
          type: 'bar',
          barWidth: '20%',
          // tslint:disable-next-line:max-line-length
          data: [-15.1, -10.4, -11.8, -14.1, -14.2, -12.8, -12.5, -12, -11.1, -9.6],
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
    this.option5 = {
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
        data: ['中国钢材产量同比增长']
      },
      grid: {
        top: '15%',
        left: '2%',
        right: '2%',
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
            interval: 'auto',
            rotate: '45'
          },
          axisTick: {
            show: false
          },
          // tslint:disable-next-line:max-line-length
          data: ['2018-3', '2018-4', '2018-5', '2018-6', '2018-7', '2018-8', '2018-9', '2018-10', '2018-11', '2018-12', '2019-3', '2019-4', '2019-5', '2019-6', '2019-7', '2019-8', '2019-9', '2019-10', '2019-11', '2019-12', '2020-3']
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: '单位：%',
          nameTextStyle: {
            padding: [0, 0, 0, 0]    // 四个数字分别为上右下左与原位置距离
          },
          scale: 'auto',
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
          name: '中国钢材产量同比增长',
          type: 'bar',
          barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [4.2, 8.5, 10.8, 7.2, 8.0, 6.4, 9.8, 11.5, 11.3, 9.1, 11.4, 11.5, 11.5, 12.6, 9.6, 9.8, 6.9, 3.5, 10.4, 11.3, -0.1],
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
      color: ['#3398DB', '#FFACC2'],
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
            // result += isNaN(item.value.toFixed(2)) ? 0 : item.value.toFixed(2);
            result += isNaN(item.value) ? 0 : item.value + '%';
          });
          return result;
        }
      },
      legend: {
        show: true,
        bottom: 6,
        left: 'center',
        data: ['产量:家用电冰箱:当月同比', '产量:冰柜:当月同比']
      },
      grid: {
        top: '15%',
        left: '2%',
        right: '2%',
        bottom: '13%',
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
            interval: 'auto',
            // rotate: '45'
          },
          axisTick: {
            show: false
          },
          // tslint:disable-next-line:max-line-length
          data: ['2019-03-31', '2019-04-30', '2019-05-31', '2019-06-30', '2019-07-31', '2019-08-31', '2019-09-30', '2019-10-31', '2019-11-30', '2019-12-31']
        }
      ],
      xAxis: [
        {
          type: 'value',
          // name: '单位：%',
          // nameTextStyle: {
          //   padding: [0, 0, 0, 0]    // 四个数字分别为上右下左与原位置距离
          // },
          // 坐标轴
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            formatter(value) {
              return value + '%';
            }
          }
        }
      ],
      series: [
        {
          name: '产量:家用电冰箱:当月同比',
          type: 'bar',
          barWidth: '20%',
          // tslint:disable-next-line:max-line-length
          data: [1.9, 2.1, 0.6, 2.8, 9, -5.2, 3.9, 3, 7.7, 21.9],
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
        },
        {
          name: '产量:冰柜:当月同比',
          type: 'bar',
          barWidth: '20%',
          // tslint:disable-next-line:max-line-length
          data: [7.1, 2.7, 10.5, 5.2, 9.5, 12.1, 13.5, 25.4, 16.1, 31.2],
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
    this.option7 = {
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
        data: ['中国铁矿石价格指数:周', '中国钢铁价格指数:周']
      },
      grid: {
        top: '15%',
        left: '2%',
        right: '2%',
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
          interval: 'auto',
          rotate: '45'
        },
        axisTick: {
          show: false
        },
        // tslint:disable-next-line:max-line-length
        data: ['2019-11-02', '2019-11-09', '2019-11-16', '2019-11-23', '2019-11-30', '2019-12-07', '2019-12-14', '2019-12-21', '2019-12-28', '2020-01-04', '2020-01-11', '2020-01-18', '2020-02-08', '2020-02-15', '2020-02-22', '2020-02-29', '2020-03-07', '2020-03-14', '2020-03-21', '2020-03-28', '2020-04-04', '2020-04-11']
      },
      yAxis: [
        {
          type: 'value',
          scale: true,
          name: '单位：点',
          nameTextStyle: {
            padding: [0, 0, 0, -8]    // 四个数字分别为上右下左与原位置距离
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
          name: '单位：点',
          nameTextStyle: {
            padding: [0, 0, 0, 10]    // 四个数字分别为上右下左与原位置距离
          },
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
          name:  '中国铁矿石价格指数:周',
          type: 'line',
          smooth: true,
          // tslint:disable-next-line:max-line-length
          data: [317.302, 308.83000000000004, 301.63, 313.66799999999995, 321.086, 322.996, 336.032, 332.93399999999997, 331.0, 335.18, 341.32800000000003, 342.50999999999993, 300.582, 312.72799999999995, 327.368, 323.556, 325.316, 328.00600000000003, 330.786, 314.952, 306.63399999999996, 307.96000000000004]
        },
        {
          name: '中国钢铁价格指数:周',
          type: 'line',
          smooth: true,
          yAxisIndex: 1,
          // tslint:disable-next-line:max-line-length
          data: [108.17, 108.77, 110.28, 113.79, 113.37, 112.16, 112.24, 111.13, 110.13, 110.23, 110.01, 109.75, 106.33, 104.92, 103.89, 103.38, 102.98, 103.4, 104.34, 103.17, 100.78, 101.19]
        },
      ]
    };
    this.option8 = {
      color: ['#3398DB', '#FFC098'],
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
            // result += isNaN(item.value.toFixed(2)) ? 0 : item.value.toFixed(2);
            result += isNaN(item.value) ? 0 : item.value + '%';
          });
          return result;
        }
      },
      legend: {
        show: true,
        bottom: 6,
        left: 'center',
        data: ['进口数量:钢材:累计同比', '出口数量:钢材:累计同比']
      },
      grid: {
        top: '15%',
        left: '2%',
        right: '2%',
        bottom: '13%',
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
            interval: 'auto',
            // rotate: '45'
          },
          axisTick: {
            show: false
          },
          // tslint:disable-next-line:max-line-length
          data: ['2019-01-31', '2019-02-28', '2019-03-31', '2019-04-30', '2019-05-31', '2019-06-30', '2019-07-31', '2019-08-31', '2019-09-30', '2019-10-31', '2019-11-30', '2019-12-31', '2020-02-29', '2020-03-31']
        }
      ],
      xAxis: [
        {
          type: 'value',
          // name: '单位：%',
          // nameTextStyle: {
          //   padding: [0, 0, 0, 0]    // 四个数字分别为上右下左与原位置距离
          // },
          // 坐标轴
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            formatter(value) {
              return value + '%';
            }
          }
        }
      ],
      series: [
        {
          name: '进口数量:钢材:累计同比',
          type: 'bar',
          barWidth: '20%',
          // tslint:disable-next-line:max-line-length
          data: [-1, -9.9, -16.1, -13.4, -13.4, -12.7, -13.4, -12.8, -12.2, -11.9, -11, -6.5, 2.1, 9.7],
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
        },
        {
          name: '出口数量:钢材:累计同比',
          type: 'bar',
          barWidth: '20%',
          // tslint:disable-next-line:max-line-length
          data: [33.3, 12.9, 12.6, 8.3, 2.5, -2.6, -2.9, -4.4, -5, -5.8, -6.5, -7.3, -27, -16],
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
  }

}
