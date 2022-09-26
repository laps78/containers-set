import Character from '../character';
import Bowman from '../bowman';
import Swordsman from '../swordsman';
import Magician from '../magician';
import Undead from '../undead';
import Zombie from '../zombie';
import Daemon from '../daemon';

test('Character should create right character', () => {
  const personConstrucor = new Character('testChar', 'Bowman');
  const personName = {
    name: 'testChar',
    type: 'Bowman',
    level: 1,
    health: 100,
  };
  expect(personConstrucor).toEqual(personName);
});

test('Bowman should create character \'bowman\' with correct characteristics', () => {
  const personConstrucor = new Bowman('Tom');
  const personName = {
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
    name: 'Tom',
    type: 'Bowman',
  };

  expect(personConstrucor).toEqual(personName);
});

test('Swordsman should create character \'bowman\' with correct characteristics', () => {
  const personConstrucor = new Swordsman('Jack');
  const personName = {
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
    name: 'Jack',
    type: 'Swordsman',
  };

  expect(personConstrucor).toEqual(personName);
});

test('Magician should create character \'Magician\' with correct characteristics', () => {
  const personConstrucor = new Magician('Oleg');
  const personName = {
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
    name: 'Oleg',
    type: 'Magician',
  };

  expect(personConstrucor).toEqual(personName);
});

test('Undead should create character \'Undead\' with correct characteristics', () => {
  const personConstrucor = new Undead('Carl');
  const personName = {
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
    name: 'Carl',
    type: 'Undead',
  };

  expect(personConstrucor).toEqual(personName);
});

test('Zombie should create character \'Zombie\' with correct characteristics', () => {
  const personConstrucor = new Zombie('Hans');
  const personName = {
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
    name: 'Hans',
    type: 'Zombie',
  };

  expect(personConstrucor).toEqual(personName);
});

test('Daemon should create character \'Daemon\' with correct characteristics', () => {
  const personConstrucor = new Daemon('Phil');
  const personName = {
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
    name: 'Phil',
    type: 'Daemon',
  };

  expect(personConstrucor).toEqual(personName);
});
