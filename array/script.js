//1. Method filter()

  const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// // Kita ambil data yang hanya habis dibagi dua saja
  const filteredArray = angka.filter((item) => {return item % 3 === 0});

  console.log(filteredArray) // -> [2, 4, 6, 8]

//2. Method includes()

var buah = ["Apel", "Jeruk", "Alpukat", "Durian"];

// apakah alpukat sudah ada di dalam array tanaman?
var adaAlpukat = buah.includes("Alpukat");

console.log(adaAlpukat); // -> true

// apakah lemon ada?
var adaLemon = buah.includes("Lemon");

console.log(adaLemon); // -> false

//3. Method sort()

var alfabet = ['a','f','z','e','r','g'];

console.log(alfabet.sort()); // ->  ["a", "e", "f", "g", "r", "z"]
// untuk mengurutkan bilangan / angka

//4. Method concat()

var fruits = ['apel', 'banana', 'mango']
var number = [1, 2, 3]

var newArray = fruits.concat(number);
console.log(newArray); // -> ["apel", "banana", "mango", 1, 2, 3]
// method concat berfungsi untuk menggabungkan 2 array menjadi 1 array

//5. Method forEach()

const array = [1, 2, 3, 4, 5]

array.forEach(item => { 
  console.log(item);  // -> 1 2 3 4 5
});
// untuk pengulangan

//6. Mengubah elemen ()
 
var fruits = ["Banana", "Orange", "Apple", "Strawberry"];
fruits[0] = "Kiwi";  
console.log(fruits)
// menganti elemen

//7. menghapus elemen

var fruits = ["Banana", "Avocado", "Apple", "Lemon"];
delete fruits[0];     
console.log(fruits)
// untuk menghapus elemen

//8. Method spilce()

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits)
//metode dapat digunakan untuk menambahkan item baru ke array

//9. Method slice ()

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1);
console.log(citrus)
//metode irisan keluar sepotong array ke array baru.

//10. Method reverse() 

var data = [1,2,3,4,5,6,7,8]
data.reverse()
console.log(data) // hasil =  [8, 7, 6, 5, 4, 3, 2, 1]



