//Fenwick Tree Using Javascript
let tree = [],
	n;

function read(idx) {
	let sum = 0;
	while (idx > 0) {
		sum += tree[idx];
		idx -= idx & -idx;
	}
	return sum;
}
function update(idx, val) {
	while (idx <= n) {
		tree[idx] += val;
		idx += idx & -idx;
	}
}
n = 8;
for (i = 0; i <= n; i++) tree.push(0);
