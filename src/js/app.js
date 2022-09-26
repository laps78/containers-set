// TODO: write your code here
export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(member) {
    if (this.members.has(member)) throw new Error('Персонаж уже существует в команде!');
    this.members.add(member);
  }

  addAll(...members) {
    members.forEach((member) => this.add(member));
  }

  toArray() {
    const membersArray = [];
    this.members.forEach((member) => membersArray.push(member));
    return membersArray;
  }
}
