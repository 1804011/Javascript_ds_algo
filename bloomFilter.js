//bllomFilter is a probabilistic data structure to  decrease database access
//to identify  whether user name is already taken.

//This is not actually bloomFilter we can use this code to
//identify whether is a username is already taken

class bloomFilter {
	constructor() {
		this.arr1 = [];
		this.arr2 = [];
		this.arr3 = [];
		this.prime1 = 9999937;
		this.prime2 = 9999863;
		this.prime3 = 9999047;
		for (let i = 0; i < 10000000; i++) {
			this.arr1.push(0);
			this.arr2.push(0);
			this.arr3.push(0);
		}
	}
	//hash a user name
	hash(str) {
		let sz = str.length;
		let h1 = 0,
			h2 = 0,
			h3 = 0;
		let p1 = 1,
			p2 = 1,
			p3 = 1;
		for (let i = 0; i < sz; i++) {
			let u = str.charCodeAt(i);
			let s1 = (u * p1) % this.prime1;
			let s2 = (u * p2) % this.prime2;
			let s3 = (u * p3) % this.prime3;
			h1 = (h1 + s1) % this.prime1;
			h2 = (h2 + s2) % this.prime2;
			h3 = (h3 + s3) % this.prime3;
			p1 = (p1 * 52) % this.prime1;
			p2 = (p2 * 52) % this.prime2;
			p3 = (p3 * 52) % this.prime3;
		}
		return [h1, h2, h3];
	}
	//Insert an username to the bloom filter
	insert(str) {
		let sz = str.length;
		let arr = this.hash(str);
		let h1 = arr[0],
			h2 = arr[1],
			h3 = arr[2];
		this.arr1[h1] = 1;
		this.arr2[h2] = 1;
		this.arr3[h3] = 1;
	}
	//This check whether an username is already taken
	check(str) {
		let sz = str.length;
		let arr = this.hash(str);
		let h1 = arr[0],
			h2 = arr[1],
			h3 = arr[2];
		return this.arr1[h1] && this.arr2[h2] && this.arr3[h3];
	}
}
const filter = new bloomFilter();
filter.insert("Sharif");
filter.insert("Muntaha");
console.log(filter.check("Muntaha"));
