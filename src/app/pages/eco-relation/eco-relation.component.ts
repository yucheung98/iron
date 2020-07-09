import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eco-relation',
  templateUrl: './eco-relation.component.html',
  styleUrls: ['./eco-relation.component.css']
})
export class EcoRelationComponent implements OnInit {
  pageSize = 16;
  fixHeader = true;
  // tslint:disable-next-line:variable-name
  graph = {
    nodes: [
      {category: 0, symbolSize: 20, name: 'P', label: 'P'},
      {category: 1, symbolSize: 10, name: 'S', label: 'S'},
      {category: 1, symbolSize: 10, name: 'L', label: 'L'},
      {category: 1, symbolSize: 10, name: 'X', label: 'X'},
      {category: 1, symbolSize: 10, name: 'N', label: 'N'},
      {category: 1, symbolSize: 10, name: 'G', label: 'G'},
      {category: 1, symbolSize: 10, name: 'E', label: 'E'},
      {category: 1, symbolSize: 10, name: 'A', label: 'A'},
      {category: 1, symbolSize: 10, name: 'B', label: 'B'},
      {category: 1, symbolSize: 10, name: 'D', label: 'D'},
    ],
    links: [
      {source: 'P', target: 'S', Support: '0.43', Confidence: '0.7'},
      {source: 'S', target: 'L', Support: '0.4', Confidence: '0.61'},
      {source: 'X', target: 'S', Support: '0.38', Confidence: '0.85'},
      {source: 'N', target: 'S', Support: '0.35', Confidence: '0.72'},
      {source: 'G', target: 'P', Support: '0.33', Confidence: '0.62'},
      {source: 'X', target: 'P', Support: '0.33', Confidence: '0.74'},
      {source: 'E', target: 'S', Support: '0.32', Confidence: '0.73'},
      {source: 'G', target: 'S', Support: '0.3', Confidence: '0.56'},
      {source: 'A', target: 'G', Support: '0.3', Confidence: '0.69'},
      {source: 'B', target: 'P', Support: '0.3', Confidence: '0.69'},
      {source: 'B', target: 'S', Support: '0.3', Confidence: '0.69'},
      {source: 'S', target: 'G', Support: '0.3', Confidence: '0.46'},
      {source: 'D', target: 'P', Support: '0.3', Confidence: '0.56'},
      {source: 'D', target: 'S', Support: '0.3', Confidence: '0.56'},
      {source: 'E', target: 'P', Support: '0.3', Confidence: '0.69'},
      {source: 'L', target: 'P', Support: '0.3', Confidence: '0.56'},
    ],
    categories: [{target: 0}, {source: 1}]
  };
  // tslint:disable-next-line:variable-name
  option_table_graph: {};
  constructor() { }

  singletableGraph(tablename) {
    // tslint:disable-next-line:variable-name
    const table_graph = {
      nodes: [],
      links: [],
      categories: [{target: 0}, {source: 1}]
    };
    let j = 0;
    console.log( this.graph.links);
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.graph.links.length; i++) {
      // tslint:disable-next-line:triple-equals
      if ((this.graph.links[i].source == tablename)) {
        j = j + 1;
        // tslint:disable-next-line:triple-equals
        if (j == 1) {
          // tslint:disable-next-line:variable-name
          const table_graph_nodes: { [key: string]: any } = {};
          table_graph_nodes.category = 0;
          table_graph_nodes.symbolSize = 38;
          table_graph_nodes.name = this.graph.links[i].source;
          table_graph_nodes.label = this.graph.links[i].source;
          table_graph.nodes.push(table_graph_nodes);
        }
        table_graph.links.push(this.graph.links[i]);
        // tslint:disable-next-line:variable-name
        const table_graph_nodes2: { [key: string]: any } = {};
        table_graph_nodes2.category = 1;
        table_graph_nodes2.symbolSize = 20;
        table_graph_nodes2.name = this.graph.links[i].target;
        table_graph_nodes2.label = this.graph.links[i].target;
        table_graph.nodes.push(table_graph_nodes2);
      }
    }
    console.log(table_graph);
    this.option_table_graph = {
      title: {
        // text: '一致性网络图',//标题
        top: 'top', // 相对在y轴上的位置
        left: 'center'// 相对在x轴上的位置
      },
      tooltip : {// 提示框，鼠标悬浮交互时的信息提示
        trigger: 'item', // 数据触发类型
        formatter(params) {// 触发之后返回的参数，这个函数是关键
          // tslint:disable-next-line:triple-equals
          if (params.data.category != undefined) {// 如果触发节点
            return '学员/课程:' + params.data.label; // 返回标签
          }
        },
      },
      // 全局颜色，图例、节点、边的颜色都是从这里取，按照之前划分的种类依序选取
      // color: [ 'rgb(180, 82, 205)', 'rgb(72, 118, 255)', 'rgb(17,144,147)'],
      animationDuration: 1500,
      animationEasingUpdate: 'quinticInOut',
      // sereis的数据: 用于设置图表数据之用
      series : [
        {
          name: '关联性网络图', // 系列名称
          type: 'graph', // 图表类型
          layout: 'force', // echarts3的变化，force是力向图，circular是和弦图
          draggable: true, // 指示节点是否可以拖动
          data: table_graph.nodes, // 节点数据
          links: table_graph.links, // 边、联系数据
          categories: table_graph.categories, // 节点种类
          focusNodeAdjacency: true, // 当鼠标移动到节点上，突出显示节点以及节点的边和邻接节点
          roam: true, // 是否开启鼠标缩放和平移漫游。默认不开启。如果只想要开启缩放或者平移，可以设置成 'scale' 或者 'move'。设置成 true 为都开启
          label: {// 图形上的文本标签，可用于说明图形的一些数据信息
            normal: {
              show : true, // 显示
              position: 'right', // 相对于节点标签的位置
              // 回调函数，你期望节点标签上显示什么
              formatter(params) {
                return params.data.label;
              },
            }
          },
          // 节点的style
          itemStyle: {
            normal: {
              borderColor: '#fff',
              borderWidth: 1,
              shadowBlur: 10,
              shadowColor: 'rgba(0, 0, 0, 0.1)'
            }
          },
          // 关系边的公用线条样式
          lineStyle: {
            normal: {
              show : true,
              color: 'source', // 决定边的颜色是与起点相同还是与终点相同
              curveness: 0.1// 边的曲度，支持从 0 到 1 的值，值越大曲度越大。
            }
          },
          emphasis: {
            lineStyle: {
              width: 10
            }
          },
          force: {
            edgeLength: 200, // 线的长度，这个距离也会受 repulsion，支持设置成数组表达边长的范围
            repulsion: 500// 节点之间的斥力因子。值越大则斥力越大
          }
        }
      ]
    };
  }
  singletableGraph2(tablename) {
    // tslint:disable-next-line:variable-name
    const table_graph = {
      nodes: [],
      links: [],
      categories: [{target: 0}, {source: 1}]
    };
    let j = 0;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.graph.links.length; i++) {
      // tslint:disable-next-line:triple-equals
      if ((this.graph.links[i].target == tablename)) {
        j = j + 1;
        // tslint:disable-next-line:triple-equals
        if (j == 1) {
          // tslint:disable-next-line:variable-name
          const table_graph_nodes: { [key: string]: any } = {};
          table_graph_nodes.category = 0;
          table_graph_nodes.symbolSize = 38;
          table_graph_nodes.name = this.graph.links[i].target;
          table_graph_nodes.label = this.graph.links[i].target;
          table_graph.nodes.push(table_graph_nodes);
        }
        // tslint:disable-next-line:variable-name
        const graph_links: { [key: string]: any } = {};
        graph_links.source =  this.graph.links[i].target;
        graph_links.target =  this.graph.links[i].source;
        table_graph.links.push(graph_links);
        // tslint:disable-next-line:variable-name
        const table_graph_nodes2: { [key: string]: any } = {};
        table_graph_nodes2.category = 1;
        table_graph_nodes2.symbolSize = 20;
        table_graph_nodes2.name = this.graph.links[i].source;
        table_graph_nodes2.label = this.graph.links[i].source;
        table_graph.nodes.push(table_graph_nodes2);
      }
    }
    console.log(table_graph);
    this.option_table_graph = {
      title: {
        // text: '一致性网络图',//标题
        top: 'top', // 相对在y轴上的位置
        left: 'center'// 相对在x轴上的位置
      },
      tooltip : {// 提示框，鼠标悬浮交互时的信息提示
        trigger: 'item', // 数据触发类型
        formatter(params) {// 触发之后返回的参数，这个函数是关键
          // tslint:disable-next-line:triple-equals
          if (params.data.category != undefined) {// 如果触发节点
            return '课程/学员:' + params.data.label; // 返回标签
          }
        },
      },
      // 全局颜色，图例、节点、边的颜色都是从这里取，按照之前划分的种类依序选取
      // color: ['rgb(194,53,49)', 'rgb(178,144,137)', 'rgb(97,160,168)'],
      animationDuration: 1500,
      animationEasingUpdate: 'quinticInOut',
      // sereis的数据: 用于设置图表数据之用
      series : [
        {
          name: '关联性网络图', // 系列名称
          type: 'graph', // 图表类型
          layout: 'force', // echarts3的变化，force是力向图，circular是和弦图
          draggable: true, // 指示节点是否可以拖动
          data: table_graph.nodes, // 节点数据
          links: table_graph.links, // 边、联系数据
          categories: table_graph.categories, // 节点种类
          focusNodeAdjacency: true, // 当鼠标移动到节点上，突出显示节点以及节点的边和邻接节点
          roam: true, // 是否开启鼠标缩放和平移漫游。默认不开启。如果只想要开启缩放或者平移，可以设置成 'scale' 或者 'move'。设置成 true 为都开启
          label: {// 图形上的文本标签，可用于说明图形的一些数据信息
            normal: {
              show : true, // 显示
              position: 'right', // 相对于节点标签的位置
              // 回调函数，你期望节点标签上显示什么
              formatter(params) {
                return params.data.label;
              },
            }
          },
          // 节点的style
          itemStyle: {
            normal: {
              borderColor: '#fff',
              borderWidth: 1,
              shadowBlur: 10,
              shadowColor: 'rgba(0, 0, 0, 0.3)'
            }
          },
          // 关系边的公用线条样式
          lineStyle: {
            normal: {
              show : true,
              color: 'source', // 决定边的颜色是与起点相同还是与终点相同
              curveness: 0.1// 边的曲度，支持从 0 到 1 的值，值越大曲度越大。
            }
          },
          emphasis: {
            lineStyle: {
              width: 10
            }
          },
          force: {
            edgeLength: 200, // 线的长度，这个距离也会受 repulsion，支持设置成数组表达边长的范围
            repulsion: 500// 节点之间的斥力因子。值越大则斥力越大
          }
        }
      ]
    };
  }

  ngOnInit() {
    this.option_table_graph = {
      title: {
        // text: '一致性网络图',//标题
        top: 'top', // 相对在y轴上的位置
        left: 'center'// 相对在x轴上的位置
      },
      tooltip : {// 提示框，鼠标悬浮交互时的信息提示
        trigger: 'item', // 数据触发类型
        formatter(params) {// 触发之后返回的参数，这个函数是关键
          // tslint:disable-next-line:triple-equals
          if (params.data.category != undefined) {// 如果触发节点
            return '学员/课程:' + params.data.label; // 返回标签
          }
        },
      },
      // 全局颜色，图例、节点、边的颜色都是从这里取，按照之前划分的种类依序选取
      // color: [ 'rgb(180, 82, 205)', 'rgb(72, 118, 255)', 'rgb(17,144,147)'],
      animationDuration: 1500,
      animationEasingUpdate: 'quinticInOut',
      // sereis的数据: 用于设置图表数据之用
      series : [
        {
          name: '关联性网络图', // 系列名称
          type: 'graph', // 图表类型
          layout: 'force', // echarts3的变化，force是力向图，circular是和弦图
          draggable: true, // 指示节点是否可以拖动
          data: this.graph.nodes, // 节点数据
          links: this.graph.links, // 边、联系数据
          categories: this.graph.categories, // 节点种类
          focusNodeAdjacency: true, // 当鼠标移动到节点上，突出显示节点以及节点的边和邻接节点
          roam: true, // 是否开启鼠标缩放和平移漫游。默认不开启。如果只想要开启缩放或者平移，可以设置成 'scale' 或者 'move'。设置成 true 为都开启
          label: {// 图形上的文本标签，可用于说明图形的一些数据信息
            normal: {
              show : true, // 显示
              position: 'right', // 相对于节点标签的位置
              // 回调函数，你期望节点标签上显示什么
              formatter(params) {
                return params.data.label;
              },
            }
          },
          // 节点的style
          itemStyle: {
            normal: {
              borderColor: '#fff',
              borderWidth: 1,
              shadowBlur: 10,
              shadowColor: 'rgba(0, 0, 0, 0.1)'
            }
          },
          // 关系边的公用线条样式
          lineStyle: {
            normal: {
              show : true,
              color: 'source', // 决定边的颜色是与起点相同还是与终点相同
              curveness: 0.1// 边的曲度，支持从 0 到 1 的值，值越大曲度越大。
            }
          },
          emphasis: {
            lineStyle: {
              width: 10
            }
          },
          force: {
            edgeLength: 200, // 线的长度，这个距离也会受 repulsion，支持设置成数组表达边长的范围
            repulsion: 500// 节点之间的斥力因子。值越大则斥力越大
          }
        }
      ]
    };
  }

}
