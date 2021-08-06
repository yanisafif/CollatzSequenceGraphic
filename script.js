// Function for listen the URL
function getParamByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    let regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

var n = getParamByName('value')
var number = n
if ( n > 1){
    // definition of variables
    var array = [n]
    var iteration = 1
    var arrayIteration = []

// algorithm
    while ( n != 1 )
    {
        if ( n % 2 == 0 ) {
            n = n / 2;
            array.push(n)

        } else {
            n = ( 3 * n ) + 1;
            array.push(n)
        }
        arrayIteration.push(iteration)
        iteration++
    }
    arrayIteration.push(iteration++)
console.log(arrayIteration.length)

// graphic creation by using charJs
// https://www.chartjs.org/docs/latest/
    let ctx = document.getElementById('myChart').getContext('2d');
    let myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: arrayIteration,
            datasets: [{
                label: '# of Calcul',
                data: array,
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
            }]
        },
        options: {}
    });
}


