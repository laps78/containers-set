import Bowman from '../bowman';
import Swordsman from '../swordsman';
import Daemon from '../daemon';
import Team from '../app';

// init new characters
const bowmanFred = new Bowman('Fred');
const swordsmanTom = new Swordsman('Tom');
const daemonKarl = new Daemon('Karl');

// Init new team
const team = new Team();
team.add(swordsmanTom);

test('class Team method add() should throw an error trying to add a character that already in team', () => {
  function testError() {
    team.add(swordsmanTom);
  }
  expect(testError).toThrowError('Персонаж уже существует в команде!');
});

test('class Team method add() should add a team member', () => {
  team.add(bowmanFred);
  expect(team.members.has(bowmanFred)).toBe(true);
});

test('team.adAll() method should add multiple characters', () => {
  if (team.members.has(bowmanFred)) team.members.delete(bowmanFred);
  team.addAll(bowmanFred, daemonKarl);
  expect(team.members.has(bowmanFred)).toBe(true);
  expect(team.members.has(daemonKarl)).toBe(true);
});
