var dizi = [1,2,3,4,5,6,7,8,9,10];

dizi.forEach(function (eleman)
 {
  dizi.push(eleman*eleman*eleman);
 }
);
console.log(dizi);
