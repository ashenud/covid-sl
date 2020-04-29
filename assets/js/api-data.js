$(document).ready(function () {

    var settings = {
        getCurrentStatistical: "https://www.hpb.health.gov.lk/api/get-current-statistical",
        coronaTimeline: "https://corona-api.com/timeline",
    };

    getCurrentStatistical();
    coronaTimeline();

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

    function coronaTimeline() {
        var apiData = {
            url: settings.coronaTimeline,
            data: {},
            method: "GET",
        };
        getData(apiData, function (json) {
            if (json.hasOwnProperty("data")) {
                $("#global-total").text((json.data[0].confirmed).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'));
                $("#global-active").text((json.data[0].active).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'));
                $("#global-new").text((json.data[0].new_confirmed).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'));
                $("#global-recovered").text((json.data[0].recovered).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'));
                $("#global-deaths").text((json.data[0].deaths).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'));
                $("#global-new-deaths").text((json.data[0].new_deaths).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'));
            } else {
                console.error("API Failed");
            }
        })
    }

    function getCurrentStatistical() {
        var apiData = {
            url: settings.getCurrentStatistical,
            data: {},
            method: "GET",
        };
        getData(apiData, function (json) {
            if (json.hasOwnProperty("success") && json.success == true) {
                document.title = '('+json.data.local_total_cases +') Coronavirus Sri Lanka - Analytics Dashboard';
                $("#update-local-date").text(json.data.update_date_time.substr(0, 10));
                $("#update-local-time").text(json.data.update_date_time.substr(11, 5));
                $("#update-global-date").text(json.data.update_date_time.substr(0, 10));
                $("#update-global-time").text(json.data.update_date_time.substr(11, 5));
                $("#total-cases").text((json.data.local_total_cases).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'));
                $("#active-cases").text((json.data.local_active_cases).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'));
                $("#new-cases").text((json.data.local_new_cases).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'));
                $("#recovered").text((json.data.local_recovered).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'));
                $("#suspected").text((json.data.local_total_number_of_individuals_in_hospitals).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'));
                $("#deaths").text((json.data.local_deaths).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'));

                //$("#global-total").text((json.data.global_total_cases).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'));
                //$("#global-new").text((json.data.global_new_cases).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'));
                //$("#global-recovered").text((json.data.global_recovered).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'));
                //$("#global-deaths").text((json.data.global_deaths).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'));
                //$("#global-new-deaths").text((json.data.global_new_deaths).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'));
            } else {
                console.error("API Failed");
            }
        })
    }
    
    $('#hSelect').on('change', function () {
        var hNum = this.value;

        var apiData = {
            url: settings.getCurrentStatistical,
            data: {},
            method: "GET",
        };

        getData(apiData, function (data) {
            var lastUpdatedDate = data.data.hospital_data[hNum].hospital.updated_at.substr(0, 10);
            var lastUpdatedTime = data.data.hospital_data[hNum].hospital.updated_at.substr(11, 5);
            
            var crrText = $("#hName").text();
            var withDate = crrText.replace("$$__Data__$$", lastUpdatedDate);
            var withTime = withDate.replace("$$__time__$$", lastUpdatedTime);
            $("#hName").text(withTime);
            $("#hName").removeClass("hide");
            
            var crrTextSi = $("#hNameSi").text();
            var withDateSi = crrTextSi.replace("$$__Data__$$", lastUpdatedDate);
            var withTimeSi = withDateSi.replace("$$__time__$$", lastUpdatedTime);
            $("#hNameSi").text(withTimeSi);
            $("#hNameSi").removeClass("hide");

            $("#hTotalSL").text((data.data.hospital_data[hNum].cumulative_local).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'));
            $("#hTotalFR").text((data.data.hospital_data[hNum].cumulative_foreign).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'));
            $("#hTotalSLC").text((data.data.hospital_data[hNum].treatment_local).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'));
            $("#hTotalFRC").text((data.data.hospital_data[hNum].treatment_foreign).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'));
        });
    });
    
});