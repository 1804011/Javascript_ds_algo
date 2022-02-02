//Disjoint Set Union By Javascript

var p = [];
function find(x) {
	if (p[x] == x) return x;
	return (p[x] = find(p[x]));
}
function Union(u, v) {
	p[find(u)] = find(v);
}
function Func(u, v) {
	return find(u) == find(v);
}
for (i = 0; i <= 89; i++) p.push(i);

Union(3, 8);
Union(5, 67);
Union(8, 67);
console.log(Func(3, 67));
