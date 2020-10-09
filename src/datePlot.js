/*
 * @Descripttion: 
 * @version: 
 * @Author: Mengwei Li
 * @Date: 2020-04-04 11:20:38
 * @LastEditors: Anke Wang
 * @LastEditTime: 2020-10-09 15:38:03
 */

// import * as echarts from 'echarts';
import { getUniqueVirus } from './dataProcess'


export const drawHeatmapDate = (data) => {

    echarts.init(document.getElementById("datePlot")).clear()
    let a = []

    data.forEach(e => {
        a.push({
            name: e.name, 
            value: [e.name,e.count],
        })
    })

    let option = {
        grid:{
            height: $("datePlot").height(),
            x:40,
            x2:20,
            y:10,
            y2:40
        },
        tooltip: {
            formatter: function (params, ticket, callback) {
                return "<strong>"+params.value[0]+"</strong><br>Isolates: " + params.value[1]
            }
        },
        visualMap: {
            textGap: 3,
            type: 'continuous',
            right: 20,
            bottom: "center",
            textStyle: {
                color: '#000'
            }
        },
        calendar: [{
            top: 20,
            left: 80,
            right: 70,
            bottom:200,
            cellSize: ['auto', 'auto'],
            range: [data[0].name, data[159].name],
            itemStyle: {
                borderWidth: 0.5
            },
            dayLabel: {
                margin: 8,
                nameMap: ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.'],
                firstDay: 1,
                fontSize: 8
            },
            monthLabel: {
                //margin: 8,
                //nameMap: ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.'],
                //firstDay: 1
                //formatter: '{yyyy}-{MM}',
                //padding: 5,
                fontSize : 9,
                nameMap: [
                    '2020/Jan', 'Feb', 'Mar',
                    'Apr', 'May', 'Jun',
                    'Jul', 'Aug', 'Sep',
                    'Oct', 'Nov', '2019/Dec'
                ]
            },
            yearLabel: {
                show: true,
                margin: 45
            }
        },{
            top: 180,
            left: 80,
            right: 70,
            cellSize: ['auto', 'auto'],
            range: [data[160].name, data[data.length-1].name],
            itemStyle: {
                borderWidth: 0.5
            },
            dayLabel: {
                margin: 8,
                nameMap: ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.'],
                firstDay: 1,
                fontSize: 8
            },
            monthLabel: {
                //margin: 8,
                //nameMap: ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.'],
                //firstDay: 1
                //formatter: '{yyyy}-{MM}',
                //padding: 5,
                fontSize : 9,
                nameMap: [
                    'Jan', 'Feb', 'Mar',
                    'Apr', 'May', 'Jun',
                    'Jul', 'Aug', 'Sep',
                    'Oct', 'Nov', 'Dec'
                ]
            },
            yearLabel: {
                show: true,
                margin: 45
            }
        }],
        series: [{
            //name: "heat",
            type: 'heatmap',
            calendarIndex: 0,
            coordinateSystem: 'calendar',
            data: a,
            label: {
                show: true,
                formatter: function(params) {
                   // return params.value[0].split('-')[1]+"-"+params.value[0].split('-')[2]
                   return params.value[0].split('-')[2]
                },
                color: "#6c757d"
            },
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    color: '#fd7e14'
                }
            }
        },{
            //name: "heat",
            type: 'heatmap',
            calendarIndex: 1,
            coordinateSystem: 'calendar',
            data: a,
            label: {
                show: true,
                formatter: function(params) {
                   // return params.value[0].split('-')[1]+"-"+params.value[0].split('-')[2]
                   return params.value[0].split('-')[2]
                },
                color: "#6c757d"
            },
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    color: '#fd7e14'
                }
            }
        }]
    };

    let chart = echarts.init(document.getElementById("datePlot"))
    chart.setOption(option);

    return chart;
}