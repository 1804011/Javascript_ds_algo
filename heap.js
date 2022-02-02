var heap = [];
heap.push(-Infinity);
function swap(u, v) {
	var t = heap[u];
	heap[u] = heap[v];
	heap[v] = t;
}
function Push(x) {
	heap.push(x);
	var sz = heap.length;
	var k = sz - 1;
	while (k) {
		var u;
		if (k % 2 == 0) u = k / 2;
		else u = (k - 1) / 2;
		if (heap[u] > heap[k]) {
			var t = heap[u];
			heap[u] = heap[k];
			heap[k] = t;
		}
		k = u;
	}
}
function Pop() {
	var sz = heap.length;
	sz--;
	var ans = heap[1];
	heap[1] = heap[sz];
	heap.pop();
	var root = 1;
	while (root < sz) {
		var u = 2 * root;
		var v = 2 * root + 1;
		var largest = root;
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
