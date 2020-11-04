// NUMBER 1
console.log ('------------- NUMBER 1-1 -------------')
let a=1;
while (a<=50) {
    console.log (a);
    a++;
}
console.log ('------------- NUMBER 1-2 -------------')
a=35;
while (a>=8) {
    console.log (a);
    a--;
}
//--------------------------------------------

// NUMBER 2
a=89;
while (a>=11) {
    document.write (a + '<br/>');
    a--;
}
//--------------------------------------------

// NUMBER 3
console.log ('------------- NUMBER 3 -------------')
let sum=0;
for (a=0; a<=100; a++ ) {
    sum += a;
}
console.log ("Сумма чисел от 1 до 100 = " + sum);
//--------------------------------------------

// NUMBER 4
console.log ('------------- NUMBER 4 -------------')
sum=0;
let c=5
for (let a=1; a<=c; a++ ) {
    sum = 0;
        for(let b=1; b<=a; b++){
            sum += b;
        }
    console.log (`Сумма из ${a} = ${sum}`);
}
//--------------------------------------------