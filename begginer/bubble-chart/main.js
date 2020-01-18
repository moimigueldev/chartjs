
// DATA SET
// {
//     // X Value
//     x: number,

//     // Y Value
//     y: number,

//     // Bubble radius in pixels (not scaled).
//     r: number
// }


var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bubble',

    // The data for our dataset
    data: {
        datasets: [{
            label: 'Radar Chart',
            backgroundColor: ['rgb(255, 99, 132)', 'green', 'blue'],
            borderColor: 'grey',
            data: [
                {x: 5, y:10, r:10},
                {x: 15, y:3, r:15},
                {x: 7, y:15, r:30}
            ],
            borderWidth: 5,
        }]
    },

    // Configuration options go here
    options: {}
});