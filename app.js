console.log(require('prompt-sync')()('Press Enter to continue: '))
var prompt = require('prompt-sync')({
    sigint: false
  });

  var theDeck = [
    { suit: 'heart', value: 1 }, { suit: 'heart', value: 2 }, { suit: 'heart', value: 3 }, { suit: 'heart', value: 4 },
    { suit: 'heart', value: 5 }, { suit: 'heart', value: 6 }, { suit: 'heart', value: 7 }, { suit: 'heart', value: 8 }, 
    { suit: 'heart', value: 9 }, { suit: 'heart', value: 10 }, { suit: 'heart', value: 11 }, { suit: 'heart', value: 12 }, 
    { suit: 'heart', value: 13 },
    { suit: 'diamond', value: 1 }, { suit: 'diamond', value: 2 }, { suit: 'diamond', value: 3 }, { suit: 'diamond', value: 4 },
    { suit: 'diamond', value: 5 }, { suit: 'diamond', value: 6 }, { suit: 'diamond', value: 7 }, { suit: 'diamond', value: 8 }, 
    { suit: 'diamond', value: 9 }, { suit: 'diamond', value: 10 }, { suit: 'diamond', value: 11 }, { suit: 'diamond', value: 12 }, 
    { suit: 'diamond', value: 13 },
    { suit: 'spade', value: 1 }, { suit: 'spade', value: 2 }, { suit: 'spade', value: 3 }, { suit: 'spade', value: 4 },
    { suit: 'spade', value: 5 }, { suit: 'spade', value: 6 }, { suit: 'spade', value: 7 }, { suit: 'spade', value: 8 }, 
    { suit: 'spade', value: 9 }, { suit: 'spade', value: 10 }, { suit: 'spade', value: 11 }, { suit: 'spade', value: 12 }, 
    { suit: 'spade', value: 13 },
    { suit: 'club', value: 1 }, { suit: 'club', value: 2 }, { suit: 'club', value: 3 }, { suit: 'club', value: 4 },
    { suit: 'club', value: 5 }, { suit: 'club', value: 6 }, { suit: 'club', value: 7 }, { suit: 'club', value: 8 }, 
    { suit: 'club', value: 9 }, { suit: 'club', value: 10 }, { suit: 'club', value: 11 }, { suit: 'club', value: 12 }, 
    { suit: 'club', value: 13 }
];

var player = [];

const startingCardsValue = 2;

var numberOfCardsRemoved = 0;

function promptUserForNumberOfPlayersAndReturnNumberOfPlayers() {

    while(true) {

        var name = prompt('How many players: ');

        if(Number( name ) > 5) {

            console.log( 'Nope too many.' );

        } else {

            console.log( `There are now ${name} players!` );

            for(let i = 1; i <= Number(name); i++) {
                player.push( { name: 'player' + (i), deck:[] } );
            }

            return Number( name );
        }

    }

}


function dealOrSomething( player ) {

    var cardPositionInDeck = Math.floor( Math.random() * 52 ) - 1 - numberOfCardsRemoved;

    player.deck.push( theDeck[cardPositionInDeck] );

    theDeck.splice( cardPositionInDeck, 1 );

    numberOfCardsRemoved = numberOfCardsRemoved + 1;
    
    return cardPositionInDeck;

}


function startOfGame( numPlayers ) {
    for(let i = 0; i < numPlayers; i++) {
        for(let j = 0; j < startingCardsValue; j++) {
            dealOrSomething( player[i] );
        }
    }
}


function printAllCards( numPlayers ) {

    for(let i = 0; i < numPlayers; i++) {

        console.log( player[i].name.toString());

        for(let j = 0; j < 2; j++) {

            console.log( player[i].deck[j] );

        }

    }

}

var numberOfPlayers = promptUserForNumberOfPlayersAndReturnNumberOfPlayers();

startOfGame( numberOfPlayers );

console.log( theDeck.length );

printAllCards( numberOfPlayers );