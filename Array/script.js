                                           // A R R A Y
 let marvelHeroes = [ "ironman", "hulk", "thor", "spiderman" ];
 let dcHeroes = [
    "superman", "batman", "aquman","felsh"
 ]

 for(let hero of marvelHeroes){
    console.log(hero)
 }

 // Methods 

marvelHeroes.push("captain america","black panther") 
console.log(marvelHeroes)

let deleted = marvelHeroes.pop()
console.log(marvelHeroes)

console.log(deleted)

const allHeroes = marvelHeroes.concat(dcHeroes)
console.log(allHeroes)

marvelHeroes.splice(0,1,"antman")
console.log(marvelHeroes)