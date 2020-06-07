import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-supply',
  templateUrl: './supply.component.html',
  styleUrls: ['./supply.component.css']
})
export class SupplyComponent implements OnInit {
  // tslint:disable-next-line:variable-name
  option_rate1: {};
  // tslint:disable-next-line:variable-name
  option_rate2: {};
  // tslint:disable-next-line:variable-name
  option_rate3: {};
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
  }

}
