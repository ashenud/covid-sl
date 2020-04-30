$(document).ready(function() {

    var url = "https://corona-api.com/countries/lk";
    $.getJSON(url, {
        format: "json"
    })
        .done(function(data2) {

        let timeline_date = [];
        let new_confirmed = [];
        let day_recovered = [];
        let new_recovered = [];
        let date = [];
        let total = [];
        let active = [];
        let final_data = [];

        let x=40;
        let y=data2.data.timeline.length-x;
        let j=24;
        let k=data2.data.timeline.length-j;
        let a=14;
        let b=data2.data.timeline.length-a;

        let final_active=data2.data.timeline[0].active;
        let final_deaths=data2.data.timeline[0].deaths;
        let final_recovered=data2.data.timeline[0].recovered;
        let staticColors = ["rgba(156, 39, 176, 0.8)","rgba(76, 175, 80, 0.8)","rgba(244,67,54,0.8)"];

        final_data.push(final_active);
        final_data.push(final_recovered);
        final_data.push(final_deaths);

        let i;
        for (i = k; i >= 0; i--) {
            timeline_date.push(data2.data.timeline[i].date.substr(5,5));
            new_confirmed.push(data2.data.timeline[i].new_confirmed);
        }

        let z;
        for (z = y; z >= 0; z--) {
            day_recovered.push(data2.data.timeline[z].date.substr(5,5));
            new_recovered.push(data2.data.timeline[z].new_recovered);
        }

        let c;
        for (c = b; c >= 0; c--) {
            date.push(data2.data.timeline[c].date.substr(5,5));
            total.push(data2.data.timeline[c].confirmed);
            active.push(data2.data.timeline[c].active);
        }
        
        Chart.defaults.global.defaultFontFamily = 'abhaya';
        
        var ChartTimeline = {
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
                            stepSize: 5,                                
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
                            stepSize: 5,                                
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

        var ChartBreakdown = {
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

        var ChartTotalVSactive = {
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
                            stepSize: 150,                                
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

        var ctxTimeline = document.getElementById('chart-timeline').getContext('2d');
        new Chart(ctxTimeline, ChartTimeline);

        var ctxRecovery = document.getElementById('chart-recovery').getContext('2d');
        new Chart(ctxRecovery, ChartRecovery);

        var ctxBreakdown = document.getElementById('chart-breakdown').getContext('2d');
        new Chart(ctxBreakdown, ChartBreakdown);

        var ctxTotalVSactive = document.getElementById('chart-totalVSactive').getContext('2d');
        new Chart(ctxTotalVSactive, ChartTotalVSactive);
        });

}); 



$(document).ready(function() {

    var url = "https://corona-api.com/timeline";
    $.getJSON(url, {
        format: "json"
    })
        .done(function(data2) {

        let global_date = [];
        let global_total = [];
        let final_data = [];
        let new_cases = [];
        let new_recoveries = [];

        let y=2;
        let x=data2.data.length-y;

        let i;
        for (i = x; i >= 0; i--) {
            global_date.push(data2.data[i].date.substr(5,5));
            global_total.push(data2.data[i].confirmed);
            new_cases.push(data2.data[i].new_confirmed);
            new_recoveries.push(data2.data[i].new_recovered);
        }
        
        let final_active=data2.data[0].active;
        let final_deaths=data2.data[0].deaths;
        let final_recovered=data2.data[0].recovered;
        let staticColors = ["rgba(156, 39, 176, 0.8)","rgba(76, 175, 80, 0.8)","rgba(244,67,54,0.8)"];
        
        final_data.push(final_active);
        final_data.push(final_recovered);
        final_data.push(final_deaths);
        

        var ChartGlobalTotal = {
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
                            stepSize: 1000000,                                
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
        
        var ChartGlobalBreakdown = {
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
        
        var ChartNewVSrecoveries = {
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
                            stepSize: 20000,                                
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

        var ctxGlobalTotal = document.getElementById('chart-global-total').getContext('2d');
        new Chart(ctxGlobalTotal, ChartGlobalTotal);
        
        var ctxGlobalBreakdown = document.getElementById('chart-global-breakdown').getContext('2d');
        new Chart(ctxGlobalBreakdown, ChartGlobalBreakdown);
        
        var ctxNewVSrecoveries = document.getElementById('chart-global-new-vs-recoveries').getContext('2d');
        new Chart(ctxNewVSrecoveries, ChartNewVSrecoveries);
        });
    
        

});