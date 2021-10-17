$(document).ready(function(){var t={getCurrentStatistical:"https://www.hpb.health.gov.lk/api/get-current-statistical",coronaTimeline:"https://corona-api.com/timeline"};function a(t,a){$.ajax({url:t.url,data:t.data,method:t.method}).done(function(t,e){"success"===e?a(t):console.error("API Failed")}).fail(function(t,a,e){console.error("API Failed")})}a({url:t.getCurrentStatistical,data:{},method:"GET"},function(t){t.hasOwnProperty("success")&&1==t.success?(document.title="("+t.data.local_total_cases+") Coronavirus Sri Lanka - Analytics Dashboard",$("#update-local-date").text(t.data.update_date_time.substr(0,10)),$("#update-local-time").text(t.data.update_date_time.substr(11,5)),$("#update-global-date").text(t.data.update_date_time.substr(0,10)),$("#update-global-time").text(t.data.update_date_time.substr(11,5)),$("#total-cases").text(t.data.local_total_cases.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")),$("#active-cases").text(t.data.local_active_cases.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")),$("#new-cases").text(t.data.local_new_cases.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")),$("#recovered").text(t.data.local_recovered.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")),$("#suspected").text(t.data.local_total_number_of_individuals_in_hospitals.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")),$("#deaths").text(t.data.local_deaths.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,"))):console.error("API Failed")}),a({url:t.coronaTimeline,data:{},method:"GET"},function(t){t.hasOwnProperty("data")?($("#global-total").text(t.data[0].confirmed.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")),$("#global-active").text(t.data[0].active.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")),$("#global-new").text(t.data[0].new_confirmed.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")),$("#global-recovered").text(t.data[0].recovered.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")),$("#global-deaths").text(t.data[0].deaths.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")),$("#global-new-deaths").text(t.data[0].new_deaths.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,"))):console.error("API Failed")}),$("#hSelect").on("change",function(){var e=this.value;a({url:t.getCurrentStatistical,data:{},method:"GET"},function(t){var a=t.data.hospital_data[e].hospital.updated_at.substr(0,10),d=t.data.hospital_data[e].hospital.updated_at.substr(11,5),l=$("#hName").text().replace("$$__Data__$$",a).replace("$$__time__$$",d);$("#hName").text(l),$("#hName").removeClass("hide");var o=$("#hNameSi").text().replace("$$__Data__$$",a).replace("$$__time__$$",d);$("#hNameSi").text(o),$("#hNameSi").removeClass("hide"),$("#hTotalSL").text(t.data.hospital_data[e].cumulative_local.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")),$("#hTotalFR").text(t.data.hospital_data[e].cumulative_foreign.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")),$("#hTotalSLC").text(t.data.hospital_data[e].treatment_local.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")),$("#hTotalFRC").text(t.data.hospital_data[e].treatment_foreign.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,"))})})});