import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forecast2',
  templateUrl: './forecast2.component.html',
  styleUrls: ['./forecast2.component.css']
})
export class Forecast2Component implements OnInit {

  // tslint:disable-next-line:variable-name
  option_forecast4: {};
  // tslint:disable-next-line:variable-name
  option_forecast5: {};
  // tslint:disable-next-line:variable-name
  option_forecast6: {};


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

    this.option_forecast4 = {
      // color: ['#22A5FF', '#05BA31'],
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
      // color: ['#22A5FF', '#05BA31'],
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
      // color: ['#22A5FF', '#05BA31'],
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
