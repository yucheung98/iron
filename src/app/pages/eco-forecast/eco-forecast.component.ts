import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eco-forecast',
  templateUrl: './eco-forecast.component.html',
  styleUrls: ['./eco-forecast.component.css']
})
export class EcoForecastComponent implements OnInit {
  option: {};
  pageSize = 14;
  fixHeader = true;
  listOfData = [
    {
      key1: '沈阳',
      key2: 5388476263,
      key3: 1452215044,
      key4: 13172189610,
      key5: 297890880,
      key6: 19.44661 + '%',
      key7: 6470.3,
      key8: 0,
    },
    {
      key1: '大连',
      key2: 3689850580,
      key3: 1801982824,
      key4: 17760538600,
      key5: 1113171237,
      key6: 60.95522 + '%',
      key7: 7001.7,
      key8: 0,
    },
    {
      key1: '鞍山',
      key2: 1588196135,
      key3: 680216534,
      key4: 18805209362,
      key5: 2110876342,
      key6: 2.56212 + '%',
      key7: 1745.3,
      key8: 1,
    },
    {
      key1: '抚顺',
      key2: 1006618554,
      key3: 259610216,
      key4: 6005489159,
      key5: 8272624232,
      key6: 1.648684 + '%',
      key7: 847.1,
      key8: 2,
    },
    {
      key1: '本溪',
      key2: 788834936,
      key3: 132012739,
      key4: 9108049887,
      key5: 7403227156,
      key6: 18.16969 + '%',
      key7: 785.7,
      key8: 1,
    },
    {
      key1: '丹东',
      key2: 943636976,
      key3: 494349271,
      key4: 3783232157,
      key5: 4067573613,
      key6: 35.39259 + '%',
      key7: 768,
      key8: 3,
    },
    {
      key1: '锦州',
      key2: 713114766,
      key3: 578493774,
      key4: 4770816192,
      key5: 76722077,
      key6: 48.45078 + '%',
      key7: 1073,
      key8: 3,
    },
    {
      key1: '营口',
      key2: 873358281,
      key3: 650772549,
      key4: 22153554908,
      key5: 377959827,
      key6: 3.19562 + '%',
      key7: 1328.2,
      key8: 1,
    },
    {
      key1: '阜新',
      key2: 633706045,
      key3: 439130683,
      key4: 1682987260,
      key5: 265980074,
      key6: 49.36652 + '%',
      key7: 488.1,
      key8: 3,
    },
    {
      key1: '辽阳',
      key2: 625802417,
      key3: 442810162,
      key4: 7713495603,
      key5: 1520032496,
      key6: 2.023789 + '%',
      key7: 831,
      key8: 2,
    },
    {
      key1: '盘锦',
      key2: 491032572,
      key3: 308856145,
      key4: 7038665264,
      key5: 66301373,
      key6: 3.84765 + '%',
      key7: 1280.9,
      key8: 2,
    },
    {
      key1: '铁岭',
      key2: 653718823,
      key3: 619568969,
      key4: 2663552558,
      key5: 1984352588,
      key6: 13.22911 + '%',
      key7: 640,
      key8: 2,
    },
    {
      key1: '朝阳',
      key2: 683958741,
      key3: 656443089,
      key4: 6424748244,
      key5: 0,
      key6: 31.1832 + '%',
      key7: 843.1,
      key8: 3,
    },
    {
      key1: '葫芦岛',
      key2: 598559974,
      key3: 647404095,
      key4: 4812150732,
      key5: 11379917,
      key6: 3.392214 + '%',
      key7: 812.8,
      key8: 2,
    },
  ];
  constructor() { }

  ngOnInit() {

    this.option = {
      // color: ['#07c2d3',  '#99cc33'],
      title: {
        // text: '辽宁省GDP发展趋势',
        subtext: '时间序列分析方法',
        x: 'center',
        y: 'top',
        textAlign: 'center',
        subtextStyle: {
          fontSize: 20
        },
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
        y: '50px',
        data: ['沈阳',	'大连',	'鞍山',	'抚顺',	'本溪',	'丹东',	'锦州',	'营口',	'阜新',	'辽阳',	'盘锦',	'铁岭',	'朝阳',	'葫芦岛'
        ]
      },
      grid: {
        left: '3%',
        right: '3%',
        bottom: '4%',
        containLabel: true
      },
      xAxis:  {
        type: 'category',
        nameLocation: 'middle',
        // boundaryGap: false,
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
          '2019',
          '2020',
        ]
      },
      yAxis: [
        {
          type: 'value',
          // name: '辽宁省钢铁行业用电总量（百万千瓦）',
          nameLocation: 'middle',
          nameGap: 50,
          min: 0,
          max: 1.1,
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
          name:  '沈阳',
          type: 'bar',
          // tslint:disable-next-line:max-line-length
          data: [0.9025,
            0.8641,
            0.8144,
            0.7482,
            0.7287,
            0.6726,
            0.6262
          ]
        },
        {
          name:  '大连',
          type: 'bar',
          // tslint:disable-next-line:max-line-length
          data: [0.5956,
            0.5429,
            0.5722,
            0.5697,
            0.5705,
            0.5631,
            0.5608
          ]
        },
        {
          name:  '鞍山',
          type: 'bar',
          // tslint:disable-next-line:max-line-length
          data: [0.7686,
            0.7539,
            0.7044,
            0.7012,
            0.6758,
            0.6493,
            0.6255
          ]
        },
        {
          name:  '抚顺',
          type: 'bar',
          // tslint:disable-next-line:max-line-length
          data: [0.7645,
            0.7506,
            0.7445,
            0.7473,
            0.7601,
            0.7498,
            0.7485
          ]
        },
        {
          name:  '本溪',
          type: 'bar',
          // tslint:disable-next-line:max-line-length
          data: [0.8717,
            0.8976,
            0.9367,
            0.9467,
            0.9889,
            1.0134,
            1.0417
          ]
        },
        {
          name:  '丹东',
          type: 'bar',
          // tslint:disable-next-line:max-line-length
          data: [0.8904,
            0.9073,
            0.8913,
            0.8816,
            0.8981,
            0.8907,
            0.8896
          ]
        },
        {
          name:  '锦州',
          type: 'bar',
          // tslint:disable-next-line:max-line-length
          data: [0.7327,
            0.7148,
            0.6789,
            0.6747,
            0.6675,
            0.6426,
            0.6255
          ]
        },
        {
          name:  '营口',
          type: 'bar',
          // tslint:disable-next-line:max-line-length
          data: [0.4963,
            0.5064,
            0.5300,
            0.5356,
            0.5452,
            0.5608,
            0.5735
          ]
        },
        {
          name:  '阜新',
          type: 'bar',
          // tslint:disable-next-line:max-line-length
          data: [0.5427,
            0.5820,
            0.5760,
            0.5574,
            0.6078,
            0.6049,
            0.6154
          ]
        },
        {
          name:  '辽阳',
          type: 'bar',
          // tslint:disable-next-line:max-line-length
          data: [0.5345,
            0.5493,
            0.5469,
            0.5725,
            0.6335,
            0.6337,
            0.6558
          ]
        },
        {
          name:  '盘锦',
          type: 'bar',
          // tslint:disable-next-line:max-line-length
          data: [0.6455,
            0.6354,
            0.5664,
            0.6009,
            0.5913,
            0.5650,
            0.5508
          ]
        },
        {
          name:  '铁岭',
          type: 'bar',
          // tslint:disable-next-line:max-line-length
          data: [0.6531,
            0.6685,
            0.5497,
            0.6159,
            0.6065,
            0.5751,
            0.5605
          ]
        },
        {
          name:  '朝阳',
          type: 'bar',
          // tslint:disable-next-line:max-line-length
          data: [0.8653,
            0.8981,
            0.9288,
            0.9727,
            1.0000,
            1.0362,
            1.0706
          ]
        },
        {
          name:  '葫芦岛',
          type: 'bar',
          // tslint:disable-next-line:max-line-length
          data: [0.5705,
            0.5689,
            0.5460,
            0.5269,
            0.5541,
            0.5309,
            0.5234
          ]
        },
      ]
    };

  }

}
