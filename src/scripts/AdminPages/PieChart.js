import React, {Component, useEffect, useState} from 'react';
import Chart from 'react-apexcharts';
import '../../css/AdminPages/PieChart.css'
import axios from "axios";

function PieChart() {

    let [cntData, setCntData] = useState(null);
    let [varData, setVarData] = useState(null);

    /* getRevenue라는 url로 접속했을 때 아래 코드 실행 */
    /* getVariety라는 url로 접속했을 때 아래 코드 실행 */
    useEffect(() => {
        return (
            axios.get('/getRevenue')

                .then(( res ) => {
                    setCntData(res.data.comp)
                    console.log(res.data.comp)
                })
                .catch(( error )=>{ console.log( error ) }),

            axios.get('/getVariety')
                .then((res) => {
                    setVarData(res.data.jsonArr);
                    console.log(res.data.jsonArr);
                })
                .catch((error) => { console.log(error) })
        )
    }, [])

    let [count, setCount] = useState({
        options: {
            series: [],
            labels: [],
            colors:['#FFADAD', '#FFD6A5', '#FDFFB6', "#CAFFBF", '#9BF6FF', '#A0C4FF', '#BDB2FF', '#FFC6FF'],
            title: {
                text: "메뉴별 매출정보",
                align: "center",
                style: {
                    fontSize: "32px",
                    fontFamily: "Helvetica, Arial, sans-serif",
                    fontWeight: "bold"
                }
            },
            legend: {
                position: 'bottom',
                fontSize: "20px"
            },
            plotOptions: {
                pie: {
                    dataLabels: {
                        offset: -20
                    }
                }
            },
            dataLabels: {
                enabled: true,
                style: {
                    fontSize: "20px",
                    fontFamily: "Helvetica, Arial, sans-serif",
                    fontWeight: "bold"
                },
                formatter(val, opts) {
                    const name = opts.w.globals.labels[opts.seriesIndex]
                    return [name, val.toFixed(1) + '%']
                }
            }
        }
    })

    let [variety, setVariety] = useState({
        options: {
            series: [],
            labels: [],
            colors:['#FFADAD', '#FFD6A5', '#FDFFB6', "#CAFFBF", '#9BF6FF', '#A0C4FF', '#BDB2FF', '#FFC6FF'],
            title: {
                text: "종류별 매출정보",
                align: "center",
                style: {
                    fontSize: "32px",
                    fontFamily: "Helvetica, Arial, sans-serif",
                    fontWeight: "bold"
                }
            },
            legend: {
                position: 'bottom',
                fontSize: "20px"
            },
            plotOptions: {
                pie: {
                    dataLabels: {
                        offset: -20
                    }
                }
            },
            dataLabels: {
                enabled: true,
                style: {
                    fontSize: "20px",
                    fontFamily: "Helvetica, Arial, sans-serif",
                    fontWeight: "bold"
                },
                formatter(val, opts) {
                    const name = opts.w.globals.labels[opts.seriesIndex]
                    return [name, val.toFixed(1) + '%']
                }
            }
        }
    })

    return (
        <>
            <div style={{display: "none"}}>
                {
                    (function () {
                        if (cntData != null) {
                            /*count.options.series.pop();
                            count.options.labels.pop();*/

                            console.log(cntData);

                            cntData.map((num, index) => {
                                return (
                                    count.options.series.push(cntData[index].수량),
                                    count.options.labels.push(cntData[index].메뉴이름)
                                )
                            })

                            console.log(cntData);

                            /*console.log(count.options.series);
                            console.log(count.options.labels);*/
                        }
                        else return null;
                    })()
                }
                {
                    (function() {
                        if (varData != null) {
                            variety.options.series.pop();
                            variety.options.labels.pop();

                            varData.map((num, index) => {
                                return (
                                    variety.options.series.push(varData[index].수량),
                                    variety.options.labels.push(varData[index].종류)
                                )
                            })


                            /*console.log(variety.options.series);
                            console.log(variety.options.labels);*/
                        }
                        else return null;
                    })()
                }
            </div>
            <div className="pieCharts">
                <Chart options={count.options} series={count.options.series} type="pie" width="700" />
                <Chart options={variety.options} series={variety.options.series} type="pie" width="700" />
            </div>
            
        </>
    )
}

export default PieChart;