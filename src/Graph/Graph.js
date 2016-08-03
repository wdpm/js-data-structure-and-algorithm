function Graph() {

    var vertices = []; //list

    var adjList = new Dictionary();

    this.addVertex = function (v) {
        vertices.push(v);
        adjList.set(v, []); //initialize adjacency list with array as well;
    };

    this.addEdge = function (v, w) {
        adjList.get(v).push(w);
        //adjList.get(w).push(v); //commented to run the improved DFS with topological sorting
    };

    this.toString = function () {
        var s = '';
        for (var i = 0; i < vertices.length; i++) {
            s += vertices[i] + ' -> ';
            var neighbors = adjList.get(vertices[i]);
            for (var j = 0; j < neighbors.length; j++) {
                s += neighbors[j] + ' ';
            }
            s += '\n';
        }
        return s;
    };

    /**
     * initialize the colors of all vertices to white
     * @returns {Array} initial color array
     */
    var initializeColor = function () {
        var color = [];
        for (var i = 0; i < vertices.length; i++) {
            color[vertices[i]] = 'white';
        }
        return color;
    };

    /**
     * bfs
     * @param v
     * @param callback
     */
    this.bfs = function (v, callback) {

        var color = initializeColor(),
            queue = new Queue();//(1) create a queue
        // color[v]='grey';
        queue.enqueue(v);//(2) set v discovered:"grey",enqueue v

        while (!queue.isEmpty()) {//(3)if queue is not null
            var u = queue.dequeue();//(a) dequeue u
            neighbors = adjList.get(u);
            color[u] = 'grey';//(b) set u discovered:"grey"
            for (var i = 0; i < neighbors.length; i++) {
                var w = neighbors[i];
                if (color[w] === 'white') {
                    color[w] = 'grey';
                    queue.enqueue(w);//(c)enqueue u's unvisited neighbors,set them to discovered:"grey"
                }
            }
            color[u] = 'black';//(d)set u explored:"black"
            if (callback) {
                callback(u);
            }
        }
    };

    /**
     * dfs
     * @param callback
     */
    this.dfs = function (callback) {

        var color = initializeColor();

        for (var i = 0; i < vertices.length; i++) {
            if (color[vertices[i]] === 'white') {
                dfsVisit(vertices[i], color, callback);
            }
        }
    };

    /**
     * called by dfs to visit a certain vertex
     * @param u
     * @param color
     * @param callback
     */
    var dfsVisit = function (u, color, callback) {

        color[u] = 'grey';
        if (callback) {
            callback(u);
        }
        console.log('Discovered ' + u);
        var neighbors = adjList.get(u);
        for (var i = 0; i < neighbors.length; i++) {
            var w = neighbors[i];
            if (color[w] === 'white') {
                dfsVisit(w, color, callback);
            }
        }
        color[u] = 'black';
        console.log('explored ' + u);
    };


    /**
     * advanced bfs
     * @param v
     * @returns {{distances: Array, predecessors: Array}}an object{distances, predecessors}
     * @constructor
     */
    this.BFS = function (v) {

        var color = initializeColor(),
            queue = new Queue(),
            d = [],
            pred = [];
        queue.enqueue(v);

        for (var i = 0; i < vertices.length; i++) {
            d[vertices[i]] = 0;
            pred[vertices[i]] = null;
        }

        while (!queue.isEmpty()) {
            var u = queue.dequeue(),
                neighbors = adjList.get(u);
            color[u] = 'grey';
            for (i = 0; i < neighbors.length; i++) {
                var w = neighbors[i];
                if (color[w] === 'white') {
                    color[w] = 'grey';
                    d[w] = d[u] + 1;
                    pred[w] = u;
                    queue.enqueue(w);
                }
            }
            color[u] = 'black';
        }

        return {
            distances: d,
            predecessors: pred
        };
    };

    var time = 0;
    /**
     * advanced dfs
     * @returns {{discovery: Array, finished: Array, predecessors: Array}}
     * @constructor
     */
    this.DFS = function () {

        var color = initializeColor(),
            d = [],
            f = [],
            p = [];
        time = 0;

        for (var i = 0; i < vertices.length; i++) {
            f[vertices[i]] = 0;
            d[vertices[i]] = 0;
            p[vertices[i]] = null;
        }

        for (i = 0; i < vertices.length; i++) {
            if (color[vertices[i]] === 'white') {
                DFSVisit(vertices[i], color, d, f, p);
            }
        }

        return {
            discovery: d,
            finished: f,
            predecessors: p
        };
    };

    /**
     * called by DFS
     * 1 ≤ d[u] < f[u] ≤ 2|V|
     * @param u a vertex
     * @param color a color array
     * @param d discovery time
     * @param f finished time
     * @param p predecessor
     * @constructor
     */
    var DFSVisit = function (u, color, d, f, p) {

        console.log('discovered ' + u);
        color[u] = 'grey';
        d[u] = ++time;
        var neighbors = adjList.get(u);
        for (var i = 0; i < neighbors.length; i++) {
            var w = neighbors[i];
            if (color[w] === 'white') {
                p[w] = u;
                DFSVisit(w, color, d, f, p);
            }
        }
        color[u] = 'black';
        f[u] = ++time;
        console.log('explored ' + u);
    };
}