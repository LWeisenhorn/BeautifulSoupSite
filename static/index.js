$(document).ready(function() {
    $.ajax({
        type: "get",
        url: "static/jobs.json",
        dataType: "json",

        timeout: 10000,
        error: function (xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        success: function (data) {
            $.each(data,function(i,v){
                document.getElementById("jobs").innerHTML = "";
                for(let i = 0; i < v.length; i++) {
                    document.getElementById("jobs").innerHTML +=
                    "<h3>" + "Title: " + (v[i]['JobTitle']) + "</h3>" + "<h4>" + "Company Name: " + (v[i]['CompanyName']) + "</h4>" + "<p>" + "Job Description: " + (v[i]['JobDescription']) + "</p>" + "<p>" + "Salary: " + (v[i]['Salary']) + "</p><br>";
                }


            });
        }
    });
});