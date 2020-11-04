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
let c=5
for (let a=1; a<=c; a++ ) {
    sum = 0;
        for(let b=1; b<=a; b++){
            sum += b; //ЧТО ЭТО ЗНАЧИТ???
        }
console.log (`Сумма из ${a} = ${sum}`);
}
//--------------------------------------------

// NUMBER 5
console.log ('------------- NUMBER 5-1 -------------')
a=7;
while (a<=56) {
    a++;
    if (a%2==0) (
        console.log (a)
    )
}
console.log ('------------- NUMBER 5-2 -------------')
for (a=7; a<=56; a++) {
        if (a%2==0) (
            console.log (a)
        )
}
//--------------------------------------------

// NUMBER 6
console.log ('------------- NUMBER 6 -------------')
c=10;
for (let a=2; a<=c; a++ ) {
    sum = 0;
    console.log (`Таблица умножения для ${a}`);
        for(let b=1; b<=c; b++){
            sum = a*b;
            console.log (`${a}*${b} = ${sum} `);
        }
}
//--------------------------------------------