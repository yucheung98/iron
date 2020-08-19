import { Component, OnInit, ViewChild } from '@angular/core';
import * as echarts from 'echarts';
import * as $ from 'jquery';
@Component({
  selector: 'app-p4',
  templateUrl: './p4.component.html',
  styleUrls: ['./p4.component.css']
})
export class P4Component implements OnInit {
  @ViewChild('pie1', null) pie1: any;
  option1 = {};
  option2 = {};
  option3 = {};
  option4 = {};
  constructor() { }

  ngOnInit() {
    this.option1 = {
      color: ['#3398DB', '#ED7F04'],
      // color: ['#07c2d3',  '#99cc33'],
      // title: {
      //   // text: '辽宁省GDP发展趋势'
      // },
      tooltip : {
        trigger: 'axis',
        axisPointer : {
          type : 'shadow'
        }
      },
      legend: {
        show: true,
        bottom: 6,
        left: 'center',
        data: ['真实值', '预测值']
      },
      grid: {
        top: '15%',
        left: '2%',
        right: '2%',
        bottom: '13%',
        containLabel: true
      },
      xAxis:  {
        type: 'category',
        // 坐标轴
        axisLine: {
          show: false
        },
        axisLabel: {
          interval: 'auto',
          rotate: '45'
        },
        axisTick: {
          show: false
        },
        // tslint:disable-next-line:max-line-length
        data: ['2018-03', '2018-04', '2018-05', '2018-06', '2018-07', '2018-08', '2018-09', '2018-10', '2018-11', '2018-12', '2019-03', '2019-04', '2019-05', '2019-06', '2019-07', '2019-08', '2019-09', '2019-10', '2019-11', '2019-12', '2020-03', '2020-04', '2020-05', '2020-06']
      },
      yAxis: [
        {
          type: 'value',
          scale: true,
          name: '单位：万吨',
          // nameTextStyle: {
          //   padding: [0, 0, 0, 30]    // 四个数字分别为上右下左与原位置距离
          // },
          // 坐标轴
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          }
        },
      ],
      series: [
        {
          name:  '真实值',
          type: 'line',
          smooth: true,
          // tslint:disable-next-line:max-line-length
          data: [556.12, 530.33, 589.38, 573.7, 563.69, 571.28, 589.57, 613.39, 598.39, 604.86, 596.81, 590.05, 597.49, 592.7, 610.39, 606.62, 601.14, 609.31, 630.76, 648, 586.41, 573.66, 606.98, 604.17]
        },
        {
          name: '预测值',
          type: 'line',
          smooth: true,
          // tslint:disable-next-line:max-line-length
          data: [546.708903524801, 524.0703818390275, 585.698689796318, 586.0165202041285, 571.2868769758732, 565.2789162604413, 587.4681570832324, 627.2233529156732, 604.2748697498819, 593.0890299576259, 604.2107097058383, 578.248529933875, 592.9384592490238, 587.2938953099977, 612.3261217287801, 599.8603401466528, 591.3642056921848, 617.4423382657051, 626.0913155992316, 642.4832014895178, 580.3917745520814, 567.9319553024009, 596.1001455482213, 611.7893057454254]
        },
      ]
    };
    this.option2 = {
      // title: {
      //   text: '某站点用户访问来源',
      //   subtext: '纯属虚构',
      //   left: 'center'
      // },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      // legend: {
      //   orient: 'vertical',
      //   left: 'left',
      //   data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
      // },
      series: [
        {
          name: 'F值',
          type: 'pie',
          radius: '70%',
          center: ['50%', '50%'],
          data: [
            {value: 63.5, name: '用电量'},
            {value: 61.0, name: '房地产开发投资完成额'},
            {value: 56.7, name: '产量：微波炉'},
            {value: 56.3, name: '产量：挖掘机'},
            {value: 56.0, name: '产量：商用车'},
            {value: 55.3, name: '产量：粗钢'}
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        },
        {
          name: 'F值',
          type: 'pie',
          radius: '70%',
          center: ['50%', '50%'],
          data: [
            {value: 63.5, name: '用电量'},
            {value: 61.0, name: '房地产开发投资完成额'},
            {value: 56.7, name: '产量：微波炉'},
            {value: 56.3, name: '产量：挖掘机'},
            {value: 56.0, name: '产量：商用车'},
            {value: 55.3, name: '产量：粗钢'}
          ],
          itemStyle : {
            normal : {
              label : {
                position : 'inner',
                formatter(params) {return (params.percent - 0) + '%'; },
                textStyle: {
                  color: '#fff'
                }
              },
              labelLine : {
                show : false
              }
            }
          }
        }
      ]
    };
    this.option3 = {
      color: ['#3398DB', '#ED7F04'],
      // color: ['#07c2d3',  '#99cc33'],
      // title: {
      //   // text: '辽宁省GDP发展趋势'
      // },
      tooltip : {
        trigger: 'axis',
        axisPointer : {
          type : 'shadow'
        }
      },
      legend: {
        show: true,
        bottom: 6,
        left: 'center',
        data: ['真实值', '预测值']
      },
      grid: {
        top: '15%',
        left: '2%',
        right: '2%',
        bottom: '13%',
        containLabel: true
      },
      xAxis:  {
        type: 'category',
        // 坐标轴
        axisLine: {
          show: false
        },
        axisLabel: {
          interval: 'auto',
          rotate: '45'
        },
        axisTick: {
          show: false
        },
        // tslint:disable-next-line:max-line-length
        data: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019']
      },
      yAxis: [
        {
          type: 'value',
          scale: true,
          name: '单位：万元',
          // nameTextStyle: {
          //   padding: [0, 0, 0, 30]    // 四个数字分别为上右下左与原位置距离
          // },
          // 坐标轴
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          }
        },
      ],
      series: [
        {
          name:  '真实值',
          type: 'line',
          smooth: true,
          // tslint:disable-next-line:max-line-length
          data: [235800, -328100, -549600, 72800, 157900, -376300, 162000, 548000, 1000800, 197200]
        },
        {
          name: '预测值',
          type: 'line',
          smooth: true,
          // tslint:disable-next-line:max-line-length
          data: [53522, -180751, -701017, 46573, 291787, -514854, 309928, 507662, 1181076, 111629]
        },
      ]
    };
    this.option4 = {
      // title: {
      //   text: '某站点用户访问来源',
      //   subtext: '纯属虚构',
      //   left: 'center'
      // },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      // legend: {
      //   orient: 'vertical',
      //   left: 'left',
      //   data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
      // },
      series: [
        {
          name: 'F值',
          type: 'pie',
          radius: '70%',
          center: ['50%', '50%'],
          data: [
            {value: 0.1244, name: '用电量'},
            {value: 0.1233, name: '出口价格指数'},
            {value: 0.1049, name: '总利润'},
            {value: 0.1021, name: '价格:硅锰'},
            {value: 0.0870, name: '价格指数:钢铁'},
            {value: 0.0556, name: '价格指数:铁矿石'}
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        },
        {
          name: 'F值',
          type: 'pie',
          radius: '70%',
          center: ['50%', '50%'],
          data: [
            {value: 0.1244, name: '用电量'},
            {value: 0.1233, name: '出口价格指数'},
            {value: 0.1049, name: '总利润'},
            {value: 0.1021, name: '价格:硅锰'},
            {value: 0.0870, name: '价格指数:钢铁'},
            {value: 0.0556, name: '价格指数:铁矿石'}
          ],
          itemStyle : {
            normal : {
              label : {
                position : 'inner',
                formatter(params) {return (params.percent - 0) + '%'; },
                textStyle: {
                  color: '#fff'
                }
              },
              labelLine : {
                show : false
              }
            }
          }
        }
      ]
    };
  }

}
