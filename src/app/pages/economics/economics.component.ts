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
  // tslint:disable-next-line:variable-name
  option_wind_city: {};
  // tslint:disable-next-line:variable-name
  option_water_city: {};
  // tslint:disable-next-line:variable-name
  option_fire_city: {};
  // tslint:disable-next-line:variable-name
  option_sunlight_city: {};
  // tslint:disable-next-line:variable-name
  option_nucleus_city: {};
  // tslint:disable-next-line:variable-name
  option_fire_equipment: {};
  // tslint:disable-next-line:variable-name
  option_green_equipment: {};
  // tslint:disable-next-line:variable-name
  option_wind_equipment_city: {};
  // tslint:disable-next-line:variable-name
  option_water_equipment_city: {};
  // tslint:disable-next-line:variable-name
  option_fire_equipment_city: {};
  // tslint:disable-next-line:variable-name
  option_sunlight_equipment_city: {};
  // tslint:disable-next-line:variable-name
  option_nucleus_equipment_city: {};
  first = [0.152788183,	0.174418177,	0.125419588,	0.027984711,	0.031405816,	0.042996828,	-0.088493014,	-0.124607696,	0.062178018
  ];
  second = [0.261875912,	0.218038413,	0.088736561,	0.0554371,	0.030126862,	-0.093340535,	-0.340088959,	0.068931301,	-0.016396009
  ];
  third = [0.162634415,	0.191201527,	0.159473366,	0.166276961,	0.083663551,	0.107628768,	-0.13408724,	0.073239559,	0.010876595
  ];
  // tslint:disable-next-line:max-line-length
  wind = [0.022613683,	0.035067218,	0.046413571,	0.052947211,	0.06380162,	0.064036081,	0.069088097,	0.074571184,	0.08352999,	0.085729457,	0.09193663
  ];
  // tslint:disable-next-line:max-line-length
  water = [0.028197578,	0.042543857,	0.029140549,	0.043080113,	0.050212827,	0.026254458,	0.019935609,	0.032326374,	0.025277842,	0.023970723,	0.021881733
  ];
  // tslint:disable-next-line:max-line-length
  fire = [0,	0,	0,	6.72123E-08,	9.90708E-05,	0.000410991,	0.000833388,	0.002135765,	0.006470892,	0.016571352,	0.021204009
  ];
  // tslint:disable-next-line:max-line-length
  sunlight = [0,	0,	0,	0,	0.040498798,	0.073953412,	0.089334891,	0.115305194,	0.131731378,	0.156602458,	0.164348119
  ];
  // tslint:disable-next-line:max-line-length
  nucleus = [0.949188739,	0.922388925,	0.92444588,	0.903972609,	0.845387683,	0.835345058,	0.820808014,	0.775661483,	0.752989899,	0.71712601,	0.700629509
  ];
  seriesColors = ['blue', 'yellow'];
  constructor() { }

  ngOnInit() {
    this.option_wind_city = {
      // color: ['#07c2d3',  '#99cc33'],
      title: {
        text: '风电',
        x: 'center',
        y: 'top',
        textAlign: 'center',
        textStyle: {
          color: '#cccccc',
          fontSize: 15
        },
      },
      tooltip : {
        trigger: 'axis',
        axisPointer : {
          type : 'shadow'
        }
      },
      legend: {
        show: false,
        // textStyle: {
        //   fontSize: 8
        // },
        data: ['2009',	'2010',	'2011',	'2012',	'2013',	'2014',	'2015',	'2016',	'2017',	'2018', '2019'
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
          interval: 3
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
          max: 0.5,
          interval: 0.1,
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
          data: [0.068886997,
            0.004426513,
            0,
            0,
            0.01520053,
            0.00401559,
            0.028763063,
            0.002824789,
            0.107422287,
            0,
            0,
            0.040281831,
            0.034106033,
            0.014100822
          ]
        },
        {
          name:  '2010',
          type: 'bar',
          // barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [0.087571135,
            0.011096685,
            0,
            0,
            0.011891308,
            0.004323945,
            0.056801822,
            0.001589904,
            0.147712139,
            0,
            0.019119189,
            0.052890658,
            0.14772461,
            0.007667265
          ]
        },
        {
          name:  '2011',
          type: 'bar',
          // barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [0.110691144,
            0.022808977,
            0,
            0,
            0.011967331,
            0.004208393,
            0.08284046,
            0.002382307,
            0.212969255,
            0,
            0.141847878,
            0.039356996,
            0.295969184,
            0.005460702
          ]
        },
        {
          name:  '2012',
          type: 'bar',
          // barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [0.096030647,
            0.030420193,
            0,
            0,
            0.009075879,
            0.003041717,
            0.097962723,
            0.003222571,
            0.259171575,
            0,
            0.084369613,
            0.04406799,
            0.141783095,
            0.00546035
          ]
        },
        {
          name:  '2013',
          type: 'bar',
          // barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [0.111539722,
            0.029674459,
            0,
            0,
            0.010200998,
            0.002168397,
            0.146922503,
            0.010339615,
            0.283245782,
            0,
            0.104709494,
            0.060993051,
            0.21114575,
            0.006355985
          ]
        },
        {
          name:  '2014',
          type: 'bar',
          // barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [0.11896195,
            0.02415118,
            0,
            0,
            0.010136325,
            0.001947838,
            0.273328948,
            0.009467648,
            0.255119891,
            0,
            0.035551029,
            0.06552838,
            0.207072417,
            0.006575652
          ]
        },
        {
          name:  '2015',
          type: 'bar',
          // barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [0.130630756,
            0.021071961,
            0,
            0,
            0.011648275,
            0.001913613,
            0.325605875,
            0.008291738,
            0.282534719,
            0,
            0.027180494,
            0.06840562,
            0.216431402,
            0.006852065
          ]
        },
        {
          name:  '2016',
          type: 'bar',
          // barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [0.146426998,
            0.021112471,
            0,
            0,
            0.011352676,
            0.00192481,
            0.340890527,
            0.010258867,
            0.299530042,
            0,
            0.028419354,
            0.086091619,
            0.257872106,
            0.006449773
          ]
        },    {
          name:  '2017',
          type: 'bar',
          // barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [0.169571793,
            0.020162091,
            0,
            0,
            0.013504863,
            0.002103455,
            0.348919309,
            0.012209754,
            0.345066139,
            0,
            0.02762232,
            0.099432909,
            0.271314868,
            0.010759096
          ]
        },
        {
          name:  '2018',
          type: 'bar',
          // barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [0.168257208,
            0.018674277,
            0,
            0,
            0.008864796,
            0.001823303,
            0.374674133,
            0.018317058,
            0.379051601,
            0,
            0.024597946,
            0.105322544,
            0.247247897,
            0.012337685
          ]
        },
        {
          name:  '2019',
          type: 'bar',
          // barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [0.160563223,
            0.021371921,
            0.003585305,
            0,
            0.00769343,
            0.001984886,
            0.427345496,
            0.019553738,
            0.457551169,
            0,
            0.026325903,
            0.118244322,
            0.247707884,
            0.013788998
          ]
        },
      ]
    };

    this.option_water_city = {
      // color: ['#07c2d3',  '#99cc33'],
      title: {
        text: '水电',
        x: 'center',
        y: 'top',
        textAlign: 'center',
        textStyle: {
          color: '#cccccc',
          fontSize: 15
        },
      },
      tooltip : {
        trigger: 'axis',
        axisPointer : {
          type : 'shadow'
        }
      },
      legend: {
        show: false,
        // textStyle: {
        //   fontSize: 8
        // },
        data: ['2009',	'2010',	'2011',	'2012',	'2013',	'2014',	'2015',	'2016',	'2017',	'2018', '2019'
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
          interval: 3
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
          max: 0.5,
          interval: 0.1,
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
          data: [0.069996184,
            0.005198143,
            0.001043027,
            0.005875782,
            0.354343206,
            0.265886392,
            0.028763063,
            0.002992508,
            0.107422287,
            0.038211495,
            0,
            0.041012902,
            0.036708226,
            0.014369642
          ]
        },
        {
          name:  '2010',
          type: 'bar',
          // barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [0.088397295,
            0.011860964,
            0.001651002,
            0.008368608,
            0.461142552,
            0.356401378,
            0.056801822,
            0.001728511,
            0.147712139,
            0.060675311,
            0.019119189,
            0.055527318,
            0.155555556,
            0.007858474
          ]
        },
        {
          name:  '2011',
          type: 'bar',
          // barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [0.111351782,
            0.023946483,
            0.001562507,
            0.006587949,
            0.382526735,
            0.352282161,
            0.08284046,
            0.002611145,
            0.212969255,
            0.027167693,
            0.141847878,
            0.040308383,
            0.310462246,
            0.005636854
          ]
        },
        {
          name:  '2012',
          type: 'bar',
          // barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [0.096633943,
            0.031701915,
            0.00118688,
            0.013589856,
            0.372024937,
            0.40328804,
            0.097964154,
            0.003433694,
            0.259171575,
            0.028803924,
            0.084369613,
            0.044736801,
            0.14892809,
            0.005624482
          ]
        },
        {
          name:  '2013',
          type: 'bar',
          // barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [0.112159012,
            0.253389322,
            0.001457024,
            0.017113479,
            0.365350054,
            0.396141502,
            0.148162026,
            0.010339615,
            0.283245782,
            0.028513718,
            0.104709494,
            0.062732934,
            0.215542934,
            0.006691241
          ]
        },
        {
          name:  '2014',
          type: 'bar',
          // barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [0.119388143,
            0.369083483,
            0.000652574,
            0.01177412,
            0.241177529,
            0.300611303,
            0.276199993,
            0.00991845,
            0.256519148,
            0.017873913,
            0.035551029,
            0.066553044,
            0.212590045,
            0.006652619
          ]
        },
        {
          name:  '2015',
          type: 'bar',
          // barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [0.131332796,
            0.423085328,
            0.000707639,
            0.012091297,
            0.19060872,
            0.26806519,
            0.329009126,
            0.010973494,
            0.284571052,
            0.012476313,
            0.027180494,
            0.068790894,
            0.222369886,
            0.006949596
          ]
        },
        {
          name:  '2016',
          type: 'bar',
          // barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [0.148271723,
            0.513231186,
            0.00086783,
            0.012340229,
            0.385480819,
            0.35273619,
            0.348329985,
            0.014843161,
            0.304605525,
            0.013235279,
            0.028927756,
            0.08850585,
            0.271594576,
            0.006820962
          ]
        },    {
          name:  '2017',
          type: 'bar',
          // barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [0.17648802,
            0.554473617,
            0.00653587,
            0.015028561,
            0.288251241,
            0.330176381,
            0.37072833,
            0.018660484,
            0.356793796,
            0.01320591,
            0.032820796,
            0.103924791,
            0.301578205,
            0.014691536
          ]
        },
        {
          name:  '2018',
          type: 'bar',
          // barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [0.196681583,
            0.610697175,
            0.018744676,
            0.016585741,
            0.240685635,
            0.340804494,
            0.422354084,
            0.027979754,
            0.40428127,
            0.016919248,
            0.034200377,
            0.116306687,
            0.30762966,
            0.025506723
          ]
        },
        {
          name:  '2019',
          type: 'bar',
          // barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [0.194466124,
            0.609552226,
            0.025621196,
            0.016486843,
            0.181696931,
            0.353925903,
            0.484507838,
            0.031903468,
            0.493665214,
            0.020237891,
            0.0384765,
            0.132291101,
            0.311832005,
            0.033823344
          ]
        },
      ]
    };

    this.option_fire_city = {
      // color: ['#07c2d3',  '#99cc33'],
      title: {
        text: '火电',
        x: 'center',
        y: 'top',
        textAlign: 'center',
        textStyle: {
          color: '#cccccc',
          fontSize: 15
        },
      },
      tooltip : {
        trigger: 'axis',
        axisPointer : {
          type : 'shadow'
        }
      },
      legend: {
        show: false,
        // textStyle: {
        //   fontSize: 8
        // },
        data: ['2009',	'2010',	'2011',	'2012',	'2013',	'2014',	'2015',	'2016',	'2017',	'2018', '2019'
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
          interval: 3
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
          max: 1,
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
          data: [0.930003816,
            0.994801857,
            0.998956973,
            0.994124218,
            0.645656794,
            0.734113608,
            0.971236937,
            0.997007492,
            0.892577713,
            0.961788505,
            1,
            0.958987098,
            0.963291774,
            0.985630358
          ]
        },
        {
          name:  '2010',
          type: 'bar',
          // barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [0.911602705,
            0.988139036,
            0.998348998,
            0.991631392,
            0.538857448,
            0.643598622,
            0.943198178,
            0.998271489,
            0.852287861,
            0.939324689,
            0.980880811,
            0.944472682,
            0.844444444,
            0.992141526
          ]
        },
        {
          name:  '2011',
          type: 'bar',
          // barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [0.888648218,
            0.976053517,
            0.998437493,
            0.993412051,
            0.617473265,
            0.647717839,
            0.91715954,
            0.997388855,
            0.787030745,
            0.972832307,
            0.858152122,
            0.959691617,
            0.689537754,
            0.994363146
          ]
        },
        {
          name:  '2012',
          type: 'bar',
          // barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [0.903366057,
            0.968298085,
            0.99881312,
            0.986410144,
            0.627975063,
            0.59671196,
            0.902035846,
            0.996566306,
            0.740828425,
            0.971196076,
            0.915630387,
            0.955263199,
            0.85107191,
            0.994375518
          ]
        },
        {
          name:  '2013',
          type: 'bar',
          // barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [0.887840988,
            0.746610678,
            0.998542976,
            0.982886521,
            0.634649946,
            0.603858498,
            0.851837974,
            0.989660385,
            0.716754218,
            0.971486282,
            0.895290506,
            0.937267066,
            0.784457066,
            0.993308759
          ]
        },
        {
          name:  '2014',
          type: 'bar',
          // barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [0.880611857,
            0.630916517,
            0.999347426,
            0.98822588,
            0.758822471,
            0.699388697,
            0.723800007,
            0.99008155,
            0.743480852,
            0.982126087,
            0.964448971,
            0.933446956,
            0.787409955,
            0.993347381
          ]
        },
        {
          name:  '2015',
          type: 'bar',
          // barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [0.868667204,
            0.576914672,
            0.999292361,
            0.987908703,
            0.80939128,
            0.73193481,
            0.670990874,
            0.989026506,
            0.715428948,
            0.987523687,
            0.972819506,
            0.931209106,
            0.777630114,
            0.993050404
          ]
        },
        {
          name:  '2016',
          type: 'bar',
          // barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [0.851728277,
            0.486768814,
            0.99913217,
            0.987659771,
            0.614519181,
            0.64726381,
            0.651670015,
            0.985156839,
            0.695394475,
            0.986764721,
            0.971072244,
            0.91149415,
            0.728405424,
            0.993179038
          ]
        },    {
          name:  '2017',
          type: 'bar',
          // barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [0.82351198,
            0.445526383,
            0.99346413,
            0.984971439,
            0.711748759,
            0.669823619,
            0.62927167,
            0.981339516,
            0.643206204,
            0.98679409,
            0.967179204,
            0.896075209,
            0.698421795,
            0.985308464
          ]
        },
        {
          name:  '2018',
          type: 'bar',
          // barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [0.803318417,
            0.389302825,
            0.981255324,
            0.983414259,
            0.759314365,
            0.659195506,
            0.577645916,
            0.972020246,
            0.59571873,
            0.983080752,
            0.965799623,
            0.883693313,
            0.69237034,
            0.974493277
          ]
        },
        {
          name:  '2019',
          type: 'bar',
          // barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [0.805533876,
            0.390447774,
            0.974378804,
            0.983513157,
            0.818303069,
            0.646074097,
            0.515492162,
            0.968096532,
            0.506334786,
            0.979762109,
            0.9615235,
            0.867708899,
            0.688167995,
            0.966176656
          ]
        },
      ]
    };

    this.option_sunlight_city = {
      // color: ['#07c2d3',  '#99cc33'],
      title: {
        text: '太阳能',
        x: 'center',
        y: 'top',
        textAlign: 'center',
        textStyle: {
          color: '#cccccc',
          fontSize: 15
        },
      },
      tooltip : {
        trigger: 'axis',
        axisPointer : {
          type : 'shadow'
        }
      },
      legend: {
        show: false,
        // textStyle: {
        //   fontSize: 8
        // },
        data: ['2009',	'2010',	'2011',	'2012',	'2013',	'2014',	'2015',	'2016',	'2017',	'2018', '2019'
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
          interval: 3
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
          max: 0.07,
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
          name:  '2009',
          type: 'bar',
          // barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [
          ]
        },
        {
          name:  '2010',
          type: 'bar',
          // barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [
          ]
        },
        {
          name:  '2011',
          type: 'bar',
          // barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [
          ]
        },
        {
          name:  '2012',
          type: 'bar',
          // barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [0,
            0,
            0,
            0,
            0,
            0,
            1.43107E-06,
            0,
            0,
            0,
            0,
            0,
            0,
            0
          ]
        },
        {
          name:  '2013',
          type: 'bar',
          // barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [0,
            0,
            0,
            0,
            0,
            0,
            0.001239523,
            0,
            0,
            0,
            0,
            0,
            0.001179532,
            0
          ]
        },
        {
          name:  '2014',
          type: 'bar',
          // barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [0,
            0.000125525,
            0,
            0,
            0,
            0,
            0.002871045,
            0.000450803,
            0.001399257,
            0,
            0,
            0,
            0.003390398,
            0
          ]
        },
        {
          name:  '2015',
          type: 'bar',
          // barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [0.000272945,
            0.000202431,
            0,
            0,
            0.00037303,
            0.000877123,
            0.003403252,
            0.002681756,
            0.002036334,
            0,
            0,
            0,
            0.005120346,
            8.99449E-05
          ]
        },
        {
          name:  '2016',
          type: 'bar',
          // barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [0.001375217,
            0.000433769,
            5.02604E-06,
            0.001257656,
            0.000685096,
            0.001594972,
            0.007439458,
            0.004476306,
            0.005075484,
            0,
            0.000508401,
            0.001613052,
            0.012734844,
            0.000336671,
          ]
        },    {
          name:  '2017',
          type: 'bar',
          // barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [0.006530467,
            0.002375537,
            0.005776953,
            0.004697888,
            0.001218329,
            0.00988848,
            0.021809021,
            0.006330255,
            0.011727656,
            0.001013079,
            0.005198476,
            0.00377659,
            0.027830081,
            0.003759325
          ]
        },
        {
          name:  '2018',
          type: 'bar',
          // barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [0.02812613,
            0.00554269,
            0.017995954,
            0.00634966,
            0.001432593,
            0.036520932,
            0.04767995,
            0.009582062,
            0.025229669,
            0.005591449,
            0.009602432,
            0.010498009,
            0.058090201,
            0.012974366
          ]
        },
        {
          name:  '2019',
          type: 'bar',
          // barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [0.033557332,
            0.006178381,
            0.021386329,
            0.008524033,
            0.001799186,
            0.060445492,
            0.057162342,
            0.01228199,
            0.036114045,
            0.009241168,
            0.012150597,
            0.013880106,
            0.062771763,
            0.01993847
          ]
        },
      ]
    };

    this.option_nucleus_city = {
      // color: ['#07c2d3',  '#99cc33'],
      title: {
        text: '核电',
        x: 'center',
        y: 'top',
        textAlign: 'center',
        textStyle: {
          color: '#cccccc',
          fontSize: 15
        },
      },
      tooltip : {
        trigger: 'axis',
        axisPointer : {
          type : 'shadow'
        }
      },
      legend: {
        show: false,
        // textStyle: {
        //   fontSize: 8
        // },
        data: ['2009',	'2010',	'2011',	'2012',	'2013',	'2014',	'2015',	'2016',	'2017',	'2018', '2019'
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
          interval: 3
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
          max: 0.7,
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
          data: [
          ]
        },
        {
          name:  '2010',
          type: 'bar',
          // barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [
          ]
        },
        {
          name:  '2011',
          type: 'bar',
          // barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [
          ]
        },
        {
          name:  '2012',
          type: 'bar',
          // barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [
          ]
        },
        {
          name:  '2013',
          type: 'bar',
          // barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [0,
            0.222848507284602,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
          ]
        },
        {
          name:  '2014',
          type: 'bar',
          // barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [0,
            0.344346135730515,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
          ]
        },
        {
          name:  '2015',
          type: 'bar',
          // barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [0,
            0.401694309529158,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
          ]
        },
        {
          name:  '2016',
          type: 'bar',
          // barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [0,
            0.491663047824081,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
          ]
        },    {
          name:  '2017',
          type: 'bar',
          // barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [0,
            0.531869049746771,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
          ]
        },
        {
          name:  '2018',
          type: 'bar',
          // barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [0,
            0.586353632807465,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
          ]
        },
        {
          name:  '2019',
          type: 'bar',
          // barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [0,
            0.581793952304281,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
          ]
        },
      ]
    };

    this.option_fire_equipment = {
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
        // y: '30px',
        data: ['火力发电设备平均容量（千瓦）', '\n', '火力发电设备平均容量总设备平均容量的比例']
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
          interval: 1
        },
        data: [
          '2014',
          '2015',
          '2016',
          '2017',
          '2018',
          '2019'
        ]
      },
      yAxis: [
        {
          type: 'value',
          // name: '辽宁省钢铁行业用电总量（百万千瓦）',
          nameLocation: 'middle',
          nameGap: 50,
          min: 28000000,
          max: 35000000,
          interval: 2000000,
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
          min: 0.58,
          max: 0.76,
          interval: 0.04,
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
          name:  '火力发电设备平均容量（千瓦）',
          type: 'bar',
          barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [30572702.31,	30626637.93,	31038829.42,	31586543.85,	32550184.99,	34197752.81
          ]
        },
        {
          name: '火力发电设备平均容量总设备平均容量的比例',
          type: 'line',
          smooth: true,
          yAxisIndex: 1,
          // tslint:disable-next-line:max-line-length
          data: [0.745581041,	0.723463282,	0.691801435,	0.670863128,	0.651939613,	0.647909668
          ]
        },
      ]
    };

    this.option_green_equipment = {
      // color: ['#07c2d3',  '#99cc33'],
      title: {
        // text: '辽宁省GDP发展趋势'
      },
      tooltip : {},
      legend: {
        orient: 'vertical',
        x: 'right',
        y: 'center',
        padding: [0, 50, 0, 0],
        data: ['风电', '水电', '太阳能', '核电']
      },
      radar: {
        name: {
          textStyle: {
            color: '#000',
            backgroundColor: '#fff',
            borderRadius: 3,
          }
        },
        nameGap : 2,
        center: ['40%', '50%'],
        indicator: [
          { name: '2014', max: 16},
          { name: '2015', max: 16},
          { name: '2016', max: 16},
          { name: '2017', max: 16},
          { name: '2018', max: 16},
          { name: '2019', max: 16},
        ]
      },
      series: [
        {
          type: 'radar',
          data: [
            {
              value: [14.57,	14.85,	14.94,	14.84,	14.61,	15.09],
              name: '风电'
            },
            {
              value: [6.77,	6.92,	6.53,	6.23,	5.94,	5.72],
              name: '水电'
            },
            {
              value: [0.11,	0.28,	0.72,	2.33,	5.30,	5.93],
              name: '太阳能'
            },
            {
              value: [3.99,	5.61,	8.62,	9.50,	8.96,	8.48],
              name: '核电'
            },
          ]
        }
      ]
    };

    this.option_wind_equipment_city = {
      // color: ['#07c2d3',  '#99cc33'],
      title: {
        text: '风电',
        x: 'center',
        y: 'top',
        textAlign: 'center',
        textStyle: {
          color: '#cccccc',
          fontSize: 15
        },
      },
      tooltip : {
        trigger: 'axis',
        axisPointer : {
          type : 'shadow'
        }
      },
      legend: {
        show: false,
        // textStyle: {
        //   fontSize: 7
        // },
        data: ['2014',	'2015',	'2016',	'2017',	'2018', '2019'
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
          interval: 3
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
          max: 0.6,
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
          name:  '2014',
          type: 'bar',
          // barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [0.246781771,
            0.066128835,
            0,
            0,
            0.022305606,
            0.006754127,
            0.468982521,
            0.028660332,
            0.479465286,
            0,
            0.073024239,
            0.160571669,
            0.389691418,
            0.018607771
          ]
        },
        {
          name:  '2015',
          type: 'bar',
          // barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [0.253675214,
            0.059935291,
            0,
            0,
            0.022202129,
            0.006444365,
            0.501431584,
            0.028470225,
            0.485875769,
            0,
            0.056154282,
            0.173081664,
            0.396717748,
            0.019048587
          ]
        },
        {
          name:  '2016',
          type: 'bar',
          // barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [0.258513477,
            0.049690525,
            0,
            0,
            0.022146337,
            0.006419916,
            0.509558889,
            0.028337992,
            0.495911194,
            0,
            0.055721436,
            0.184211836,
            0.423989904,
            0.017968142
          ]
        },    {
          name:  '2017',
          type: 'bar',
          // barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [0.259963471,
            0.046265907,
            0,
            0,
            0.022276264,
            0.006294378,
            0.495647025,
            0.031674813,
            0.490875342,
            0,
            0.050853951,
            0.190718537,
            0.407351868,
            0.027736813
          ]
        },
        {
          name:  '2018',
          type: 'bar',
          // barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [0.233312586,
            0.04562523,
            0,
            0,
            0.019056014,
            0.005999029,
            0.496225522,
            0.041745059,
            0.483486936,
            0,
            0.051391945,
            0.190776932,
            0.34901939,
            0.027898393
          ]
        },
        {
          name:  '2019',
          type: 'bar',
          // barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [0.217398315,
            0.052899411,
            0.013007393,
            0,
            0.013779422,
            0.005727495,
            0.526097457,
            0.042653465,
            0.489361504,
            0,
            0.049550851,
            0.205312102,
            0.328047882,
            0.027969271
          ]
        },
      ]
    };

    this.option_water_equipment_city = {
      // color: ['#07c2d3',  '#99cc33'],
      title: {
        text: '水电',
        x: 'center',
        y: 'top',
        textAlign: 'center',
        textStyle: {
          color: '#cccccc',
          fontSize: 15
        },
      },
      tooltip : {
        trigger: 'axis',
        axisPointer : {
          type : 'shadow'
        }
      },
      legend: {
        show: false,
        // textStyle: {
        //   fontSize: 7
        // },
        data: ['2014',	'2015',	'2016',	'2017',	'2018', '2019'
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
          interval: 3
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
          max: 0.6,
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
          name:  '2014',
          type: 'bar',
          // barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [0.000337596,
            0.001080326,
            0.002264917,
            0.041963795,
            0.509276051,
            0.547151843,
            0,
            0.000697671,
            0,
            0.04859963,
            0,
            0.002026431,
            0.007388735,
            0.001153222
          ]
        },
        {
          name:  '2015',
          type: 'bar',
          // barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [0.00033379,
            0.000979144,
            0.002245096,
            0.041963795,
            0.509693463,
            0.568255399,
            0,
            0.000693043,
            0,
            0.048744366,
            0,
            0.002001314,
            0.007240549,
            0.001180542
          ]
        },
        {
          name:  '2016',
          type: 'bar',
          // barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [0.000329499,
            0.000811779,
            0.002223236,
            0.042678928,
            0.508827925,
            0.566589861,
            0,
            0.000689825,
            0,
            0.044980653,
            0,
            0.001951148,
            0.006711493,
            0.00111107
          ]
        },    {
          name:  '2017',
          type: 'bar',
          // barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [0.000318221,
            0.000755832,
            0.002237506,
            0.037036899,
            0.512070305,
            0.556716702,
            0,
            0.00067935,
            0,
            0.04102024,
            0,
            0.001894148,
            0.006270318,
            0.001079371
          ]
        },
        {
          name:  '2018',
          type: 'bar',
          // barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [0.000273635,
            0.000745365,
            0.002143962,
            0.034062151,
            0.438045585,
            0.53669695,
            0,
            0.000641442,
            0,
            0.040062732,
            0,
            0.003259507,
            0.005209418,
            0.001046234
          ]
        },
        {
          name:  '2019',
          type: 'bar',
          // barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [0.000249534,
            0.000717138,
            0.002078238,
            0.037750917,
            0.33090067,
            0.51370281,
            0,
            0.000636802,
            0,
            0.040020549,
            0,
            0.004856241,
            0.004302908,
            0.001028613
          ]
        },
      ]
    };


    this.option_fire_equipment_city = {
      // color: ['#07c2d3',  '#99cc33'],
      title: {
        text: '火电',
        x: 'center',
        y: 'top',
        textAlign: 'center',
        textStyle: {
          color: '#cccccc',
          fontSize: 15
        },
      },
      tooltip : {
        trigger: 'axis',
        axisPointer : {
          type : 'shadow'
        }
      },
      legend: {
        show: false,
        // textStyle: {
        //   fontSize: 7
        // },
        data: ['2014',	'2015',	'2016',	'2017',	'2018', '2019'
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
          interval: 3
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
          max: 1,
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
          name:  '2014',
          type: 'bar',
          // barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [0.752880633,
            0.697962202,
            0.997735083,
            0.958036205,
            0.468418343,
            0.44609403,
            0.522813707,
            0.970025751,
            0.517943388,
            0.95140037,
            0.926975761,
            0.8374019,
            0.595259521,
            0.980239006
          ]
        },
        {
          name:  '2015',
          type: 'bar',
          // barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [0.744471989,
            0.629479428,
            0.997752476,
            0.958036205,
            0.467010298,
            0.423793685,
            0.487698736,
            0.961597783,
            0.509469002,
            0.951254889,
            0.943845718,
            0.824917021,
            0.58332114,
            0.979425852
          ]
        },
        {
          name:  '2016',
          type: 'bar',
          // barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [0.734442915,
            0.531723565,
            0.994473304,
            0.952962283,
            0.465836738,
            0.422185877,
            0.468276379,
            0.956441706,
            0.491339219,
            0.954989009,
            0.936570398,
            0.807908382,
            0.540698774,
            0.979822439
          ]
        },    {
          name:  '2017',
          type: 'bar',
          // barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [0.71476888,
            0.496777429,
            0.965393599,
            0.950623044,
            0.461811295,
            0.413930298,
            0.439397062,
            0.943749638,
            0.479129049,
            0.953960943,
            0.927699346,
            0.787221547,
            0.507565275,
            0.951867208
          ]
        },
        {
          name:  '2018',
          type: 'bar',
          // barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [0.67438302,
            0.491328886,
            0.921349376,
            0.948613491,
            0.537399121,
            0.394819952,
            0.39107701,
            0.917583076,
            0.45913812,
            0.932811223,
            0.912647554,
            0.770712902,
            0.492116731,
            0.922644749
          ]
        },
        {
          name:  '2019',
          type: 'bar',
          // barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [0.69291469,
            0.498316981,
            0.89761062,
            0.938749553,
            0.650399916,
            0.377278252,
            0.355233719,
            0.910945926,
            0.451656817,
            0.931829042,
            0.909974944,
            0.753996037,
            0.525728031,
            0.907105951
          ]
        },
      ]
    };

    this.option_sunlight_equipment_city = {
      // color: ['#07c2d3',  '#99cc33'],
      title: {
        text: '太阳能',
        x: 'center',
        y: 'top',
        textAlign: 'center',
        textStyle: {
          color: '#cccccc',
          fontSize: 15
        },
      },
      tooltip : {
        trigger: 'axis',
        axisPointer : {
          type : 'shadow'
        }
      },
      legend: {
        show: false,
        // textStyle: {
        //   fontSize: 7
        // },
        data: ['2014',	'2015',	'2016',	'2017',	'2018', '2019'
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
          interval: 3
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
          max: 0.18,
          interval: 0.04,
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
          data: [0,
            0.000565239,
            0,
            0,
            0,
            0,
            0.008203772,
            0.000616246,
            0.002591325,
            0,
            0,
            0,
            0.007660326,
            0
          ]
        },
        {
          name:  '2015',
          type: 'bar',
          // barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [0.001519007,
            0.001470402,
            2.42896E-06,
            0,
            0.00109411,
            0.001506551,
            0.01086968,
            0.009238948,
            0.004655229,
            7.44719E-07,
            0,
            0,
            0.012720564,
            0.000345019
          ]
        },
        {
          name:  '2016',
          type: 'bar',
          // barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [0.006714109,
            0.001734314,
            0.00330346,
            0.004358789,
            0.003189001,
            0.004804347,
            0.022164732,
            0.014530478,
            0.012749587,
            3.03383E-05,
            0.007708166,
            0.005928635,
            0.028599829,
            0.001098348
          ]
        },    {
          name:  '2017',
          type: 'bar',
          // barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [0.024949429,
            0.008191887,
            0.032368894,
            0.012340057,
            0.003842136,
            0.023058621,
            0.064955914,
            0.023896199,
            0.029995609,
            0.005018817,
            0.021446703,
            0.020165768,
            0.078812539,
            0.019316609
          ]
        },
        {
          name:  '2018',
          type: 'bar',
          // barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [0.092030759,
            0.020495467,
            0.076506662,
            0.017324357,
            0.00549928,
            0.062484069,
            0.112697469,
            0.040030423,
            0.057374944,
            0.027126044,
            0.035960501,
            0.03525066,
            0.153654461,
            0.048410624
          ]
        },
        {
          name:  '2019',
          type: 'bar',
          // barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [0.089437461,
            0.022992662,
            0.087303749,
            0.02349953,
            0.004919992,
            0.103291443,
            0.118668823,
            0.045763806,
            0.058981679,
            0.028150409,
            0.040474206,
            0.03583562,
            0.141921179,
            0.063896164
          ]
        },
      ]
    };


    this.option_nucleus_equipment_city = {
      // color: ['#07c2d3',  '#99cc33'],
      title: {
        text: '核电',
        x: 'center',
        y: 'top',
        textAlign: 'center',
        textStyle: {
          color: '#cccccc',
          fontSize: 15
        },
      },
      tooltip : {
        trigger: 'axis',
        axisPointer : {
          type : 'shadow'
        }
      },
      legend: {
        show: false,
        // textStyle: {
        //   fontSize: 7
        // },
        data: ['2014',	'2015',	'2016',	'2017',	'2018', '2019'
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
          interval: 3
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
          max: 0.5,
          interval: 0.1,
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
          data: [0,
            0.234263398,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
          ]
        },
        {
          name:  '2015',
          type: 'bar',
          // barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [0,
            0.308135734,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
          ]
        },
        {
          name:  '2016',
          type: 'bar',
          // barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [0,
            0.416039818,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
          ]
        },    {
          name:  '2017',
          type: 'bar',
          // barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [0,
            0.448008946,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
          ]
        },
        {
          name:  '2018',
          type: 'bar',
          // barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [0,
            0.441805051,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
          ]
        },
        {
          name:  '2019',
          type: 'bar',
          // barWidth: '50%',
          // tslint:disable-next-line:max-line-length
          data: [0,
            0.425073808,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
          ]
        },
      ]
    };

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
          interval: 1
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
          interval: 1
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
        data: ['沈阳',	'大连',	'鞍山',	'抚顺',	'本溪',	'丹东',	'锦州',	'营口',	'阜新',	'辽阳',	'盘锦',	'铁岭',	'朝阳',	'葫芦岛'
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
          interval: 1
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
          interval: 1
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
        // y: '30px',
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
          interval: 1
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
          min: -0.3,
          max: 0.3,
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
          data: [0.13006552,	0.2132971,	0.204224677,	0.1178641,	0.095256743,	0.051936522,	0.001482538,	-0.224009052,	0.052247279,	0.004327351
          ]
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
        textStyle: {
          fontSize: 7
        },
        data: ['沈阳',	'大连',	'鞍山',	'抚顺',	'本溪',	'丹东',	'锦州',	'营口',	'阜新',	'辽阳',	'盘锦',	'铁岭',	'朝阳',	'葫芦岛'
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
          interval: 1
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
        textStyle: {
          fontSize: 8
        },
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
          interval: 1
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
