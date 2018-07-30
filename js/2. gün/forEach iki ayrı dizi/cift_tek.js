var dizi = [1,2,3,4,5,6,7,8,9];
var diziEven = [];
var diziOdd = [];

dizi.forEach(function (index){
if(index%2==1){
  diziEven.push(index);
}
else diziOdd.push(index);
}
)
console.log(diziEven);
console.log(diziOdd);



var dizi2 = [1,2,3,4,5,6,7,8,9];
var dizi2Odd = [];
var dizi2Even = [];

for (var i = 0; i < dizi2.length; i++) {
  if(dizi2[i]%2==1){
    dizi2Even.push(dizi[i]);
  }
  else dizi2Odd.push(dizi[i]);
}

console.log(dizi2Even);
console.log(dizi2Odd);
