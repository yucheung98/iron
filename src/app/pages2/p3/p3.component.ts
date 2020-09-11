import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';
@Component({
  selector: 'app-p3',
  templateUrl: './p3.component.html',
  styleUrls: ['./p3.component.css']
})
export class P3Component implements OnInit {
  option1 = {};
  option2 = {};
  option3 = {};
  option4 = {};
  constructor() { }

  ngOnInit() {
    this.option1 = {
      color: ['#BDD2EF'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
          type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      legend: {
        show: true,
        bottom: 6,
        left: 'center',
        data: ['月用电量']
      },
      grid: {
        top: '15%',
        left: '2%',
        right: '2%',
        bottom: '13%',
        containLabel: true
      },
      xAxis: [
        {
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
          data: ['2007-01', '2007-02', '2007-03', '2007-04', '2007-05', '2007-06', '2007-07', '2007-08', '2007-09', '2007-10', '2007-11', '2007-12', '2008-01', '2008-02', '2008-03', '2008-04', '2008-05', '2008-06', '2008-07', '2008-08', '2008-09', '2008-10', '2008-11', '2008-12', '2009-01', '2009-02', '2009-03', '2009-04', '2009-05', '2009-06', '2009-07', '2009-08', '2009-09', '2009-10', '2009-11', '2009-12', '2010-01', '2010-02', '2010-03', '2010-04', '2010-05', '2010-06', '2010-07', '2010-08', '2010-09', '2010-10', '2010-11', '2010-12', '2011-01', '2011-02', '2011-03', '2011-04', '2011-05', '2011-06', '2011-07', '2011-08', '2011-09', '2011-10', '2011-11', '2011-12', '2012-01', '2012-02', '2012-03', '2012-04', '2012-05', '2012-06', '2012-07', '2012-08', '2012-09', '2012-10', '2012-11', '2012-12', '2013-01', '2013-02', '2013-03', '2013-04', '2013-05', '2013-06', '2013-07', '2013-08', '2013-09', '2013-10', '2013-11', '2013-12', '2014-01', '2014-02', '2014-03', '2014-04', '2014-05', '2014-06', '2014-07', '2014-08', '2014-09', '2014-10', '2014-11', '2014-12', '2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06', '2015-07', '2015-08', '2015-09', '2015-10', '2015-11', '2015-12', '2016-01', '2016-02', '2016-03', '2016-04', '2016-05', '2016-06', '2016-07', '2016-08', '2016-09', '2016-10', '2016-11', '2016-12', '2017-01', '2017-02', '2017-03', '2017-04', '2017-05', '2017-06', '2017-07', '2017-08', '2017-09', '2017-10', '2017-11', '2017-12', '2018-01', '2018-02', '2018-03', '2018-04', '2018-05', '2018-06', '2018-07', '2018-08', '2018-09', '2018-10', '2018-11', '2018-12', '2019-01', '2019-02', '2019-03', '2019-04', '2019-05', '2019-06', '2019-07', '2019-08', '2019-09', '2019-10', '2019-11', '2019-12', '2020-01', '2020-02']
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: '单位：亿千瓦时',
          nameTextStyle: {
            padding: [0, 0, 0, 30]    // 四个数字分别为上右下左与原位置距离
          },
          // 坐标轴
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          }
        }
      ],
      series: [
        {
          name: '月用电量',
          type: 'line',
          areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#BDE5FF'
                }, {
                    offset: 1,
                    color: '#BDD2EF'
                }])
            },
          // barWidth: '30%',
          // tslint:disable-next-line:max-line-length
          data: [13.85668698, 11.94129775, 14.5553069, 13.65654085, 13.14379943, 13.89728023, 13.82012254, 13.79591637, 13.98148773, 13.27588781, 13.96807882, 14.28233571, 14.25003836, 12.63311045, 13.46243023, 12.66591199, 15.74872233, 13.96355619, 14.0412472, 14.73483898, 14.43095576, 13.07001702, 11.2565999, 12.75663418, 15.18040114, 13.37540347, 14.73297642, 15.78046701, 17.72041254, 17.83488148, 18.58404608, 20.17703177, 18.09534907, 18.75590088, 18.23257587, 19.43319581, 21.23330098, 16.1386489, 19.02165091, 19.05428623, 19.68678322, 19.79838388, 19.47129446, 21.33109174, 21.66244321, 21.55903074, 21.76134192, 21.32224764, 23.88102624, 20.37005115, 22.57014853, 22.31149827, 23.46213236, 23.0468898, 23.68748431, 23.21969118, 22.34132092, 22.57994124, 20.77764555, 21.62859336, 20.60581298, 19.12035023, 21.83852119, 22.03478112, 22.96754631, 21.99876057, 24.83276378, 21.62148723, 20.27768634, 22.63204252, 23.17493494, 23.35720146, 23.4494409, 20.05551726, 22.89831935, 23.94298725, 24.63203561, 23.35155973, 25.31567391, 26.24082889, 25.83558837, 24.00818065, 22.82075883, 23.84022494, 23.13291284, 19.77291608, 22.45914102, 24.02220376, 26.20990809, 24.59617107, 25.46253341, 25.24421981, 23.15790464, 21.54331805, 21.69186812, 21.25446054, 20.83566767, 17.95659335, 19.55274425, 20.89823355, 20.79405025, 20.84028229, 20.82683596, 20.78248827, 19.96580573, 20.25657528, 19.06249871, 19.74895734, 19.38375032, 17.4848425, 18.59874137, 20.10044633, 22.06121774, 19.92066993, 21.12960442, 21.07426005, 20.89839063, 20.15933505, 21.14000262, 22.6499205, 21.42764687, 17.89738074, 19.18840066, 17.67422009, 17.4675257, 18.42638918, 19.08247928, 19.73316095, 18.68432664, 20.36121768, 21.55439184, 25.15657524, 24.1482845, 20.06436585, 20.64947237, 18.09508135, 19.74620851, 20.58406331, 21.34571071, 21.82762467, 20.58568844, 21.29129811, 22.18582289, 24.19712964, 24.61261013, 21.01600025, 22.15678527, 20.91162269, 20.28238152, 19.91447554, 21.4835149, 21.12505014, 20.37748005, 19.59167681, 21.04228263, 21.13760913, 22.50242549, 19.67528052],
          itemStyle: {
            normal: {
              label: {
                show: false, // 开启显示
                position: 'top', // 在上方显示
                textStyle: { // 数值样式
                  color: 'black',
                  fontSize: 12
                }
              }
            }
          },
        }
      ]
    };
    this.option2 = {
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
        data: ['2008-02', '2008-03', '2008-04', '2008-05', '2008-06', '2008-07', '2008-08', '2008-09', '2008-10', '2008-11', '2008-12', '2009-01', '2009-02', '2009-03', '2009-04', '2009-05', '2009-06', '2009-07', '2009-08', '2009-09', '2009-10', '2009-11', '2009-12', '2010-01', '2010-02', '2010-03', '2010-04', '2010-05', '2010-06', '2010-07', '2010-08', '2010-09', '2010-10', '2010-11', '2010-12', '2011-01', '2011-02', '2011-03', '2011-04', '2011-05', '2011-06', '2011-07', '2011-08', '2011-09', '2011-10', '2011-11', '2011-12', '2012-01', '2012-02', '2012-03', '2012-04', '2012-05', '2012-06', '2012-07', '2012-08', '2012-09', '2012-10', '2012-11', '2012-12', '2013-01', '2013-02', '2013-03', '2013-04', '2013-05', '2013-06', '2013-07', '2013-08', '2013-09', '2013-10', '2013-11', '2013-12', '2014-01', '2014-02', '2014-03', '2014-04', '2014-05', '2014-06', '2014-07', '2014-08', '2014-09', '2014-10', '2014-11', '2014-12', '2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06', '2015-07', '2015-08', '2015-09', '2015-10', '2015-11', '2015-12', '2016-01', '2016-02', '2016-03', '2016-04', '2016-05', '2016-06', '2016-07', '2016-08', '2016-09', '2016-10', '2016-11', '2016-12', '2017-01', '2017-02', '2017-03', '2017-04', '2017-05', '2017-06', '2017-07', '2017-08', '2017-09', '2017-10', '2017-11', '2017-12', '2018-01', '2018-02', '2018-03', '2018-04', '2018-05', '2018-06', '2018-07', '2018-08', '2018-09', '2018-10', '2018-11', '2018-12', '2019-01', '2019-02', '2019-03', '2019-04', '2019-05', '2019-06', '2019-07', '2019-08', '2019-09', '2019-10', '2019-11', '2019-12', '2020-01', '2020-02']
      },
      yAxis: [
        {
          type: 'value',
          scale: true,
          name: '单位：亿千瓦时',
          nameTextStyle: {
            padding: [0, 0, 0, 30]    // 四个数字分别为上右下左与原位置距离
          },
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
          data: [0.4211036816666667, 0.44874767433333335, 0.4221970663333333, 0.524957411, 0.465451873, 0.46804157333333335, 0.4911612993333333, 0.48103185866666665, 0.435667234, 0.37521999666666667, 0.42522113933333333, 0.5060133713333334, 0.44584678233333336, 0.491099214, 0.5260155670000001, 0.590680418, 0.5944960493333333, 0.6194682026666667, 0.6725677256666667, 0.6031783023333334, 0.6251966959999999, 0.6077525290000001, 0.6477731936666667, 0.7077766993333333, 0.5379549633333334, 0.6340550303333334, 0.6351428743333333, 0.6562261073333333, 0.6599461293333333, 0.6490431486666667, 0.7110363913333334, 0.7220814403333333, 0.718634358, 0.7253780639999999, 0.710741588, 0.796034208, 0.6790017049999999, 0.7523382843333334, 0.743716609, 0.7820710786666666, 0.7682296599999999, 0.7895828103333333, 0.773989706, 0.7447106973333334, 0.752664708, 0.692588185, 0.720953112, 0.6868604326666666, 0.6373450076666667, 0.7279507063333334, 0.7344927040000001, 0.765584877, 0.7332920190000001, 0.8277587926666666, 0.720716241, 0.675922878, 0.7544014173333333, 0.7724978313333334, 0.7785733819999999, 0.7816480299999999, 0.668517242, 0.7632773116666667, 0.7980995750000001, 0.8210678536666667, 0.7783853243333334, 0.843855797, 0.8746942963333333, 0.861186279, 0.8002726883333333, 0.7606919609999999, 0.7946741646666666, 0.7710970946666666, 0.6590972026666667, 0.7486380340000001, 0.8007401253333334, 0.873663603, 0.819872369, 0.8487511136666667, 0.8414739936666666, 0.7719301546666667, 0.7181106016666666, 0.7230622706666666, 0.708482018, 0.6945222556666667, 0.5985531116666666, 0.6517581416666667, 0.696607785, 0.6931350083333334, 0.6946760763333334, 0.6942278653333334, 0.692749609, 0.6655268576666666, 0.675219176, 0.6354166236666666, 0.658298578, 0.6461250106666667, 0.5828280833333334, 0.6199580456666667, 0.6700148776666667, 0.7353739246666666, 0.664022331, 0.7043201473333334, 0.702475335, 0.696613021, 0.671977835, 0.704666754, 0.75499735, 0.7142548956666667, 0.596579358, 0.6396133553333333, 0.5891406696666667, 0.5822508566666666, 0.6142129726666667, 0.6360826426666667, 0.6577720316666666, 0.622810888, 0.6787072559999999, 0.718479728, 0.8385525079999999, 0.8049428166666667, 0.668812195, 0.6883157456666668, 0.6031693783333334, 0.6582069503333333, 0.6861354436666667, 0.7115236903333333, 0.7275874889999999, 0.6861896146666666, 0.709709937, 0.7395274296666667, 0.806570988, 0.8204203376666667, 0.7005333416666667, 0.738559509, 0.6970540896666667, 0.676079384, 0.6638158513333334, 0.7161171633333333, 0.704168338, 0.679249335, 0.6530558936666666, 0.7014094209999999, 0.704586971, 0.7500808496666667, 0.655842684]
        },
        {
          name: '预测值',
          type: 'line',
          smooth: true,
          // tslint:disable-next-line:max-line-length
          data: [0.4088582578507434, 0.5041979409468167, 0.4251699307300184, 0.4108898024753966, 0.5348637270073833, 0.46249297571555326, 0.46594359096437005, 0.491864798700645, 0.45488749241750165, 0.4599423128976784, 0.40152709983406, 0.43305287795008157, 0.4466835411213766, 0.46915664977172333, 0.4571300985542883, 0.61059054399739, 0.5196625094788451, 0.5744817265192383, 0.6160632831394932, 0.6306622283313217, 0.5364178958617951, 0.5315505304554367, 0.6170221106404983, 0.6895820950693684, 0.6122682369842132, 0.567073265475135, 0.643930527765305, 0.6806924405442899, 0.6485604279945931, 0.6734537194034665, 0.6969621762505765, 0.6349086041784984, 0.72327216583223, 0.6848231829357699, 0.7447948518283916, 0.7597152348732681, 0.6107528454944032, 0.7503953194959583, 0.7327070421464232, 0.7457815237671132, 0.7637474662630633, 0.7383591946841066, 0.8269584231641584, 0.7740075376364133, 0.737299761197595, 0.7534474877422499, 0.6836953481550351, 0.80445703039854, 0.5889513540229299, 0.7179783823883934, 0.7236008811003701, 0.7744628789859916, 0.7546312638482752, 0.7607650212190984, 0.805478592387915, 0.7007688788300583, 0.6959261070401899, 0.6940206836429599, 0.786865385133355, 0.7343876480721165, 0.7155291355131065, 0.7536626562396685, 0.76363132451012, 0.8180500504412849, 0.7790563200588498, 0.8649533291712868, 0.7339936135692853, 0.8029293672708699, 0.9072131546971682, 0.8103340611486183, 0.7688354869436048, 0.7949285190708598, 0.65981446125433, 0.7555073335231568, 0.7860245864058151, 0.8232458720008615, 0.8217681392346934, 0.87807576348763, 0.878732124856083, 0.8337850106499402, 0.7266511130188483, 0.6929217962443001, 0.7636358790405716, 0.7000027953708666, 0.5959355953401017, 0.6986991487000149, 0.7208301993405684, 0.7877716040611549, 0.6709660656181201, 0.7454848296049567, 0.7140178101276417, 0.6492570768401367, 0.6303454381856715, 0.6876839215769016, 0.6361888207567551, 0.6531291979342666, 0.5586333700870916, 0.6387875879213417, 0.6703779528158399, 0.6712002476130435, 0.7295162128871383, 0.6689435833013133, 0.70107407642347, 0.6735489768718764, 0.7008601315330499, 0.6327430521629316, 0.7154185092534953, 0.7258855422692867, 0.6390239970273084, 0.6313005783063467, 0.6862272650155715, 0.6686660473109866, 0.53772106520622, 0.6632356452524584, 0.6461906528382699, 0.6597401717950501, 0.6111032526269449, 0.710217415970535, 0.76639077440929, 0.7831741144155966, 0.6713819293180348, 0.6991935274402283, 0.6293121057972617, 0.5938222265797367, 0.6768642171862118, 0.6954068140339518, 0.7199984482188014, 0.6803971207495398, 0.7309842480101, 0.7440518243826352, 0.855913389004225, 0.7785633396174666, 0.6815785960340351, 0.7144804576774668, 0.6446121928623831, 0.7356463462059633, 0.7008772524901118, 0.6931137093910684, 0.7313763463019549, 0.6668726792515817, 0.703985351421145, 0.6927971918338166, 0.7751299203214298, 0.7363003510044719, 0.6425148700821866]
        },
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
        data: ['2018-04', '2018-05', '2018-06', '2018-07', '2018-08', '2018-09', '2018-10', '2018-11', '2018-12', '2019-01', '2019-02', '2019-03', '2019-04', '2019-05', '2019-06', '2019-07', '2019-08', '2019-09', '2019-10', '2019-11', '2019-12', '2020-01', '2020-02', '2020-03', '2020-04', '2020-05']
      },
      yAxis: [
        {
          type: 'value',
          scale: true,
          name: '单位：亿千瓦时',
          nameTextStyle: {
            padding: [0, 0, 0, 30]    // 四个数字分别为上右下左与原位置距离
          },
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
          data: [24.14828, 20.06437, 20.64947, 18.09508, 19.74621, 20.58406, 21.34571, 21.82762, 20.58569, 21.2913, 22.18582, 24.19713, 24.61261, 21.016, 22.15679, 20.91162, 20.28238, 19.91448, 21.48351, 21.12505, 20.37748, 19.59168, 21.04228, 21.13761, 22.50243, 19.67528]
        },
        {
          name: '预测值',
          type: 'line',
          smooth: true,
          // tslint:disable-next-line:max-line-length
          data: [23.14828, 21.06437, 20.64947, 19.09508, 18.74621, 21.58406, 20.34571, 22.82762, 21.58569, 20.2913, 21.18582, 24.19713, 25.61261, 21.016, 21.15679, 21.91162, 21.28238, 19.91448, 20.48351, 21.12505, 21.37748, 20.59168, 22.04228, 22.13761, 21.50243, 20.67528]
        },
      ]
    };
    this.option4 = {
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
        data: ['2019-01', '2019-02', '2019-03', '2019-04', '2019-05', '2019-06', '2019-07', '2019-08', '2019-09', '2019-1', '2019-11', '2019-12']
      },
      yAxis: [
        {
          type: 'value',
          scale: true,
          name: '单位：亿千瓦时',
          nameTextStyle: {
            padding: [0, 0, 0, 30]    // 四个数字分别为上右下左与原位置距离
          },
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
          data: [24.61261, 21.016, 22.15679, 20.91162, 20.28238, 19.91448, 21.48351, 21.12505, 20.37748, 19.59168, 21.04228, 21.13761]
        },
        {
          name: '预测值',
          type: 'line',
          smooth: true,
          // tslint:disable-next-line:max-line-length
          data: [25.61261, 22.016, 23.15679, 19.91162, 21.28238, 19.91448, 20.48351, 20.12505, 20.37748, 18.59168, 22.04228, 22.13761]
        },
      ]
    };
  }

}