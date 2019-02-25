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
// Variables
// ==================

var positionCard = ['upright', 'reversed']
var pullCards = [];
var reverseOrNot = [];
var ul = document.querySelector('ul');

function clearTable(){
  ul.innerHTML = "";
}

function tirage(num) {
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
    
    $('ul').append(`
      <li class="${positionCard[reverseOrNot[i]]}">
      <h2 class="card-title">${allCards[pullCards[i]]} ${(reverseOrNot[i] == 0 )? '': '(Reversed)'} </h2>
      <img src="images/${pullCards[i]}.jpg" /></li>`
    )
  }
}


