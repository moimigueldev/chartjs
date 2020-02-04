var ctx = document.getElementById('myChart').getContext('2d');



// var chart = new Chart(ctx, {
//     // The type of chart we want to create
//     type: 'bar',

//     // The data for our dataset
//     data: {
//         labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//         datasets: [{
//             label: 'Monthly Sales',
//             backgroundColor: ['red', 'green', 'blue', 'yellow', 'pink', 'purple'],
//             borderColor: 'rgb(255, 99, 132)',
//             data: [60, 10, 5, 2, 20, 30, 45],
//             borderSkipped: 'top',
//             //controls the width of the bar chart
//             barPercentage: 0.2,
//         }]
//     },

//     // Configuration options go here
//     options: {
//         // scales: {
//         //     xAxes: [{
//         //         
//         //         barPercentage: 1,
//         //     }]
//         // }

//     }
// }); 



// -------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------


// BAR CATEGORY PERCENTAGE
// BAR CATEGORY PERCENTAGE IS USED WHEN THERE ARE MULTIPLE BAR CHARTS
// var chart = new Chart(ctx, {
//     // The type of chart we want to create
//     type: 'bar',

//     // The data for our dataset
//     data: {
//         labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//         datasets: [{
//             label: 'Montly Profits',
//             backgroundColor: 'green',
//             borderColor: 'rgb(255, 99, 132)',
//             data: [60, 10, 5, 2, 20, 30, 45],
//             borderSkipped: 'top',
//             //controls the width of the bar chart
//             // barPercentage: 0.2,
//             barThickness: 40,
//             maxBarThickness: 30,

//         },
//         {
//             label: 'Monthly Sales',
//             borderColor: 'rgb(255, 99, 132)',
//             data: [60, 10, 5, 2, 20, 30, 45],
//             borderSkipped: 'top',
//             //controls the width of the bar chart
//             // barPercentage: 0.2,
//             // categoryPercentage: 1,
//             barThickness: 40,
//             maxBarThickness: 30,

//         }]
//     },

//     // Configuration options go here
//     options: {
//         scales: {
//             xAxes: [{

//                 gridLines: {
//                     offsetGridLines: false
//                 },
//                 stacked: true
//             }],
//             yAxes: [{
//                 stacked: true
//             }]
//         }

//     }
// }); 


// -------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------

// HORIZONTAL BAR CHART 
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'horizontalBar',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Montly Profits',
            backgroundColor: 'green',
            borderColor: 'rgb(255, 99, 132)',
            data: [60, 10, 5, 2, 20, 30, 45],
            borderSkipped: 'top',
            //controls the width of the bar chart
            // barPercentage: 0.2,
            barThickness: 40,
            maxBarThickness: 30,

        },
        {
            label: 'Monthly Sales',
            borderColor: 'rgb(255, 99, 132)',
            data: [60, 10, 5, 2, 20, 30, 45],
            borderSkipped: 'top',
            //controls the width of the bar chart
            // barPercentage: 0.2,
            // categoryPercentage: 1,
            barThickness: 40,
            maxBarThickness: 30,

        }
        ]
    },

    // Configuration options go here
    options: {
        scales: {
            xAxes: [{

                gridLines: {
                    offsetGridLines: false
                },
                stacked: true
            }],
            yAxes: [{
                stacked: true
            }]
        }

    }
}); 