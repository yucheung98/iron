import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  option: {};
  option1: {};
  // tslint:disable-next-line:variable-name
  option_rate1: {};
  // tslint:disable-next-line:variable-name
  option_rate2: {};
  // tslint:disable-next-line:variable-name
  option_rate3: {};
  // tslint:disable-next-line:variable-name
  option_house: {};
  // tslint:disable-next-line:variable-name
  option_solid: {};
  // tslint:disable-next-line:variable-name
  option_yiled1: {};
  // tslint:disable-next-line:variable-name
  option_yiled2: {};
  // tslint:disable-next-line:max-line-length
  iron = [107.93, 108.17, 108.77, 110.28, 113.79, 113.37, 112.16, 112.24, 111.13, 110.23, 110.01, 109.75, 106.33, 104.90, 103.89, 103.38, 102.98, 103.40, 104.34, 103.17, 100.78, 101.19];
  // tslint:disable-next-line:max-line-length
  silicon = [6875.00, 6570.00, 6260.00, 5940.00, 5960.00, 5975.00, 5965.00, 5970.00, 6040.00, 6275.00, 6493.75, 6545.00, 6460.00, 6450.00, 6990.00, 6930.00, 6635.00, 6420.00, 6230.00, 6070.00, 6125.00, 6330.00, 6955.00, 6881.25, 6950.00, 6975.00];
  coke = [1826.00,
    1826.00,
    1785.20,
    1775.00,
    1775.00,
    1775.00,
    1808.00,
    1824.80,
    1859.00,
    1869.20,
    1910.00,
    1910.00,
    1910.00,
    1910.00,
    1910.00,
    1910.00,
    1910.00,
    1881.80,
    1818.20,
    1769.60,
    1709.40,
    1707.00,
    1691.40,
    1656.00,
    1656.00,
    1656.00
  ];
  carbon = [6650.00,
    6600.00,
    6400.00,
    6360.00,
    6350.00,
    6230.00,
    6200.00,
    6200.00,
    6200.00,
    6200.00,
    6200.00,
    6200.00,
    6200.00,
    6200.00,
    6200.00,
    6200.00,
    6200.00,
    6160.00,
    6100.00,
    5980.00,
    5900.00,
    5900.00,
    5900.00,
    5900.00,
    5930.00,
    6000.00
  ];
  ironstone = [317.30,
    308.83,
    301.63,
    313.67,
    321.09,
    323.00,
    336.03,
    332.93,
    331.00,
    335.18,
    341.33,
    342.51,
    345.27,
    300.58,
    312.73,
    327.37,
    323.56,
    325.32,
    328.01,
    330.79,
    314.95,
    306.63,
    307.96,
    313.00,
    314.45
  ];
  domestic = [330.62,
    329.32,
    323.34,
    319.18,
    319.32,
    320.99,
    320.52,
    322.25,
    322.42,
    322.14,
    321.87,
    323.99,
    325.48,
    323.17,
    317.60,
    320.49,
    324.12,
    324.65,
    323.90,
    321.01,
    320.44,
    319.44,
    315.65,
    311.67,
    311.75
  ];
  entrance = [314.79,
    304.95,
    297.53,
    317.09,
    321.42,
    323.38,
    338.96,
    334.96,
    332.62,
    337.65,
    345.00,
    346.01,
    349.01,
    296.31,
    311.81,
    328.67,
    323.45,
    325.44,
    328.78,
    332.63,
    313.91,
    304.21,
    306.51,
    313.25,
    314.96
  ];
  seriesColors = ['blue', 'yellow'];
  constructor() { }
  // 滑动栏
  showSideBarScroll = false; // 是否显示侧边栏滚动条
  showContentScroll = false; // 是否显示内容区滚动条

  mouseEnterContent(e) {// 鼠标进入内容区，执行的函数
    this.showContentScroll = true;
  }

  mouseLeaveContent(e) {// 鼠标离开内容区，执行的函数
    this.showContentScroll = false;
  }
  ngOnInit() {

    this.option_rate1 = {
      color: ['#05BA31', '#22A5FF', '#99cc33', '#5180F0'],
      title: {
        // text: '开工率'
      },
      tooltip : {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      legend: {
        data: ['163家', '年粗钢产量<=200万吨', '\n', '年粗钢产200-600万吨', '年粗钢产>=600万吨']
      },
      xAxis: {
        type: 'category',
        // name: '时间（周）',
        nameLocation: 'middle',
        nameGap: 30,
        // boundaryGap : false,
        // tslint:disable-next-line:max-line-length
        data: ['2019-10-25',
          '2019-11-01',
          '2019-11-08',
          '2019-11-15',
          '2019-11-22',
          '2019-11-29',
         ' 2019-12-06',
          '2019-12-13',
          '2019-12-20',
         ' 2019-12-27',
          '2020-01-03',
         ' 2020-01-10',
         ' 2020-01-17',
          '2020-01-23',
          '2020-02-07',
         ' 2020-02-14',
          '2020-02-21',
         ' 2020-02-28',
          '2020-03-06',
          '2020-03-13',
          '2020-03-20',
          '2020-03-27',
          '2020-04-03',
         ' 2020-04-10'
        ],
        axisLabel: {
          interval: 3
        },
      },
      yAxis: {
        type: 'value',
        name: '高炉开工率：全国（%）',
        nameLocation: 'middle',
        nameGap: 30,
        min: 40,
        max: 85,
        interval: 5,
        axisLabel: {
          interval: 1,
        },
        splitLine: {
          show: false
        }
      },
      grid: {
        left: '6%',
        right: '4%',
        bottom: '6%',
        containLabel: true
      },
      series: [
        {
          name: '163家',
          type: 'line',
          // tslint:disable-next-line:max-line-length
          data: [63.54,
            64.92,
            64.23,
            66.02,
            65.33,
            65.88,
            66.85,
            65.88,
            65.75,
            65.33,
            66.71,
            66.57,
            66.71,
            66.85,
            64.09,
            62.71,
            61.88,
            62.85,
            63.54,
            64.50,
            65.06,
            65.88,
            66.99,
            68.09],
          smooth: true
        },
        {
          name: '年粗钢产量<=200万吨',
          type: 'line',
          // tslint:disable-next-line:max-line-length
          data: [50.00,
            54.10,
            53.28,
            54.92,
            51.64,
            52.46,
            50.81,
            50.00,
            50.00,
            50.00,
            50.00,
            50.00,
            50.82,
            47.50,
            44.26,
            41.80,
            40.16,
            40.16,
            47.54,
            49.18,
            50.00,
            50.00,
            53.27,
            53.28

          ],
          smooth: true
        },
        {
          name: '年粗钢产200-600万吨',
          type: 'line',
          // tslint:disable-next-line:max-line-length
          data: [56.95,
            58.61,
            56.95,
            60.26,
            59.60,
            60.60,
            63.58,
            61.59,
            62.91,
            61.59,
            63.58,
            63.58,
            62.91,
            61.25,
            59.60,
            58.28,
            58.94,
            58.94,
            60.60,
            62.25,
            63.25,
            64.24,
            64.24,
            68.21],
          smooth: true
        },
        {
          name: '年粗钢产>=600万吨',
          type: 'line',
          // tslint:disable-next-line:max-line-length
          data: [75.67,
            75.67,
            76.00,
            76.33,
            76.67,
            76.67,
            76.67,
            76.67,
            75.00,
            75.33,
            76.67,
            76.33,
            77.00,
            76.77,
            76.67,
            75.67,
            75.67,
            75.67,
            73.00,
            73.00,
            73.00,
            74.00,
            74.00,
            74.00

          ],
          smooth: true
        }
      ]
    };
    this.option_rate2 = {
      color: ['#1e90ff', '#99cc33'],
      title: {
        // text: '进口数量'
      },
      tooltip : {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      legend: {
        // y: '20px',
        data: ['进口数量',  '\n',  '出口数量']
      },
      xAxis: {
        type: 'category',
        // name: '时间（月）',
        nameLocation: 'middle',
        nameGap: 30,
        // boundaryGap : false,
        // tslint:disable-next-line:max-line-length
        data: [
          '2019-01',
          '2019-02',
          '2019-03',
          '2019-04',
          '2019-05',
          '2019-06',
          '2019-07',
          '2019-08',
          '2019-09',
          '2019-10',
          '2019-11',
          '2019-12',
          '2020-02',
          '2020-03'
        ],
        axisLabel: {
          interval: 1
        },
      },
      yAxis: {
        type: 'value',
        name: '钢材:累计同比',
        nameLocation: 'middle',
        nameGap: 30,
        min: -30,
        max: 40,
        interval: 10,
        axisLabel: {
          interval: 1,
        },
        splitLine: {
          show: false
        }
      },
      grid: {
        left: '6%',
        right: '4%',
        bottom: '6%',
        containLabel: true
      },
      series: [
        {
          name: '进口数量',
          type: 'bar',
          // tslint:disable-next-line:max-line-length
          data: [-1.00,
          -9.90,
          -16.10,
          -13.40,
          -13.40,
          -12.70,
          -13.40,
          -12.80,
          -12.20,
          -11.90,
          -11.00,
          -6.50,
            2.10,
            9.70
          ],
          smooth: true
        },
        {
          name: '出口数量',
          type: 'bar',
          // tslint:disable-next-line:max-line-length
          data: [33.30,
            12.90,
            12.60,
            8.30,
            2.50,
            -2.60,
            -2.90,
            -4.40,
            -5.00,
            -5.80,
            -6.50,
            -7.30,
            -27.00,
            -16.00
          ],
          smooth: true
        },
      ]
    };
    this.option_rate3 = {
      color: ['#5180F0'],
      title: {
        // text: '钢材产量'
      },
      tooltip : {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      legend: {
        // y: '20px',
        data: [ '钢材产量同比增长(%)']
      },
      xAxis: {
        type: 'category',
        // name: '时间（月）',
        nameLocation: 'middle',
        nameGap: 30,
        // boundaryGap : false,
        // tslint:disable-next-line:max-line-length
        data: ['2018-3',
          '2018-4',
          '2018-5',
          '2018-6',
         ' 2018-7',
          '2018-8',
          '2018-9',
          '2018-10',
          '2018-11',
          '2018-12',
          '2019-3',
          '2019-4',
         ' 2019-5',
         ' 2019-6',
          '2019-7',
          '2019-8',
          '2019-9',
         ' 2019-10',
          '2019-11',
          '2019-12',
          '2020-3'

        ],
        axisLabel: {
          interval: 3
        },
      },
      yAxis: {
        type: 'value',
        name: '钢材产量同比(%)',
        nameLocation: 'middle',
        nameGap: 30,
        min: -2,
        max: 14,
        interval: 2,
        axisLabel: {
          interval: 1,
        },
        splitLine: {
          show: false
        }
      },
      grid: {
        left: '6%',
        right: '4%',
        bottom: '6%',
        containLabel: true
      },
      series: [
        {
          name: '钢材产量同比增长(%)',
          type: 'line',
          // tslint:disable-next-line:max-line-length
          data: [4.2,
            8.5,
            10.8,
            7.2,
            8,
            6.4,
            9.8,
            11.5,
            11.3,
            9.1,
            11.4,
            11.5,
            11.5,
            12.6,
            9.6,
            9.8,
            6.9,
            3.5,
            10.4,
            11.3,
            -0.1
          ],
          smooth: true
        },
      ]
    };

    this.option_house = {
      color: ['#1e90ff'],
      title: {
        // text: '钢材产量'
      },
      tooltip : {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      legend: {
        // y: '20px',
        data: ['房地产开发投资完成额:实际当季同比(%)']
      },
      xAxis: {
        type: 'category',
        // name: '时间（月）',
        nameLocation: 'middle',
        nameGap: 30,
        // boundaryGap : false,
        // tslint:disable-next-line:max-line-length
        data: ['2015-03',
         ' 2015-06',
          '2015-09',
          '2015-12',
         ' 2016-03',
          '2016-06',
          '2016-09',
          '2016-12',
          '2017-03',
          '2017-06',
         ' 2017-09',
          '2017-12',
          '2018-03',
          '2018-09',
          '2018-12',
          '2019-03',
          '2019-06',
          '2019-09',
          '2019-12'
        ],
        axisLabel: {
          interval: 3
        },
      },
      yAxis: {
        type: 'value',
        name: '房地产开发投资完成额(%)',
        nameLocation: 'middle',
        nameGap: 30,
        min: -5,
        max: 15,
        interval: 5,
        axisLabel: {
          interval: 1,
        },
        splitLine: {
          show: false
        }
      },
      grid: {
        left: '6%',
        right: '4%',
        bottom: '6%',
        containLabel: true
      },
      series: [
        {
          name: '房地产开发投资完成额:实际当季同比(%)',
          type: 'line',
          // tslint:disable-next-line:max-line-length
          data: [10.46,
            2.06,
            1.04,
            -0.77,
            9.10,
            6.90,
            5.31,
            8.75,
            4.40,
            3.06,
            0.76,
            -3.38,
            3.92,
            3.62,
            4.65,
            3.45,
            7.92,
            6.39,
            7.45,
            6.84
          ],
          smooth: true
        },
      ]
    };
    this.option_solid = {
      color: ['#22A5FF', '#05BA31'],
      title: {
        // text: '进口数量'
      },
      tooltip : {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      legend: {
        // y: '20px',
        data: ['设备工器具购置:累计同比',  '\n',  '建筑安装工程:累计同比']
      },
      xAxis: {
        type: 'category',
        // name: '时间（月）',
        nameLocation: 'middle',
        nameGap: 30,
        // boundaryGap : false,
        // tslint:disable-next-line:max-line-length
        data: ['2018-07',
          '2018-08',
          '2018-09',
          '2018-10',
          '2018-11',
          '2018-12',
          '2019-02',
          '2019-03',
          '2019-04',
          '2019-05',
          '2019-06',
          '2019-07',
          '2019-08',
          '2019-09',
          '2019-10',
          '2019-11',
          '2019-12',
          '2020-02',
          '2020-03'

        ],
        axisLabel: {
          interval: 3
        },
      },
      yAxis: {
        type: 'value',
        name: '固定资产投资完成额(%)',
        nameLocation: 'middle',
        nameGap: 30,
        min: -40,
        max: 10,
        interval: 10,
        axisLabel: {
          interval: 1,
        },
        splitLine: {
          show: false
        }
      },
      grid: {
        left: '6%',
        right: '4%',
        bottom: '6%',
        containLabel: true
      },
      series: [
        {
          name: '设备工器具购置:累计同比',
          type: 'line',
          // tslint:disable-next-line:max-line-length
          data: [1.40,
            0.80,
            1.00,
            0.50,
            2.90,
            2.60,
            0.30,
            -0.80,
            -1.40,
            -2.20,
            -1.90,
            -2.10,
            -1.20,
            -1.20,
            -0.50,
            -1.80,
            -0.90,
            -32.90,
            -27.20
          ],
          smooth: true
        },
        {
          name: '建筑安装工程:累计同比',
          type: 'line',
          // tslint:disable-next-line:max-line-length
          data: [3.00,
            2.90,
            2.90,
            3.40,
            3.20,
            3.60,
            5.40,
            5.60,
            5.50,
            5.40,
            5.60,
            5.60,
            5.00,
            5.10,
            4.70,
            5.00,
            5.40,
            -25.70,
            -17.60
          ],
          smooth: true
        },
      ]
    };
    this.option_yiled1 = {
      color: ['#05BA31', '#1e90ff', '#99cc33', '#5180F0'],
      title: {
        // text: '开工率'
      },
      tooltip : {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      legend: {
        // y: '250px',
        data: ['家用电冰箱',  '冰柜', '\n', '家用洗衣机', '微波炉']
      },
      xAxis: {
        type: 'category',
        // name: '时间（月）',
        nameLocation: 'middle',
        nameGap: 30,
        // boundaryGap : false,
        // tslint:disable-next-line:max-line-length
        data: ['2019-01',
          '2019-02',
          '2019-03',
          '2019-04',
          '2019-05',
          '2019-06',
          '2019-07',
          '2019-08',
          '2019-09',
          '2019-10',
          '2019-11',
          '2019-12',
          '2020-01',
          '2020-02',
          '2020-03'
        ],
        axisLabel: {
          interval: 3
        },
      },
      yAxis: {
        type: 'value',
        name: '产量:当月同比（%）',
        nameLocation: 'middle',
        nameGap: 30,
        min: -60,
        max: 40,
        interval: 20,
        axisLabel: {
          interval: 1,
        },
        splitLine: {
          show: false
        }
      },
      grid: {
        left: '6%',
        right: '4%',
        bottom: '6%',
        containLabel: true
      },
      series: [
        {
          name: '家用电冰箱',
          type: 'bar',
          // tslint:disable-next-line:max-line-length
          data: [0,
            0,
            1.90,
            2.10,
            0.60,
            2.80,
            9.00,
            -5.20,
            3.90,
            3.00,
            7.70,
            21.90,
            0,
            0,
            4.00
          ],
          smooth: true
        },
        {
          name: '冰柜',
          type: 'bar',
          // tslint:disable-next-line:max-line-length
          data: [7.90,
            4.00,
            7.10,
            2.70,
            10.50,
            5.20,
            9.50,
            12.10,
            13.50,
            25.40,
            16.10,
            31.20,
            -22.60,
            -43.10,
            0
          ],
          smooth: true
        },
        {
          name: '家用洗衣机',
          type: 'bar',
          // tslint:disable-next-line:max-line-length
          data: [0,
            0,
            5.50,
            9.40,
            19.80,
            19.80,
            -7.30,
            4.90,
            7.60,
            13.50,
            20.00,
            9.70,
            0,
            0,
            0.50
          ],
          smooth: true
        },
        {
          name: '微波炉',
          type: 'bar',
          // tslint:disable-next-line:max-line-length
          data: [19.30,
          -31.60,
            6.20,
            8.30,
            6.80,
            5.20,
            2.40,
            -3.20,
            16.00,
            5.00,
            -1.90,
            5.90,
            -25.40,
            -46.70,
            0
          ],
          smooth: true
        }
      ]
    };
    this.option_yiled2 = {
      color: ['#05BA31', '#22A5FF', '#99cc33', '#5180F0', '#32F0AC'],
      title: {
        // text: '开工率'
      },
      tooltip : {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      legend: {
        // y: '250px',
        data: ['水泥',   '挖掘机',  '工业机器人', '\n', '金属切削机床',  '汽车']
      },
      xAxis: {
        type: 'category',
        // name: '时间（月）',
        nameLocation: 'middle',
        nameGap: 30,
        // boundaryGap : false,
        // tslint:disable-next-line:max-line-length
        data: [
          '2019-03',
          '2019-04',
          '2019-05',
          '2019-06',
          '2019-07',
          '2019-08',
          '2019-09',
          '2019-10',
          '2019-11',
          '2019-12',
          '2020-01',
          '2020-02',
          '2020-03'
        ],
        axisLabel: {
          interval: 3
        },
      },
      yAxis: {
        type: 'value',
        name: '产量：当月同比（%）',
        nameLocation: 'middle',
        nameGap: 30,
        min: -60,
        max: 30,
        interval: 10,
        axisLabel: {
          interval: 1,
        },
        splitLine: {
          show: false
        }
      },
      grid: {
        left: '6%',
        right: '4%',
        bottom: '6%',
        containLabel: true
      },
      series: [
        {
          name: '水泥',
          type: 'line',
          // tslint:disable-next-line:max-line-length
          data: [22.20,
            3.40,
            7.20,
            6.00,
            7.50,
            5.10,
            4.10,
            -2.10,
            8.30,
            6.90,
            0,
            0,
            -18.30
          ],
          smooth: true
        },
        {
          name: '挖掘机',
          type: 'line',
          // tslint:disable-next-line:max-line-length
          data: [27.50,
            20.60,
            -4.40,
            -12.00,
            -22.70,
            6.80,
            18.10,
            23.10,
            17.00,
            13.00,
            0,
            0,
            2.30

          ],
          smooth: true
        },
        {
          name: '工业机器人',
          type: 'line',
          // tslint:disable-next-line:max-line-length
          data: [-14.00,
          -7.30,
          -9.30,
          -11.00,
          -7.10,
          -19.30,
          -14.60,
            1.70,
            4.30,
            15.30,
            0,
            0,
            12.90
          ],
          smooth: true
        },
        {
          name: '金属切削机床',
          type: 'line',
          // tslint:disable-next-line:max-line-length
          data: [-5.70,
          -25.00,
          -17.40,
          -14.00,
          -17.40,
          -21.30,
          -17.80,
          -13.50,
          -13.20,
          -14.30,
            0,
            0,
          -21.70
          ],
          smooth: true
        },
        {
          name: '汽车',
          type: 'line',
          // tslint:disable-next-line:max-line-length
          data: [-15.10,
          -10.40,
          -11.80,
          -14.10,
          -14.20,
          -12.80,
          -12.50,
          -12.00,
          -11.10,
          -9.60,
          -8.00,
          -45.80,
          -44.60
          ],
          smooth: true
        }
      ]
    };


    // this.option = {
    //   color: ['#ba55d3', '#99cc33'],
    //   title: {
    //     text: '钢铁行业用电量占比辽宁工业用电量'
    //   },
    //   tooltip : {
    //     trigger: 'axis',
    //     axisPointer : {
    //       type : 'shadow'
    //     }
    //   },
    //   legend: {
    //     right : '4%',
    //     // y: '20px',
    //     // padding: 5,
    //     data: ['辽宁省钢铁行业用电总量', '\n', '辽宁省工业用电总量（其他行业）']
    //   },
    //   grid: {
    //     left: '6%',
    //     right: '4%',
    //     bottom: '6%',
    //     containLabel: true
    //   },
    //   xAxis:  {
    //     type: 'value',
    //     name: '辽宁省钢铁行业用电量占工业用电量比例（%）',
    //     nameLocation: 'middle',
    //     nameGap: 30,
    //     splitLine: {
    //       show: false
    //     }
    //   },
    //   yAxis: {
    //     type: 'category',
    //     name: '年份',
    //     nameLocation: 'middle',
    //     nameGap: 50,
    //     axisLabel: {
    //       interval: 0
    //     },
    //     // tslint:disable-next-line:max-line-length
    //     data: [2014, 2015, 2016, 2017, 2018, 2019]
    //   },
    //   series: [
    //     {
    //       name: '辽宁省钢铁行业用电总量',
    //       type: 'bar',
    //       stack: '总量',
    //       label: {
    //         normal: {
    //           show: true,
    //           position: 'insideLeft'
    //         }
    //       },
    //       // tslint:disable-next-line:max-line-length
    //       data: [Math.round((27854755743 / 114933889565) * 100), Math.round((24152073265 / 106575897169) * 100), Math.round((24460118146 / 106251615140) * 100) , Math.round((23665371487 / 111758209763) * 100) , Math.round(( 25472075035 / 120622859661) * 100), Math.round((25365148906 / 125894679536) * 100)]
    //     },
    //     {
    //       name: '辽宁省工业用电总量（其他行业）',
    //       type: 'bar',
    //       stack: '总量',
    //       label: {
    //         normal: {
    //           show: true,
    //           position: 'insideRight'
    //         }
    //       },
    //       // tslint:disable-next-line:max-line-length
    //       data: [100 - Math.round((27854755743 / 114933889565) * 100),  100 - Math.round((24152073265 / 106575897169) * 100) , 100 - Math.round((24460118146 / 106251615140) * 100) , 100 - Math.round((23665371487 / 111758209763) * 100) , 100 -  Math.round(( 25472075035 / 120622859661) * 100) ,  100 -  Math.round((25365148906 / 125894679536) * 100)]
    //     },
    //   ]
    // };
    //
    // this.option1 = {
    //   color: ['#07c2d3', '#ba55d3'],
    //   title: {
    //     // text: '辽宁省钢铁行业用电量及单位产量耗电量趋势图'
    //   },
    //   tooltip : {
    //     trigger: 'axis',
    //     axisPointer : {
    //       type : 'shadow'
    //     }
    //   },
    //   legend: {
    //     right : '15%',
    //     // y: '20px',
    //     // padding: 5,
    //     data: ['辽宁省钢铁行业用电总量', '\n', '单位产量耗电量']
    //   },
    //   grid: {
    //     left: '6%',
    //     right: '10%',
    //     bottom: '6%',
    //     containLabel: true
    //   },
    //   xAxis:  {
    //     type: 'category',
    //     name: '季度',
    //     nameLocation: 'middle',
    //     nameGap: 30,
    //     splitLine: {
    //       show: false
    //     },
    //     axisLabel: {
    //       interval: 3
    //     },
    //     // tslint:disable-next-line:max-line-length
    //     data: ['2015Q1', '2015Q2', '2015Q3', '2015Q4', '2016Q1', '2016Q2', '2016Q3', '2016Q4', '2017Q1', '2017Q2', '2017Q3', '2017Q4', '2018Q1', '2018Q2', '2018Q3', '2018Q4', '2019Q1', '2019Q2', '2019Q3', '2019Q4']
    //   },
    //   yAxis: [
    //     {
    //       type: 'value',
    //       name: '单位产量耗电量（千瓦/吨）',
    //       nameLocation: 'middle',
    //       nameGap: 40,
    //       min: 300,
    //       max: 500,
    //       interval: 20,
    //       axisLabel: {
    //         formatter: '{value}'
    //       },
    //       splitLine: {
    //         show: false
    //       }
    //     },
    //     {
    //       type: 'value',
    //       name: '辽宁省钢铁行业用电总量（百万千瓦）',
    //       nameLocation: 'middle',
    //       nameGap: 50,
    //       min: 0,
    //       max: 8000,
    //       interval: 2000,
    //       axisLabel: {
    //         formatter: '{value}'
    //       },
    //       splitLine: {
    //         show: false
    //       }
    //     }
    //   ],
    //   series: [
    //     {
    //       name: '辽宁省钢铁行业用电总量',
    //       type: 'bar',
    //       barWidth: '50%',
    //       yAxisIndex: 1,
    //       // tslint:disable-next-line:max-line-length
    //       data: [5834.500527, 6253.256609, 6157.512996, 5906.803133, 5546.733419, 6208.2334, 6310.22551, 6394.925817, 5851.342827, 5356.813497,  5749.996687, 6707.218476, 6486.212272, 5842.535317, 6375.902382, 6767.42506399999, 6778.539565,  6110.847975, 6298.60450899999, 6177.156857]
    //     },
    //
    //     {
    //       name: '单位产量耗电量',
    //       type: 'line',
    //       smooth: true,
    //       // yAxisIndex: 1,
    //       // tslint:disable-next-line:max-line-length
    //       data: [354.6679469, 360.661461, 389.5656105, 433.6541468, 381.6857337, 373.5848718, 428.2212495, 485.3096924, 397.3153639, 337.5689086, 348.7150109, 398.1773886, 403.5094262, 338.556389, 369.722552, 367.5072261, 391.8049781, 340.6174842, 344.7549787, 324.5464166]
    //     },
    //   ]
    // };

  }

}
