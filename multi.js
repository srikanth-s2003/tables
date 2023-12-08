
window.addEventListener('keydown', (e)=>{

    if(e.key == 'Enter'){
        calculate()
    }
})

document.querySelector('.cal').onclick = calculate;


function calculate(){
    
    let n = document.querySelector('#multext').value;
    n = parseInt(n)
    let result = document.querySelector('.result');
    result.innerHTML = ""
    let resultTitle = document.querySelector('.resultTitle');
    let product = 1;

    resultTitle.innerHTML = 'multiplication table of '+n;
    for(let i = 1; i<=10; i++){
        product= n*i
        // a.push(n+"*"+i+"="+product+'\n');
        result.innerHTML += n+" * "+i+" = "+product+"<br>";
        // console.log("\n"+n+"*"+i+"="+product+"\n")
    }
}
