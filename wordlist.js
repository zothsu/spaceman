const secretWords = [
  'comets',
  'planet',
  'rocket',
  'nebula',
  'galaxy',
  'cosmic',
  'meteor',
  'orbital',
  'cosmos',
  'saturn',
  'quasar',
];
class WordList:
    def __init__(self):
        self.categories = {
            "space": [
                {"word": "planet", "hint": "A celestial body that orbits a star"},
                {"word": "galaxy", "hint": "A large system of stars, gas, and dust held together by gravity"},
                {"word": "asteroid", "hint": "A small rocky object that orbits the Sun"},
                {"word": "star", "hint": "A luminous ball of gas that generates energy through nuclear fusion"}
            ],
            "food": [
                {"word": "pizza", "hint": "A popular Italian dish made of round, flattened dough topped with various ingredients"},
                {"word": "burger", "hint": "A sandwich consisting of a cooked patty of ground meat in a bun"},
                {"word": "sushi", "hint": "A Japanese dish consisting of vinegared rice topped with various ingredients"},
                {"word": "pasta", "hint": "An Italian dish made from unleavened dough of wheat flour, water, and sometimes eggs"}
            ],
            "games": [
                {"word": "chess", "hint": "A strategic board game played between two players on a checkered gameboard"},
                {"word": "monopoly", "hint": "A classic board game where players buy, sell, and trade properties"},
                {"word": "scrabble", "hint": "A word game in which two to four players score points by placing tiles, each bearing a single letter, onto a game board"},
                {"word": "jenga", "hint": "A game where players take turns removing one block at a time from a tower and balancing it on top"}
            ]
        }

    def get_words(self, category):
        return self.categories.get(category, [])

word_list = WordList()