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
// Variables
// ==================

var positionCard = ['upright', 'reversed']
var pullCards = [];
var reverseOrNot = [];
var ul = document.querySelector('ul');


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

    $('ul').append(`
      <li class="${positionCard[reverseOrNot[i]]}" style="animation: fadein ${(i+1)*2}s;">
      <h1>${(spread[i])? spread[i] : ''}</h1>
      <h2 class="card-title">${allCards[pullCards[i]]} ${(reverseOrNot[i] == 0 )? '': '(Reversed)'} </h2>
      <img src="images/${pullCards[i]}.jpg" />
      <p>The Ace of Cups shows a chalice overflowing with five streams of water. The cup represents the vessel of your subconscious mind; the five streams are your five senses and the abundant emotion and intuition flowing from within you. The hand holding the cup is sliding out of the clouds, a symbol of your awareness of spiritual energy and influence. Below the hand is a vast sea covered with lotus blossoms, signifying the awakening of the human spirit. A dove descends towards the cup – a symbol of Divine love flowing through the subconscious mind to conscious awareness.</p>
      </li>
      `
    )
  }
}


