import { expect } from '@jest/globals';
import { GameWorld } from '../scripts/util.js';

describe('Game tests', () => {
  test('Typeof class (function constructor) to be an function', () => {
    expect(typeof GameWorld).toBe('function');
  });

  test('Type of class instantiation be an object', () => {
    const initiateWorld = new GameWorld();
    expect(typeof initiateWorld).toBe('object');
  });

  test('Type of motherShip method to be an function', () => {
    const initiateWorld = new GameWorld();
    expect(typeof initiateWorld.motherShip).toBe('function');
  });

  test('Type of defenseShips method to be an function', () => {
    const initiateWorld = new GameWorld();
    expect(typeof initiateWorld.defenseShips).toBe('function');
  });

  test('Type of attackShips method to be an function', () => {
    const initiateWorld = new GameWorld();
    expect(typeof initiateWorld.attackShips).toBe('function');
  });

  test('Type of getRandomIntInclusive method to be an function', () => {
    const initiateWorld = new GameWorld();
    expect(typeof initiateWorld.getRandomIntInclusive).toBe('function');
  });

  test('Function getRandomIntInclusive to return a number', () => {
    const initiateWorld = new GameWorld();
    const randomNumberGenerator = initiateWorld.getRandomIntInclusive();
    expect(typeof randomNumberGenerator).toBe('number');
  });

  test('Function getRandomIntInclusive to return a number > 0', () => {
    const initiateWorld = new GameWorld();
    const randomNumberGenerator = initiateWorld.getRandomIntInclusive(0, 10);
    expect(randomNumberGenerator).toBeGreaterThanOrEqual(0);
  });

  test('Type of attackedShip method to be an function', () => {
    const initiateWorld = new GameWorld();
    expect(typeof initiateWorld.attackedShip).toBe('function');
  });

  test('Type of gameGenerator method to be an function', () => {
    const initiateWorld = new GameWorld();
    expect(typeof initiateWorld.gameGenerator).toBe('function');
  });

  test('Type of startAgain method to be an function', () => {
    const initiateWorld = new GameWorld();
    expect(typeof initiateWorld.startAgain).toBe('function');
  });

  // test('motherShip method return an object', () => {
  //   const initiateWorld = new GameWorld();
  //   const allShips = [];

  //   const result = initiateWorld
  //     .defenseShips(100, 9, true, '../images/attack.png', false)
  //     .bind(allShips);

  //   expect(result).toBe('object');
  // });
});
