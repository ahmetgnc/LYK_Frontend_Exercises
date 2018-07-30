var array_fruit = [ {
      isim : "domates",
      fiyat : 2
    },
    {
      isim : "salata" ,
      fiyat : 3,
    },
    {
      isim : "portakal" ,
      fiyat : 5
    }
 ]

 var fiyatArr = array_fruit.map(function (index){
  return index.fiyat
 })

 console.log(fiyatArr);
