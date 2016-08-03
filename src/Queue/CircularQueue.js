var Queue = require('./Queue.js').Queue;

function hotPotato(nameList, num) {

    var queue = new Queue();

    for (var i = 0; i < nameList.length; i++) {
        queue.enqueue(nameList[i]);
    }

    var eliminated = '';
    while (queue.size() > 1) {
        for (var i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue());
        }
        eliminated = queue.dequeue();
        console.log(eliminated + ' was eliminated from the Hot Potato game.');
    }

    return queue.dequeue();
}

var names = ['A', 'B', 'C', 'D', 'E'];
var winner = hotPotato(names, 7);
console.log('The winner is: ' + winner);