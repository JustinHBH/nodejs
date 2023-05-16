const readline = require('rl').createInterface({
	input: process.stdin, 
	output: process.stdout
})

rl.question("Nhap ho ten: ", hoten => {
	rl.question("Nhap diem trung binh: ", dtb=> {
		if (dtb >= 5) {
			console.log("Ho ten: ", hoten.toUpperCase()); 
			console.log("Xep loai hoc luc: Dau");
		} else {
			console.log("Ho ten: ", hoten.toUpperCase()); 
			console.log("Xep loai hoc luc: Rot");
		}
		rl.close();
	})
})