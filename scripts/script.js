const shipSky = document.querySelector('.ship-sky');

class ShipFactory {
  constructor(totalPoints, loses, isLive, isQueen, isDefence, isAttack, image) {
    this.totalPoints = totalPoints;
    this.loses = loses;
    this.isLive = isLive;
    this.image = image;
    this.isQueen = isQueen;
    this.isDefence = isDefence;
    this.isAttack = isAttack;
  }
}

class GameWorld {
  constructor(ShipFactory, sky) {
    this.ShipFactory = ShipFactory;
    this.sky = sky;
    this.allShips = [];
  }

  motherShip = () => {
    this.allShips.push(
      new ShipFactory(100, 9, true, true, false, false, '../images/queen.png')
    );
  };

  defenseShips = () => {
    //Generate 5 defence ships
    for (let i = 0; i < 5; i++) {
      this.allShips.push(
        new ShipFactory(
          80,
          10,
          true,
          false,
          true,
          false,
          '../images/defence.png'
        )
      );
    }
  };

  attackShips = () => {
    //Generate 5 defence ships
    for (let i = 0; i < 8; i++) {
      this.allShips.push(
        new ShipFactory(
          45,
          12,
          true,
          false,
          false,
          true,
          '../images/attack.png'
        )
      );
    }
  };

  //The maximum is inclusive and the minimum is inclusive
  getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  attackedShip = () => {
    const randomShip =
      this.allShips[this.getRandomIntInclusive(0, this.allShips.length - 1)];

    randomShip.totalPoints -= randomShip.loses;

    // this.allShips = [...this.allShips, randomShip];

    console.log(randomShip);
    console.log(this.allShips);
  };

  // Generate the ships on the sky
  gameGenerator = () => {
    if (this.allShips.length <= 0) {
      this.motherShip();
      this.defenseShips();
      this.attackShips();
    }

    this.sky.innerHTML = '';

    this.allShips.forEach((ship) => {
      let div = document.createElement('div');
      div.id = 'content';
      div.innerHTML = `<div class="cart"><div class="ship-image"><img class="ship-images shake" src="${ship.image}"></div><div class="life">${ship.totalPoints}</div></div>`;
      this.sky.appendChild(div);
    });
  };
}

const buttonFight = document.querySelector('.controller__button');

const initiateWorld = new GameWorld(ShipFactory, shipSky);

initiateWorld.gameGenerator();

buttonFight.addEventListener('click', () => {
  initiateWorld.attackedShip();
  initiateWorld.gameGenerator();
});
