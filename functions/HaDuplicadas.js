let array = [6, 7, 1, 8, 10, 10];


/* Função retorna 'true' caso tenha elementos duplicados e retorna 'false' caso nao tenha */
const haDuplicado = (arr) => {
   
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) != i) {
            return true;
        }
    }
    return false;
}

/* Função retorna o elemento repetido */

const Duplicados = (arr) => {

    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) != i) {
            let elemento = arr[i]
            return elemento
        }
    }
    return false;
}

/* console.log(haDuplicado(array)); */

/* Separa as duplicadas em outro array e imprime dois novos arrays um com as duplicadas e  outro sem elas */
const SepararDuplicadas = (array) => {
    if (haDuplicado(array) == true) {
        let arr = [];
        let arrayEco = [...array]


        for (let i = 0; i < arrayEco.length; i++) {
            if (array[i] == 10) {
                arr.push(arrayEco[i])
                arrayEco[i] = '';
            }
        }
        console.log(arrayEco)
        console.log(arr)

    } else {
        console.log('Não há duplicados')
    }
}

SepararDuplicadas(array);