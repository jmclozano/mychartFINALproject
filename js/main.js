let myChart = document.getElementById("myChart").getContext("2d");

//Global options
Chart.defaults.global.defaultFontFamily = "Arial";
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = "#777";


let eduChartpie = new Chart(myChart, {
    type: "pie", // bar, horizontalBar, pie, line, doughnut, radar and polarArea
    data: {
        labels: ["Southside", "Northside", "Westside", "Eastside", "Central"],
        datasets: [{
            label: "Class Size",
            data: [
                200,
                175,
                131,
                119,
                128,
                177,
            ],
            //backgroundColor: 'green',
            backgroundColor: [
                "rgba(255, 99, 132, 0.6)",
                "rgba(55, 162, 232, 0.6)",
                "rgba(25, 199, 32, 0.6)",
                "rgba(155, 54, 332, 0.6)",
                "rgba(142, 119, 78, 0.6)",
                "rgba(23, 19, 27, 0.6)",
                "rgba(125, 88, 122, 0.6)",
            ],
            borderWidth: 1,
            borderColor: "#777",
            hoverBorderWidth: 2,
            hoverBorderColor: "#000"
        }]
    },
    options: {
        title: {
            display: true,
            text: "District",
            fontSize: 25

        },
        legend: {
            display: true,
            position: "right",
            labels: {
                fontColor: "#000"
            }
        },
        layout: {
            padding: {
                left: 50,
                right: 50,
                bottom: 50,
                top: 50
            }
        },
        tooltips: {
            enabled: true
        }
    }
});

let myChartLine = document.getElementById("myLine").getContext("2d");

let eduChartLine = new Chart(myChartLine, {
    type: "line", // bar, horizontalBar, pie, line, doughnut, radar and polarArea
    data: {
        labels: ["math", "science", "english", "language", "art", "music", "history"],
        datasets: [{
            label: "Users",
            data: [
                200,
                175,
                131,
                119,
                156,
                128,
                177,
            ],
            //backgroundColor: 'green',
            backgroundColor: [
                "rgba(255, 99, 132, 0.6)",
                "rgba(55, 162, 232, 0.6)",
                "rgba(25, 199, 32, 0.6)",
                "rgba(155, 54, 332, 0.6)",
                "rgba(142, 119, 78, 0.6)",
                "rgba(23, 19, 27, 0.6)",
                "rgba(125, 88, 122, 0.6)",
            ],
            borderWidth: 1,
            borderColor: "#777",
            hoverBorderWidth: 2,
            hoverBorderColor: "#000"
        }]
    },
    options: {
        title: {
            display: true,
            text: "Subject",
            fontSize: 25

        },
        legend: {
            display: true,
            position: "right",
            labels: {
                fontColor: "#000"
            }
        },
        layout: {
            padding: {
                left: 50,
                right: 50,
                bottom: 50,
                top: 50
            }
        },
        tooltips: {
            enabled: true
        }
    }
});

let myChartBar = document.getElementById("myBar").getContext("2d");

let eduChartBar = new Chart(myChartBar, {
    type: "bar", // bar, horizontalBar, pie, line, doughnut, radar and polarArea
    data: {
        labels: ["Grade K-1", "Grade 2-5", "Grade 6-8", "Grade 9-12", "Admin"],
        datasets: [{
            label: "Users",
            data: [
                131,
                119,
                156,
                128,
                109,
            ],
            //backgroundColor: 'green',
            backgroundColor: [
                "rgba(255, 99, 132, 0.6)",
                "rgba(55, 162, 232, 0.6)",
                "rgba(25, 199, 32, 0.6)",
                "rgba(155, 54, 332, 0.6)",
                "rgba(142, 119, 78, 0.6)",
                "rgba(23, 19, 27, 0.6)",
                "rgba(125, 88, 122, 0.6)",
            ],
            borderWidth: 1,
            borderColor: "#777",
            hoverBorderWidth: 2,
            hoverBorderColor: "#000"
        }]
    },
    options: {
        title: {
            display: true,
            text: "Class Level",
            fontSize: 25

        },
        legend: {
            display: true,
            position: "right",
            labels: {
                fontColor: "#000"
            }
        },
        layout: {
            padding: {
                left: 50,
                right: 50,
                bottom: 50,
                top: 50
            }
        },
        tooltips: {
            enabled: true
        }
    }
});
