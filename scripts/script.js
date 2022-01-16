const shipSky = document.querySelector('.ship-sky');

class GameWorld {
  constructor(sky) {
    this.sky = sky;
    this.allShips = [];
  }

  motherShip = () => {
    this.allShips.push({
      totalPoints: 100,
      loses: 9,
      isQueen: true,
      isDefence: false,
      isAttack: false,
      image: '../images/queen.png',
      gotShot: false,
    });
  };

  defenseShips = () => {
    //Generate 5 defence ships
    for (let i = 0; i < 5; i++) {
      this.allShips.push({
        totalPoints: 80,
        loses: 10,
        isQueen: false,
        isDefence: true,
        isAttack: false,
        image: '../images/defence.png',
        gotShot: false,
      });
    }
  };

  attackShips = () => {
    //Generate 5 defence ships
    for (let i = 0; i < 8; i++) {
      this.allShips.push({
        totalPoints: 45,
        loses: 12,
        isQueen: false,
        isDefence: false,
        isAttack: true,
        image: '../images/attack.png',
        gotShot: false,
      });
    }
  };

  //The maximum is inclusive and the minimum is inclusive
  getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  attackedShip = () => {
    // deep copy of objects inside the array
    const allShipsCopy = this.allShips.map((obj) => {
      const newObject = { ...obj };
      newObject.gotShot = false;
      return newObject;
    });

    const randomShip =
      allShipsCopy[this.getRandomIntInclusive(0, allShipsCopy.length - 1)];

    randomShip.totalPoints -= randomShip.loses;
    randomShip.gotShot = true;

    if (randomShip.totalPoints <= 0) {
      randomShip.image = '../images/explosion.png';
      randomShip.totalPoints = 0;

      const index = allShipsCopy.indexOf(randomShip);
      if (index > -1) {
        setTimeout(() => {
          allShipsCopy.splice(index, 1);
          this.allShips = allShipsCopy;
        }, 100);
      }
      this.allShips = allShipsCopy;
    }
    console.log(randomShip.gotShot);

    if (randomShip.totalPoints > 0) this.allShips = allShipsCopy;

    console.log(randomShip);
    // console.log(this.allShips);
    console.log(allShipsCopy);
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
      div.innerHTML = `<div class="${
        ship.gotShot ? 'attacked-cart' : 'cart'
      } "><div class="ship-image"><img class="ship-images shake" src="${
        ship.image
      }"></div><div class="${ship.gotShot ? 'lost-life' : 'life'}">
      ${ship.totalPoints}</div></div>`;
      this.sky.appendChild(div);
    });
  };
}

const buttonFight = document.querySelector('.controller__button');

const initiateWorld = new GameWorld(shipSky);

initiateWorld.gameGenerator();

buttonFight.addEventListener('click', () => {
  initiateWorld.attackedShip();
  initiateWorld.gameGenerator();
});
