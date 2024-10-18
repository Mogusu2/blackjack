//Full array of possible cards
let cards;

function getCards(){
	cards = [
		{ 
			"suit": "clubs",
			"name": "2",
			"src": "2_of_clubs.png",
			"value": 2
		},
		{ 
			"suit": "clubs",
			"name": "3",
			"src": "3_of_clubs.png",
			"value": 3
		},
		{ 
			"suit": "clubs",
			"name": "4",
			"src": "4_of_clubs.png",
			"value": 4
		},
		{ 
			"suit": "clubs",
			"name": "5",
			"src": "5_of_clubs.png",
			"value": 5
		},
		{ 
			"suit": "clubs",
			"name": "6",
			"src": "6_of_clubs.png",
			"value": 6
		},
		{ 
			"suit": "clubs",
			"name": "7",
			"src": "7_of_clubs.png",
			"value": 7
		},
		{ 
			"suit": "clubs",
			"name": "8",
			"src": "8_of_clubs.png",
			"value": 8
		},
		{ 
			"suit": "clubs",
			"name": "9",
			"src": "9_of_clubs.png",
			"value": 9
		},
		{ 
			"suit": "clubs",
			"name": "10",
			"src": "10_of_clubs.png",
			"value": 10
		},
		{ 
			"suit": "clubs",
			"name": "ace",
			"src": "ace_of_clubs.png",
			"value": 11
		},
		{ 
			"suit": "clubs",
			"name": "jack",
			"src": "jack_of_clubs.png",
			"value": 10
		},
		{ 
			"suit": "clubs",
			"name": "king",
			"src": "king_of_clubs.png",
			"value": 10
		},
		{ 
			"suit": "clubs",
			"name": "queen",
			"src": "queen_of_clubs.png",
			"value": 10
		},
		{ 
			"suit": "diamonds",
			"name": "2",
			"src": "2_of_diamonds.png",
			"value": 2
		},
		{ 
			"suit": "diamonds",
			"name": "3",
			"src": "3_of_diamonds.png",
			"value": 3
		},
		{ 
			"suit": "diamonds",
			"name": "4",
			"src": "4_of_diamonds.png",
			"value": 4
		},
		{ 
			"suit": "diamonds",
			"name": "5",
			"src": "5_of_diamonds.png",
			"value": 5
		},
		{ 
			"suit": "diamonds",
			"name": "6",
			"src": "6_of_diamonds.png",
			"value": 6
		},
		{ 
			"suit": "diamonds",
			"name": "7",
			"src": "7_of_diamonds.png",
			"value": 7
		},
		{ 
			"suit": "diamonds",
			"name": "8",
			"src": "8_of_diamonds.png",
			"value": 8
		},
		{ 
			"suit": "diamonds",
			"name": "9",
			"src": "9_of_diamonds.png",
			"value": 9
		},
		{ 
			"suit": "diamonds",
			"name": "10",
			"src": "10_of_diamonds.png",
			"value": 10
		},
		{ 
			"suit": "diamonds",
			"name": "ace",
			"src": "ace_of_diamonds.png",
			"value": 11
		},
		{ 
			"suit": "diamonds",
			"name": "jack",
			"src": "jack_of_diamonds.png",
			"value": 10
		},
		{ 
			"suit": "diamonds",
			"name": "king",
			"src": "king_of_diamonds.png",
			"value": 10
		},
		{ 
			"suit": "diamonds",
			"name": "queen",
			"src": "queen_of_diamonds.png",
			"value": 10
		},
		{ 
			"suit": "hearts",
			"name": "2",
			"src": "2_of_hearts.png",
			"value": 2
		},
		{ 
			"suit": "hearts",
			"name": "3",
			"src": "3_of_hearts.png",
			"value": 3
		},
		{ 
			"suit": "hearts",
			"name": "4",
			"src": "4_of_hearts.png",
			"value": 4
		},
		{ 
			"suit": "hearts",
			"name": "5",
			"src": "5_of_hearts.png",
			"value": 5
		},
		{ 
			"suit": "hearts",
			"name": "6",
			"src": "6_of_hearts.png",
			"value": 6
		},
		{ 
			"suit": "hearts",
			"name": "7",
			"src": "7_of_hearts.png",
			"value": 7
		},
		{ 
			"suit": "hearts",
			"name": "8",
			"src": "8_of_hearts.png",
			"value": 8
		},
		{ 
			"suit": "hearts",
			"name": "9",
			"src": "9_of_hearts.png",
			"value": 9
		},
		{ 
			"suit": "hearts",
			"name": "10",
			"src": "10_of_hearts.png",
			"value": 10
		},
		{ 
			"suit": "hearts",
			"name": "ace",
			"src": "ace_of_hearts.png",
			"value": 11
		},
		{ 
			"suit": "hearts",
			"name": "jack",
			"src": "jack_of_hearts.png",
			"value": 10
		},
		{ 
			"suit": "hearts",
			"name": "king",
			"src": "king_of_hearts.png",
			"value": 10
		},
		{ 
			"suit": "hearts",
			"name": "queen",
			"src": "queen_of_hearts.png",
			"value": 10
		},
		{ 
			"suit": "spades",
			"name": "2",
			"src": "2_of_spades.png",
			"value": 2
		},
		{ 
			"suit": "spades",
			"name": "3",
			"src": "3_of_spades.png",
			"value": 3
		},
		{ 
			"suit": "spades",
			"name": "4",
			"src": "4_of_spades.png",
			"value": 4
		},
		{ 
			"suit": "spades",
			"name": "5",
			"src": "5_of_spades.png",
			"value": 5
		},
		{ 
			"suit": "spades",
			"name": "6",
			"src": "6_of_spades.png",
			"value": 6
		},
		{ 
			"suit": "spades",
			"name": "7",
			"src": "7_of_spades.png",
			"value": 7
		},
		{ 
			"suit": "spades",
			"name": "8",
			"src": "8_of_spades.png",
			"value": 8
		},
		{ 
			"suit": "spades",
			"name": "9",
			"src": "9_of_spades.png",
			"value": 9
		},
		{ 
			"suit": "spades",
			"name": "10",
			"src": "10_of_spades.png",
			"value": 10
		},
		{ 
			"suit": "spades",
			"name": "ace",
			"src": "ace_of_spades.png",
			"value": 11
		},
		{ 
			"suit": "spades",
			"name": "jack",
			"src": "jack_of_spades.png",
			"value": 10
		},
		{ 
			"suit": "spades",
			"name": "king",
			"src": "king_of_spades.png",
			"value": 10
		},
		{ 
			"suit": "spades",
			"name": "queen",
			"src": "queen_of_spades.png",
			"value": 10
		}
	]
}
