

// image
const image = document.getElementById('source');

// getContext will draw something on the canvas
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['sdfs', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My Sales',
            backgroundColor: 'rgba(255, 99, 132, 1)',
            borderColor: 'blue',
            borderWidth: 2,
            borderDash: [10],
            data: [0, 10, 5, 2, 20, 30, 45],
            borderDashOffset: 10,
            borderCapStyle: "square",
            borderJoinStyle: 'bevel',
            // cubicInterpolationMode if it is active, then it will over rule lineTesion
            // cubicInterpolationMode: 'monotone',
            fill: "start",
            lineTension: 0.4,
            pointBackgroundColor: ['red', 'green', 'blue', 'yellow', 'pink', 'purple'],
            pointBorderColor: 'pink',
            pointBorderWidth: 0,
            pointRadius: 10,
            // pointStyle: image,
            pointHitRadius: 20,
            pointHoverBackgroundColor: 'purple',
            pointHoverBorderColor: "black",
            pointHoverBorderWidth: 5,
            pointHoverRadius: 10,
            showLine: true,
            spanGaps: false,
            // steppedLine if it is active, then it will over rule lineTesion
            // mimiks bar chart
            steppedLine: false,
        }]
    },

    // Configuration options go here
    options: {
        scales: {
            yAxes: [{
                stacked: true
            }]
        }
    }
});




// AREA CHART

// var chart = new Chart(ctx, {
//     // The type of chart we want to create
//     type: 'line',

//     // The data for our dataset
//     data: {
//         labels: ['sdfs', 'February', 'March', 'April', 'May', 'June', 'July'],
//         datasets: [{
//             label: 'My Sales',
//             backgroundColor: 'rgba(255, 99, 132, 1)',
//             borderColor: 'blue',
//             borderWidth: 2,
//             borderDash: [10],
//             data: [0, 10, 5, 2, 20, 30, 45],
//             borderDashOffset: 10,
//             borderCapStyle: "square",
//             borderJoinStyle: 'bevel',
//             // cubicInterpolationMode if it is active, then it will over rule lineTesion
//             // cubicInterpolationMode: 'monotone',
//             fill: "start",
//             lineTension: 0.4,
//             pointBackgroundColor: ['red', 'green', 'blue', 'yellow', 'pink', 'purple'],
//             pointBorderColor: 'pink',
//             pointBorderWidth: 0,
//             pointRadius: 10,
//             // pointStyle: image,
//             pointHitRadius: 20,
//             pointHoverBackgroundColor: 'purple',
//             pointHoverBorderColor: "black",
//             pointHoverBorderWidth: 5,
//             pointHoverRadius: 10,
//             showLine: true,
//             spanGaps: false,
//             // steppedLine if it is active, then it will over rule lineTesion
//             // mimiks bar chart
//             steppedLine: false,
//         },
//         {
//             label: 'My Sales',
//             backgroundColor: 'rgba(0, 99, 132, 1)',
//             borderColor: 'blue',
//             borderWidth: 2,
//             borderDash: [10],
//             data: [10, 50, 58, 29, 20, 30, 45],
//             borderDashOffset: 10,
//             borderCapStyle: "square",
//             borderJoinStyle: 'bevel',
//             // cubicInterpolationMode if it is active, then it will over rule lineTesion
//             // cubicInterpolationMode: 'monotone',
//             fill: "start",
//             steppedLine: false,
//         }]
//     },

//     // Configuration options go here
//     options: {
//         scales: {
//             yAxes: [{
//                 stacked: false
//             }]
//         }
//     }
// });