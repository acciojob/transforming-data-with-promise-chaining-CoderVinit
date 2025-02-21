//your JS code here. If required.
document.getElementById('btn').addEventListener('click',()=>{
	let input = document.getElementById('ip').value.trim(" ");
	let outputDiv = document.getElementById('output');
	if (input === "") {
        outputDiv.textContent = "Please enter a number!";
        return;
    }

    let num = Number(input);
	new Promise((resolve)=>{
		
		setTimeout(()=>{
			outputDiv.textContent = `Result: `+ num
			resolve(num)
		},2000)
	})
	.then((num)=>{
		
		return new Promise((resolve)=>{
			setTimeout(()=>{
				let multipliedNum = num*2
				outputDiv.textContent = `Result: `+ multipliedNum
				resolve(multipliedNum)
			},2000)
		})
	})
	.then((multiplieNum)=>{
		
		return new Promise((resolve)=>{
			setTimeout(()=>{
				let subNum = multiplieNum - 3
				outputDiv.textContent = `Result: `+ subNum
				resolve(subNum)
			},1000)
		})
	})
	.then((subNum)=>{
		
		return new Promise((resolve)=>{
			setTimeout(()=>{
				let divideNum = subNum/2;
				outputDiv.textContent = `Result: `+ divideNum
				resolve(divideNum)
			},1000)
		})
	})
	.then((divideNum)=>{
		return new Promise((resolve)=>{
			setTimeout(()=>{
				let addedNum = divideNum + 10;
				outputDiv.textContent = `Final Result: `+ addedNum
				resolve(addedNum)
			},1000)
		})
	})
})