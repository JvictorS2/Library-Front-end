let game = ['rock', 'paper', 'scissors'];

min = Math.ceil(0);
max = Math.floor(3);
number = Math.floor(Math.random() * (max - min) + min);

let escolha = 'rock';


if (number === game.indexOf(escolha)) {
    console.log(`${escolha} X ${game[number]}: Tie`)
} else {
    if (escolha == 'paper') {
        switch (number) {
            case 0:
                console.log(`${escolha} X ${game[number]}: victory`)
                break;
            case 2:
                console.log(`${escolha} X ${game[number]}: defeat`)
                break;
        }

    } else if (escolha == 'rock') {
        switch (number) {
            case 2:
                console.log(`${escolha} X ${game[number]}: victory`)
                break;
            case 1:
                console.log(`${escolha} X ${game[number]}: defeat`)
                break;
        }
    } if (escolha == 'scissors') {
        switch (number) {
            case 1:
                console.log(`${escolha} X ${game[number]}: victory`)
                break;
            case 0:
                console.log(`${escolha} X ${game[number]}: defeat`)
                break;
        }
    }
}