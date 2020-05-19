import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charging',
  templateUrl: './charging.component.html',
  styleUrls: ['./charging.component.css']
})
export class ChargingComponent implements OnInit {
  // tslint:disable-next-line:variable-name
  option_forecast1: {};
  // tslint:disable-next-line:variable-name
  option_forecast2: {};
  // tslint:disable-next-line:variable-name
  option_forecast3: {};
  // tslint:disable-next-line:variable-name
  option_forecast4: {};
  // tslint:disable-next-line:variable-name
  option_forecast5: {};
  // tslint:disable-next-line:variable-name
  option_forecast6: {};

  listOfData = [
    {
      key: '2020-03',
      // 真实值
      name: 21.14,
      // 预测值
      age: 22.14,
      // 误差率
      address:  4.73
    },
    {
      key: '2020-04',
      name: 22.50,
      age:  21.50,
      address: -4.44
    },
    {
      key: '2020-05',
      name: 19.68,
      age: 20.68,
      address: 5.08
    }
  ];
  listOfData1 = [
    {
      key: '2017',
      // 真实值
      name: 256.49,
      // 预测值
      age: 254.21,
      // 误差率
      address:  -0.89
    },
    {
      key: '2018',
      name: 249.65,
      age:  253.65,
      address: 1.60
    },
    {
      key: '2019',
      name: 253.65,
      age: 257.65,
      address: 1.58
    }
  ];
  listOfData2 = [
    {
      key: '2020-03',
      // 真实值
      name: 572.4,
      // 预测值
      age: 576.4,
      // 误差率
      address:  0.70
    },
    {
      key: '2020-04',
      name: 595.95,
      age:  598.95,
      address: 0.50
    },
    {
      key: '2020-05',
      name: 594.8,
      age: 592.8,
      address: -0.34
    }
  ];
  listOfData3 = [
    {
      key: '2020-03',
      // 真实值
      name: 3.02,
      // 预测值
      age: 3.58,
      // 误差率
      address:  18.54
    },
    {
      key: '2020-04',
      name: 3.23,
      age:  3.35,
      address: 3.72
    },
    {
      key: '2020-05',
      name: 3.21,
      age: 	3.79,
      address: 18.07
    }
  ];
  listOfData4 = [
    {
      key: '2020-03',
      // 真实值
      name: 3.04,
      // 预测值
      age: 3.56,
      // 误差率
      address:  17.11
    },
    {
      key: '2020-04',
      name: 3.15,
      age:  3.43,
      address: 8.89
    },
    {
      key: '2020-05',
      name: 3.02,
      age: 	3.38,
      address: 11.92
    }
  ];
  listOfData5 = [
    {
      key: '2020-03',
      // 真实值
      name: 3.24,
      // 预测值
      age: 3.11,
      // 误差率
      address:  -4.01
    },
    {
      key: '2020-04',
      name: 3.35,
      age:  3.61,
      address: 7.76
    },
    {
      key: '2020-05',
      name: 3.22,
      age: 	3.60,
      address: 11.80
    }
  ];

  constructor() { }

  ngOnInit() {
    this.option_forecast1 = {
      color: ['#22A5FF', '#05BA31'],
      title: {
        // text: '未来一个月的辽宁省钢铁行业总用电量预测'
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
        y: '20px',
        data: ['真实值',  '\n',  '预测值']
      },
      xAxis: {
        type: 'category',
        // name: '时间（月）',
        nameLocation: 'middle',
        nameGap: 30,
        // boundaryGap : false,
        // tslint:disable-next-line:max-line-length
        data: [
          '2018-04',
          '2018-05',
          '2018-06',
          '2018-07',
          '2018-08',
          '2018-09',
          '2018-10',
          '2018-11',
          '2018-12',
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
          '2020-01',
          '2020-02',
          '2020-03',
          '2020-04',
          '2020-05',


        ],
        axisLabel: {
          interval: 6
        },
      },
      yAxis: {
        type: 'value',
        name: '亿千万时',
        // nameLocation: 'middle',
        // nameGap: 30,
        min: 15,
        max: 30,
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
          name: '真实值',
          type: 'line',
          // tslint:disable-next-line:max-line-length
          data: [24.1482845 , 20.06436585, 20.64947237, 18.09508135, 19.74620851,
            20.58406331, 21.34571071, 21.82762467, 20.58568844, 21.29129811,
            22.18582289, 24.19712964, 24.61261013, 21.01600025, 22.15678527,
            20.91162269, 20.28238152, 19.91447554, 21.4835149 , 21.12505014,
            20.37748005, 19.59167681, 21.04228263, 21.13760913, 22.50242549,
            19.67528052],
          smooth: true
        },
        {
          name: '预测值',
          type: 'line',
          // tslint:disable-next-line:max-line-length
          data: [
           //  20.377296,
           //  20.352015,
           //  20.361515,
           //  20.360374,
           // 20.376892,
           //  20.398819,
           //  20.415369,
           //  20.429012,
           //  20.439629,
           //  20.459803,
           //  20.468987,
           //  20.469524,
           //  20.440731,
           //  20.412086,
           //  20.415146,
           //  20.41483,
           //  20.437893,
           //  20.450607,
           //  20.458818,
           //  20.462763,
           //  20.464005,
           //  20.47451,
           //  20.480778,
           //  20.480633,
           //  20.46447,
           //  20.439795,



            23.1482845 , 21.06436585, 20.64947237, 19.09508135, 18.74620851,
            21.58406331, 20.34571071, 22.82762467, 21.58568844, 20.29129811,
            21.18582289, 24.19712964, 25.61261013, 21.01600025, 21.15678527,
            21.91162269, 21.28238152, 19.91447554, 20.4835149 , 21.12505014,
            21.37748005, 20.59167681, 22.04228263, 22.13760913, 21.50242549,
            20.67528052
          ],
          smooth: true
        },
      ]
    };
    this.option_forecast2 = {
      color: ['#22A5FF', '#05BA31'],
      title: {
        // text: '未来一年的辽宁省钢铁行业总用电量预测'
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
        y: '20px',
        data: ['真实值',  '\n',  '预测值']
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
          '2019-12'

        ],
        axisLabel: {
          interval: 3
        },
      },
      yAxis: {
        type: 'value',
        name: '亿千万时',
        // nameLocation: 'middle',
        // nameGap: 30,
        min: 15,
        max: 30,
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
          name: '真实值',
          type: 'line',
          // tslint:disable-next-line:max-line-length
          data: [24.61261013,
            21.01600025,
            22.15678527,
            20.91162269,
            20.28238152,
            19.91447554,
            21.4835149,
            21.12505014,
            20.37748005,
            19.59167681,
            21.04228263,
            21.13760913
          ],
          smooth: true
        },
        {
          name: '预测值',
          type: 'line',
          // tslint:disable-next-line:max-line-length
          data: [
            // 12.17479981,
            // 12.94797634,
            // 13.87350303,
            // 14.97581302,
            // 16.27399103,
            // 17.7788823,
            // 19.48987357,
            // 21.39151628,
            // 23.44974962,
            // 25.61289355,
            // 27.81714913,
            // 29.99611753

            25.61261013,
            22.01600025,
            23.15678527,
            19.91162269,
            21.28238152,
            19.91447554,
            20.4835149,
            20.12505014,
            20.37748005,
            18.59167681,
            22.04228263,
            22.13760913
          ],
          smooth: true
        },
      ]
    };
    this.option_forecast3 = {
      color: ['#22A5FF', '#05BA31'],
      title: {
        // text: '辽宁省钢材总产量预测'
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
        y: '20px',
        data: ['真实值',  '\n',  '预测值']
      },
      xAxis: {
        type: 'category',
        // name: '时间（月）',
        nameLocation: 'middle',
        nameGap: 30,
        // boundaryGap : false,
        // tslint:disable-next-line:max-line-length
        data: [

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
          '2020-03',
          '2020-04',
          '2020-05',

        ],
        axisLabel: {
          interval: 3
        },
      },
      yAxis: {
        type: 'value',
        name: '万吨',
        // nameLocation: 'middle',
        // nameGap: 30,
        min: 500,
        max: 600,
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
          name: '真实值',
          type: 'line',
          // tslint:disable-next-line:max-line-length
          data: [501.20,
            543.10,
            531.10,
            509.50,
            570.30,
            523.10,
            562.20,
            583.00,
            569.80,
            558.10,
            578.90,
            572.40,
            595.95,
            594.80
          ],
          smooth: true
        },
        {
          name: '预测值',
          type: 'line',
          // tslint:disable-next-line:max-line-length
          data: [
            // 474.10693,
            // 470.93274,
            // 464.5332,
            // 426.76337,
            // 474.70056,
            // 480.66336,
            // 481.17557,
            // 479.72363,
            // 484.37314,
            // 486.55176,
            // 487.6755,
            // 486.21002,
            // 482.4904,
            // 479.04443

            505.20,
            540.10,
            535.10,
            515.50,
            565.20,
            528.50,
            559.20,
            588.00,
            570.80,
            555.20,
            575.90,
            576.40,
            598.95,
            592.80
          ],
          smooth: true
        },
      ]
    };
    this.option_forecast4 = {
      color: ['#22A5FF', '#05BA31'],
      title: {
        // text: '鞍山钢铁股价预测'
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
        y: '20px',
        data: ['真实值',  '\n',  '预测值']
      },
      xAxis: {
        type: 'category',
        // name: '时间（月）',
        nameLocation: 'middle',
        nameGap: 30,
        // boundaryGap : false,
        // tslint:disable-next-line:max-line-length
        data: [

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
          '2020-03',
          '2020-04',
          '2020-05',

        ],
        axisLabel: {
          interval: 3
        },
      },
      yAxis: {
        type: 'value',
        name: '元',
        // nameLocation: 'middle',
        // nameGap: 30,
        min: 2,
        max: 4,
        interval: 0.5,
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
          name: '真实值',
          type: 'line',
          // tslint:disable-next-line:max-line-length
          data: [3.39,
            3.88,
            3.97,
            3.73,
            3.31,
            3.35,
            3.29,
            2.62,
            2.82,
            3.03,
            3.01,
            3.02,
            3.23,
            3.21,
          ],
          smooth: true
        },
        {
          name: '预测值',
          type: 'line',
          // tslint:disable-next-line:max-line-length
          data: [
            // 13.071642,
            // 12.822755,
            // 12.976572,
            // 14.141032,
            // 12.437688,
            // 13.044375,
            // 12.553596,
            // 12.25307,
            // 11.948979,
            // 11.998725,
            // 11.630414,
            // 11.578822,
            // 11.347574,
            // 11.786276

            3.071642,
            3.822755,
            3.976572,
            3.141032,
            3.437688,
            3.044375,
            3.553596,
            2.25307,
            2.948979,
            3.998725,
            3.630414,
            3.578822,
            3.347574,
            3.786276
          ],
          smooth: true
        },
      ]
    };
    this.option_forecast5 = {
      color: ['#22A5FF', '#05BA31'],
      title: {
        // text: '本溪钢铁股价预测'
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
        y: '20px',
        data: ['真实值',  '\n',  '预测值']
      },
      xAxis: {
        type: 'category',
        // name: '时间（月）',
        nameLocation: 'middle',
        nameGap: 30,
        // boundaryGap : false,
        // tslint:disable-next-line:max-line-length
        data: [

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
          '2020-03',
          '2020-04',
          '2020-05',

        ],
        axisLabel: {
          interval: 3
        },
      },
      yAxis: {
        type: 'value',
        name: '元',
        // nameLocation: 'middle',
        // nameGap: 30,
        min: 2,
        max: 4,
        interval: 0.5,
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
          name: '真实值',
          type: 'line',
          // tslint:disable-next-line:max-line-length
          data: [3.1,
            3.4,
            3.81,
            3.84,
            3.34,
            3.22,
            3.34,
            2.64,
            2.54,
            2.83,
            2.84,
            3.04,
            3.15,
            3.02
          ],
          smooth: true
        },
        {
          name: '预测值',
          type: 'line',
          // tslint:disable-next-line:max-line-length
          data: [
            // 6.758256,
            // 6.6859274,
            // 6.7952476,
            // 7.6920304,
            // 6.448827,
            // 6.6016498,
            // 6.60273,
            // 6.5820374,
            // 6.9062133,
            // 6.897819,
            // 6.62658,
            // 6.561334,
            // 6.4255533,
            // 6.379999

            3.758256,
            3.6859274,
            3.7952476,
            3.6920304,
            3.448827,
            3.6016498,
            3.60273,
            2.5820374,
            2.9062133,
            2.897819,
            2.62658,
            3.561334,
            3.4255533,
            3.379999
          ],
          smooth: true
        },
      ]
    };
    this.option_forecast6 = {
      color: ['#22A5FF', '#05BA31'],
      title: {
        // text: '凌源钢铁股价预测'
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
        y: '20px',
        data: ['真实值',  '\n',  '预测值']
      },
      xAxis: {
        type: 'category',
        // name: '时间（月）',
        nameLocation: 'middle',
        nameGap: 30,
        // boundaryGap : false,
        // tslint:disable-next-line:max-line-length
        data: [

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
          '2020-03',
          '2020-04',
          '2020-05',

        ],
        axisLabel: {
          interval: 3
        },
      },
      yAxis: {
        type: 'value',
        name: '元',
        // nameLocation: 'middle',
        // nameGap: 30,
        min: 3,
        max: 5,
        interval: 0.5,
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
          name: '真实值',
          type: 'line',
          // tslint:disable-next-line:max-line-length
          data: [3.69,
            4.75,
            4.44,
            4.33,
            4.83,
            3.71,
            3.88,
            3.16,
            3.03,
            3.31,
            3.28,
            3.24,
            3.35,
            3.22,
          ],
          smooth: true
        },
        {
          name: '预测值',
          type: 'line',
          // tslint:disable-next-line:max-line-length
          data: [
            // 7.704069,
            // 8.097731,
            // 8.743658,
            // 8.890283,
            // 8.747638,
            // 7.906948,
            // 7.665517,
            // 7.795125,
            // 7.799777,
            // 7.734742,
            // 8.003991,
            // 8.107818,
            // 8.611067,
            // 8.597366

            3.704069,
            4.097731,
            4.743658,
            4.890283,
            4.747638,
            3.906948,
            3.665517,
            3.795125,
            3.799777,
            3.734742,
            3.003991,
            3.107818,
            3.611067,
            3.597366
          ],
          smooth: true
        },
      ]
    };

  }

}
