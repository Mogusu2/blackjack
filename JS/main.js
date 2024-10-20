// Starting game board values
let cardsInDeck;

$( document ).ready(function() {
  getCards();
  cardsInDeck = cards;
  updateVisibleChipBalances();
});

let currentTurn = "player";
let currentWager = 0;
let currentChipBalance = localStorage.getItem('blackjackChips') || 500;
let gameWinner = "none"; // To be declared at end of game
let isGameOver = false;

// Dealer hand and starting totals
let dealerHand = [];
let dealerHandTotal = 0;
let dealerGameBoard = $("#dealer");
let dealerStatus = "start"; // Possible statuses are start (initial gameplay), stand, hit

// Player hand and starting totals
let playerHand = [];
let playerHandTotal = 0;
let playerGameBoard = $("#user-hand");
let playerHandTotalDisplay = $(".hand-total");
let playerStatus = "start";  // Possible statuses are start (initial gameplay), stand, hit

// Because aces can equal 1 or 11, need to quickly know if player has aces so we can
// adjust value from 11 to 1 if they go over 21 (default value is 11)
let playerHasAce = false;  

// Player split game variables only used if the player splits their hand
let splitGame = false; // default value is false, must be turned true
let playerSplitHand = [];
let playerSplitHandTotal = 0;
let playerSplitGameBoard = $("#user-split-hand");
let playerSplitHandTotalDisplay = $(".split-hand-total");
let playerSplitStatus;

// Buttons pulled from DOM
let startButton = $("#start-game-button");
let doubleDownButton = $("#double-down-button");
let hitButton = $("#hit-button");
let standButton = $("#stand-button");
let splitButton = $(".split-button");
let playAgainButton = $(".new-game-button"); 

// Deactivates a button (both event listener and appearance)
function disableButton(buttonName) {
	$(buttonName).off();
	$(buttonName).addClass("disabled-button");
}

// Activates a button (both event listener and appearance)
function enableButton(buttonName, event) {
	$(buttonName).click(event);
	$(buttonName).removeClass("disabled-button");
}

// Update chip totals displayed to user throughout the game
function updateVisibleChipBalances() {
	$(".current-wager").text(currentWager);
	$(".current-chip-balance").text(currentChipBalance);
	localStorage.setItem('blackjackChips', currentChipBalance);
}

// Update card hand totals displayed to user throughout the game
function updateVisibleHandTotals() {
	$(playerHandTotalDisplay).text(playerHandTotal);
	$(playerSplitHandTotalDisplay).text(playerSplitHandTotal);

	// If the dealer has not played yet or game is not over, only show value of 1st card
	// as the player is still making their initial moves
	if (dealerHand.length === 2 && isGameOver === false && dealerStatus === "start") {
		$(".dealer-hand-total").text(dealerHandTotal - dealerHand[1].value);
	} else {
		$(".dealer-hand-total").text(dealerHandTotal);
	}

}

// Called when player clicks on a chip
function selectWager(amount){
	currentWager = amount;
	updateVisibleChipBalances();
}

// 	ANIMATIONS/INTERACTIVITY:
function flipHiddenCard() {
	// If it's just the initial round, first we need to flip/reveal the hidden dealer card when this is called
	if (dealerHand.length === 2) {
		$("#dealer-card-1").addClass("flipped");
		setTimeout(function(){
			$("#dealer-card-1").attr("src", "./IMG/" + dealerHand[1].src);
			updateVisibleHandTotals();
		}, 250);	
	} 
}

// Used in split game mode, shrinks the inactive deck and totals
function scaleDownDeck(deck, totalDisplay) {
	$(totalDisplay).addClass("splithand-scaledown");
	$(deck).addClass("splithand-scaledown");
}

// Used in split game mode, enlarges the deck and totals when turn active or when
// dome with gameplay
function enlargeDeck(deck, totalDisplay) {
	$(totalDisplay).removeClass("splithand-scaledown");
	$(deck).removeClass("splithand-scaledown");
}

// Toggling rules from main nav gives an animation effect
$(".rules-nav").click(function(){
	$("#rules").toggle("blind", 500);
});

// But clicking close does not provide an animation effect
$("#rules-close").click(function(){
	$("#rules").hide();
});

// Materialize modal
$(".modal").modal({ 
      dismissible: false, 
      opacity: .40, 
      inDuration: 300, 
      outDuration: 200, 
      startingTop: "10%", // Starting top style attribute
      endingTop: "10%", // Ending top style attribute
    }
  );

// EVENT LISTENERS:
$("#chip-10").click(function(){selectWager(10)});
$("#chip-25").click(function(){selectWager(25)});
$("#chip-50").click(function(){selectWager(50)});
$("#chip-100").click(function(){selectWager(100)});

// Button activation
$(startButton).click(startGame);
$(doubleDownButton).click(doubleDown); 
$(hitButton).click(hit);
$(standButton).click(stand);
$(playAgainButton).click(newGame);
$("#reset-game").click(resetGame);

$(".reduce-aces-button").click(   // Can only see this if player draws 2 aces, would only be reducing in 1st deck
	function(){
		reduceAcesValue(playerHand);
		disableButton(splitButton, split);
}); 
