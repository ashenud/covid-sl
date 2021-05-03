$(document).ready(function(){var e={lolalTimeline:"https://corona-api.com/countries/lk",globalTimeline:"https://corona-api.com/timeline"};function t(e,t){$.ajax({url:e.url,data:e.data,method:e.method}).done(function(e,a){"success"===a?t(e):console.error("API Failed")}).fail(function(e,t,a){console.error("API Failed")})}"si"==lang?(t({url:e.lolalTimeline,data:{},method:"GET"},function(e){if(e.hasOwnProperty("data")){let s,c,b,g=[],p=[],u=[],f=[],h=[],m=[],x=[],C=[],y=310,S=e.data.timeline.length-y,v=310,k=e.data.timeline.length-v,A=14,I=e.data.timeline.length-A,z=e.data.timeline[0].active,w=e.data.timeline[0].deaths,L=e.data.timeline[0].recovered,P=["rgba(156, 39, 176, 0.8)","rgba(76, 175, 80, 0.8)","rgba(244,67,54,0.8)"];for(C.push(z),C.push(L),C.push(w),s=k;s>=0;s--)g.push(e.data.timeline[s].date.substr(5,5)),p.push(e.data.timeline[s].new_confirmed);for(c=S;c>=0;c--)u.push(e.data.timeline[c].date.substr(5,5)),f.push(e.data.timeline[c].new_recovered);for(b=I;b>=0;b--)h.push(e.data.timeline[b].date.substr(5,5)),m.push(e.data.timeline[b].confirmed),x.push(e.data.timeline[b].active);Chart.defaults.global.defaultFontFamily="abhaya";var t={type:"bar",data:{labels:g,datasets:[{label:"නව හඳුනාගැනීම්",data:p,borderWidth:1,backgroundColor:"#f44336"}]},options:{legend:{display:!1},scales:{yAxes:[{ticks:{beginAtZero:!0,stepSize:250,fontColor:"rgba(255, 255, 255, 1)",fontSize:7,padding:5},gridLines:!1}],xAxes:[{barPercentage:.4,ticks:{fontColor:"rgba(255, 255, 255, 1)",fontSize:11,padding:10,autoSkipPadding:15,maxRotation:0},gridLines:!1}]},tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){var a=t.datasets[e.datasetIndex].label,o=": "+t.datasets[e.datasetIndex].data[e.index].toLocaleString();return Chart.helpers.isArray(a)?(a=a.slice())[0]+=o:a+=o,a}}},responsive:!0}},a={type:"bar",data:{labels:u,datasets:[{label:"නව සුවවීම්",data:f,borderWidth:1,backgroundColor:"rgba(76, 175, 80, 0.6)"}]},options:{legend:{display:!1},scales:{yAxes:[{ticks:{beginAtZero:!0,stepSize:250,fontColor:"rgba(255, 255, 255, 1)",fontSize:7,padding:5},gridLines:!1}],xAxes:[{barPercentage:.4,ticks:{fontColor:"rgba(255, 255, 255, 1)",fontSize:8,padding:10,autoSkipPadding:15,maxRotation:0},gridLines:!1}]},tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){var a=t.datasets[e.datasetIndex].label,o=": "+t.datasets[e.datasetIndex].data[e.index].toLocaleString();return Chart.helpers.isArray(a)?(a=a.slice())[0]+=o:a+=o,a}}},responsive:!0}},o={type:"doughnut",data:{labels:["සක්‍රීය","සුවය ලැබූ","මරණ"],datasets:[{data:C,backgroundColor:P,borderWidth:0,pointRadius:0}]},options:{legend:{display:!0,position:"bottom",labels:{usePointStyle:!0,fontColor:"#fff",fontSize:10}},tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){var a=t.labels[e.index],o=": "+t.datasets[e.datasetIndex].data[e.index].toLocaleString();return Chart.helpers.isArray(a)?(a=a.slice())[0]+=o:a+=o,a}}},responsive:!0}},n={type:"line",data:{labels:h,datasets:[{label:"මුළු හඳුනාගැනීම්",data:m,borderColor:"rgba(0,188,212, 0.6)",backgroundColor:"rgba(0,188,212, 1)",fill:!1,borderWidth:2,pointRadius:0,pointStyle:"line"},{label:"සක්‍රීය",data:x,fill:!1,borderColor:"rgba(156, 39, 176, 0.6)",backgroundColor:"rgba(156, 39, 176, 1)",borderWidth:2,pointRadius:0,pointStyle:"line"}]},options:{legend:{display:!0,labels:{fontColor:"#fff",fontSize:11,usePointStyle:!0}},scales:{yAxes:[{type:"linear",ticks:{beginAtZero:!0,stepSize:2e4,fontColor:"rgba(255, 255, 255, 1)",fontSize:7,padding:5,callback:function(e,t,a){return e/1e3+"K"}},gridLines:!1}],xAxes:[{ticks:{fontColor:"rgba(255, 255, 255, 1)",fontSize:9,padding:10,autoSkipPadding:15,maxRotation:0},gridLines:!1}]},tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){var a=t.datasets[e.datasetIndex].label,o=": "+t.datasets[e.datasetIndex].data[e.index].toLocaleString();return Chart.helpers.isArray(a)?(a=a.slice())[0]+=o:a+=o,a}}},hover:{mode:"index",intersect:!1},responsive:!0}},i=document.getElementById("chart-timelineSi").getContext("2d");new Chart(i,t);var r=document.getElementById("chart-recoverySi").getContext("2d");new Chart(r,a);var d=document.getElementById("chart-breakdownSi").getContext("2d");new Chart(d,o);var l=document.getElementById("chart-totalVSactiveSi").getContext("2d");new Chart(l,n)}else console.error("API Failed")}),t({url:e.globalTimeline,data:{},method:"GET"},function(e){if(e.hasOwnProperty("data")){let d,l=[],s=[],c=[],b=[],g=[],p=2,u=e.data.length-p;for(d=u;d>=0;d--)l.push(e.data[d].date.substr(5,5)),s.push(e.data[d].confirmed),b.push(e.data[d].new_confirmed),g.push(e.data[d].new_recovered);let f=e.data[0].active,h=e.data[0].deaths,m=e.data[0].recovered,x=["rgba(156, 39, 176, 0.8)","rgba(76, 175, 80, 0.8)","rgba(244,67,54,0.8)"];c.push(f),c.push(m),c.push(h);var t={type:"line",data:{labels:l,datasets:[{label:"මුළු හඳුනාගැනීම්",data:s,borderColor:"rgba(255, 152, 0, 1)",backgroundColor:"rgba(255, 152, 0, 1)",fill:!1,borderWidth:3,pointRadius:0}]},options:{legend:{display:!0,labels:{fontColor:"#fff",fontSize:10}},scales:{yAxes:[{type:"linear",ticks:{beginAtZero:!0,stepSize:4e7,fontColor:"rgba(255, 255, 255, 1)",fontSize:8,padding:5,callback:function(e,t,a){return e/1e6+"M"}},gridLines:!1}],xAxes:[{ticks:{fontColor:"rgba(255, 255, 255, 1)",fontSize:8,padding:10,autoSkipPadding:10,maxRotation:0},gridLines:!1}]},tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){var a=t.datasets[e.datasetIndex].label,o=": "+t.datasets[e.datasetIndex].data[e.index].toLocaleString();return Chart.helpers.isArray(a)?(a=a.slice())[0]+=o:a+=o,a}}},hover:{mode:"index",intersect:!1},responsive:!0}},a={type:"doughnut",data:{labels:["සක්‍රීය","සුවය ලැබූ","මරණ"],datasets:[{data:c,backgroundColor:x,borderWidth:0,pointRadius:0}]},options:{legend:{display:!0,position:"bottom",labels:{usePointStyle:!0,fontColor:"#fff",fontSize:10}},tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){var a=t.labels[e.index],o=": "+t.datasets[e.datasetIndex].data[e.index].toLocaleString();return Chart.helpers.isArray(a)?(a=a.slice())[0]+=o:a+=o,a}}},responsive:!0}},o={type:"line",data:{labels:l,datasets:[{label:"නව හඳුනාගැනීම්",data:b,borderColor:"#f44336",backgroundColor:"#f44336",fill:!1,borderWidth:1,pointRadius:0,pointStyle:"line"},{label:"නව සුවවීම්",data:g,fill:!1,borderColor:"rgba(76, 175, 80, 1)",backgroundColor:"rgba(76, 175, 80, 1)",borderWidth:1,pointRadius:0,pointStyle:"line"}]},options:{legend:{display:!0,labels:{fontColor:"#fff",fontSize:11,usePointStyle:!0}},scales:{yAxes:[{type:"linear",ticks:{beginAtZero:!0,stepSize:5e5,fontColor:"rgba(255, 255, 255, 1)",fontSize:8,padding:5,callback:function(e,t,a){return e/1e3+"K"}},gridLines:!1}],xAxes:[{ticks:{fontColor:"rgba(255, 255, 255, 1)",fontSize:10,padding:10,autoSkipPadding:15,maxRotation:0},gridLines:!1}]},tooltips:{mode:"index",intersect:!1,bodyFontSize:10,callbacks:{label:function(e,t){var a=t.datasets[e.datasetIndex].label,o=": "+t.datasets[e.datasetIndex].data[e.index].toLocaleString();return Chart.helpers.isArray(a)?(a=a.slice())[0]+=o:a+=o,a}}},hover:{mode:"index",intersect:!1},responsive:!0}},n=document.getElementById("chart-global-totalSi").getContext("2d");new Chart(n,t);var i=document.getElementById("chart-global-breakdownSi").getContext("2d");new Chart(i,a);var r=document.getElementById("chart-global-new-vs-recoveriesSi").getContext("2d");new Chart(r,o)}else console.error("API Failed")})):(t({url:e.lolalTimeline,data:{},method:"GET"},function(e){if(e.hasOwnProperty("data")){let s,c,b,g=[],p=[],u=[],f=[],h=[],m=[],x=[],C=[],y=310,S=e.data.timeline.length-y,v=310,k=e.data.timeline.length-v,A=14,I=e.data.timeline.length-A,z=e.data.timeline[0].active,w=e.data.timeline[0].deaths,L=e.data.timeline[0].recovered,P=["rgba(156, 39, 176, 0.8)","rgba(76, 175, 80, 0.8)","rgba(244,67,54,0.8)"];for(C.push(z),C.push(L),C.push(w),s=k;s>=0;s--)g.push(e.data.timeline[s].date.substr(5,5)),p.push(e.data.timeline[s].new_confirmed);for(c=S;c>=0;c--)u.push(e.data.timeline[c].date.substr(5,5)),f.push(e.data.timeline[c].new_recovered);for(b=I;b>=0;b--)h.push(e.data.timeline[b].date.substr(5,5)),m.push(e.data.timeline[b].confirmed),x.push(e.data.timeline[b].active);Chart.defaults.global.defaultFontFamily="Poppins";var t={type:"bar",data:{labels:g,datasets:[{label:"New Confirmed",data:p,borderWidth:1,backgroundColor:"#f44336"}]},options:{legend:{display:!1},scales:{yAxes:[{ticks:{beginAtZero:!0,stepSize:250,fontColor:"rgba(255, 255, 255, 0.7)",fontSize:7,padding:5},gridLines:!1}],xAxes:[{barPercentage:.4,ticks:{fontColor:"rgba(255, 255, 255, 0.7)",fontSize:9,padding:10,autoSkipPadding:15,maxRotation:0},gridLines:!1}]},tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){var a=t.datasets[e.datasetIndex].label,o=": "+t.datasets[e.datasetIndex].data[e.index].toLocaleString();return Chart.helpers.isArray(a)?(a=a.slice())[0]+=o:a+=o,a}}},responsive:!0}},a={type:"bar",data:{labels:u,datasets:[{label:"New Recovered",data:f,borderWidth:1,backgroundColor:"rgba(76, 175, 80, 0.6)"}]},options:{legend:{display:!1},scales:{yAxes:[{ticks:{beginAtZero:!0,stepSize:250,fontColor:"rgba(255, 255, 255, 0.7)",fontSize:7,padding:5},gridLines:!1}],xAxes:[{barPercentage:.4,ticks:{fontColor:"rgba(255, 255, 255, 0.7)",fontSize:8,padding:10,autoSkipPadding:15,maxRotation:0},gridLines:!1}]},tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){var a=t.datasets[e.datasetIndex].label,o=": "+t.datasets[e.datasetIndex].data[e.index].toLocaleString();return Chart.helpers.isArray(a)?(a=a.slice())[0]+=o:a+=o,a}}},responsive:!0}},o={type:"doughnut",data:{labels:["Active Cases","Recoveries","Deaths"],datasets:[{data:C,backgroundColor:P,borderWidth:0,pointRadius:0}]},options:{legend:{display:!0,position:"bottom",labels:{usePointStyle:!0,fontColor:"#fff",fontSize:10}},tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){var a=t.labels[e.index],o=": "+t.datasets[e.datasetIndex].data[e.index].toLocaleString();return Chart.helpers.isArray(a)?(a=a.slice())[0]+=o:a+=o,a}}},responsive:!0}},n={type:"line",data:{labels:h,datasets:[{label:"Total cases",data:m,borderColor:"rgba(0,188,212, 0.6)",backgroundColor:"rgba(0,188,212, 1)",fill:!1,borderWidth:2,pointRadius:0,pointStyle:"line"},{label:"Active cases",data:x,fill:!1,borderColor:"rgba(156, 39, 176, 0.6)",backgroundColor:"rgba(156, 39, 176, 1)",borderWidth:2,pointRadius:0,pointStyle:"line"}]},options:{legend:{display:!0,labels:{fontColor:"#fff",fontSize:11,usePointStyle:!0}},scales:{yAxes:[{type:"linear",ticks:{beginAtZero:!0,stepSize:2e4,fontColor:"rgba(255, 255, 255, 0.7)",fontSize:7,padding:5,callback:function(e,t,a){return e/1e3+"K"}},gridLines:!1}],xAxes:[{ticks:{fontColor:"rgba(255, 255, 255, 0.7)",fontSize:10,padding:10,autoSkipPadding:15,maxRotation:0},gridLines:!1}]},tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){var a=t.datasets[e.datasetIndex].label,o=": "+t.datasets[e.datasetIndex].data[e.index].toLocaleString();return Chart.helpers.isArray(a)?(a=a.slice())[0]+=o:a+=o,a}}},hover:{mode:"index",intersect:!1},responsive:!0}},i=document.getElementById("chart-timeline").getContext("2d");new Chart(i,t);var r=document.getElementById("chart-recovery").getContext("2d");new Chart(r,a);var d=document.getElementById("chart-breakdown").getContext("2d");new Chart(d,o);var l=document.getElementById("chart-totalVSactive").getContext("2d");new Chart(l,n)}else console.error("API Failed")}),t({url:e.globalTimeline,data:{},method:"GET"},function(e){if(e.hasOwnProperty("data")){let d,l=[],s=[],c=[],b=[],g=[],p=2,u=e.data.length-p;for(d=u;d>=0;d--)l.push(e.data[d].date.substr(5,5)),s.push(e.data[d].confirmed),b.push(e.data[d].new_confirmed),g.push(e.data[d].new_recovered);let f=e.data[0].active,h=e.data[0].deaths,m=e.data[0].recovered,x=["rgba(156, 39, 176, 0.8)","rgba(76, 175, 80, 0.8)","rgba(244,67,54,0.8)"];c.push(f),c.push(m),c.push(h);var t={type:"line",data:{labels:l,datasets:[{label:"Total cases",data:s,borderColor:"rgba(255, 152, 0, 1)",backgroundColor:"rgba(255, 152, 0, 1)",fill:!1,borderWidth:3,pointRadius:0}]},options:{legend:{display:!0,labels:{fontColor:"#fff",fontSize:10}},scales:{yAxes:[{type:"linear",ticks:{beginAtZero:!0,stepSize:4e7,fontColor:"rgba(255, 255, 255, 0.7)",fontSize:8,padding:5,callback:function(e,t,a){return e/1e6+"M"}},gridLines:!1}],xAxes:[{ticks:{fontColor:"rgba(255, 255, 255, 0.7)",fontSize:8,padding:10,autoSkipPadding:10,maxRotation:0},gridLines:!1}]},tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){var a=t.datasets[e.datasetIndex].label,o=": "+t.datasets[e.datasetIndex].data[e.index].toLocaleString();return Chart.helpers.isArray(a)?(a=a.slice())[0]+=o:a+=o,a}}},hover:{mode:"index",intersect:!1},responsive:!0}},a={type:"doughnut",data:{labels:["Active Cases","Recoveries","Deaths"],datasets:[{data:c,backgroundColor:x,borderWidth:0,pointRadius:0}]},options:{legend:{display:!0,position:"bottom",labels:{usePointStyle:!0,fontColor:"#fff",fontSize:10}},tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){var a=t.labels[e.index],o=": "+t.datasets[e.datasetIndex].data[e.index].toLocaleString();return Chart.helpers.isArray(a)?(a=a.slice())[0]+=o:a+=o,a}}},responsive:!0}},o={type:"line",data:{labels:l,datasets:[{label:"New Cases",data:b,borderColor:"#f44336",backgroundColor:"#f44336",fill:!1,borderWidth:1,pointRadius:0,pointStyle:"line"},{label:"New Recoveries",data:g,fill:!1,borderColor:"rgba(76, 175, 80, 1)",backgroundColor:"rgba(76, 175, 80, 1)",borderWidth:1,pointRadius:0,pointStyle:"line"}]},options:{legend:{display:!0,labels:{fontColor:"#fff",fontSize:11,usePointStyle:!0}},scales:{yAxes:[{type:"linear",ticks:{beginAtZero:!0,stepSize:5e5,fontColor:"rgba(255, 255, 255, 0.7)",fontSize:8,padding:5,callback:function(e,t,a){return e/1e3+"K"}},gridLines:!1}],xAxes:[{ticks:{fontColor:"rgba(255, 255, 255, 0.7)",fontSize:10,padding:10,autoSkipPadding:15,maxRotation:0},gridLines:!1}]},tooltips:{mode:"index",intersect:!1,bodyFontSize:10,callbacks:{label:function(e,t){var a=t.datasets[e.datasetIndex].label,o=": "+t.datasets[e.datasetIndex].data[e.index].toLocaleString();return Chart.helpers.isArray(a)?(a=a.slice())[0]+=o:a+=o,a}}},hover:{mode:"index",intersect:!1},responsive:!0}},n=document.getElementById("chart-global-total").getContext("2d");new Chart(n,t);var i=document.getElementById("chart-global-breakdown").getContext("2d");new Chart(i,a);var r=document.getElementById("chart-global-new-vs-recoveries").getContext("2d");new Chart(r,o)}else console.error("API Failed")}))});