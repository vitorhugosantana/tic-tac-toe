const emptyString = '  ';
const boardData = Array(9).fill(emptyString);
const players = {
  1: 'x',
  2: 'o',
};
let currentPlayer = players[1];

function drawBoard(positions) {
  console.log(`
    ${positions[0]} | ${positions[1]} | ${positions[2]}
    -----------
    ${positions[3]} | ${positions[4]} | ${positions[5]}
    -----------
    ${positions[6]} | ${positions[7]} | ${positions[8]}
  `);
}

function showTutorial() {
  console.log(`
  ### Escolha a posiçao que deseja jogar baseado no tabuleiro abaixo ###

     0 | 1 | 2
    -----------
     3 | 4 | 5
    -----------
     6 | 7 | 8

  ######################################################################
  `);
}

function isEmpty(position) {
  return boardData[position] === emptyString;
}

function changePlayer() {
  if (currentPlayer === players[1]) {
    currentPlayer = players[2];
  } else {
    currentPlayer = players[1];
  }
}

function setPlayerMovement(position) {
  if (isEmpty(position)) {
    boardData[position] = currentPlayer;
    changePlayer();
  } else {
    console.log(`A posição ${position} já foi usada`);
  }
  let vencedor = getWinner();


  if (vencedor !== undefined) {
   console.log ('O vencedor é ' + vencedor);
   drawBoard(boardData);
   process.exit();
  }

  let posicoesPreenchidas = obterQuantidadePreenchida()
    if (posicoesPreenchidas == 9) {
      console.log ('DEU VELHA');
      drawBoard(boardData);
      process.exit();
    }
}

function obterQuantidadePreenchida(){

  let contador = 0
  boardData.forEach(item =>{
    if (item != emptyString)
    {
      contador = contador +1
    }

  })

  return contador
}

function getWinner()
{
    const possibilidades = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
  ];

    let vencedor = undefined;
    possibilidades.forEach(possibilidade => {
        let posicao1 = possibilidade[0]
        let posicao2 = possibilidade[1]
        let posicao3 = possibilidade[2]

        let campo1 = boardData[posicao1]
        let campo2 = boardData[posicao2]
        let campo3 = boardData[posicao3]

        if (campo1 === emptyString || campo2 === emptyString || campo3 === emptyString)
          return;        
        if (campo1 === campo2 && campo2 === campo3)  {
          vencedor = campo1
          return false;
        }
    })

    return vencedor;
}

// showTutorial();
setPlayerMovement(0);
setPlayerMovement(1);
setPlayerMovement(2);
setPlayerMovement(3);
setPlayerMovement(5);
setPlayerMovement(4);
setPlayerMovement(6);
setPlayerMovement(8);
setPlayerMovement(7);

drawBoard(boardData);


