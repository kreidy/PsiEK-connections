class Member {
  constructor(name, bigs, littles) {
    this.name = name;
    this.bigs = bigs;
    this.littles = littles;
    this.connections = bigs.concat(littles);
  }

  isConnectedTo(member2) {
    return this.connections.includes(member2.name);
  }
}

var members = {};
members["Kyle Reidy"] = new Member("Kyle Reidy",
                                   ["Jareni Polanco", "Noah Ashman"],
                                   ["Siobhan Chapman", "Renu Chepuru", "Justin Ward", "Katy Rucker", "Willis Lam"]);
members["Katy Rucker"] = new Member("Katy Rucker",
                                   ["Kyle Reidy", "Matthew Espinoza"],
                                   []);
members["Matthew Espinoza"] = new Member("Matthew Espinoza",
                                   ["Katie Osborn", "Kelly Vines"],
                                   ["Katy Rucker", "Sophia Buraglio"]);

var path = [];

function connect(member1, member2) {
  // base case
  if (member1.isConnectedTo(member2)) {
    path.push(member2);
    return true;
  }

  // recursive case
  for (const name of member1.connections) {
    if (members[name] == undefined)
      continue;

    member = members[name];

    path.push(member);
    if (connect(member, member2)) {
      return true;
    }
    path.pop(member);
  }

  return false;
}


// main
console.log(connect(members["Kyle Reidy"], members["Matthew Espinoza"]));
console.log(path);
