// import React, { useState, useEffect } from "react";
import React, { Component } from "react";
import cloneDeep from "lodash.clonedeep";
import ReactEcharts from "echarts-for-react";
import { exportData } from "./data";
import { addMonths, format } from "date-fns";

// const ChartType1 = () => {
//   const [option, setOption] = useState({
//     title: {
//       text: "Hello Echarts-for-react.",
//     },
//     tooltip: {
//       trigger: "axis",
//     },
//     legend: {
//       data: ["最新成交价", "预购队列"],
//     },
//     toolbox: {
//       show: true,
//       feature: {
//         dataView: { readOnly: false },
//         restore: {},
//         saveAsImage: {},
//       },
//     },
//     grid: {
//       top: 60,
//       left: 30,
//       right: 60,
//       bottom: 30,
//     },
//     dataZoom: {
//       show: false,
//       start: 0,
//       end: 100,
//     },
//     visualMap: {
//       show: false,
//       min: 0,
//       max: 1000,
//       color: [
//         "#BE002F",
//         "#F20C00",
//         "#F00056",
//         "#FF2D51",
//         "#FF2121",
//         "#FF4C00",
//         "#FF7500",
//         "#FF8936",
//         "#FFA400",
//         "#F0C239",
//         "#FFF143",
//         "#FAFF72",
//         "#C9DD22",
//         "#AFDD22",
//         "#9ED900",
//         "#00E500",
//         "#0EB83A",
//         "#0AA344",
//         "#0C8918",
//         "#057748",
//         "#177CB0",
//       ],
//     },
//     xAxis: [
//       {
//         type: "category",
//         boundaryGap: true,
//         data: (function () {
//           let now = new Date();
//           let res = [];
//           let len = 50;
//           while (len--) {
//             res.unshift(now.toLocaleTimeString().replace(/^\D*/, ""));
//             now = new Date(now - 2000);
//           }
//           return res;
//         })(),
//       },
//       {
//         type: "category",
//         boundaryGap: true,
//         data: (function () {
//           let res = [];
//           let len = 50;
//           while (len--) {
//             res.push(50 - len + 1);
//           }
//           return res;
//         })(),
//       },
//     ],
//     yAxis: [
//       {
//         type: "value",
//         scale: true,
//         name: "价格",
//         max: 20,
//         min: 0,
//         boundaryGap: [0.2, 0.2],
//       },
//       {
//         type: "value",
//         scale: true,
//         name: "预购量",
//         max: 1200,
//         min: 0,
//         boundaryGap: [0.2, 0.2],
//       },
//     ],
//     series: [
//       {
//         name: "预购队列",
//         type: "bar",
//         xAxisIndex: 1,
//         yAxisIndex: 1,
//         itemStyle: {
//           normal: {
//             barBorderRadius: 4,
//           },
//         },
//         animationEasing: "elasticOut",
//         animationDelay: function (idx) {
//           return idx * 10;
//         },
//         animationDelayUpdate: function (idx) {
//           return idx * 10;
//         },
//         data: (function () {
//           let res = [];
//           let len = 50;
//           while (len--) {
//             res.push(Math.round(Math.random() * 1000));
//           }
//           return res;
//         })(),
//       },
//       {
//         name: "最新成交价",
//         type: "line",
//         data: (function () {
//           let res = [];
//           let len = 0;
//           while (len < 50) {
//             res.push((Math.random() * 10 + 5).toFixed(1) - 0);
//             len++;
//           }
//           return res;
//         })(),
//       },
//     ],
//   });
//   let count = 51;
//   const [data1, setData1] = useState(
//     (function () {
//       let res = [];
//       let len = 50;
//       while (len--) {
//         res.push(Math.round(Math.random() * 1000));
//       }
//       return res;
//     })()
//   );

//   const transferData1 = (data) => {
//     data.shift();
//     data.push(Math.round(Math.random() * 1000));
//     return data;
//   };

//   const fetchNewDate = () => {
//     let axisData = new Date().toLocaleTimeString().replace(/^\D*/, "");
//     // const option = cloneDeep(option); // immutable
//     // option.title.text = "Hello Echarts-for-react." + new Date().getSeconds();
//     // let data0 = option.series[0].data;
//     // let data1 = option.series[1].data;
//     // data0.shift();
//     // data0.push(Math.round(Math.random() * 1000));
//     // data1.shift();
//     // data1.push((Math.random() * 10 + 5).toFixed(1) - 0);
//     // setData1(transferData1(data1));
//     // console.log(option);
//     console.log(transferData1(data1));
//     setOption({
//       ...option,
//       series: [
//         {
//           name: "预购队列",
//           type: "bar",
//           xAxisIndex: 1,
//           yAxisIndex: 1,
//           itemStyle: {
//             normal: {
//               barBorderRadius: 4,
//             },
//           },
//           animationEasing: "elasticOut",
//           animationDelay: function (idx) {
//             return idx * 10;
//           },
//           animationDelayUpdate: function (idx) {
//             return idx * 10;
//           },
//           data: transferData1(data1),
//         },
//         // {
//         //   name: "最新成交价",
//         //   type: "line",
//         //   data: (function () {
//         //     let res = [];
//         //     let len = 0;
//         //     while (len < 50) {
//         //       res.push((Math.random() * 10 + 5).toFixed(1) - 0);
//         //       len++;
//         //     }
//         //     return res;
//         //   })(),
//         // },
//       ],
//     });
//   };

//   useEffect(() => {
//     const interval = setInterval(fetchNewDate, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return <ReactEcharts option={option} style={{ height: 400 }} />;
// };

// export default ChartType1;
// 2018 01 2020 09
const colorCode = {
  red: "rgb(253,76,77)",
  green: "rgb(45,196,84)",
  blue: "rgb(22,124,168)",
};

const scale = 10;
const second = 500;

const finalAxis = [];
for (let i = 0; i < scale; i++) {
  console.log(i);
  finalAxis.push(format(addMonths(new Date(2018, 1, 1), i - scale), "yyyy-MM"));
}
console.log(finalAxis);

export default class ChartType1 extends Component {
  constructor(props) {
    super(props);
    this.state = this.getInitialState();
  }
  timeTicket = null;
  count = 1000; // TODO: data1.length : 데이터 총 수량 넣기
  count1 = 0;

  getInitialState = () => ({
    option: this.getOption(),
    pingArray: [],
  });

  fetchNewDate = () => {
    this.count1++;

    // 데이터 끝
    if (exportData.data1.length < this.count1) {
      return null;
    }
    // let axisData = new Date().toLocaleTimeString().replace(/^\D*/, "");

    let axisData = format(new Date(2018, 1, 1), "yyyy-MM");
    const axisDataAdd = addMonths(new Date(2018, 1, 1), this.count1 - 1);

    console.log(format(axisDataAdd, "yyyy-MM"));
    const option = cloneDeep(this.state.option); // immutable
    const pingArray = cloneDeep(this.state.pingArray); // immutable
    option.title.text = "실시간 AI 학습 실예측값";
    let data1 = option.series[1].data; // 예측값
    let data0 = option.series[0].data; // 실측값
    // const newData0 = Math.round(Math.random() * 5);
    // const newData1 = (Math.random() * 5).toFixed(1) - 0;
    const predicData = exportData.data1[this.count1 - 1]; // 예측값
    const realData = exportData.data2[this.count1 - 1]; // 실측값

    data1.shift();
    data1.push(predicData); // 예측값
    data0.shift();
    data0.push(realData); // 실측값

    option.xAxis[0].data.shift();
    // option.xAxis[0].data.push(axisData);
    option.xAxis[0].data.push(format(axisDataAdd, "yyyy-MM"));
    option.xAxis[1].data.shift();
    option.xAxis[1].data.push(this.count++);

    const markPointArray = [];

    // 조건에 맞는 x 값들 pingArray에 저장
    if (Math.abs(realData - predicData) >= 10000000) {
      //   pingArray.push({ time: axisData, data1: realData, data2: predicData });
      pingArray.push({
        time: format(axisDataAdd, "yyyy-MM"),
        data1: realData,
        data2: predicData,
      });
      // 조건에 맞는 실측값의 보더 색깔 변경
      const findIndex = option.series[0].data?.findIndex((d) => d === realData);
      //   console.log(findIndex);
      //   option.series[0].data[findIndex].itemStyle.borderColor = "red";
      //   console.log(option.series[0].data[findIndex]);
    }

    pingArray.map((v) => {
      const varIndex = option.xAxis[0].data?.findIndex((x) => x === v.time);
      //   console.log("변하는", varIndex);
      markPointArray.push({
        name: "custom",
        value: "!",
        xAxis: varIndex,
        yAxis: 0,
      });
    });

    // markPointArray.filter((v) => v.xAxis < 0);
    option.series[0].markPoint.data = markPointArray;

    this.setState({
      option: option,
      pingArray: pingArray,
      markPointArray: markPointArray,
    });
  };

  componentDidMount() {
    if (this.timeTicket) {
      clearInterval(this.timeTicket);
    }
    this.timeTicket = setInterval(this.fetchNewDate, second);
  }

  componentWillUnmount() {
    if (this.timeTicket) {
      clearInterval(this.timeTicket);
    }
  }

  getOption = () => ({
    title: {
      text: "실시간 AI 학습 실예측값",
    },
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: ["예측값", "실측값"],
    },
    toolbox: {
      show: true,
      feature: {
        dataView: { readOnly: false },
        restore: {},
        saveAsImage: {},
      },
    },
    grid: {
      top: 80,
      left: 30,
      right: 60,
      bottom: 30,
      containLabel: true,
    },
    dataZoom: {
      show: false,
      start: 0,
      end: 100,
    },
    // const axisDataAdd = addMonths(new Date(2018, 1, 1), this.count1 - 1);
    xAxis: [
      {
        type: "category",
        boundaryGap: true,
        // data: (function () {
        //   let now = new Date();
        //   let res = [];
        //   let len = scale;
        //   while (len--) {
        //     res.unshift(now.toLocaleTimeString().replace(/^\D*/, ""));
        //     now = new Date(now - 2000);
        //   }
        //   return res;
        // })(),
        data: finalAxis,
      },
      {
        type: "category",
        boundaryGap: true,
        data: (function () {
          let res = [];
          let len = scale;
          while (len--) {
            res.push(scale - len + 1);
          }
          return res;
        })(),
      },
    ],
    yAxis: [
      {
        type: "value",
        scale: true,
        name: "예측값",
        // max: Math.max.apply(null, exportData.data1) + 5,
        max: 5500000,
        min: 0,
        boundaryGap: [0.2, 0.2],
        nameTextStyle: {
          color: colorCode.green,
          padding: [20, 20, 15, 0],
        },
      },
      {
        type: "value",
        scale: true,
        name: "실측값",
        // max: Math.round(Math.max.apply(null, exportData.data2)) + 5,
        max: 5500000,
        min: 0,
        boundaryGap: [0.2, 0.2],
        nameTextStyle: {
          color: colorCode.blue,
          padding: [20, 0, 15, 0],
        },
      },
    ],
    series: [
      {
        name: "실측값",
        type: "bar",
        animation: true,
        xAxisIndex: 1,
        yAxisIndex: 1,
        // animationEasing: "elasticOut",
        // animationDelay: function (idx) {
        //   return idx * 2;
        // },
        // animationDelayUpdate: function (idx) {
        //   return idx * 2;
        // },
        data: (function () {
          let res = [];
          let len = scale;
          while (len--) {
            res.push(0);
          }
          return res;
        })(),
        markPoint: {
          data: [
            // { type: "max", name: "최대" },
            // { name: "custom", value: "!", xAxis: 10, yAxis: 5 },
          ],
          itemStyle: { normal: { color: colorCode.red } },
        },
        itemStyle: {
          normal: { color: colorCode.blue, barBorderRadius: 4 },
        },
      },
      {
        name: "예측값",
        type: "line",
        data: (function () {
          let res = [];
          let len = 0;
          while (len < scale) {
            res.push(0);
            len++;
          }
          return res;
        })(),
        itemStyle: { normal: { color: colorCode.green } },
      },
    ],
  });

  render() {
    return (
      <div className="examples" style={{ margin: "30px 10px" }}>
        <div className="parent">
          <ReactEcharts
            ref="echarts_react"
            option={this.state.option}
            style={{ height: 500 }}
          />
        </div>

        <div>
          <ul className="log">
            {this.state.pingArray.map((v, i) => (
              <li>
                <span>시간 : {v.time}</span>
                <span>예측값 : {v.data1}</span>
                <span>실측값 : {v.data2}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

const data = [
  [
    3387921,
    3478283,
    3257129,
    3359827,
    3258292,
    3102983,
    3012394,
    3032392,
    3019784,
    3182932,
    2927837,
    3429382,
    3384927,
    3826388,
    3219283,
    3382789,
    3398273,
    3392839,
    3239283,
    3212838,
    3192783,
    3129389,
    3029383,
    3492839,
    3329392,
    3328829,
    3298128,
    3272342,
    3129392,
    3082930,
  ],
  [
    2908614,
    2585591,
    3457324,
    3164111,
    3563716,
    3392109,
    3372606,
    3442981,
    3048101,
    3482465,
    3122782,
    2959401,
    3132413,
    2824444,
    3633604,
    3529441,
    3754443,
    3398820,
    3469403,
    3506113,
    3062094,
    3262243,
    2916494,
    3044736,
    3498861,
    5454728,
    3336023,
    3287436,
    3397334,
    3245649,
  ],
];
