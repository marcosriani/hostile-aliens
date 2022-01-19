import { GameWorld } from './util.js';

(function () {
  const shipSky = document.querySelector('.ship-sky');
  const buttonFight = document.querySelector('.controller__button');
  const gameOverWrapper = document.querySelector('.game-over-wrapper');
  const startAgain = document.querySelector('.game-over__continue');

  const initiateWorld = new GameWorld(shipSky, gameOverWrapper, buttonFight);

  initiateWorld.gameGenerator();

  buttonFight.addEventListener('click', () => {
    initiateWorld.attackedShip();
    initiateWorld.gameGenerator();
  });

  startAgain.addEventListener('click', () => initiateWorld.startAgain());
})();
