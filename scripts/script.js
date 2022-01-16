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
      isLive: true,
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
        isLive: true,
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
        isLive: true,
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
    const allShipsCopy = [...this.allShips];

    // const index = randomShip.indexOf(
    //   randomShip[this.getRandomIntInclusive(0, this.allShips.length - 1)]
    // );

    // if(index > -1 ) {
    //     randomShip.
    // }

    const randomShip =
      allShipsCopy[this.getRandomIntInclusive(0, allShipsCopy.length - 1)];

    randomShip.totalPoints -= randomShip.loses;
    randomShip.gotShot = true;

    console.log(allShipsCopy);
    this.allShips = [...allShipsCopy];

    // console.log(randomShip);
    // console.log(this.allShips);
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
      //   ${
      //     this.gotShot ? 'cart-attacked' : ''
      //   }
      div.innerHTML = `<div class="cart "><div class="ship-image"><img class="ship-images shake" src="${ship.image}"></div><div class="life">${ship.totalPoints}</div></div>`;
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
