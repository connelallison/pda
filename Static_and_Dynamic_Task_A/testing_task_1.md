### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby

class CardGame

  # no initialize method - not really clear why this needs to be its own class, these methods could all be done as class methods of the Card class

  def checkforAce(card) # won't cause any errors, but this should be in snake case, not camel case.
    if card.value = 1 # should be ==
      return true
    else
      return false
    end
  end

  dif highest_card(card1 card2) #'dif' instead of 'def', no comma between arguments,
  if card1.value > card2.value
    return card #should be card1
  else
    return card2
  end
end
end #extra 'end'
# not exactly an error but this is improperly indented

def self.cards_total(cards) # no particular reason for this to be a class method and not the other two
  total # total has not been assigned a value
  for card in cards
    total += card.value
    return "You have a total of" + total # total not converted to string. also, no space between 'of' and total. also, this will return the total the first time it adds a value instead of after adding all of them.
  end
end

# no 'end' for class definition
```
