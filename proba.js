var attrs = 'name age city gender';
var values = [
    ['Joe', 22, 'New York City', 'male'],
    ['Jane', 85, 'Las Vegas', 'female'],
    ['Jack', 55, 'London', 'male']
];

var a = attrs.split(' ');
var people = [];
var x;
var y;
for (x = 0; x < values.length; x++) {
    var person = {};
    for (y = 0; y < a.length; y++) {
        person[a[y]] = values[x][y];
    }
    people.push(person);
    document.getElementById('index').innerHTML += '<br>';
    for (var prop in person) {
        document.getElementById('index').innerHTML += '<li>' + prop + ': ' + person[prop] + '</li>';
        console.log(prop + person[prop]);
    }
}

console.log(people);
console.log(person);