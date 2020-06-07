import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demand',
  templateUrl: './demand.component.html',
  styleUrls: ['./demand.component.css']
})
export class DemandComponent implements OnInit {
  // tslint:disable-next-line:variable-name
  option_house: {};
  // tslint:disable-next-line:variable-name
  option_solid: {};
  // tslint:disable-next-line:variable-name
  option_yiled1: {};
  // tslint:disable-next-line:variable-name
  option_yiled2: {};
  constructor() { }

  ngOnInit() {
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
  }

}
