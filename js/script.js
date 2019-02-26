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
var allCards = majorArcana.concat(minorArcana);

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


function tirage(num, spread = []) {
  ul.innerHTML = "";
  pullCards = [];
  reverseOrNot = [];

  for(var i=0; i<num; i++) {
    var x = Math.floor(Math.random() * 78);
    reverseOrNot.push(Math.round(Math.random()))
    if(pullCards.indexOf(x) == -1) {
      pullCards.push(x);
    } else {
      var y = Math.floor(Math.random() * 78);
      pullCards.push(y)
    }

    var keywords = data['tarot_interpretations'][pullCards[i]]['keywords'];

    $('ul.card').append(`
      <li class="${positionCard[reverseOrNot[i]]}" style="animation: fadein ${(i+1)*1.2}s;">
      <h1>${(spread[i])? spread[i] : ''}</h1>
      <h2 class="card-title">${allCards[pullCards[i]]} ${(reverseOrNot[i] == 0 )? '': '(Reversed)'} </h2>
      <img src="images/${pullCards[i]}.jpg" />
      <p class="keywords">${keywords.join(' / ')}</p>
      <p>${data['tarot_interpretations'][pullCards[i]]['fortune_telling'].join(', ')}</p>

      <h4>When ${positionCard[reverseOrNot[i]]}</h4>
      <p>${data['tarot_interpretations'][pullCards[i]]['meanings'][positionCard[reverseOrNot[i]]].join(', ')}</p>
      </li>
      `
    )

  }
}


