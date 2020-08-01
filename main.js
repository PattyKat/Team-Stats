const team = {
  _players: [
    {firstName:'Ali' ,lastName:'Rio' , age: 5 },
    {firstName:'Jesse' ,lastName:'Lear' , age: 7 },
    {firstName:'Cole' ,lastName:'Abel' , age: 6 },
  ],
  _games: [
    {opponent: 'Mustangs', teamPoints: 42, opponentPoints:27},
    {opponent: 'Bulldogs', teamPoints: 36, opponentPoints:45},
    {opponent: 'Pandas', teamPoints: 10, opponentPoints:60},
  ],
  get players(){
    return this._players;
  },
  get games(){
    return this._games;
  },
  addPlayer(firstName, lastName, age){
    const player = {
      firstName: firstName, 
      LastName: lastName, 
      age: age};
    return this._players.push(player);
  },
  addGame(opponent, teampoints, opponentPoints){
    const game = {
      OpponentName: opponent,
      teamPoints: teampoints,
      opponentPoints: opponentPoints
    };
    return this._games.push(game);
  }
};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);
team.addGame('Bucks', 52, 36);
team.addGame('Turtles', 23, 24);
team.addGame('Chiefs', 67, 62);

console.log(team._players);
console.log(team._games);