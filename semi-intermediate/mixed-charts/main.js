var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Bar Chart',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45],
            pointStyle: 'rect'
        },
        {
            label: 'Line Chart',
            // backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(0, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45],
            type: 'line',
            pointStyle: 'line'
        }]
    },

    // Configuration options go here
    options: {
        legend: {
            labels: {
                //point style needs to exist in the data sets
                usePointStyle: true
            }
        }
    }
});