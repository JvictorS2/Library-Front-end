//Palindromo
function palindromo(string) {
    if (!String) return "String inválida"
    return string.split('').reverse().join('') === string
}

console.log(palindromo('cac'))

//Palindromo com for
function palindromoFor(string){
    if(!string) return "String inválida"
    for(var i = 0; i < string.lenght; i++ ){
        if(string[i] !== string[string -1 -i]) 
        return false;
    }
     return true
}

console.log(palindromoFor(null))