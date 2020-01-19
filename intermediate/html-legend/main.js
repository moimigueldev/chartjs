var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'First Dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45]
        },
        {
            label: 'Second Dataset',
            backgroundColor: 'rgb(0, 99, 132)',
            borderColor: 'rgb(0, 99, 132)',
            data: [10, 15, 15, 2, 20, 80, 45]
        },
        {
            label: 'Third Dataset',
            backgroundColor: 'rgb(0, 0, 132)',
            borderColor: 'rgb(0, 0, 132)',
            data: [5, 3, 5, 24, 20, 50, 45]
        }]
    },

    // Configuration options go here
    options: {
        legend: {
            display: false,
            position: 'left',
            reverse: false, 
            labels: {
                // boxWidth: 5,
                fontSize: 20,
            },
            // onClick: changeFontColor,
            onHover: changeFontColor,
        },
        legendCallback: function(chart) {
            let text = [];
            text.push('<ul class="list-inline">')
            for (let index = 0; index < chart.data.datasets.length; index++) {
                
                text.push('<li class="text-white list-inline-item btn" style="background:'+chart.data.datasets[index].backgroundColor+'">')
                text.push(chart.data.datasets[index].label)
                text.push('</li>')
                
            }
            text.push('</ul>');
            return text.join("")
        }
    }
});


function changeFontColor() {
    chart.options.legend.labels.fontColor = 'red'
}

document.getElementById('chartjs-legend').innerHTML = chart.generateLegend()