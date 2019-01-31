require('minitest/autorun')
require('minitest/rg')
require_relative("card_game.rb")
require_relative("card.rb")

class CardGameTest < MiniTest::Test

  def setup
    @card1 = Card.new("spades", 1)
    @card2 = Card.new("clubs", 4)
    @card3 = Card.new("hearts", 9)
    @card4 = Card.new("diamonds", 4)
    @cards = [@card1, @card2, @card3]
    @card_game = CardGame.new()
  end

  def test_check_for_ace_true
    assert_equal(true, @card_game.checkforAce(@card1))
  end

  def test_check_for_ace_false
    assert_equal(false, @card_game.checkforAce(@card2))
  end

  def test_highest_card_second
    assert_equal(@card2, @card_game.highest_card(@card1, @card2))
  end

  def test_highest_card_first
    assert_equal(@card3, @card_game.highest_card(@card3, @card2))
  end

  def test_highest_card_equal
    assert_equal(:equal, @card_game.highest_card(@card2, @card4))
  end

  def test_cards_total
    assert_equal("You have a total of 14", CardGame.cards_total(@cards))
  end

end
