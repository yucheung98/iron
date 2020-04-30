import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  option: {};
  option1: {};
  constructor() { }

  ngOnInit() {
    this.option = {
      color: ['#ba55d3', '#99cc33'],
      title: {
        text: '钢铁行业用电量占比辽宁工业用电量'
      },
      tooltip : {
        trigger: 'axis',
        axisPointer : {
          type : 'shadow'
        }
      },
      legend: {
        right : '4%',
        // y: '20px',
        // padding: 5,
        data: ['辽宁省钢铁行业用电总量', '\n', '辽宁省工业用电总量（其他行业）']
      },
      grid: {
        left: '6%',
        right: '4%',
        bottom: '6%',
        containLabel: true
      },
      xAxis:  {
        type: 'value',
        name: '辽宁省钢铁行业用电量占工业用电量比例（%）',
        nameLocation: 'middle',
        nameGap: 30,
        splitLine: {
          show: false
        }
      },
      yAxis: {
        type: 'category',
        name: '年份',
        nameLocation: 'middle',
        nameGap: 50,
        axisLabel: {
          interval: 0
        },
        // tslint:disable-next-line:max-line-length
        data: [2014, 2015, 2016, 2017, 2018, 2019]
      },
      series: [
        {
          name: '辽宁省钢铁行业用电总量',
          type: 'bar',
          stack: '总量',
          label: {
            normal: {
              show: true,
              position: 'insideLeft'
            }
          },
          // tslint:disable-next-line:max-line-length
          data: [Math.round((27854755743 / 114933889565) * 100), Math.round((24152073265 / 106575897169) * 100), Math.round((24460118146 / 106251615140) * 100) , Math.round((23665371487 / 111758209763) * 100) , Math.round(( 25472075035 / 120622859661) * 100), Math.round((25365148906 / 125894679536) * 100)]
        },
        {
          name: '辽宁省工业用电总量（其他行业）',
          type: 'bar',
          stack: '总量',
          label: {
            normal: {
              show: true,
              position: 'insideRight'
            }
          },
          // tslint:disable-next-line:max-line-length
          data: [100 - Math.round((27854755743 / 114933889565) * 100),  100 - Math.round((24152073265 / 106575897169) * 100) , 100 - Math.round((24460118146 / 106251615140) * 100) , 100 - Math.round((23665371487 / 111758209763) * 100) , 100 -  Math.round(( 25472075035 / 120622859661) * 100) ,  100 -  Math.round((25365148906 / 125894679536) * 100)]
        },
      ]
    };

    this.option1 = {
      color: ['#07c2d3', '#ba55d3'],
      title: {
        text: '辽宁省钢铁行业用电量及单位产量耗电量趋势图'
      },
      tooltip : {
        trigger: 'axis',
        axisPointer : {
          type : 'shadow'
        }
      },
      legend: {
        right : '15%',
        // y: '20px',
        // padding: 5,
        data: ['辽宁省钢铁行业用电总量', '\n', '单位产量耗电量']
      },
      grid: {
        left: '6%',
        right: '10%',
        bottom: '6%',
        containLabel: true
      },
      xAxis:  {
        type: 'category',
        name: '季度',
        nameLocation: 'middle',
        nameGap: 30,
        splitLine: {
          show: false
        },
        axisLabel: {
          interval: 3
        },
        // tslint:disable-next-line:max-line-length
        data: ['2015Q1', '2015Q2', '2015Q3', '2015Q4', '2016Q1', '2016Q2', '2016Q3', '2016Q4', '2017Q1', '2017Q2', '2017Q3', '2017Q4', '2018Q1', '2018Q2', '2018Q3', '2018Q4', '2019Q1', '2019Q2', '2019Q3', '2019Q4']
      },
      yAxis: [
        {
          type: 'value',
          name: '单位产量耗电量（千瓦/吨）',
          nameLocation: 'middle',
          nameGap: 40,
          min: 300,
          max: 500,
          interval: 20,
          axisLabel: {
            formatter: '{value}'
          },
          splitLine: {
            show: false
          }
        },
        {
          type: 'value',
          name: '辽宁省钢铁行业用电总量（百万千瓦）',
          nameLocation: 'middle',
          nameGap: 50,
          min: 0,
          max: 8000,
          interval: 2000,
          axisLabel: {
            formatter: '{value}'
          },
          splitLine: {
            show: false
          }
        }
      ],
      series: [
        {
          name: '辽宁省钢铁行业用电总量',
          type: 'bar',
          barWidth: '50%',
          yAxisIndex: 1,
          // tslint:disable-next-line:max-line-length
          data: [5834.500527, 6253.256609, 6157.512996, 5906.803133, 5546.733419, 6208.2334, 6310.22551, 6394.925817, 5851.342827, 5356.813497,  5749.996687, 6707.218476, 6486.212272, 5842.535317, 6375.902382, 6767.42506399999, 6778.539565,  6110.847975, 6298.60450899999, 6177.156857]
        },

        {
          name: '单位产量耗电量',
          type: 'line',
          smooth: true,
          // yAxisIndex: 1,
          // tslint:disable-next-line:max-line-length
          data: [354.6679469, 360.661461, 389.5656105, 433.6541468, 381.6857337, 373.5848718, 428.2212495, 485.3096924, 397.3153639, 337.5689086, 348.7150109, 398.1773886, 403.5094262, 338.556389, 369.722552, 367.5072261, 391.8049781, 340.6174842, 344.7549787, 324.5464166]
        },
      ]
    };

  }

}
