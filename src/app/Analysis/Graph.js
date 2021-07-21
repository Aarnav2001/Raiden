import React, {Component, useState} from 'react'
import { ProgressBar } from 'react-bootstrap';
import Projectinfo from "./projectinfo";
import {useSelector} from "react-redux";
import {Bar, Line} from "react-chartjs-2";

const Graph = ({datas}) => {
    const avg=[
        {
        Name:"Municipal Council",
        totaltrans:0,
        totalatms:0,
        avgnum:0.00,
        },
        {
            Name:"Municipal Corporation",
            totaltrans:0,
            totalatms:0,
            avgnum:0.00,
        },
        {
            Name:"Census Town",
            totaltrans:0,
            totalatms:0,
            avgnum:0.00,
        },
        {
            Name:"Cantonment (Board)",
            totaltrans:0,
            totalatms:0,
            avgnum:0.00,
        },
        {
            Name: "Nagar Panchayat",
            totaltrans: 0,
            totalatms: 0,
            avgnum: 0.00,
        }]

    for (let i in datas){
        for (let j in avg){
            if(avg[j].Name===datas[i].Status)
            {
                avg[j].totalatms += datas[i].Number
                avg[j].totaltrans += datas[i].Monthly
            }
        }
    }

    const marketingOverviewOptions= {
        responsive: true,
        maintainAspectRatio: true,
        layout: {
            padding: {
                left: 0,
                right: 0,
                top: 20,
                bottom: 0
            }
        },
        scales: {
            yAxes: [{
                gridLines: {
                    display: false,
                    color: "#dde4eb",
                    zeroLineColor: "#dde4eb"
                }
            }],
            xAxes: [{
                gridLines: {
                    display: true,
                    color: "#dde4eb",
                    zeroLineColor: "#dde4eb"
                },
                barPercentage: 0.2
            }]
        },
        elements: {
            point: {
                radius: 0
            }
        }
    };
    const LineOptions=   {
        responsive: true,
        animation: {
            animateScale: true,
            animateRotate: true
        },
        elements: {
            point: {
                radius: 0
            }
        },
        layout: {
            padding: {
                left: -10,
                right: 0,
                top: 0,
                bottom: -10
            }
        },
        legend: false,
        scales: {
            xAxes: [{
                gridLines: {
                    display: false,
                    color: '#fff',
                    zeroLineColor:  '#fff',
                },
                ticks: {
                    display: false,
                    color:  '#fff',
                    zeroLineColor:  '#fff',
                }
            }],
            yAxes: [{
                gridLines: {
                    display: false,
                    color:  '#fff',
                    zeroLineColor:  '#fff',
                },
                ticks: {
                    display: false,
                    color: '#fff',
                    zeroLineColor:  '#fff',
                }
            }]
        }
    };
    const marketingOverviewData= {
        labels: avg.map((data) => (
            data.Name
        )),
        datasets: [{
            label: 'Average Montly transactions',
            data:avg.map((data) => (
                data.totaltrans/data.totalatms
            )),
            backgroundColor: '#826af9',
            borderColor: '#826af9',
            borderWidth: 0
        }
        ]
    };
    const Populationdata=datas.sort((a,b)=>{
        return a.Population-b.Population
    });

    const PopulationData= {
        labels: Populationdata.map((data) => (
            data.Population
        )),
        datasets: [{
            label: 'Population',
            data: Populationdata.map((data) => (
                data.Monthly
            )),
            backgroundColor: '#6d7cfc',
            borderWidth: 3,
            fill: true
        }
        ]
    };
    const Numberdata=datas.sort((a,b)=>{
        return a.Number-b.Number
    });

    const NumberData= {
        labels: Numberdata.map((data) => (
            data.Number
        )),
        datasets: [{
            label: 'Number of ATMs',
            data: Numberdata.map((data) => (
                data.Monthly
            )),
            backgroundColor: '#6d7cfc',
            borderWidth: 3,
            fill: true
        }
        ]
    };
    console.log(avg)
    return (
        <div className="row">
            <div className="col-lg-12 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <h4>Average Monthly Transactions:</h4>
                        <Bar data={marketingOverviewData} options={marketingOverviewOptions} height={100}
                             id="marketingOverviewChart1"/>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <h4>Montly Tranactions vs Population:</h4>
                        <Line data={PopulationData} options={LineOptions} height={50}
                              width={100}
                              id="salesStatisticsChart"/>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <h4>Montly Tranactions vs Number of ATM:</h4>
                        <Line data={NumberData} options={LineOptions} height={50}
                              width={100}
                              id="salesStatisticsChart"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Graph
