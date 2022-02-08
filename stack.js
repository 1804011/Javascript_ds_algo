class stack {
	constructor() {
		this.arr = [];
		this.size = 0;
	}
	push(x) {
		this.arr.push(x);
		this.size++;
		return this.size;
	}
	pop() {
		if (this.size == 0) return undefined;

		this.size--;
		return this.arr.pop();
	}
	top() {
		return this.arr[this.size - 1];
	}
	empty() {
		return this.size == 0;
	}
}
const st1 = new stack();
for (let i = 0; i < 5; i++) st1.push(i);
while (!st1.empty()) console.log(st1.pop());
