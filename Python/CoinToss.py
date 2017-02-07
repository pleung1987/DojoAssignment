import random
def coinToss():
    number = 5000
    heads = 0
    tails = 0

    for amount in range(5000):
         flip = random.randint(0, 1)
         coin = "Heads" if flip == 1 else "Tails"
         if (flip == 0):
              print "Throwing a coin... It's a tails! ... Got", heads,"head(s) so far and", tails,"tails(s) so far"
              tails += 1
         else:
              print "Throwing a coin... It's a heads! ... Got", heads,"head(s) so far and", tails,"tail(s) so far"
              heads += 1
coinToss()

    # print(str(recordList))
    # print(str(recordList.count("Heads")) + str(recordList.count("Tails")))
