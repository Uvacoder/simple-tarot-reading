// ==================
// Tarot Cards
// ==================

var majorArcana = ['The Fool', 'The Magician', 'The High Priestess','The Empress','The Emperor', 'The Hierophant', 'The Lovers', 'The Chariot', 'Strength', 'The Hermit', 'Wheel of Fortune','The Justice','The Hanged Man', 'The Death', 'The Temperance', 'The Devil', 'The Tower', 'The Star', 'The Moon','The Sun','Judgement','The World'];
var suits = ['Cups', 'Pentacles', 'Swords', 'Wands']
var suitCards = ['Ace','Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Page', 'Knight', 'Queen', 'King']
var minorArcana = [];
suits.map(suit => suitCards.map(
  card => minorArcana.push(`${card} of ${suit}`)
))
const allCards = majorArcana.concat(minorArcana);

var deck = [];
for(var i =0;i<78;i++) {
  deck.push(i)
}

// ==================
// Spread
// ==================
var threeFates = ['Past','Present','Future']
var fourfold = ['Physical vision', 'Mental vision', 'Emotional vision','Mystical vision']

// ==================
// Meaning
// ==================
console.log(data['tarot_interpretations'][0]['fortune_telling'].join(', '))

// ==================
// Variables
// ==================

var positionCard = ['upright', 'reversed']
var pullCards = [];
var reverseOrNot = [];
var ul = document.querySelector('ul.card');


function clearTable(){
  ul.innerHTML = "";
}

var restCards = allCards;

function tirage(num, spread = []) {
  ul.innerHTML = "";
  pullCards = [];
  reverseOrNot = [];
  var shuffledCard = shuffle(deck);

  for(var i=0; i<num; i++) {
    reverseOrNot.push(Math.round(Math.random()))

    var keywords = data['tarot_interpretations'][shuffledCard[i]]['keywords'];

    $('ul.card').append(`
      <li class="${positionCard[reverseOrNot[i]]}" style="animation: fadein ${(i+1)*1.2}s;">
      <h1>${(spread[i])? spread[i] : ''}</h1>
      <h2 class="card-title">${allCards[shuffledCard[i]]} ${(reverseOrNot[i] == 0 )? '': '(Reversed)'} </h2>
      <img src="images/${shuffledCard[i]}.jpg" />
      <p class="keywords">${keywords.join(' / ')}</p>
      <p>${data['tarot_interpretations'][shuffledCard[i]]['fortune_telling'].join(', ')}</p>

      <h4>When ${positionCard[reverseOrNot[i]]}</h4>
      <p>${data['tarot_interpretations'][shuffledCard[i]]['meanings'][positionCard[reverseOrNot[i]]].join(', ')}</p>
      </li>
      `
    )
  }
}


function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}