var ctx = document.getElementById('myChart').getContext('2d');


// var chart = new Chart(ctx, {
//     // The type of chart we want to create
//     type: 'doughnut',

//     // The data for our dataset
//     data: {
//         labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//         datasets: [{
//             label: 'Radar Chart',
//             backgroundColor: ['blue', 'red', 'orange', 'green', 'yellow', 'teal', 'purple'],
//             borderColor: ['blue', 'red', 'orange', 'green', 'yellow', 'teal', 'purple'],
//             data: [0, 10, 5, 2, 20, 30, 45]
//         }]
//     },

//     // Configuration options go here
//     options: {
//         // only differnece between doughnut and pie chart
//         cutoutPercentage: 80,
//         // rotation: -3,
//         // circumference: 6.273
//         animation: {
//             // animation is not recommended if you have a lot of data points
//             // bacause it will slow down app
//             // animateRotate: true,
//             // animateScale: true
//         }
//     }
// });

// -------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------


// MULTIPLE LAYER
// var chart = new Chart(ctx, {
//     // The type of chart we want to create
//     type: 'doughnut',

//     // The data for our dataset
//     data: {
//         labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//         datasets: [{
//             label: 'Layer 1',
//             backgroundColor: ['blue', 'red', 'orange', 'green', 'yellow', 'teal', 'purple'],
//             borderColor: ['blue', 'red', 'orange', 'green', 'yellow', 'teal', 'purple'],
//             borderWidth:15,
//             hoverBorderWidth:15,
//             hoverBackgroundColor: 'black',
//             hoverBorderColor: 'white',
//             data: [0, 10, 5, 2, 20, 30, 45]
//         },
//         {
//             label: 'Layer 2',
//             backgroundColor: ['blue', 'red', 'orange', 'green', 'yellow', 'teal', 'purple'],
//             borderColor: ['blue', 'red', 'orange', 'green', 'yellow', 'teal', 'purple'],
//             data: [5, 15, 55, 25, 25, 35, 13],
//             borderWidth:15,
//             hoverBorderWidth:15,
//             hoverBackgroundColor: 'black',
//             hoverBorderColor: 'white',
//         },
//         {
//             label: 'Layer 3',
//             backgroundColor: ['blue', 'red', 'orange', 'green', 'yellow', 'teal', 'purple'],
//             borderColor: ['blue', 'red', 'orange', 'green', 'yellow', 'teal', 'purple'],
//             data: [10, 20, 15, 12, 30, 40, 55],
//             borderWidth:15,
//             hoverBorderWidth:15,
//             hoverBackgroundColor: 'black',
//             hoverBorderColor: 'white',
//         }]
//     },

//     // Configuration options go here
//     options: {
//         // only differnece between doughnut and pie chart
//         cutoutPercentage: 80,
//         // rotation: -3,
//         // circumference: 6.273
//         animation: {
//             // animation is not recommended if you have a lot of data points
//             // bacause it will slow down app
//             // animateRotate: true,
//             // animateScale: true
//         }
//     }
// });

// -------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------

// GAUGE CHART
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March'],
        datasets: [{
            label: 'Gauge Chart',
            backgroundColor: ['grey', 'red', 'grey'],
            borderColor: ['blue', 'red', 'orange', 'green', 'yellow', 'teal', 'purple'],
            data: [10, 2, 10]
        }]
    },

    // Configuration options go here
    options: {
        // only differnece between doughnut and pie chart
        cutoutPercentage: 80,
        rotation: 1* Math.PI,
        circumference: 1 * Math.PI,
        animation: {
            // animation is not recommended if you have a lot of data points
            // bacause it will slow down app
            animateRotate: true,
            animateScale: true
        }
    }
});