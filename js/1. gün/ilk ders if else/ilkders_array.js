
var dizi = ['elma', 'armut'];

dizi.push('cilek', 'muz'); // sona ekle

console.log(dizi);

dizi.shift(); // ilk elemani sil

console.log(dizi);

dizi.unshift('dizi'); // basa ekle

console.log(dizi);

dizi.pop(); // son elemani sil

console.log(dizi);

dizi[1] = 'elma'

dizi.push(1, 2, 3, 4, 5)
console.log(dizi);

dizi.splice(4, 1);

console.log(dizi);

var a = [1, 2, 3, 4, 5]
      // 0  1  2  3  4
var b = a
var c = a.slice()


console.log('c', c)

b.push(4)


console.log('a', a)
console.log('b', b)
console.log('c', c)
