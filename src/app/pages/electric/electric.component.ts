import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-electric',
  templateUrl: './electric.component.html',
  styleUrls: ['./electric.component.css']
})
export class ElectricComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  option_electric: {};
  // tslint:disable-next-line:variable-name
  option_electric_city: {};
  // tslint:disable-next-line:variable-name
  option_industry: {};
  // tslint:disable-next-line:variable-name
  option_industry_city: {};
  // tslint:disable-next-line:variable-name
  option_industry_city1: {};
  constructor() { }

  ngOnInit() {

    // 第二列
    this.option_electric = {
      // color: ['#3B79C4',  '#BC3835'],
      title: {
        // text: '辽宁省GDP发展趋势'
      },
      tooltip : {
        trigger: 'axis',
        axisPointer : {
          type : 'shadow'
        }
      },
      legend: {
        y: '20px',
        data: ['城镇居民电量（度）',   '农村居民电量（度）']
      },
      grid: {
        left: '6%',
        right: '6%',
        bottom: '4%',
        containLabel: true
      },
      xAxis:  {
        type: 'category',
        // name: '季度',
        nameLocation: 'middle',
        nameGap: 30,
        splitLine: {
          show: false
        },
        axisLabel: {
          interval: 0
        },
        data: [
          '2014',
          '2015',
          '2016',
          '2017',
          '2018',
        ]
      },
      yAxis: [
        {
          type: 'value',
          // name: '辽宁省钢铁行业用电总量（百万千瓦）',
          nameLocation: 'middle',
          nameGap: 50,
          min: 0,
          max: 2500,
          interval: 500,
          axisLabel: {
            formatter: '{value}'
          },
          splitLine: {
            show: false
          }
        },
      ],
      series: [
        {
          name:  '城镇居民电量（度）',
          type: 'bar',
          barWidth: '30%',
          // tslint:disable-next-line:max-line-length
          data: [1778.124214,	1907.019579,	1975.941528,	2065.096808,	2203.685762

          ]
        },
        {
          name: '农村居民电量（度）',
          type: 'bar',
          barWidth: '30%',
          // tslint:disable-next-line:max-line-length
          data: [960.0554988,	1043.766929,	1106.543028,	1163.813155,	1234.299808

          ]
        },
      ]
    };

    this.option_electric_city = {
      // color: ['#07c2d3',  '#99cc33'],
      title: {
        // text: '辽宁省GDP发展趋势'
      },
      tooltip : {
        trigger: 'axis',
        axisPointer : {
          type : 'shadow'
        }
      },
      legend: {
        // textStyle: {
        //   fontSize: 8
        // },
        y: '20px',
        data: ['2014',	'2015',	'2016',	'2017',	'2018'
        ]
      },
      grid: {
        left: '6%',
        right: '6%',
        bottom: '4%',
        containLabel: true
      },
      xAxis:  {
        type: 'category',
        // name: '季度',
        nameLocation: 'middle',
        nameGap: 30,
        splitLine: {
          show: false
        },
        axisLabel: {
          interval: 0
        },
        data: [
          '沈阳',
          '大连',
          '鞍山',
          '抚顺',
          '本溪',
          '丹东',
          '锦州',
          '营口',
          '阜新',
          '辽阳',
          '盘锦',
          '铁岭',
          '朝阳',
          '葫芦岛'
        ]
      },
      yAxis: [
        {
          type: 'value',
          // name: '辽宁省钢铁行业用电总量（百万千瓦）',
          nameLocation: 'middle',
          nameGap: 50,
          min: 0,
          max: 3,
          interval: 0.5,
          axisLabel: {
            formatter: '{value}'
          },
          splitLine: {
            show: false
          }
        },
      ],
      series: [
        {
          name:  '2014',
          type: 'bar',
          // barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [2.233094438,
            1.473856409,
            1.9019124,
            1.891711924,
            2.156967069,
            2.203249016,
            1.813004827,
            1.228103296,
            1.342836864,
            1.322441289,
            1.59711935,
            1.616004562,
            2.141005328,
            1.411631812
          ]
        },
        {
          name:  '2015',
          type: 'bar',
          // barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [2.138057275,
            1.343236739,
            1.865444065,
            1.857322155,
            2.221095588,
            2.24502873,
            1.768762796,
            1.25302428,
            1.440201092,
            1.35928526,
            1.572212131,
            1.65410416,
            2.22229543,
            1.407575425
          ]
        },
        {
          name:  '2016',
          type: 'bar',
          // barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [2.015219702,
            1.41581031,
            1.743011694,
            1.84207987,
            2.317761455,
            2.205372569,
            1.67976785,
            1.311391647,
            1.425199759,
            1.353174182,
            1.40155996,
            1.360283471,
            2.298131624,
            1.350935008
          ]
        },    {
          name:  '2017',
          type: 'bar',
          // barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [1.851448101,
            1.409586298,
            1.735139897,
            1.849098894,
            2.34256069,
            2.18151644,
            1.669412598,
            1.325310921,
            1.379187671,
            1.416597473,
            1.486910155,
            1.524069162,
            2.406818987,
            1.303872398
          ]
        },
        {
          name:  '2018',
          type: 'bar',
          // barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [1.803121965,
            1.411572932,
            1.672232243,
            1.880813434,
            2.446955427,
            2.222254179,
            1.651750771,
            1.34906982,
            1.503965879,
            1.567521259,
            1.463064952,
            1.500791189,
            2.474390473,
            1.371081118
          ]
        },
      ]
    };

    this.option_industry = {
      // color: ['#07c2d3',  '#99cc33'],
      title: {
        // text: '辽宁省GDP发展趋势'
      },
      tooltip : {
        trigger: 'axis',
        axisPointer : {
          type : 'shadow'
        }
      },
      legend: {
        // textStyle: {
        //   fontSize: 7
        // },
        // y: '20px',
        data: ['第二产业业电力消费（度）', '\n', '第二产业电力消费占总电力消费']
      },
      grid: {
        left: '6%',
        right: '6%',
        bottom: '4%',
        containLabel: true
      },
      xAxis:  {
        type: 'category',
        // name: '季度',
        nameLocation: 'middle',
        nameGap: 30,
        splitLine: {
          show: false
        },
        axisLabel: {
          interval: 0
        },
        data: [
          '2014',
          '2015',
          '2016',
          '2017',
          '2018',
        ]
      },
      yAxis: [
        {
          type: 'value',
          // name: '辽宁省钢铁行业用电总量（百万千瓦）',
          nameLocation: 'middle',
          nameGap: 50,
          min: 9.5E+10,
          max: 1.25E+11,
          interval: 0.5E+10,
          axisLabel: {
            formatter(value) {
              const res = value.toString();
              let numN1 = 0;
              let numN2 = 1;
              let num1 = 0;
              let num2 = 0;
              let t1 = 1;
              // tslint:disable-next-line:prefer-for-of
              for (let k = 0; k < res.length; k++) {
                if (res[k] === '.') {
                  t1 = 0;
                }
                if (t1) {
                  num1++;
                } else {
                  num2++;
                }
              }

              if (Math.abs(value) < 1 && res.length  > 4) {
                for (let i = 2; i < res.length; i++) {
                  if (res[i] === '0') {
                    numN2++;
                  } else if (res[i] === '.') {
                    continue;
                  } else {
                    break;
                  }
                }
                // tslint:disable-next-line:no-shadowed-variable
                let v = parseFloat(value);
                v = v * Math.pow(10, numN2);
                return v.toString() + 'E-' + numN2;
              } else if (num1 > 4) {
                if (res[0] === '-') {
                  numN1 = num1 - 2;
                } else {
                  numN1 = num1 - 1;
                }
                let v: number = parseFloat(value);
                v = v / Math.pow(10, numN1);
                if (num2 > 4) {
                  v = parseFloat( v.toFixed(4) );
                }
                return v.toString() + 'E+' + numN1;
              } else {
                return parseFloat(value);
              }
            }
          },
          splitLine: {
            show: false
          }
        },
        {
          type: 'value',
          // name: '单位产量耗电量（千瓦/吨）',
          nameLocation: 'middle',
          nameGap: 40,
          min: 0.5,
          max: 0.58,
          interval: 0.02,
          axisLabel: {
            formatter: '{value}'
          },
          splitLine: {
            show: false
          }
        },
      ],
      series: [
        {
          name:  '第二产业业电力消费（度）',
          type: 'bar',
          barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [1.14934E+11,	1.06576E+11,	1.06252E+11,	1.11758E+11, 1.20623E+11
          ]
        },
        {
          name: '第二产业电力消费占总电力消费',
          type: 'line',
          smooth: true,
          yAxisIndex: 1,
          // tslint:disable-next-line:max-line-length
          data: [0.563752383,	0.536936038,	0.521505915,	0.523335096,	0.523905088
          ]
        },
      ]
    };

    this.option_industry_city = {
      // color: ['#07c2d3',  '#99cc33'],
      title: {
        // text: '辽宁省GDP发展趋势'
      },
      tooltip : {
        trigger: 'axis',
        axisPointer : {
          type : 'shadow'
        }
      },
      legend: {
        show: false,
        textStyle: {
          fontSize: 7
        },
        data: ['沈阳',	'大连',	'鞍山',	'抚顺',	'本溪',	'丹东',	'锦州', '\n',	'营口',	'阜新',	'辽阳',	'盘锦',	'铁岭',	'朝阳',	'葫芦岛'
        ]
      },
      grid: {
        left: '6%',
        right: '7%',
        bottom: '4%',
        containLabel: true
      },
      xAxis:  {
        type: 'category',
        nameLocation: 'middle',
        boundaryGap: false,
        nameGap: 30,
        splitLine: {
          show: false
        },
        axisLabel: {
          interval: 0
        },
        data: [
          '2014',
          '2015',
          '2016',
          '2017',
          '2018',
        ]
      },
      yAxis: [
        {
          type: 'value',
          // name: '%',
          // nameLocation: 'middle',
          // nameGap: 50,
          min: 0,
          max: 60,
          interval: 20,
          axisLabel: {
            formatter: '{value}%'
          },
          splitLine: {
            show: false
          }
        },
      ],
      series: [
        {
          name:  '沈阳',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          // tslint:disable-next-line:max-line-length
          data: [6.14,	6.22,	6.37,	6.12,	5.72
          ]
        },
        {
          name:  '大连',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          // tslint:disable-next-line:max-line-length
          data: [7.62,	7.24,	7.21,	7.32,	7.43
          ]
        },
        {
          name:  '鞍山',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          // tslint:disable-next-line:max-line-length
          data: [8.43,	7.71,	7.90,	7.45,	7.83
          ]
        },
        {
          name:  '抚顺',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          // tslint:disable-next-line:max-line-length
          data: [4.80,	3.92,	2.67,	2.66,	2.55
          ]
        },
        {
          name:  '本溪',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          // tslint:disable-next-line:max-line-length
          data: [4.61,	4.36,	4.03,	4.30,	3.99
          ]
        },
        {
          name:  '丹东',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          // tslint:disable-next-line:max-line-length
          data: [1.69,	1.56,	1.51,	1.57,	1.60
          ]
        },
        {
          name:  '锦州',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          // tslint:disable-next-line:max-line-length
          data: [2.54,	2.35,	1.96,	2.14,	2.01
          ]
        },
        {
          name:  '营口',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          // tslint:disable-next-line:max-line-length
          data: [6.11,	7.47,	8.19,	8.49,	8.90,
          ]
        },
        {
          name:  '阜新',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          // tslint:disable-next-line:max-line-length
          data: [1.01,	0.96,	0.88,	0.73,	0.65
          ]
        },
        {
          name:  '辽阳',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          // tslint:disable-next-line:max-line-length
          data: [4.16,	3.55,	3.44,	3.08,	3.23
          ]
        },
        {
          name:  '盘锦',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          // tslint:disable-next-line:max-line-length
          data: [2.54,	2.68,	2.71,	2.86,	2.89
          ]
        },
        {
          name:  '铁岭',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          // tslint:disable-next-line:max-line-length
          data: [1.00,	0.93,	1.05,	1.08,	1.06
          ]
        },
        {
          name:  '朝阳',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          // tslint:disable-next-line:max-line-length
          data: [3.72,	2.80,	2.30,	2.52,	2.60
          ]
        },
        {
          name:  '葫芦岛',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          // tslint:disable-next-line:max-line-length
          data: [2.01,	1.95,	1.93,	2.00,	1.93,
          ]
        },
      ]
    };

    this.option_industry_city1 = {
      // color: ['#07c2d3',  '#99cc33'],
      title: {
        // text: '辽宁省GDP发展趋势'
      },
      tooltip : {
        trigger: 'axis',
        axisPointer : {
          type : 'shadow'
        }
      },
      legend: {
        // textStyle: {
        //   fontSize: 7
        // },
        y: '20px',
        data: ['2014',	'2015',	'2016',	'2017',	'2018'
        ]
      },
      grid: {
        left: '6%',
        right: '6%',
        bottom: '4%',
        containLabel: true
      },
      xAxis:  {
        type: 'category',
        // name: '季度',
        nameLocation: 'middle',
        nameGap: 30,
        splitLine: {
          show: false
        },
        axisLabel: {
          interval: 0
        },
        data: [
          '沈阳',
          '大连',
          '鞍山',
          '抚顺',
          '本溪',
          '丹东',
          '锦州',
          '营口',
          '阜新',
          '辽阳',
          '盘锦',
          '铁岭',
          '朝阳',
          '葫芦岛'
        ]
      },
      yAxis: [
        {
          type: 'value',
          // name: '辽宁省钢铁行业用电总量（百万千瓦）',
          nameLocation: 'middle',
          nameGap: 50,
          min: 0,
          max: 10,
          interval: 2,
          axisLabel: {
            formatter: '{value}%'
          },
          splitLine: {
            show: false
          }
        },
      ],
      series: [
        {
          name:  '2014',
          type: 'bar',
          // barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [6.14,
            7.62,
            8.43,
            4.80,
            4.61,
            1.69,
            2.54,
            6.11,
            1.01,
            4.16,
            2.54,
            1.00,
            3.72,
            2.01
          ]
        },
        {
          name:  '2015',
          type: 'bar',
          // barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [6.22,
            7.24,
            7.71,
            3.92,
            4.36,
            1.56,
            2.35,
            7.47,
            0.96,
            3.55,
            2.68,
            0.93,
            2.80,
            1.95
          ]
        },
        {
          name:  '2016',
          type: 'bar',
          // barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [6.37,
            7.21,
            7.90,
            2.67,
            4.03,
            1.51,
            1.96,
            8.19,
            0.88,
            3.44,
            2.71,
            1.05,
            2.30,
            1.93
          ]
        },    {
          name:  '2017',
          type: 'bar',
          // barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [6.12,
            7.32,
            7.45,
            2.66,
            4.30,
            1.57,
            2.14,
            8.49,
            0.73,
            3.08,
            2.86,
            1.08,
            2.52,
            2.00
          ]
        },
        {
          name:  '2018',
          type: 'bar',
          // barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [5.72,
            7.43,
            7.83,
            2.55,
            3.99,
            1.60,
            2.01,
            8.90,
            0.65,
            3.23,
            2.89,
            1.06,
            2.60,
            1.93
          ]
        },
      ]
    };

  }

}
