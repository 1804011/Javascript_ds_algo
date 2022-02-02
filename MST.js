//Minimum Spanning Tree By JavaScript

var p = [];
var edge = [];
for (var i = 0; i < 55; i++) p.push(i);
function find(x) {
	if (p[x] == x) return x;
	return (p[x] = find(p[x]));
}
function Union(u, v) {
	p[find(u)] = find(v);
}

edge.push({ u: 1, v: 2, cost: 3 });
edge.push({ u: 1, v: 3, cost: 4 });
edge.push({ u: 1, v: 4, cost: 5 });

edge.push({ u: 2, v: 3, cost: 4 });
edge.push({ u: 2, v: 4, cost: 3 });
edge.push({ u: 2, v: 5, cost: 2 });

edge.push({ u: 3, v: 4, cost: 3 });
edge.push({ u: 3, v: 6, cost: 3 });

edge.push({ u: 4, v: 5, cost: 4 });
edge.push({ u: 4, v: 6, cost: 2 });

edge.push({ u: 5, v: 6, cost: 4 });
edge.push({ u: 5, v: 7, cost: 1 });

edge.push({ u: 6, v: 7, cost: 4 });
edge.push({ u: 3, v: 5, cost: 1 });

edge.sort((a, b) => a.cost - b.cost);
console.log(edge);
//Mst Main Code
var sz = edge.length;
var ans = 0;
for (i = 0; i < sz; i++) {
	var u = edge[i].u;
	var v = edge[i].v;
	var cost = edge[i].cost;
	if (find(u) != find(v)) {
		console.log(`${u}  ${v}`);
		ans += cost;
		Union(u, v);
	}
}
console.log(`Mst is: ${ans}\n`);
