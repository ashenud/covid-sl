<<<<<<< HEAD
$(document).ready(function() {
    
    
    var links = {
        lolalTimeline: "https://corona-api.com/countries/lk",
        globalTimeline: "https://corona-api.com/timeline",
    };    

    if (lang == "si") {
        localTimelineSi();
        globalTimelineSi();
    } else {
        localTimeline();
        globalTimeline();
    }

    
    function getData(params, callback) {
        $.ajax({
            url: params.url,
            data: params.data,
            method: params.method,
        }).done(function (data, status) {
            if (status === "success") {
                callback(data);
            } else {
                console.error("API Failed");
            }
        }).fail(function (jqXHR, textStatus, errorThrown) {
            console.error("API Failed");
        });
    }
    
    function localTimeline() {
        var apiData = {
            url: links.lolalTimeline,
            data: {},
            method: "GET",
        };
        getData(apiData, function (local) {
            if (local.hasOwnProperty("data")) {
                
                let timeline_date = [];
                let new_confirmed = [];
                let day_recovered = [];
                let new_recovered = [];
                let date = [];
                let total = [];
                let active = [];
                let final_data = [];

                let x=40;
                let y=local.data.timeline.length-x;
                let j=24;
                let k=local.data.timeline.length-j;
                let a=14;
                let b=local.data.timeline.length-a;

                let final_active=local.data.timeline[0].active;
                let final_deaths=local.data.timeline[0].deaths;
                let final_recovered=local.data.timeline[0].recovered;
                let staticColors = ["rgba(156, 39, 176, 0.8)","rgba(76, 175, 80, 0.8)","rgba(244,67,54,0.8)"];

                final_data.push(final_active);
                final_data.push(final_recovered);
                final_data.push(final_deaths);

                let i;
                for (i = k; i >= 0; i--) {
                    timeline_date.push(local.data.timeline[i].date.substr(5,5));
                    new_confirmed.push(local.data.timeline[i].new_confirmed);
                }

                let z;
                for (z = y; z >= 0; z--) {
                    day_recovered.push(local.data.timeline[z].date.substr(5,5));
                    new_recovered.push(local.data.timeline[z].new_recovered);
                }

                let c;
                for (c = b; c >= 0; c--) {
                    date.push(local.data.timeline[c].date.substr(5,5));
                    total.push(local.data.timeline[c].confirmed);
                    active.push(local.data.timeline[c].active);
                }

                Chart.defaults.global.defaultFontFamily = 'Poppins';

                var ChartTimeline = {
                    type: 'bar',
                    data: {
                        labels: timeline_date,
                        datasets: [{
                            label: 'New Confirmed',
                            data: new_confirmed,
                            borderWidth: 1,
                            backgroundColor: '#f44336'
                        }]
                    },
                    options: {
                        legend: {
                            display: false
                        },
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true,
                                    stepSize: 100,                                
                                    fontColor: 'rgba(255, 255, 255, 0.7)',
                                    fontSize: 7,
                                    padding: 5,
                                },
                                gridLines: false
                            }],
                            xAxes: [{
                                barPercentage: 0.8,
                                ticks: {
                                    fontColor: 'rgba(255, 255, 255, 0.7)',
                                    fontSize: 9,
                                    padding: 10,
                                    autoSkipPadding: 15,
                                    maxRotation: 0 
                                },
                                gridLines: false
                            }]
                        },
                        tooltips: {
                            mode: 'index',
                            intersect: false,
                            callbacks: {
                                // this callback is used to create the tooltip label
                                label: function (tooltipItem, data) {
                                    // get the data label and data value to display
                                    // convert the data value to local string so it uses a comma seperated number
                                    var dataLabel = data.datasets[tooltipItem.datasetIndex].label;
                                    var value = ': ' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].toLocaleString();

                                    // make this isn't a multi-line label (e.g. [["label 1 - line 1, "line 2, ], [etc...]])
                                    if (Chart.helpers.isArray(dataLabel)) {
                                        // show value on first line of multiline label
                                        // need to clone because we are changing the value
                                        dataLabel = dataLabel.slice();
                                        dataLabel[0] += value;
                                    } else {
                                        dataLabel += value;
                                    }

                                    // return the text to display on the tooltip
                                    return dataLabel;
                                }
                            }
                        },
                        responsive: true
                    }
                }

                var ChartRecovery = {
                    type: 'bar',
                    data: {
                        labels: day_recovered,
                        datasets: [{
                            label: 'New Recovered',
                            data: new_recovered,
                            borderWidth: 1,
                            backgroundColor: 'rgba(76, 175, 80, 0.6)'
                        }]
                    },
                    options: {
                        legend: {
                            display: false
                        },
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true,
                                    stepSize: 40,                                
                                    fontColor: 'rgba(255, 255, 255, 0.7)',
                                    fontSize: 7,
                                    padding: 5,
                                },
                                gridLines: false
                            }],
                            xAxes: [{
                                barPercentage: 1,
                                ticks: {
                                    fontColor: 'rgba(255, 255, 255, 0.7)',
                                    fontSize: 8,
                                    padding: 10,
                                    autoSkipPadding: 15,
                                    maxRotation: 0 
                                },
                                gridLines: false
                            }]
                        },
                        tooltips: {
                            mode: 'index',
                            intersect: false,
                            callbacks: {
                                // this callback is used to create the tooltip label
                                label: function (tooltipItem, data) {
                                    // get the data label and data value to display
                                    // convert the data value to local string so it uses a comma seperated number
                                    var dataLabel = data.datasets[tooltipItem.datasetIndex].label;
                                    var value = ': ' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].toLocaleString();

                                    // make this isn't a multi-line label (e.g. [["label 1 - line 1, "line 2, ], [etc...]])
                                    if (Chart.helpers.isArray(dataLabel)) {
                                        // show value on first line of multiline label
                                        // need to clone because we are changing the value
                                        dataLabel = dataLabel.slice();
                                        dataLabel[0] += value;
                                    } else {
                                        dataLabel += value;
                                    }

                                    // return the text to display on the tooltip
                                    return dataLabel;
                                }
                            }
                        },
                        responsive: true
                    }
                }

                var ChartBreakdown = {
                    type: 'doughnut',
                    data: {
                        labels: ['Active Cases','Recoveries','Deaths'],
                        datasets: [{
                                data: final_data,
                                backgroundColor: staticColors,
                                borderWidth: 0,
                                pointRadius: 0
                            }]
                    },
                    options: {
                        legend: {
                            display: true,
                            position: 'bottom',
                            labels: {
                                usePointStyle:true,
                                fontColor: '#fff',
                                fontSize: 10,
                            },
                        },
                        tooltips: {
                            mode: 'index',
                            intersect: false,
                            callbacks: {
                                // this callback is used to create the tooltip label
                                label: function (tooltipItem, data) {
                                    // get the data label and data value to display
                                    // convert the data value to local string so it uses a comma seperated number
                                    var dataLabel = data.labels[tooltipItem.index];
                                    var value = ': ' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].toLocaleString();

                                    // make this isn't a multi-line label (e.g. [["label 1 - line 1, "line 2, ], [etc...]])
                                    if (Chart.helpers.isArray(dataLabel)) {
                                        // show value on first line of multiline label
                                        // need to clone because we are changing the value
                                        dataLabel = dataLabel.slice();
                                        dataLabel[0] += value;
                                    } else {
                                        dataLabel += value;
                                    }

                                    // return the text to display on the tooltip
                                    return dataLabel;
                                }
                            }
                        },
                        responsive: true,
                    }
                }

                var ChartTotalVSactive = {
                    type: 'line',
                    data: {
                        labels: date,
                        datasets: [{
                                label: 'Total cases',
                                data: total,
                                borderColor: 'rgba(0,188,212, 0.6)',
                                backgroundColor: 'rgba(0,188,212, 1)',
                                fill: false,
                                borderWidth: 2,
                                pointRadius: 0,
                                pointStyle: 'line'
                            },
                            {
                                label: 'Active cases',
                                data: active,
                                fill: false,
                                borderColor: 'rgba(156, 39, 176, 0.6)',
                                backgroundColor: 'rgba(156, 39, 176, 1)',
                                borderWidth: 2,
                                pointRadius: 0,
                                pointStyle: 'line'
                            }]
                    },
                    options: {
                        legend: {
                            display: true,
                            labels: {
                                fontColor: '#fff',
                                fontSize: 11,
                                usePointStyle: true,
                            }
                        },
                        scales: {
                            yAxes: [{
                                type: 'linear',
                                ticks: {
                                    beginAtZero: true,
                                    stepSize: 1000,                                
                                    fontColor: 'rgba(255, 255, 255, 0.7)',
                                    fontSize: 7,
                                    padding: 5,
                                },
                                gridLines: false
                            }],
                            xAxes: [{
                                ticks: {
                                    fontColor: 'rgba(255, 255, 255, 0.7)',
                                    fontSize: 10,
                                    padding: 10,
                                    autoSkipPadding: 15,
                                    maxRotation: 0
                                },
                                gridLines: false
                            }]
                        },
                        tooltips: {
                            mode: 'index',
                            intersect: false,
                            callbacks: {
                                // this callback is used to create the tooltip label
                                label: function (tooltipItem, data) {
                                    // get the data label and data value to display
                                    // convert the data value to local string so it uses a comma seperated number
                                    var dataLabel = data.datasets[tooltipItem.datasetIndex].label;
                                    var value = ': ' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].toLocaleString();

                                    // make this isn't a multi-line label (e.g. [["label 1 - line 1, "line 2, ], [etc...]])
                                    if (Chart.helpers.isArray(dataLabel)) {
                                        // show value on first line of multiline label
                                        // need to clone because we are changing the value
                                        dataLabel = dataLabel.slice();
                                        dataLabel[0] += value;
                                    } else {
                                        dataLabel += value;
                                    }

                                    // return the text to display on the tooltip
                                    return dataLabel;
                                }
                            }
                        },
                        hover: {
                            mode: 'index',
                            intersect: false
                        },
                        responsive: true,
                    }
                }

                var ctxTimeline = document.getElementById('chart-timeline').getContext('2d');
                new Chart(ctxTimeline, ChartTimeline);

                var ctxRecovery = document.getElementById('chart-recovery').getContext('2d');
                new Chart(ctxRecovery, ChartRecovery);

                var ctxBreakdown = document.getElementById('chart-breakdown').getContext('2d');
                new Chart(ctxBreakdown, ChartBreakdown);

                var ctxTotalVSactive = document.getElementById('chart-totalVSactive').getContext('2d');
                new Chart(ctxTotalVSactive, ChartTotalVSactive);
                
                } 
        
            else {
                console.error("API Failed");
            }
        })
    }
    
    function localTimelineSi() {
        var apiData = {
            url: links.lolalTimeline,
            data: {},
            method: "GET",
        };
        getData(apiData, function (local) {
            if (local.hasOwnProperty("data")) {
                
                let timeline_date = [];
                let new_confirmed = [];
                let day_recovered = [];
                let new_recovered = [];
                let date = [];
                let total = [];
                let active = [];
                let final_data = [];

                let x=40;
                let y=local.data.timeline.length-x;
                let j=24;
                let k=local.data.timeline.length-j;
                let a=14;
                let b=local.data.timeline.length-a;

                let final_active=local.data.timeline[0].active;
                let final_deaths=local.data.timeline[0].deaths;
                let final_recovered=local.data.timeline[0].recovered;
                let staticColors = ["rgba(156, 39, 176, 0.8)","rgba(76, 175, 80, 0.8)","rgba(244,67,54,0.8)"];

                final_data.push(final_active);
                final_data.push(final_recovered);
                final_data.push(final_deaths);

                let i;
                for (i = k; i >= 0; i--) {
                    timeline_date.push(local.data.timeline[i].date.substr(5,5));
                    new_confirmed.push(local.data.timeline[i].new_confirmed);
                }

                let z;
                for (z = y; z >= 0; z--) {
                    day_recovered.push(local.data.timeline[z].date.substr(5,5));
                    new_recovered.push(local.data.timeline[z].new_recovered);
                }

                let c;
                for (c = b; c >= 0; c--) {
                    date.push(local.data.timeline[c].date.substr(5,5));
                    total.push(local.data.timeline[c].confirmed);
                    active.push(local.data.timeline[c].active);
                }

                Chart.defaults.global.defaultFontFamily = 'abhaya';

                var ChartTimelineSi = {
                    type: 'bar',
                    data: {
                        labels: timeline_date,
                        datasets: [{
                            label: 'නව හඳුනාගැනීම්',
                            data: new_confirmed,
                            borderWidth: 1,
                            backgroundColor: '#f44336'
                        }]
                    },
                    options: {
                        legend: {
                            display: false
                        },
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true,
                                    stepSize: 100,                                
                                    fontColor: 'rgba(255, 255, 255, 1)',
                                    fontSize: 7,
                                    padding: 5,
                                },
                                gridLines: false
                            }],
                            xAxes: [{
                                barPercentage: 0.4,
                                ticks: {
                                    fontColor: 'rgba(255, 255, 255, 1)',
                                    fontSize: 11,
                                    padding: 10,
                                    autoSkipPadding: 15,
                                    maxRotation: 0 
                                },
                                gridLines: false
                            }]
                        },
                        tooltips: {
                            mode: 'index',
                            intersect: false,
                            callbacks: {
                                // this callback is used to create the tooltip label
                                label: function (tooltipItem, data) {
                                    // get the data label and data value to display
                                    // convert the data value to local string so it uses a comma seperated number
                                    var dataLabel = data.datasets[tooltipItem.datasetIndex].label;
                                    var value = ': ' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].toLocaleString();

                                    // make this isn't a multi-line label (e.g. [["label 1 - line 1, "line 2, ], [etc...]])
                                    if (Chart.helpers.isArray(dataLabel)) {
                                        // show value on first line of multiline label
                                        // need to clone because we are changing the value
                                        dataLabel = dataLabel.slice();
                                        dataLabel[0] += value;
                                    } else {
                                        dataLabel += value;
                                    }

                                    // return the text to display on the tooltip
                                    return dataLabel;
                                }
                            }
                        },
                        responsive: true
                    }
                }

                var ChartRecoverySi = {
                    type: 'bar',
                    data: {
                        labels: day_recovered,
                        datasets: [{
                            label: 'නව සුවවීම්',
                            data: new_recovered,
                            borderWidth: 1,
                            backgroundColor: 'rgba(76, 175, 80, 0.6)'
                        }]
                    },
                    options: {
                        legend: {
                            display: false
                        },
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true,
                                    stepSize: 40,                                
                                    fontColor: 'rgba(255, 255, 255, 1)',
                                    fontSize: 7,
                                    padding: 5,
                                },
                                gridLines: false
                            }],
                            xAxes: [{
                                barPercentage: 0.4,
                                ticks: {
                                    fontColor: 'rgba(255, 255, 255, 1)',
                                    fontSize: 8,
                                    padding: 10,
                                    autoSkipPadding: 15,
                                    maxRotation: 0 
                                },
                                gridLines: false
                            }]
                        },
                        tooltips: {
                            mode: 'index',
                            intersect: false,
                            callbacks: {
                                // this callback is used to create the tooltip label
                                label: function (tooltipItem, data) {
                                    // get the data label and data value to display
                                    // convert the data value to local string so it uses a comma seperated number
                                    var dataLabel = data.datasets[tooltipItem.datasetIndex].label;
                                    var value = ': ' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].toLocaleString();

                                    // make this isn't a multi-line label (e.g. [["label 1 - line 1, "line 2, ], [etc...]])
                                    if (Chart.helpers.isArray(dataLabel)) {
                                        // show value on first line of multiline label
                                        // need to clone because we are changing the value
                                        dataLabel = dataLabel.slice();
                                        dataLabel[0] += value;
                                    } else {
                                        dataLabel += value;
                                    }

                                    // return the text to display on the tooltip
                                    return dataLabel;
                                }
                            }
                        },
                        responsive: true,
                    }
                }

                var ChartBreakdownSi = {
                    type: 'doughnut',
                    data: {
                        labels: ['සක්‍රීය','සුවය ලැබූ','මරණ'],
                        datasets: [{
                                data: final_data,
                                backgroundColor: staticColors,
                                borderWidth: 0,
                                pointRadius: 0
                            }]
                    },
                    options: {
                        legend: {
                            display: true,
                            position: 'bottom',
                            labels: {
                                usePointStyle:true,
                                fontColor: '#fff',
                                fontSize: 10,
                            },
                        },
                        tooltips: {
                            mode: 'index',
                            intersect: false,
                            callbacks: {
                                // this callback is used to create the tooltip label
                                label: function (tooltipItem, data) {
                                    // get the data label and data value to display
                                    // convert the data value to local string so it uses a comma seperated number
                                    var dataLabel = data.labels[tooltipItem.index];
                                    var value = ': ' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].toLocaleString();

                                    // make this isn't a multi-line label (e.g. [["label 1 - line 1, "line 2, ], [etc...]])
                                    if (Chart.helpers.isArray(dataLabel)) {
                                        // show value on first line of multiline label
                                        // need to clone because we are changing the value
                                        dataLabel = dataLabel.slice();
                                        dataLabel[0] += value;
                                    } else {
                                        dataLabel += value;
                                    }

                                    // return the text to display on the tooltip
                                    return dataLabel;
                                }
                            }
                        },
                        responsive: true
                    }  
                }

                var ChartTotalVSactiveSi = {
                    type: 'line',
                    data: {
                        labels: date,
                        datasets: [{
                                label: 'මුළු හඳුනාගැනීම්',
                                data: total,
                                borderColor: 'rgba(0,188,212, 0.6)',
                                backgroundColor: 'rgba(0,188,212, 1)',
                                fill: false,
                                borderWidth: 2,
                                pointRadius: 0,
                                pointStyle: 'line',
                            },
                            {
                                label: 'සක්‍රීය',
                                data: active,
                                fill: false,
                                borderColor: 'rgba(156, 39, 176, 0.6)',
                                backgroundColor: 'rgba(156, 39, 176, 1)',
                                borderWidth: 2,
                                pointRadius: 0,
                                pointStyle: 'line',
                            }]
                    },
                    options: {
                        legend: {
                            display: true,
                            labels: {
                                fontColor: '#fff',
                                fontSize: 11,
                                usePointStyle: true,
                            }
                        },
                        scales: {
                            yAxes: [{
                                type: 'linear',
                                ticks: {
                                    beginAtZero: true,
                                    stepSize: 1000,                                
                                    fontColor: 'rgba(255, 255, 255, 1)',
                                    fontSize: 7,
                                    padding: 5,
                                },
                                gridLines: false
                            }],
                            xAxes: [{
                                ticks: {
                                    fontColor: 'rgba(255, 255, 255, 1)',
                                    fontSize: 9,
                                    padding: 10,
                                    autoSkipPadding: 15,
                                    maxRotation: 0
                                },
                                gridLines: false
                            }]
                        },
                        tooltips: {
                            mode: 'index',
                            intersect: false,
                            callbacks: {
                                // this callback is used to create the tooltip label
                                label: function (tooltipItem, data) {
                                    // get the data label and data value to display
                                    // convert the data value to local string so it uses a comma seperated number
                                    var dataLabel = data.datasets[tooltipItem.datasetIndex].label;
                                    var value = ': ' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].toLocaleString();

                                    // make this isn't a multi-line label (e.g. [["label 1 - line 1, "line 2, ], [etc...]])
                                    if (Chart.helpers.isArray(dataLabel)) {
                                        // show value on first line of multiline label
                                        // need to clone because we are changing the value
                                        dataLabel = dataLabel.slice();
                                        dataLabel[0] += value;
                                    } else {
                                        dataLabel += value;
                                    }

                                    // return the text to display on the tooltip
                                    return dataLabel;
                                }
                            }
                        },
                        hover: {
                            mode: 'index',
                            intersect: false
                        },
                        responsive: true,
                    }
                }

                var ctxTimelineSi = document.getElementById('chart-timelineSi').getContext('2d');
                new Chart(ctxTimelineSi, ChartTimelineSi);

                var ctxRecoverySi = document.getElementById('chart-recoverySi').getContext('2d');
                new Chart(ctxRecoverySi, ChartRecoverySi);

                var ctxBreakdownSi = document.getElementById('chart-breakdownSi').getContext('2d');
                new Chart(ctxBreakdownSi, ChartBreakdownSi);

                var ctxTotalVSactiveSi = document.getElementById('chart-totalVSactiveSi').getContext('2d');
                new Chart(ctxTotalVSactiveSi, ChartTotalVSactiveSi);
                
                } 
        
            else {
                console.error("API Failed");
            }
        })
    }
    
    function globalTimeline() {
        var apiData = {
            url: links.globalTimeline,
            data: {},
            method: "GET",
        };
        getData(apiData, function (global) {
            if (global.hasOwnProperty("data")) {
    
                let global_date = [];
                let global_total = [];
                let final_data = [];
                let new_cases = [];
                let new_recoveries = [];

                let y=2;
                let x=global.data.length-y;

                let i;
                for (i = x; i >= 0; i--) {
                    global_date.push(global.data[i].date.substr(5,5));
                    global_total.push(global.data[i].confirmed);
                    new_cases.push(global.data[i].new_confirmed);
                    new_recoveries.push(global.data[i].new_recovered);
                }


                let final_active=global.data[0].active;
                let final_deaths=global.data[0].deaths;
                let final_recovered=global.data[0].recovered;
                let staticColors = ["rgba(156, 39, 176, 0.8)","rgba(76, 175, 80, 0.8)","rgba(244,67,54,0.8)"];

                final_data.push(final_active);
                final_data.push(final_recovered);
                final_data.push(final_deaths);


                var ChartGlobalTotal = {
                    type: 'line',
                    data: {
                        labels: global_date,
                        datasets: [{
                                label: 'Total cases',
                                data: global_total,
                                borderColor: 'rgba(255, 152, 0, 1)',
                                backgroundColor: 'rgba(255, 152, 0, 1)',
                                fill: false,
                                borderWidth: 3,
                                pointRadius: 0
                            }]
                    },
                    options: {
                        legend: {
                            display: true,
                            labels: {
                                fontColor: '#fff',
                                fontSize: 10,
                            }
                        },
                        scales: {
                            yAxes: [{
                                type: 'linear',
                                ticks: {
                                    beginAtZero: true,
                                    stepSize: 10000000,                                
                                    fontColor: 'rgba(255, 255, 255, 0.7)',
                                    fontSize: 8,
                                    padding: 5,
                                    callback: function (value, index, values) {
                                        return value / 1e6 + 'M';
                                    }
                                },
                                gridLines: false
                            }],
                            xAxes: [{
                                ticks: {
                                    fontColor: 'rgba(255, 255, 255, 0.7)',
                                    fontSize: 8,
                                    padding: 10,
                                    autoSkipPadding: 10,
                                    maxRotation: 0
                                },
                                gridLines: false
                            }]
                        },
                        tooltips: {
                            mode: 'index',
                            intersect: false,
                            callbacks: {
                                // this callback is used to create the tooltip label
                                label: function (tooltipItem, data) {
                                    // get the data label and data value to display
                                    // convert the data value to local string so it uses a comma seperated number
                                    var dataLabel = data.datasets[tooltipItem.datasetIndex].label;
                                    var value = ': ' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].toLocaleString();

                                    // make this isn't a multi-line label (e.g. [["label 1 - line 1, "line 2, ], [etc...]])
                                    if (Chart.helpers.isArray(dataLabel)) {
                                        // show value on first line of multiline label
                                        // need to clone because we are changing the value
                                        dataLabel = dataLabel.slice();
                                        dataLabel[0] += value;
                                    } else {
                                        dataLabel += value;
                                    }

                                    // return the text to display on the tooltip
                                    return dataLabel;
                                }
                            }
                        },
                        hover: {
                            mode: 'index',
                            intersect: false
                        },
                        responsive: true,
                    }
                }

                var ChartGlobalBreakdown = {
                    type: 'doughnut',
                    data: {
                        labels: ['Active Cases','Recoveries','Deaths'],
                        datasets: [{
                                data: final_data,
                                backgroundColor: staticColors,
                                borderWidth: 0,
                                pointRadius: 0
                            }]
                    },
                    options: {
                        legend: {
                            display: true,
                            position: 'bottom',
                            labels: {
                                usePointStyle:true,
                                fontColor: '#fff',
                                fontSize: 10,
                            },
                        },
                        tooltips: {
                            mode: 'index',
                            intersect: false,
                            callbacks: {
                                // this callback is used to create the tooltip label
                                label: function (tooltipItem, data) {
                                    // get the data label and data value to display
                                    // convert the data value to local string so it uses a comma seperated number
                                    var dataLabel = data.labels[tooltipItem.index];
                                    var value = ': ' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].toLocaleString();

                                    // make this isn't a multi-line label (e.g. [["label 1 - line 1, "line 2, ], [etc...]])
                                    if (Chart.helpers.isArray(dataLabel)) {
                                        // show value on first line of multiline label
                                        // need to clone because we are changing the value
                                        dataLabel = dataLabel.slice();
                                        dataLabel[0] += value;
                                    } else {
                                        dataLabel += value;
                                    }

                                    // return the text to display on the tooltip
                                    return dataLabel;
                                }
                            }
                        },
                        responsive: true,
                    }
                }

                var ChartNewVSrecoveries = {
                    type: 'line',
                    data: {
                        labels: global_date,
                        datasets: [{
                                label: 'New Cases',
                                data: new_cases,
                                borderColor: '#f44336',
                                backgroundColor: '#f44336',
                                fill: false,
                                borderWidth: 1,
                                pointRadius: 0,
                                pointStyle: 'line'
                            },
                            {
                                label: 'New Recoveries',
                                data: new_recoveries,
                                fill: false,
                                borderColor: 'rgba(76, 175, 80, 1)',
                                backgroundColor: 'rgba(76, 175, 80, 1)',
                                borderWidth: 1,
                                pointRadius: 0,
                                pointStyle: 'line'
                            }]
                    },
                    options: {
                        legend: {
                            display: true,
                            labels: {
                                fontColor: '#fff',
                                fontSize: 11,
                                usePointStyle: true,
                            }
                        },
                        scales: {
                            yAxes: [{
                                type: 'linear',
                                ticks: {
                                    beginAtZero: true,
                                    stepSize: 800000,                                
                                    fontColor: 'rgba(255, 255, 255, 0.7)',
                                    fontSize: 8,
                                    padding: 5,
                                    callback: function (value, index, values) {
                                        return value / 1e3 + 'K';
                                    }
                                },
                                gridLines: false
                            }],
                            xAxes: [{
                                ticks: {
                                    fontColor: 'rgba(255, 255, 255, 0.7)',
                                    fontSize: 10,
                                    padding: 10,
                                    autoSkipPadding: 15,
                                    maxRotation: 0
                                },
                                gridLines: false
                            }]
                        },
                        tooltips: {
                            mode: 'index',
                            intersect: false,
                            bodyFontSize: 10,
                            callbacks: {
                                // this callback is used to create the tooltip label
                                label: function (tooltipItem, data) {
                                    // get the data label and data value to display
                                    // convert the data value to local string so it uses a comma seperated number
                                    var dataLabel = data.datasets[tooltipItem.datasetIndex].label;
                                    var value = ': ' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].toLocaleString();

                                    // make this isn't a multi-line label (e.g. [["label 1 - line 1, "line 2, ], [etc...]])
                                    if (Chart.helpers.isArray(dataLabel)) {
                                        // show value on first line of multiline label
                                        // need to clone because we are changing the value
                                        dataLabel = dataLabel.slice();
                                        dataLabel[0] += value;
                                    } else {
                                        dataLabel += value;
                                    }

                                    // return the text to display on the tooltip
                                    return dataLabel;
                                }
                            }
                        },
                        hover: {
                            mode: 'index',
                            intersect: false
                        },
                        responsive: true,
                    }
                }

                var ctxGlobalTotal = document.getElementById('chart-global-total').getContext('2d');
                new Chart(ctxGlobalTotal, ChartGlobalTotal);

                var ctxGlobalBreakdown = document.getElementById('chart-global-breakdown').getContext('2d');
                new Chart(ctxGlobalBreakdown, ChartGlobalBreakdown);

                var ctxNewVSrecoveries = document.getElementById('chart-global-new-vs-recoveries').getContext('2d');
                new Chart(ctxNewVSrecoveries, ChartNewVSrecoveries);
        
        
    
            }else {
                console.error("API Failed");
            }
        })
    }
    
    function globalTimelineSi() {
        var apiData = {
            url: links.globalTimeline,
            data: {},
            method: "GET",
        };
        getData(apiData, function (global) {
            if (global.hasOwnProperty("data")) {
    
                let global_date = [];
                let global_total = [];
                let final_data = [];
                let new_cases = [];
                let new_recoveries = [];

                let y=2;
                let x=global.data.length-y;

                let i;
                for (i = x; i >= 0; i--) {
                    global_date.push(global.data[i].date.substr(5,5));
                    global_total.push(global.data[i].confirmed);
                    new_cases.push(global.data[i].new_confirmed);
                    new_recoveries.push(global.data[i].new_recovered);
                }

                let final_active=global.data[0].active;
                let final_deaths=global.data[0].deaths;
                let final_recovered=global.data[0].recovered;
                let staticColors = ["rgba(156, 39, 176, 0.8)","rgba(76, 175, 80, 0.8)","rgba(244,67,54,0.8)"];

                final_data.push(final_active);
                final_data.push(final_recovered);
                final_data.push(final_deaths);


                var ChartGlobalTotalSi = {
                    type: 'line',
                    data: {
                        labels: global_date,
                        datasets: [{
                                label: 'මුළු හඳුනාගැනීම්',
                                data: global_total,
                                borderColor: 'rgba(255, 152, 0, 1)',
                                backgroundColor: 'rgba(255, 152, 0, 1)',
                                fill: false,
                                borderWidth: 3,
                                pointRadius: 0
                            }]
                    },
                    options: {
                        legend: {
                            display: true,
                            labels: {
                                fontColor: '#fff',
                                fontSize: 10,
                            }
                        },
                        scales: {
                            yAxes: [{
                                type: 'linear',
                                ticks: {
                                    beginAtZero: true,
                                    stepSize: 10000000,                                
                                    fontColor: 'rgba(255, 255, 255, 1)',
                                    fontSize: 8,
                                    padding: 5,
                                    callback: function (value, index, values) {
                                        return value / 1e6 + 'M';
                                    }
                                },
                                gridLines: false
                            }],
                            xAxes: [{
                                ticks: {
                                    fontColor: 'rgba(255, 255, 255, 1)',
                                    fontSize: 8,
                                    padding: 10,
                                    autoSkipPadding: 10,
                                    maxRotation: 0
                                },
                                gridLines: false
                            }]
                        },
                        tooltips: {
                            mode: 'index',
                            intersect: false,
                            callbacks: {
                                // this callback is used to create the tooltip label
                                label: function (tooltipItem, data) {
                                    // get the data label and data value to display
                                    // convert the data value to local string so it uses a comma seperated number
                                    var dataLabel = data.datasets[tooltipItem.datasetIndex].label;
                                    var value = ': ' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].toLocaleString();

                                    // make this isn't a multi-line label (e.g. [["label 1 - line 1, "line 2, ], [etc...]])
                                    if (Chart.helpers.isArray(dataLabel)) {
                                        // show value on first line of multiline label
                                        // need to clone because we are changing the value
                                        dataLabel = dataLabel.slice();
                                        dataLabel[0] += value;
                                    } else {
                                        dataLabel += value;
                                    }

                                    // return the text to display on the tooltip
                                    return dataLabel;
                                }
                            }
                        },
                        hover: {
                            mode: 'index',
                            intersect: false
                        },
                        responsive: true,
                    }
                }

                var ChartGlobalBreakdownSi = {
                    type: 'doughnut',
                    data: {
                        labels: ['සක්‍රීය','සුවය ලැබූ','මරණ'],
                        datasets: [{
                                data: final_data,
                                backgroundColor: staticColors,
                                borderWidth: 0,
                                pointRadius: 0
                            }]
                    },
                    options: {
                        legend: {
                            display: true,
                            position: 'bottom',
                            labels: {
                                usePointStyle:true,
                                fontColor: '#fff',
                                fontSize: 10,
                            },
                        },
                        tooltips: {
                            mode: 'index',
                            intersect: false,
                            callbacks: {
                                // this callback is used to create the tooltip label
                                label: function (tooltipItem, data) {
                                    // get the data label and data value to display
                                    // convert the data value to local string so it uses a comma seperated number
                                    var dataLabel = data.labels[tooltipItem.index];
                                    var value = ': ' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].toLocaleString();

                                    // make this isn't a multi-line label (e.g. [["label 1 - line 1, "line 2, ], [etc...]])
                                    if (Chart.helpers.isArray(dataLabel)) {
                                        // show value on first line of multiline label
                                        // need to clone because we are changing the value
                                        dataLabel = dataLabel.slice();
                                        dataLabel[0] += value;
                                    } else {
                                        dataLabel += value;
                                    }

                                    // return the text to display on the tooltip
                                    return dataLabel;
                                }
                            }
                        },
                        responsive: true
                    }
                }

                var ChartNewVSrecoveriesSi = {
                    type: 'line',
                    data: {
                        labels: global_date,
                        datasets: [{
                                label: 'නව හඳුනාගැනීම්',
                                data: new_cases,
                                borderColor: '#f44336',
                                backgroundColor: '#f44336',
                                fill: false,
                                borderWidth: 1,
                                pointRadius: 0,
                                pointStyle: 'line'
                            },
                            {
                                label: 'නව සුවවීම්',
                                data: new_recoveries,
                                fill: false,
                                borderColor: 'rgba(76, 175, 80, 1)',
                                backgroundColor: 'rgba(76, 175, 80, 1)',
                                borderWidth: 1,
                                pointRadius: 0,
                                pointStyle: 'line'
                            }]
                    },
                    options: {
                        legend: {
                            display: true,
                            labels: {
                                fontColor: '#fff',
                                fontSize: 11,
                                usePointStyle: true,
                            }
                        },
                        scales: {
                            yAxes: [{
                                type: 'linear',
                                ticks: {
                                    beginAtZero: true,
                                    stepSize: 800000,                                
                                    fontColor: 'rgba(255, 255, 255, 1)',
                                    fontSize: 8,
                                    padding: 5,
                                    callback: function (value, index, values) {
                                        return value / 1e3 + 'K';
                                    }
                                },
                                gridLines: false
                            }],
                            xAxes: [{
                                ticks: {
                                    fontColor: 'rgba(255, 255, 255, 1)',
                                    fontSize: 10,
                                    padding: 10,
                                    autoSkipPadding: 15,
                                    maxRotation: 0
                                },
                                gridLines: false
                            }]
                        },
                        tooltips: {
                            mode: 'index',
                            intersect: false,
                            bodyFontSize: 10,
                            callbacks: {
                                // this callback is used to create the tooltip label
                                label: function (tooltipItem, data) {
                                    // get the data label and data value to display
                                    // convert the data value to local string so it uses a comma seperated number
                                    var dataLabel = data.datasets[tooltipItem.datasetIndex].label;
                                    var value = ': ' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].toLocaleString();

                                    // make this isn't a multi-line label (e.g. [["label 1 - line 1, "line 2, ], [etc...]])
                                    if (Chart.helpers.isArray(dataLabel)) {
                                        // show value on first line of multiline label
                                        // need to clone because we are changing the value
                                        dataLabel = dataLabel.slice();
                                        dataLabel[0] += value;
                                    } else {
                                        dataLabel += value;
                                    }

                                    // return the text to display on the tooltip
                                    return dataLabel;
                                }
                            }
                        },
                        hover: {
                            mode: 'index',
                            intersect: false
                        },
                        responsive: true,
                    }
                }

                var ctxGlobalTotalSi = document.getElementById('chart-global-totalSi').getContext('2d');
                new Chart(ctxGlobalTotalSi, ChartGlobalTotalSi);

                var ctxGlobalBreakdownSi = document.getElementById('chart-global-breakdownSi').getContext('2d');
                new Chart(ctxGlobalBreakdownSi, ChartGlobalBreakdownSi);

                var ctxNewVSrecoveriesSi = document.getElementById('chart-global-new-vs-recoveriesSi').getContext('2d');
                new Chart(ctxNewVSrecoveriesSi, ChartNewVSrecoveriesSi);
        
        
    
            } 
            
            else {
                console.error("API Failed");
            }
        })
    }

}); 
=======
$(document).ready(function(){var e={lolalTimeline:"https://corona-api.com/countries/lk",globalTimeline:"https://corona-api.com/timeline"};function t(e,t){$.ajax({url:e.url,data:e.data,method:e.method}).done(function(e,a){"success"===a?t(e):console.error("API Failed")}).fail(function(e,t,a){console.error("API Failed")})}"si"==lang?(t({url:e.lolalTimeline,data:{},method:"GET"},function(e){if(e.hasOwnProperty("data")){let s,c,b,g=[],p=[],u=[],f=[],h=[],m=[],x=[],C=[],y=40,S=e.data.timeline.length-y,v=24,k=e.data.timeline.length-v,A=14,I=e.data.timeline.length-A,z=e.data.timeline[0].active,w=e.data.timeline[0].deaths,L=e.data.timeline[0].recovered,P=["rgba(156, 39, 176, 0.8)","rgba(76, 175, 80, 0.8)","rgba(244,67,54,0.8)"];for(C.push(z),C.push(L),C.push(w),s=k;s>=0;s--)g.push(e.data.timeline[s].date.substr(5,5)),p.push(e.data.timeline[s].new_confirmed);for(c=S;c>=0;c--)u.push(e.data.timeline[c].date.substr(5,5)),f.push(e.data.timeline[c].new_recovered);for(b=I;b>=0;b--)h.push(e.data.timeline[b].date.substr(5,5)),m.push(e.data.timeline[b].confirmed),x.push(e.data.timeline[b].active);Chart.defaults.global.defaultFontFamily="abhaya";var t={type:"bar",data:{labels:g,datasets:[{label:"නව හඳුනාගැනීම්",data:p,borderWidth:1,backgroundColor:"#f44336"}]},options:{legend:{display:!1},scales:{yAxes:[{ticks:{beginAtZero:!0,stepSize:20,fontColor:"rgba(255, 255, 255, 1)",fontSize:7,padding:5},gridLines:!1}],xAxes:[{barPercentage:.4,ticks:{fontColor:"rgba(255, 255, 255, 1)",fontSize:11,padding:10,autoSkipPadding:15,maxRotation:0},gridLines:!1}]},tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){var a=t.datasets[e.datasetIndex].label,o=": "+t.datasets[e.datasetIndex].data[e.index].toLocaleString();return Chart.helpers.isArray(a)?(a=a.slice())[0]+=o:a+=o,a}}},responsive:!0}},a={type:"bar",data:{labels:u,datasets:[{label:"නව සුවවීම්",data:f,borderWidth:1,backgroundColor:"rgba(76, 175, 80, 0.6)"}]},options:{legend:{display:!1},scales:{yAxes:[{ticks:{beginAtZero:!0,stepSize:10,fontColor:"rgba(255, 255, 255, 1)",fontSize:7,padding:5},gridLines:!1}],xAxes:[{barPercentage:.4,ticks:{fontColor:"rgba(255, 255, 255, 1)",fontSize:8,padding:10,autoSkipPadding:15,maxRotation:0},gridLines:!1}]},tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){var a=t.datasets[e.datasetIndex].label,o=": "+t.datasets[e.datasetIndex].data[e.index].toLocaleString();return Chart.helpers.isArray(a)?(a=a.slice())[0]+=o:a+=o,a}}},responsive:!0}},o={type:"doughnut",data:{labels:["සක්‍රීය","සුවය ලැබූ","මරණ"],datasets:[{data:C,backgroundColor:P,borderWidth:0,pointRadius:0}]},options:{legend:{display:!0,position:"bottom",labels:{usePointStyle:!0,fontColor:"#fff",fontSize:10}},tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){var a=t.labels[e.index],o=": "+t.datasets[e.datasetIndex].data[e.index].toLocaleString();return Chart.helpers.isArray(a)?(a=a.slice())[0]+=o:a+=o,a}}},responsive:!0}},i={type:"line",data:{labels:h,datasets:[{label:"මුළු හඳුනාගැනීම්",data:m,borderColor:"rgba(0,188,212, 0.6)",backgroundColor:"rgba(0,188,212, 1)",fill:!1,borderWidth:2,pointRadius:0,pointStyle:"line"},{label:"සක්‍රීය",data:x,fill:!1,borderColor:"rgba(156, 39, 176, 0.6)",backgroundColor:"rgba(156, 39, 176, 1)",borderWidth:2,pointRadius:0,pointStyle:"line"}]},options:{legend:{display:!0,labels:{fontColor:"#fff",fontSize:11,usePointStyle:!0}},scales:{yAxes:[{type:"linear",ticks:{beginAtZero:!0,stepSize:300,fontColor:"rgba(255, 255, 255, 1)",fontSize:7,padding:5},gridLines:!1}],xAxes:[{ticks:{fontColor:"rgba(255, 255, 255, 1)",fontSize:9,padding:10,autoSkipPadding:15,maxRotation:0},gridLines:!1}]},tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){var a=t.datasets[e.datasetIndex].label,o=": "+t.datasets[e.datasetIndex].data[e.index].toLocaleString();return Chart.helpers.isArray(a)?(a=a.slice())[0]+=o:a+=o,a}}},hover:{mode:"index",intersect:!1},responsive:!0}},n=document.getElementById("chart-timelineSi").getContext("2d");new Chart(n,t);var d=document.getElementById("chart-recoverySi").getContext("2d");new Chart(d,a);var r=document.getElementById("chart-breakdownSi").getContext("2d");new Chart(r,o);var l=document.getElementById("chart-totalVSactiveSi").getContext("2d");new Chart(l,i)}else console.error("API Failed")}),t({url:e.globalTimeline,data:{},method:"GET"},function(e){if(e.hasOwnProperty("data")){let r,l=[],s=[],c=[],b=[],g=[],p=2,u=e.data.length-p;for(r=u;r>=0;r--)l.push(e.data[r].date.substr(5,5)),s.push(e.data[r].confirmed),b.push(e.data[r].new_confirmed),g.push(e.data[r].new_recovered);let f=e.data[0].active,h=e.data[0].deaths,m=e.data[0].recovered,x=["rgba(156, 39, 176, 0.8)","rgba(76, 175, 80, 0.8)","rgba(244,67,54,0.8)"];c.push(f),c.push(m),c.push(h);var t={type:"line",data:{labels:l,datasets:[{label:"මුළු හඳුනාගැනීම්",data:s,borderColor:"rgba(255, 152, 0, 1)",backgroundColor:"rgba(255, 152, 0, 1)",fill:!1,borderWidth:3,pointRadius:0}]},options:{legend:{display:!0,labels:{fontColor:"#fff",fontSize:10}},scales:{yAxes:[{type:"linear",ticks:{beginAtZero:!0,stepSize:2e6,fontColor:"rgba(255, 255, 255, 1)",fontSize:8,padding:5,callback:function(e,t,a){return e/1e6+"M"}},gridLines:!1}],xAxes:[{ticks:{fontColor:"rgba(255, 255, 255, 1)",fontSize:8,padding:10,autoSkipPadding:10,maxRotation:0},gridLines:!1}]},tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){var a=t.datasets[e.datasetIndex].label,o=": "+t.datasets[e.datasetIndex].data[e.index].toLocaleString();return Chart.helpers.isArray(a)?(a=a.slice())[0]+=o:a+=o,a}}},hover:{mode:"index",intersect:!1},responsive:!0}},a={type:"doughnut",data:{labels:["සක්‍රීය","සුවය ලැබූ","මරණ"],datasets:[{data:c,backgroundColor:x,borderWidth:0,pointRadius:0}]},options:{legend:{display:!0,position:"bottom",labels:{usePointStyle:!0,fontColor:"#fff",fontSize:10}},tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){var a=t.labels[e.index],o=": "+t.datasets[e.datasetIndex].data[e.index].toLocaleString();return Chart.helpers.isArray(a)?(a=a.slice())[0]+=o:a+=o,a}}},responsive:!0}},o={type:"line",data:{labels:l,datasets:[{label:"නව හඳුනාගැනීම්",data:b,borderColor:"#f44336",backgroundColor:"#f44336",fill:!1,borderWidth:1,pointRadius:0,pointStyle:"line"},{label:"නව සුවවීම්",data:g,fill:!1,borderColor:"rgba(76, 175, 80, 1)",backgroundColor:"rgba(76, 175, 80, 1)",borderWidth:1,pointRadius:0,pointStyle:"line"}]},options:{legend:{display:!0,labels:{fontColor:"#fff",fontSize:11,usePointStyle:!0}},scales:{yAxes:[{type:"linear",ticks:{beginAtZero:!0,stepSize:1e5,fontColor:"rgba(255, 255, 255, 1)",fontSize:8,padding:5,callback:function(e,t,a){return e/1e3+"K"}},gridLines:!1}],xAxes:[{ticks:{fontColor:"rgba(255, 255, 255, 1)",fontSize:10,padding:10,autoSkipPadding:15,maxRotation:0},gridLines:!1}]},tooltips:{mode:"index",intersect:!1,bodyFontSize:10,callbacks:{label:function(e,t){var a=t.datasets[e.datasetIndex].label,o=": "+t.datasets[e.datasetIndex].data[e.index].toLocaleString();return Chart.helpers.isArray(a)?(a=a.slice())[0]+=o:a+=o,a}}},hover:{mode:"index",intersect:!1},responsive:!0}},i=document.getElementById("chart-global-totalSi").getContext("2d");new Chart(i,t);var n=document.getElementById("chart-global-breakdownSi").getContext("2d");new Chart(n,a);var d=document.getElementById("chart-global-new-vs-recoveriesSi").getContext("2d");new Chart(d,o)}else console.error("API Failed")})):(t({url:e.lolalTimeline,data:{},method:"GET"},function(e){if(e.hasOwnProperty("data")){let s,c,b,g=[],p=[],u=[],f=[],h=[],m=[],x=[],C=[],y=40,S=e.data.timeline.length-y,v=24,k=e.data.timeline.length-v,A=14,I=e.data.timeline.length-A,z=e.data.timeline[0].active,w=e.data.timeline[0].deaths,L=e.data.timeline[0].recovered,P=["rgba(156, 39, 176, 0.8)","rgba(76, 175, 80, 0.8)","rgba(244,67,54,0.8)"];for(C.push(z),C.push(L),C.push(w),s=k;s>=0;s--)g.push(e.data.timeline[s].date.substr(5,5)),p.push(e.data.timeline[s].new_confirmed);for(c=S;c>=0;c--)u.push(e.data.timeline[c].date.substr(5,5)),f.push(e.data.timeline[c].new_recovered);for(b=I;b>=0;b--)h.push(e.data.timeline[b].date.substr(5,5)),m.push(e.data.timeline[b].confirmed),x.push(e.data.timeline[b].active);Chart.defaults.global.defaultFontFamily="Poppins";var t={type:"bar",data:{labels:g,datasets:[{label:"New Confirmed",data:p,borderWidth:1,backgroundColor:"#f44336"}]},options:{legend:{display:!1},scales:{yAxes:[{ticks:{beginAtZero:!0,stepSize:20,fontColor:"rgba(255, 255, 255, 0.7)",fontSize:7,padding:5},gridLines:!1}],xAxes:[{barPercentage:.4,ticks:{fontColor:"rgba(255, 255, 255, 0.7)",fontSize:9,padding:10,autoSkipPadding:15,maxRotation:0},gridLines:!1}]},tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){var a=t.datasets[e.datasetIndex].label,o=": "+t.datasets[e.datasetIndex].data[e.index].toLocaleString();return Chart.helpers.isArray(a)?(a=a.slice())[0]+=o:a+=o,a}}},responsive:!0}},a={type:"bar",data:{labels:u,datasets:[{label:"New Recovered",data:f,borderWidth:1,backgroundColor:"rgba(76, 175, 80, 0.6)"}]},options:{legend:{display:!1},scales:{yAxes:[{ticks:{beginAtZero:!0,stepSize:10,fontColor:"rgba(255, 255, 255, 0.7)",fontSize:7,padding:5},gridLines:!1}],xAxes:[{barPercentage:.4,ticks:{fontColor:"rgba(255, 255, 255, 0.7)",fontSize:8,padding:10,autoSkipPadding:15,maxRotation:0},gridLines:!1}]},tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){var a=t.datasets[e.datasetIndex].label,o=": "+t.datasets[e.datasetIndex].data[e.index].toLocaleString();return Chart.helpers.isArray(a)?(a=a.slice())[0]+=o:a+=o,a}}},responsive:!0}},o={type:"doughnut",data:{labels:["Active Cases","Recoveries","Deaths"],datasets:[{data:C,backgroundColor:P,borderWidth:0,pointRadius:0}]},options:{legend:{display:!0,position:"bottom",labels:{usePointStyle:!0,fontColor:"#fff",fontSize:10}},tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){var a=t.labels[e.index],o=": "+t.datasets[e.datasetIndex].data[e.index].toLocaleString();return Chart.helpers.isArray(a)?(a=a.slice())[0]+=o:a+=o,a}}},responsive:!0}},i={type:"line",data:{labels:h,datasets:[{label:"Total cases",data:m,borderColor:"rgba(0,188,212, 0.6)",backgroundColor:"rgba(0,188,212, 1)",fill:!1,borderWidth:2,pointRadius:0,pointStyle:"line"},{label:"Active cases",data:x,fill:!1,borderColor:"rgba(156, 39, 176, 0.6)",backgroundColor:"rgba(156, 39, 176, 1)",borderWidth:2,pointRadius:0,pointStyle:"line"}]},options:{legend:{display:!0,labels:{fontColor:"#fff",fontSize:11,usePointStyle:!0}},scales:{yAxes:[{type:"linear",ticks:{beginAtZero:!0,stepSize:300,fontColor:"rgba(255, 255, 255, 0.7)",fontSize:7,padding:5},gridLines:!1}],xAxes:[{ticks:{fontColor:"rgba(255, 255, 255, 0.7)",fontSize:10,padding:10,autoSkipPadding:15,maxRotation:0},gridLines:!1}]},tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){var a=t.datasets[e.datasetIndex].label,o=": "+t.datasets[e.datasetIndex].data[e.index].toLocaleString();return Chart.helpers.isArray(a)?(a=a.slice())[0]+=o:a+=o,a}}},hover:{mode:"index",intersect:!1},responsive:!0}},n=document.getElementById("chart-timeline").getContext("2d");new Chart(n,t);var d=document.getElementById("chart-recovery").getContext("2d");new Chart(d,a);var r=document.getElementById("chart-breakdown").getContext("2d");new Chart(r,o);var l=document.getElementById("chart-totalVSactive").getContext("2d");new Chart(l,i)}else console.error("API Failed")}),t({url:e.globalTimeline,data:{},method:"GET"},function(e){if(e.hasOwnProperty("data")){let r,l=[],s=[],c=[],b=[],g=[],p=2,u=e.data.length-p;for(r=u;r>=0;r--)l.push(e.data[r].date.substr(5,5)),s.push(e.data[r].confirmed),b.push(e.data[r].new_confirmed),g.push(e.data[r].new_recovered);let f=e.data[0].active,h=e.data[0].deaths,m=e.data[0].recovered,x=["rgba(156, 39, 176, 0.8)","rgba(76, 175, 80, 0.8)","rgba(244,67,54,0.8)"];c.push(f),c.push(m),c.push(h);var t={type:"line",data:{labels:l,datasets:[{label:"Total cases",data:s,borderColor:"rgba(255, 152, 0, 1)",backgroundColor:"rgba(255, 152, 0, 1)",fill:!1,borderWidth:3,pointRadius:0}]},options:{legend:{display:!0,labels:{fontColor:"#fff",fontSize:10}},scales:{yAxes:[{type:"linear",ticks:{beginAtZero:!0,stepSize:2e6,fontColor:"rgba(255, 255, 255, 0.7)",fontSize:8,padding:5,callback:function(e,t,a){return e/1e6+"M"}},gridLines:!1}],xAxes:[{ticks:{fontColor:"rgba(255, 255, 255, 0.7)",fontSize:8,padding:10,autoSkipPadding:10,maxRotation:0},gridLines:!1}]},tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){var a=t.datasets[e.datasetIndex].label,o=": "+t.datasets[e.datasetIndex].data[e.index].toLocaleString();return Chart.helpers.isArray(a)?(a=a.slice())[0]+=o:a+=o,a}}},hover:{mode:"index",intersect:!1},responsive:!0}},a={type:"doughnut",data:{labels:["Active Cases","Recoveries","Deaths"],datasets:[{data:c,backgroundColor:x,borderWidth:0,pointRadius:0}]},options:{legend:{display:!0,position:"bottom",labels:{usePointStyle:!0,fontColor:"#fff",fontSize:10}},tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){var a=t.labels[e.index],o=": "+t.datasets[e.datasetIndex].data[e.index].toLocaleString();return Chart.helpers.isArray(a)?(a=a.slice())[0]+=o:a+=o,a}}},responsive:!0}},o={type:"line",data:{labels:l,datasets:[{label:"New Cases",data:b,borderColor:"#f44336",backgroundColor:"#f44336",fill:!1,borderWidth:1,pointRadius:0,pointStyle:"line"},{label:"New Recoveries",data:g,fill:!1,borderColor:"rgba(76, 175, 80, 1)",backgroundColor:"rgba(76, 175, 80, 1)",borderWidth:1,pointRadius:0,pointStyle:"line"}]},options:{legend:{display:!0,labels:{fontColor:"#fff",fontSize:11,usePointStyle:!0}},scales:{yAxes:[{type:"linear",ticks:{beginAtZero:!0,stepSize:1e5,fontColor:"rgba(255, 255, 255, 0.7)",fontSize:8,padding:5,callback:function(e,t,a){return e/1e3+"K"}},gridLines:!1}],xAxes:[{ticks:{fontColor:"rgba(255, 255, 255, 0.7)",fontSize:10,padding:10,autoSkipPadding:15,maxRotation:0},gridLines:!1}]},tooltips:{mode:"index",intersect:!1,bodyFontSize:10,callbacks:{label:function(e,t){var a=t.datasets[e.datasetIndex].label,o=": "+t.datasets[e.datasetIndex].data[e.index].toLocaleString();return Chart.helpers.isArray(a)?(a=a.slice())[0]+=o:a+=o,a}}},hover:{mode:"index",intersect:!1},responsive:!0}},i=document.getElementById("chart-global-total").getContext("2d");new Chart(i,t);var n=document.getElementById("chart-global-breakdown").getContext("2d");new Chart(n,a);var d=document.getElementById("chart-global-new-vs-recoveries").getContext("2d");new Chart(d,o)}else console.error("API Failed")}))});
>>>>>>> origin/code-minify
