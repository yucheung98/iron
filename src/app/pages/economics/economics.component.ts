import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-economics',
  templateUrl: './economics.component.html',
  styleUrls: ['./economics.component.css']
})
export class EconomicsComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  option_GDP: {};
  // tslint:disable-next-line:variable-name
  option_GDP_city: {};
  // tslint:disable-next-line:variable-name
  option_GDP_cityRate: {};
  first = [0.152788183,	0.174418177,	0.125419588,	0.027984711,	0.031405816,	0.042996828,	-0.088493014,	-0.124607696,	0.062178018
  ];
  second = [0.261875912,	0.218038413,	0.088736561,	0.0554371,	0.030126862,	-0.093340535,	-0.340088959,	0.068931301,	-0.016396009
  ];
  third = [0.162634415,	0.191201527,	0.159473366,	0.166276961,	0.083663551,	0.107628768,	-0.13408724,	0.073239559,	0.010876595
  ];
  seriesColors = ['blue', 'yellow'];
  constructor() { }

  ngOnInit() {

    // 第一列
    this.option_GDP = {
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
        // right : '15%',
        y: '20px',
        data: ['GDP(亿元)', 'GDP增速']
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
          '2009',
          '2010',
          '2011',
          '2012',
          '2013',
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
          max: 30000,
          interval: 10000,
          axisLabel: {
            formatter: '{value}'
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
          min: -5,
          max: 25,
          interval: 5,
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
          name:  'GDP(亿元)',
          type: 'bar',
          barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [15212.49,	18457.27,	22226.7,	24846.43,	27213.22,	28626.58,	28669.02,	22246.9,	23409.24,	23510.54
          ]
        },
        {
          name: 'GDP增速',
          type: 'line',
          smooth: true,
          yAxisIndex: 1,
          // tslint:disable-next-line:max-line-length
          data: [13.00,	21.32,	20.42,	11.78,	9.52,	5.19,	0.14,	22.40,	5.22,	0.43]
            // [13.006552,	21.32971,	20.4224677,	11.78641,	9.5256743,	5.1936522,	0.1482538,	22.4009052,	5.2247279,	0.4327351]
        },
      ]
    };

    this.option_GDP_city = {
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
        // show: false,
        // textStyle: {
        //   fontSize: 7
        // },
        y: '20px',
        data: ['沈阳',	'大连',	'鞍山',	'抚顺',	'本溪',	'丹东',	'锦州',	'\n', '营口',	'阜新',	'辽阳',	'盘锦',	'铁岭',	'朝阳',	'葫芦岛'
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
          '2009',
          '2010',
          '2011',
          '2012',
          '2013',
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
          max: 35000,
          interval: 10000,
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
          name:  '沈阳',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          // tslint:disable-next-line:max-line-length
          data: [4268.51,
            5017.54,
            5915.71,
            6602.59,
            7158.57,
            7098.71,
            7272.31,
            5546.4,
            5784.7,
            6292.4
          ]
        },
        {
          name:  '大连',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          // tslint:disable-next-line:max-line-length
          data: [4349.51,
            5158.16,
            6150.63,
            7002.83,
            7650.79,
            7655.58,
            7731.64,
            6810.2,
            6989.8,
            7668.5
          ]
        },
        {
          name:  '鞍山',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          // tslint:disable-next-line:max-line-length
          data: [1730.47,
            2125.01,
            2398.76,
            2429.32,
            2623.25,
            2385.9,
            2337,
            1462,
            1613.1,
            1751.1
          ]
        },
        {
          name:  '抚顺',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          // tslint:disable-next-line:max-line-length
          data: [698.64,
            895.16,
            1113.37,
            1236.37,
            1340.45,
            1276.58,
            1216.48,
            865.1,
            949.9,
            1048.8
          ]
        },
        {
          name:  '本溪',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          // tslint:disable-next-line:max-line-length
          data: [688.39,
            860.37,
            1044.59,
            1112.36,
            1193.66,
            1171.25,
            1164.69,
            766.7,
            777.1,
            823.1
          ]
        },
        {
          name:  '丹东',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          // tslint:disable-next-line:max-line-length
          data: [607.52,
            728.89,
            888.67,
            1015.37,
            1107.3,
            1023.23,
            984.9,
            751.2,
            787,
            816.7
          ]
        },
        {
          name:  '锦州',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          // tslint:disable-next-line:max-line-length
          data: [727.3,
            912.63,
            1116.93,
            1242.71,
            1344.93,
            1364,
            1327.33,
            1032.8,
            1077.5,
            1192.4
          ]
        },
        {
          name:  '营口',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          // tslint:disable-next-line:max-line-length
          data: [806.96,
            1002.45,
            1224.65,
            1381.18,
            1513.11,
            1546.08,
            1513.75,
            1156.2,
            1270.5,
            1346.7
          ]
        },
        {
          name:  '阜新',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          // tslint:disable-next-line:max-line-length
          data: [287.97,
            378.87,
            480.26,
            559.96,
            615.12,
            606.16,
            525.54,
            407.8,
            409.1,
            446
          ]
        },
        {
          name:  '辽阳',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          // tslint:disable-next-line:max-line-length
          data: [608.26,
            735.43,
            888.67,
            1000.49,
            1079.99,
            1014.62,
            1028.58,
            666.9,
            762.9,
            869.7
          ]
        },
        {
          name:  '盘锦',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          // tslint:disable-next-line:max-line-length
          data: [676.87,
            926.32,
            1119.92,
            1244.96,
            1351.06,
            1304.22,
            1256.54,
            1012.5,
            1087.2,
            1216.6
          ]
        },
        {
          name:  '铁岭',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          // tslint:disable-next-line:max-line-length
          data: [605.71,
            722.13,
            873.84,
            975.33,
            1031.27,
            867.29,
            740.9,
            589.2,
            594.5,
            616.6
          ]
        },
        {
          name:  '朝阳',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          // tslint:disable-next-line:max-line-length
          data: [518.09,
            656.41,
            813.02,
            920.63,
            1002.86,
            993.52,
            854.73,
            716.5,
            762.7,
            831.4
          ]
        },
        {
          name:  '葫芦岛',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          // tslint:disable-next-line:max-line-length
          data: [445.58,
            531.45,
            650.06,
            719.33,
            775.11,
            721.55,
            720.17,
            647.4,
            717.9,
            812.8
          ]
        },
      ]
    };

    this.option_GDP_cityRate = {
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
        data: ['2009',	'2010',	'2011',	'2012',	'2013',	'2014',	'2015',	'2016',	'2017',	'2018'
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
          min: -0.5,
          max: 0.5,
          interval: 0.2,
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
          name:  '2009',
          type: 'bar',
          // barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [0.105696975,
            0.127327156,
            0.076256639,
            0.054646459,
            0.126919425,
            0.077430568,
            0.053386246,
            0.146950552,
            0.231114531,
            0.073507351,
            0.00277037,
            0.129360655,
            0.160050156,
            -0.026735398
          ]
        },
        {
          name:  '2010',
          type: 'bar',
          // barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [0.175478094,
            0.185917494,
            0.227995862,
            0.281289362,
            0.249829312,
            0.199779431,
            0.254819194,
            0.242254883,
            0.315657881,
            0.209071779,
            0.368534578,
            0.19220419,
            0.26698064,
            0.192715113
          ]
        },
        {
          name:  '2011',
          type: 'bar',
          // barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [0.179006047,
            0.192407758,
            0.128822923,
            0.243766478,
            0.214117182,
            0.219210032,
            0.223858519,
            0.22165694,
            0.267611582,
            0.208367894,
            0.20899905,
            0.210086826,
            0.23858564,
            0.223181861
          ]
        },
        {
          name:  '2012',
          type: 'bar',
          // barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [0.116111168,
            0.138554912,
            0.012739916,
            0.110475404,
            0.064877129,
            0.142572609,
            0.11261225,
            0.127816111,
            0.165951776,
            0.125828485,
            0.111650832,
            0.116142543,
            0.132358368,
            0.106559395
          ]
        },
        {
          name:  '2013',
          type: 'bar',
          // barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [0.084206349,
            0.092528306,
            0.079828923,
            0.08418192,
            0.073087849,
            0.090538424,
            0.082255715,
            0.095519773,
            0.098507036,
            0.079461064,
            0.085223622,
            0.057354947,
            0.08931927,
            0.077544382
          ]
        },
        {
          name:  '2014',
          type: 'bar',
          // barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [-0.008362005,
            0.000626079,
            -0.090479367,
            -0.047648178,
            -0.01877419,
            -0.075923417,
            0.014179177,
            0.021789559,
            -0.014566263,
            -0.060528338,
            -0.034669075,
            -0.159007825,
            -0.009313364,
            -0.06909987
          ]
        },
        {
          name:  '2015',
          type: 'bar',
          // barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [0.105696975,
            0.127327156,
            0.076256639,
            0.054646459,
            0.126919425,
            0.077430568,
            0.053386246,
            0.146950552,
            0.231114531,
            0.073507351,
            0.00277037,
            0.129360655,
            0.160050156,
            -0.026735398
          ]
        },
        {
          name:  '2016',
          type: 'bar',
          // barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [-0.237326242,
            -0.11917782,
            -0.374411639,
            -0.288849796,
            -0.341713246,
            -0.237282973,
            -0.221896589,
            -0.236201486,
            -0.224036229,
            -0.351630403,
            -0.194215863,
            -0.204750979,
            -0.161723585,
            -0.101045586
          ]
        },    {
          name:  '2017',
          type: 'bar',
          // barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [0.042964806,
            0.026372206,
            0.103351573,
            0.09802335,
            0.013564628,
            0.047657082,
            0.043280403,
            0.098858329,
            0.003187837,
            0.143949618,
            0.073777778,
            0.008995248,
            0.064480112,
            0.108897127
          ]
        },
        {
          name:  '2018',
          type: 'bar',
          // barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [0.087766003,
            0.097098629,
            0.085549563,
            0.104116223,
            0.059194441,
            0.037738247,
            0.106635731,
            0.059976387,
            0.090197996,
            0.139992135,
            0.119021339,
            0.037174096,
            0.090074734,
            0.132191113
          ]
        },
      ]
    };

  }

}
