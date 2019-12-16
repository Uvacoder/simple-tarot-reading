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
var oneCard = ['the critical factor']
var threeFates = ['Past','Present','Future']
var fourfold = ['Physical vision', 'Mental vision', 'Emotional vision','Mystical vision']
var relationship = ['How you see yourself', 'How you see your partner','how you feel about your partner', 'what stands between you two', ' how your partner sees you', 'what your partner feels about you','challenge of the relationship' ]
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
let generatedID = [];
var restCards = allCards;
function tirage(num, spread = []) {
  ul.innerHTML = " ";
  pullCards = [];
  reverseOrNot = [];
  var shuffledCard = shuffle(deck);

  for(var i=0; i<num; i++) {
    reverseOrNot.push(Math.round(Math.random()))
    // console.log(`${shuffledCard[i]} ${reverseOrNot[i]}`);
    generatedID.push(`${shuffledCard[i]}-${reverseOrNot[i]}`)
    generatedID.join('c')
    var keywords = data['tarot_interpretations'][shuffledCard[i]]['keywords'];

    document.querySelectorAll('ul.card').forEach(item => item.innerHTML+=
      `
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
  generatedID = generatedID.join('u');
  document.getElementById('resultID').innerHTML = generatedID
  generatedID = [];

}



function resultIDdecoder(str){
  str = str.toString().split('u')
}

resultIDdecoder(resultID)
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}