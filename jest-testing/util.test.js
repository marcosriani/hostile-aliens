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

  test('motherShip method return an object', () => {
    const initiateWorld = new GameWorld();
    const allShips = [];

    const result = initiateWorld
      .motherShip(100, 9, true, '../images/attack.png', false)
      .bind(allShips);

    expect(typeof result).toBe('object');
  });
});
