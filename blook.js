const nothing = 'https://media.discordapp.net/attachments/903063371425906708/904087321002008616/unknown.png_1.png';


const name = (prompt(`What do you want the blook name to be?`))
const url = (prompt(`What do you want your blook to look like(URL only)`))
const quantity = (prompt(`What quanity(number) of the blook do you want?`));
const sellprice = (prompt(`What Number do you want the sell price to be?`));
const rarity = (prompt(`What Rarity do you want the blook to be?`));
const color = (prompt(`What color do you want the rarity to be(Dont include the hashtag)`));

blooks = {
Chick: "https://blooket.s3.us-east-2.amazonaws.com/blooks/farmAnimals/chick.svg",
    Chicken: "https://blooket.s3.us-east-2.amazonaws.com/blooks/farmAnimals/chicken.svg",
    Cow: "https://blooket.s3.us-east-2.amazonaws.com/blooks/farmAnimals/cow.svg",
    Goat: "https://blooket.s3.us-east-2.amazonaws.com/blooks/farmAnimals/goat.svg",
    Horse: "https://blooket.s3.us-east-2.amazonaws.com/blooks/farmAnimals/horse.svg",
    Pig: "https://blooket.s3.us-east-2.amazonaws.com/blooks/farmAnimals/pig.svg",
    Sheep: "https://blooket.s3.us-east-2.amazonaws.com/blooks/farmAnimals/sheep.svg",
    Duck: "https://blooket.s3.us-east-2.amazonaws.com/blooks/farmAnimals/duck.svg",
    Dog: "https://blooket.s3.us-east-2.amazonaws.com/blooks/pets/dog.svg",
    Cat: "https://blooket.s3.us-east-2.amazonaws.com/blooks/pets/cat.svg",
    Rabbit: "https://blooket.s3.us-east-2.amazonaws.com/blooks/pets/rabbit.svg",
    Goldfish: "https://blooket.s3.us-east-2.amazonaws.com/blooks/pets/goldfish.svg",
    Hamster: "https://blooket.s3.us-east-2.amazonaws.com/blooks/pets/hamster.svg",
    Turtle: "https://blooket.s3.us-east-2.amazonaws.com/blooks/pets/turtle.svg",
    Kitten: "https://blooket.s3.us-east-2.amazonaws.com/blooks/pets/kitten.svg",
    Puppy: "https://blooket.s3.us-east-2.amazonaws.com/blooks/pets/puppy.svg",
    Bear: "https://blooket.s3.us-east-2.amazonaws.com/blooks/forestAnimals/bear.svg",
    Moose: "https://blooket.s3.us-east-2.amazonaws.com/blooks/forestAnimals/moose.svg",
    Fox: "https://blooket.s3.us-east-2.amazonaws.com/blooks/forestAnimals/fox.svg",
    Raccoon: "https://blooket.s3.us-east-2.amazonaws.com/blooks/forestAnimals/raccoon.svg",
    Squirrel: "https://blooket.s3.us-east-2.amazonaws.com/blooks/forestAnimals/squirrel.svg",
    Owl: "https://blooket.s3.us-east-2.amazonaws.com/blooks/forestAnimals/owl.svg",
    Hedgehog: "https://blooket.s3.us-east-2.amazonaws.com/blooks/forestAnimals/hedgehog.svg",
    Tiger: "https://blooket.s3.us-east-2.amazonaws.com/blooks/tropicalAnimals/tiger.svg",
    Orangutan: "https://blooket.s3.us-east-2.amazonaws.com/blooks/tropicalAnimals/orangutan.svg",
    Cockatoo: "https://blooket.s3.us-east-2.amazonaws.com/blooks/tropicalAnimals/cockatoo.svg",
    Parrot: "https://blooket.s3.us-east-2.amazonaws.com/blooks/tropicalAnimals/parrot.svg",
    Anaconda: "https://blooket.s3.us-east-2.amazonaws.com/blooks/tropicalAnimals/anaconda.svg",
    Jaguar: "https://blooket.s3.us-east-2.amazonaws.com/blooks/tropicalAnimals/jaguar.svg",
    Macaw: "https://blooket.s3.us-east-2.amazonaws.com/blooks/tropicalAnimals/macaw.svg",
    Toucan: "https://blooket.s3.us-east-2.amazonaws.com/blooks/tropicalAnimals/toucan.svg",
    Panther: "https://blooket.s3.us-east-2.amazonaws.com/blooks/tropicalAnimals/panther.svg",
    Capuchin: "https://blooket.s3.us-east-2.amazonaws.com/blooks/tropicalAnimals/capuchin.svg",
    "Snowy Owl": "https://blooket.s3.us-east-2.amazonaws.com/blooks/arcticAnimals/snowyOwl.svg",
    "Polar Bear": "https://blooket.s3.us-east-2.amazonaws.com/blooks/arcticAnimals/polarBear.svg",
    "Arctic Fox": "https://blooket.s3.us-east-2.amazonaws.com/blooks/arcticAnimals/arcticFox.svg",
    "Baby Penguin": "https://blooket.s3.us-east-2.amazonaws.com/blooks/arcticAnimals/babyPenguin.svg",
    Penguin: "https://blooket.s3.us-east-2.amazonaws.com/blooks/arcticAnimals/penguin.svg",
    "Arctic Hare": "https://blooket.s3.us-east-2.amazonaws.com/blooks/arcticAnimals/arcticHare.svg",
    Seal: "https://blooket.s3.us-east-2.amazonaws.com/blooks/arcticAnimals/seal.svg",
    Walrus: "https://blooket.s3.us-east-2.amazonaws.com/blooks/arcticAnimals/walrus.svg",
    Witch: "https://blooket.s3.us-east-2.amazonaws.com/blooks/medieval/witch.svg",
    Wizard: "https://blooket.s3.us-east-2.amazonaws.com/blooks/medieval/wizard.svg",
    Elf: "https://blooket.s3.us-east-2.amazonaws.com/blooks/medieval/elf.svg",
    Fairy: "https://blooket.s3.us-east-2.amazonaws.com/blooks/medieval/fairy.svg",
    "Slime Monster": "https://blooket.s3.us-east-2.amazonaws.com/blooks/medieval/slimeMonster.svg",
    Jester: "https://blooket.s3.us-east-2.amazonaws.com/blooks/medieval/jester.svg",
    Dragon: "https://blooket.s3.us-east-2.amazonaws.com/blooks/medieval/dragon.svg",
    Queen: "https://blooket.s3.us-east-2.amazonaws.com/blooks/medieval/queen.svg",
    Unicorn: "https://blooket.s3.us-east-2.amazonaws.com/blooks/medieval/unicorn.svg",
    King: "https://blooket.s3.us-east-2.amazonaws.com/blooks/medieval/king.svg",
    "Two of Spades": "https://blooket.s3.us-east-2.amazonaws.com/blooks/wonderland/twoOfSpades.svg",
    "Eat Me": "https://blooket.s3.us-east-2.amazonaws.com/blooks/wonderland/eat.svg",
    "Drink Me": "https://blooket.s3.us-east-2.amazonaws.com/blooks/wonderland/drink.svg",
    Alice: "https://blooket.s3.us-east-2.amazonaws.com/blooks/wonderland/alice.svg",
    "Queen of Hearts": "https://blooket.s3.us-east-2.amazonaws.com/blooks/wonderland/queenOfHearts.svg",
    Dormouse: "https://blooket.s3.us-east-2.amazonaws.com/blooks/wonderland/dormouse.svg",
    "White Rabbit": "https://blooket.s3.us-east-2.amazonaws.com/blooks/wonderland/whiteRabbit.svg",
    "Cheshire Cat": "https://blooket.s3.us-east-2.amazonaws.com/blooks/wonderland/cheshireCat.svg",
    Caterpillar: "https://blooket.s3.us-east-2.amazonaws.com/blooks/wonderland/caterpillar.svg",
    "Mad Hatter": "https://blooket.s3.us-east-2.amazonaws.com/blooks/wonderland/madHatter.svg",
    "King of Hearts": "https://blooket.s3.us-east-2.amazonaws.com/blooks/wonderland/kingOfHearts.svg",
    Toast: "https://blooket.s3.us-east-2.amazonaws.com/blooks/breakfast/toast.svg",
    Cereal: "https://blooket.s3.us-east-2.amazonaws.com/blooks/breakfast/cereal.svg",
    Yogurt: "https://blooket.s3.us-east-2.amazonaws.com/blooks/breakfast/yogurt.svg",
    "Breakfast Combo": "https://blooket.s3.us-east-2.amazonaws.com/blooks/breakfast/breakfastCombo.svg",
    "Orange Juice": "https://blooket.s3.us-east-2.amazonaws.com/blooks/breakfast/orangeJuice.svg",
    Milk: "https://blooket.s3.us-east-2.amazonaws.com/blooks/breakfast/milk.svg",
    Waffle: "https://blooket.s3.us-east-2.amazonaws.com/blooks/breakfast/waffle.svg",
    Pancakes: "https://blooket.s3.us-east-2.amazonaws.com/blooks/breakfast/pancakes.svg",
    "French Toast": "https://blooket.s3.us-east-2.amazonaws.com/blooks/breakfast/frenchToast.svg",
    Pizza: "https://blooket.s3.us-east-2.amazonaws.com/blooks/foods/pizza.svg",
    Earth: "https://blooket.s3.us-east-2.amazonaws.com/blooks/space/earth.svg",
    Meteor: "https://blooket.s3.us-east-2.amazonaws.com/blooks/space/meteor.svg",
    Stars: "https://blooket.s3.us-east-2.amazonaws.com/blooks/space/stars.svg",
    Alien: "https://blooket.s3.us-east-2.amazonaws.com/blooks/space/alien.svg",
    Planet: "https://blooket.s3.us-east-2.amazonaws.com/blooks/space/planet.svg",
    UFO: "https://blooket.s3.us-east-2.amazonaws.com/blooks/space/UFO.svg",
    Spaceship: "https://blooket.s3.us-east-2.amazonaws.com/blooks/space/spaceship.svg",
    Astronaut: "https://blooket.s3.us-east-2.amazonaws.com/blooks/space/astronaut.svg",
    "Lil Bot": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bots/lilBot.svg",
    "Lovely Bot": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bots/lovelyBot.svg",
    "Angry Bot": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bots/angryBot.svg",
    "Happy Bot": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bots/happyBot.svg",
    Watson: "https://blooket.s3.us-east-2.amazonaws.com/blooks/bots/watson.svg",
    "Buddy Bot": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bots/buddyBot.svg",
    "Brainy Bot": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bots/brainyBot.svg",
    "Mega Bot": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bots/megaBot.svg",
    "Old Boot": "https://blooket.s3.us-east-2.amazonaws.com/blooks/aquatic/oldBoot.svg",
    Jellyfish: "https://blooket.s3.us-east-2.amazonaws.com/blooks/aquatic/jellyfish.svg",
    Clownfish: "https://blooket.s3.us-east-2.amazonaws.com/blooks/aquatic/clownfish.svg",
    Frog: "https://blooket.s3.us-east-2.amazonaws.com/blooks/aquatic/frog.svg",
    Crab: "https://blooket.s3.us-east-2.amazonaws.com/blooks/aquatic/crab.svg",
    Pufferfish: "https://blooket.s3.us-east-2.amazonaws.com/blooks/aquatic/pufferFish.svg",
    Blobfish: "https://blooket.s3.us-east-2.amazonaws.com/blooks/aquatic/blobfish.svg",
    Octopus: "https://blooket.s3.us-east-2.amazonaws.com/blooks/aquatic/octopus.svg",
    Narwhal: "https://blooket.s3.us-east-2.amazonaws.com/blooks/aquatic/narwhal.svg",
    "Baby Shark": "https://blooket.s3.us-east-2.amazonaws.com/blooks/aquatic/babyShark.svg",
    Pumpkin: "https://blooket.s3.us-east-2.amazonaws.com/blooks/halloween/pumpkin.svg",
    `${name}`: `${url}`, 
    }

var blookFunction = () => {
    var o = document.getElementsByClassName("styles__blookArrayContainer___9Ae0L-camelCase")[0];
o.innerHTML = "";
  for (let e = 0; e < Object.keys(blooks).length; e++) {
        var a = Object.values(blooks)[e],
            s = Object.keys(blooks)[e],
    t = `<button onclick="${`() => \n        pass\n        document.getElementsByClassName('styles__blook___2Yq1S-camelCase')[0].src = '${a}';\n        document.getElementsByClassName('styles__priceContainer___1pnjg-camelCase')[0].children[0].innerText = 'Sell Price: ${sellprice}';\n        document.getElementsByClassName('styles__quantityText___JDfUO-camelCase')[0].innerText = 'Quantity: ${quantity}';\n        document.getElementsByClassName('styles__rarityText___3sXH2-camelCase')[0].innerText = '${rarity}';\n        document.getElementsByClassName('styles__rarityText___3sXH2-camelCase')[0].style = 'color: #${color};';\n        document.getElementsByClassName('styles__headerTextContainer___xVg-I-camelCase')[0].children[0].innerText = '${a}';\n    `}"\n role="button"tabindex="0"style="font-size: 0px; outline: none; user-select: none; margin: 5px 1vw; position: relative; border: none; backface-visibility: hidden; background-color: transparent;">\n<div class="styles__blookContainer___GKC0D-camelCase"\n style="z-index: 1; margin: 0px auto; width: 5vw; height: 5.75vw; cursor: pointer; position: relative; outline: none;">\n<img src="${s}"alt="${a} Blook"draggable="false"class="styles__blook___2Yq1S-camelCase"></div>\n</button>`;
    o.innerHTML += t
}

try { 
    blookFunction();
    } catch (error) {
        alert(error)
    }
