let sum = 0;
let obj1 = {
    Minsk: -10,
    Moscow: -15,
    Grodno: -13
}
function avg(obj) {

    let var1 = 0;

    let summ = 0;
    for (let key in obj)
    {
        ++var1;
        summ += obj[key];
    }  
    let temp = summ /var1;
    return (temp);
}

function max(obj) {

    let max=obj1.Moscow;

    for (let key in obj)
    {   
        if (max < obj[key]) {
           
            max = obj[key];
       }
    }  
   
    return (max);
}

let avg1 = avg(obj1);
let max1 = max(obj1);
console.log(avg1);
console.log(max1);


window.addEventListener("load", () => {
    
    let max2 = document.querySelector("#max").innerHTML+= max1;
    let av = document.querySelector("#avg").innerHTML+= avg1;
    max2();
    av();
})