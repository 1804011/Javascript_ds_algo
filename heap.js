let heap = [];
heap.push(-Infinity);
function swap(u, v) {
	let t = heap[u];
	heap[u] = heap[v];
	heap[v] = t;
}
function Push(x) {
	heap.push(x);
	let sz = heap.length;
	let k = sz - 1;
	while (k) {
		let u;
		if (k % 2 == 0) u = k / 2;
		else u = (k - 1) / 2;
		if (heap[u] > heap[k]) {
			let t = heap[u];
			heap[u] = heap[k];
			heap[k] = t;
		}
		k = u;
	}
}
function Pop() {
	let sz = heap.length;
	sz--;
	let ans = heap[1];
	heap[1] = heap[sz];
	heap.pop();
	let root = 1;
	while (root < sz) {
		let u = 2 * root;
		let v = 2 * root + 1;
		let largest = root;
		if (heap[u] != undefined && heap[u] < heap[root]) largest = u;
		if (heap[v] != undefined && heap[v] < heap[largest]) largest = v;
		swap(largest, root);
		if (largest == root) break;
		root = largest;
	}
	return ans;
}
for (i = 1; i <= 15; i++) Push(i);
for (i = 32; i >= 16; i--) Push(i);
console.log(heap, "\n");
for (i = 1; i <= 32; i++) {
	console.log(Pop());
}
