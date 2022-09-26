export default class Character {
  constructor(name, type) {
    if (name.length >= 2 && name.length <= 10) {
      this.name = name;
    } else {
      throw new Error('Trying to create character with name length out of range!');
    }
    if (type === 'Bowman' || type === 'Swordsman' || type === 'Magician' || type === 'Daemon' || type === 'Undead' || type === 'Zombie') {
      this.type = type;
    } else {
      throw new Error(`Trying to create character with type (${type}) not matched the legal type list!`);
    }

    this.health = 100;
    this.level = 1;
  }
}
