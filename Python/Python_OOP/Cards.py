SUITS = ['Heart of', 'Spades of','Diamonds of','Clubs of']
VALUES = ['ACE', '2','3','4', '5', '6','7','8','9','10','Jack','Queen','King']
class Cards(object):
    def __init__(self,suits,values):
        self.suits= suits
        self.values= values
# self calls the instance that exists, and it has a value called value or suits.
class Deck(object):
    def __init__(self, amount = 52):
        cards = []
        for suit in range(len(SUITS)):
            for value in range(len(VALUES)):
                card = Cards(SUITS[suit], VALUES[value])
                cards.append(card)
        for element in cards:
            print element.suits, element.values

deck= Deck()
