const sister = 0, brother = 1;

class Member {
  constructor(name, organization, bigSister, bigBrother) {
    this.name = name;
    this.organization = organization,
    this.bigSister = bigSister;
    this.bigBrother = bigBrother;
    this.connections = [bigSister, bigBrother];
  }

  isConnectedTo(member2) {
    return this.connections.includes(member2.name);
  }

  addConnection(member) {
    this.connections.push(member.name);
  }
}

var members = {
  // TBS Alpha Phi
  "Cheyenne Suzukawa":    new Member("Cheyenne Suzukawa", sister, "Kathleen Oliphant", "Michie Leccese"),
  "Chris Calles":         new Member("Chris Calles", sister, "Theo Wu", "Patrick Chesnut"),
  "Kyle Reidy":           new Member("Kyle Reidy", sister, "Jareni Polanco", "Noah Ashman"),
  "Marcus Veal":          new Member("Marcus Veal", sister, "Kayleigh Hart", "Jacob Hambalek"),
  "Martin Trang":         new Member("Martin Trang", sister, "Emily Tsai", "Justin Hang"),
  "Sarah Jensen":         new Member("Sarah Jensen", sister, "Kaitlyn Watkins", "Michie Leccese"),
  "Julianne Zingmond":    new Member("Julianne Zingmond", sister, "Kathleen Oliphant", null),

  // KKPsi Beta Upsilon
  "Casey Armstrong":      new Member("Casey Armstrong", brother, "Shayna Warner", "Jacob Hambalek"),
  "Haley Breland":        new Member("Haley Breland", brother, "Kathleen Oliphant", "Amanda Albini"),
  "Matthew Chin":         new Member("Matthew Chin", brother, "Sharla Barlan", "Nishi Intwala"),
  "Vito Emanuel":         new Member("Vito Emanuel", brother, "Susie Carlos", "John Malchar"),
  "Daniel Fernandez":     new Member("Daniel Fernandez", brother, "Connie Chen", "David Egen"),
  "Keegan Fowler":        new Member("Keegan Fowler", brother, "Sam Chavez", "Michie Leccesse"),
  "Eduardo Gordiano":     new Member("Eduardo Gordiano", brother, "Angelica Rodriguez", "Vy Giap"),
  "Omer Lavian":          new Member("Omer Lavian", brother, "Jenny Lindell", "Annie Cheng"),
  "Jade McVay":           new Member("Jade McVay", brother, "Shannon Miner", "Sophia Inaba"),
  "Justin Nguyen":        new Member("Justin Nguyen", brother, "Theo Wu", "Andy Hsu"),
  "Jacob Re":             new Member("Jacob Re", brother, "Thomas Smith", "Joey Auer"),
  "Chris Routh":          new Member("Chris Routh", brother, "Sara Mosgrove", "Melodie Butz"),
  "William Shu":          new Member("William Shu", brother, "Daven Lagman", "Sukhi Bassi"),
  "Michael Stranieri":    new Member("Michael Stranieri", brother, "Jareni Palonco", "Kevin King"),
  "Justin Wolfman":       new Member("Justin Wolfman", brother, "Kayleigh Hart", "Brendan James"),

  // TBS Alpha Chi
  "Andy Nguyen":          new Member("Andy Nguyen", sister, "Sarah Jensen", "Justin Nguyen"),
  "Aylin Henstridge":     new Member("Aylin Henstridge", sister, "Natalie Aranda", "Sidney Kantono"),
  "Collin Lantz":         new Member("Collin Lantz", sister, "Martin Trang", "Keegan Fowler"),
  "Daniela Hernandez":    new Member("Daniela Hernandez", sister, "Kelly Flood", "Haley Nelson"),
  "Emma Atkins":          new Member("Emma Atkins", sister, "Tabetha Van Heest", "Chris Routh"),
  "Ethan Brandt":         new Member("Ethan Brandt", sister, "Emma Suchard", "Harry Mitchell"),
  "James Eichenbaum":     new Member("James Eichenbaum", sister, "Shelby Olson", "Omer Lavian"),
  "Jana Boksan":          new Member("Jana Boksan", sister, "Jordan Briggs", "Justin Wolfman"),
  "Kerianne Brennan":     new Member("Kerianne Brennan", sister, "Julianne Zingmond", "Tia Liu"),
  "Leo Pfeiffer":         new Member("Leo Pfeiffer", sister, "Owen Saites", "John Lassetter"),

  // KKPsi Beta Phi
  "Sara Acosta":          new Member("Sara Acosta", brother, "Julianne Zingmond", "Jade McVay"),
  "Daniel Adea":          new Member("Daniel Adea", brother, "Kelly Vines", "Matthew Chin"),
  "Emma Boone":           new Member("Emma Boone", brother, "Marcus Veal", "Chris Routh"),
  "Ethan Cai":            new Member("Ethan Cai", brother, "Sarah Jenson", "Justin Nguyen"),
  "Ronnie Chase":         new Member("Ronnie Chase", brother, "Shelby Olson", "Harry Mitchell"),
  "Renu Chepuru":         new Member("Renu Chepuru", brother, "Kyle Reidy", "Joey Auer"),
  "Emily Davis":          new Member("Emily Davis", brother, "Kelly Flood", "Sofia Alemania"),
  "Brandon Free":         new Member("Brandon Free", brother, "Cheyenne Suzukawa", "Jared Brock"),
  "Garrett Henkle":       new Member("Garrett Henkle", brother, "Tabetha Van Heest", "Justin Wolfman"),
  "Trey Knudson":         new Member("Trey Knudson", brother, "Delacey Rodriguez", "Sidney Kantono"),
  "Jeffrey Lin":          new Member("Jeffrey Lin", brother, "Talia Fossa", "John Lassetter "),
  "Emily Liu":            new Member("Emily Liu", brother, "Claire Locke", "Samantha Ono"),
  "David Matter":         new Member("David Matter", brother, "Kathleen Oliphant", "Keegan Fowler"),
  "Katie Osborn":         new Member("Katie Osborn", brother, "Nique Stumbaugh", "Abby McCallum"),
  "David Thorne":         new Member("David Thorne", brother, "Sarah Truax", "Mike Stranieri"),
  "Chelsy Torres":        new Member("Chelsy Torres", brother, "Cheyenne Suzukawa", "Michelle Leccese"),
  "Erica Vellanoweth":    new Member("Erica Vellanoweth", brother, "Julianne Zingmond", "Casey Armstrong"),
  "Eric Wong":            new Member("Eric Wong", brother, "Tesslyn Knapp", "Jacob Re"),

  // TBS Alpha Psi
  "Annabel Li":           new Member("Annabel Li", sister, "Marcus Veal", "Erica Vellanoweth"),
  "Ashley Arellano":      new Member("Ashley Arellano", sister, "Delacey Rodriguez", "Omer Lavian"),
  "Blanca Carla Arriaga": new Member("Blanca Carla Arriaga", sister, "Cheyenne Suzukawa", "Michie Leccese"),
  "Diana Greenwood":      new Member("Diana Greenwood", sister, "Delaney Proudfoot", "Patrick Gardner"),
  "Elizabeth Gallmeister":new Member("Elizabeth Gallmeister", sister, "Claire Locke", "Emily Liu"),
  "Ethan Kim":            new Member("Ethan Kim", sister, "Jeremy Huang", "Eric Wong"),
  "Isaac Boris":          new Member("Isaac Boris", sister, "Phoebe Miller", "Jacob Re"),
  "Jazmin Aguila":        new Member("Jazmin Aguila", sister, "Daniela Hernandez", "Eduardo Gordiano"),
  "Johnny Urosevic":      new Member("Johnny Urosevic", sister, "Collin Lantz", "David Thorne"),
  "Justin Cole":          new Member("Justin Cole", sister, "Leo Pfeiffer", "Jeffrey Lin"),
  "Madelyn Armes":        new Member("Madelyn Armes", sister, "Kerianne Brennan", "Emma Boone"),
  "Makailah Hernandez":   new Member("Makailah Hernandez", sister, "Jacob Panaro", "Tia Liu"),
  "Melissa Perrin":       new Member("Melissa Perrin", sister, "Jana Boksan", "John Lassetter"),
  "Natasha Rodriguez":    new Member("Natasha Rodriguez", sister, "Emma Atkins", "Casey Armstrong"),
  "Paolo Gaudiel":        new Member("Paolo Gaudiel", sister, "Andy Nguyen", "Christiana Gutierrez"),
  "Shruti Indiresan":     new Member("Shruti Indiresan", sister, "Aylin Henstridge", "Chelsy Torres"),
  "Sierra Talbert":       new Member("Sierra Talbert", sister, "James Eichenbaum", "Ronnie Chase"),
  "Yahaira Cortez":       new Member("Yahaira Cortez", sister, "Alexis Elliott", "Renu Chepuru"),

  // KKPsi Beta Chi
  "Carrie Appel":         new Member("Carrie Appel", brother, "Emma Atkins", "William Shu"),
  "Chris Badroos":        new Member("Chris Badroos", brother, "Chris Calles", "David Thorne"),
  "Gus Billing":          new Member("Gus Billing", brother, "Cheyenne Suzakawa", "Sara Acosta"),
  "Evelyn Coffey":        new Member("Evelyn Coffey", brother, "Andy Nguyen", "Erica Vellanoweth"),
  "Matthew Espinoza":     new Member("Matthew Espinoza", brother, "Kelly Vines", "Katie Osborn"),
  "Ivy Kwok":             new Member("Ivy Kwok", brother, "Kelly Flood", "Ronnie Chase"),
  "Ryan Lee":             new Member("Ryan Lee", brother, "Marcus Veal", "Emily Davis"),
  "Adam Pingatore":       new Member("Adam Pingatore", brother, "Kerianne Brennan", "Daniel Adea"),
  "Gabriel Ramirez":      new Member("Gabriel Ramirez", brother, "Emma Atkins", "Emily Liu"),
  "Kevin Reidy":          new Member("Kevin Reidy", brother, "Phoebe Miller", "Christopher Qiu"),
  "Randy Reza":           new Member("Randy Reza", brother, "Jacob Eichenbaum", "Garrett Henkle"),
  "Alexis Toledo":        new Member("Alexis Toledo", brother, "Marcus Veal", "Ethan Cai"),
  "Liam Wallace":         new Member("Liam Wallace", brother, "Leo Pfeifer", "Brandon Free"),
  "Justin Ward":          new Member("Justin Ward", brother, "Kyle Reidy", "Renu Chepuru"),
  "Meigan Wu":            new Member("Meigan Wu", brother, "Jeremy Huang", "Haley Breland"),
  "Naveed Zaman":         new Member("Naveed Zaman", brother, "Sarah Jensen", "Jeffrey Lin"),

  // TBS Alpha Omega
  "Cecilia Luisa Porras": new Member("Cecilia Luisa Porras", sister, "Shruti Indiresan", "Gus Billing"),
  "Deborah Gallego":      new Member("Deborah Gallego", sister, "Jazmin Aguila", "Justin"),
  "Elija Balanga":        new Member("Elija Balanga", sister, "Andy Nguyen", "Matthew Chin"),
  "Elizabeth Gulli":      new Member("Elizabeth Gulli", sister, "Melissa Perrin", "Casey Armstrong"),
  "Erik Tompkins":        new Member("Erik Tompkins", sister, "Johnny Urosevic", "Emma Boone"),
  "Ethan Chen":           new Member("Ethan Chen", sister, "Diana Greenwood", "Ivy Kwok"),
  "Gerald":               new Member("Gerald", sister, "Blanca Carla Arriaga", "Evelyn Coffey"),
  "Ivan Briceño":         new Member("Ivan Briceño", sister, "Yahaira Cortez", "Erica Vellanoweth"),
  "Jared Yuge":           new Member("Jared Yuge", sister, "Ethan Kim", "Jeffrey Lin"),
  "Katy Rucker":          new Member("Katy Rucker", sister, "Kyle Reidy", "Matthew Espinoza"),
  "Lorraine Katherine Sim":                    new Member("Lorraine Katherine Sim", sister, "Leo Pfeiffer", "Daniel Fernandez"),
  "Marco Antonio Albovias Cornelio, Jr.":      new Member("Marco Antonio Albovias Cornelio, Jr.", sister, "Annabel Li", "Eric Wong"),
  "Niels Dawson":         new Member("Niels Dawson", sister, "Aylin Henstridge", "Kevin Reidy"),
  "Pamela Jansen":        new Member("Pamela Jansen", sister, "Madelyn Armes", "Naveed Zaman"),
  "Raghu Tekumalla":      new Member("Raghu Tekumalla", sister, "Chris Calles", "Katie Osborn"),
  "Ryo Shiratori ":       new Member("Ryo Shiratori ", sister, "Cheyenne Suzukawa", "David Matter"),
  "Sophie Robbins":       new Member("Sophie Robbins", sister, "Elizabeth Gallmeister", "Gabe Ramirez"),
  "Tess Bo-Lin Louie":    new Member("Tess Bo-Lin Louie", sister, "Sierra Talbert", "Ryan Lee"),
  "Victoria Sanchez":     new Member("Victoria Sanchez", sister, "Paolo Gaudiel", "Emma Davis"),
  "Xitlaly":              new Member("Xitlaly", sister, "Emma Atkins", "Adam Pingatore"),
  "Yoselin Lizeth Guzman Herrera":             new Member("Yoselin Lizeth Guzman Herrera", sister, "Blanca Carla Arriaga", "Meigan Wu"),
  "Zachary Judson":       new Member("Zachary Judson", sister, "Ethan Brandt", "Daniel Adea"),

  // KKPsi Beta Psi
  "Nellie Kamenitsa-Hale":new Member("Nellie Kamenitsa-Hale", brother, "Martin Trang", "Adam Pingatore"),
  "Saúl Gutierrez":       new Member("Saúl Gutierrez", brother, "Justin Cole", "Carrie Appel"),
  "Frances Kroll":        new Member("Frances Kroll", brother, "Sierra Talcott", "Casey Armstrong"),
  "Ken Hollingsworth":    new Member("Ken Hollingsworth", brother, "Collin Lantz", "Chris Badroos"),
  "Matt Sanruk":          new Member("Matt Sanruk", brother, "Chris Calles", "Daniel Adea"),
  "Ellie Wan":            new Member("Ellie Wan", brother, "Daniela Hernandez", "Daniel Fernandez"),
  "Henry Rosas":          new Member("Henry Rosas", brother, "Johnny Urosevic", "David Matter"),
  "Monica Quevedo":       new Member("Monica Quevedo", brother, "Yahaira Cortez", "Eduardo Gordiano"),
  "Dixie Zapeta":         new Member("Dixie Zapeta", brother, "Emma Atkins", "Emma Boone"),
  "Sydney Myers":         new Member("Sydney Myers", brother, "Kerianne Brennan", "Eric Wong"),
  "Alexis Arredondo":     new Member("Alexis Arredondo", brother, "Blanca Carla Arriaga", "Evelyn Coffey"),
  "Gina Talcott":         new Member("Gina Talcott", brother, "Leo Pfeiffer", "Gabriel Ramirez"),
  "Colin McClure":        new Member("Colin McClure", brother, "Blanca Carla Arriaga", "Garrett Henkle"),
  "Matthew Van De Mheen": new Member("Matthew Van De Mheen", brother, "Jana Boksan", "Gus Billing"),
  "Natalie Wang":         new Member("Natalie Wang", brother, "Madelyn Armes", "Haley Breland"),
  "Ariel Fernandez":      new Member("Ariel Fernandez", brother, "Melissa Perrin", "Ivy Kwok"),
  "Peter Oh":             new Member("Peter Oh", brother, "Andy Nguyen", "Jeffrey Lin"),
  "Willis Lam":           new Member("Willis Lam", brother, "Kyle Reidy", "Justin Wolfman"),
  "Bryan Jefferson":      new Member("Bryan Jefferson", brother, "Diana Greenwood", "Katie Osborn"),
  "Renee Shanteler":      new Member("Renee Shanteler", brother, "Sarah Jensen", "Kevin Reidy"),
  "Ellis Song":           new Member("Ellis Song", brother, "Annabel Li", "Matthew Chin"),
  "Sophia Buraglio":      new Member("Sophia Buraglio", brother, "Aylin Henstridge", "Matthew Espinoza"),
  "Fidel Negrete":        new Member("Fidel Negrete", brother, "Cheyenne Suzukawa", "Meigan Wu"),
  "Adriana Vree":         new Member("Adriana Vree", brother, "Marcus Veal", "Naveed Zaman"),
  "Joshua Cielo":         new Member("Joshua Cielo", brother, "James Eichenbaum", "Omer Lavian"),
  "Adam Traut":           new Member("Adam Traut", brother, "Jazmin Aguila", "Randall Reza"),
  "Brianna Becerra":      new Member("Brianna Becerra", brother, "Elizabeth Gallmeister", "Renu Chepuru"),
  "Cassidy Song":         new Member("Cassidy Song", brother, "Ethan Kim", "Ryan Lee"),
  "Kylie Williams":       new Member("Kylie Williams", brother, "Shruti Indiresan", "Sara Acosta"),
  "Cameron Uy":           new Member("Cameron Uy", brother, "Melissa Perrin", "Sofia Alemania"),

};


// populate connections
for (const memberKey in members) {
  member = members[memberKey];
  var bigSister = members[member.bigSister];
  var bigBrother = members[member.bigBrother];

  if (bigSister == undefined) {
    members[member.bigSister] = new Member(member.bigSister, sister, null, null);
    bigSister = members[member.bigSister];
  }
  bigSister.addConnection(member);

  if (bigBrother == undefined) {
    members[member.bigBrother] = new Member(member.bigBrother, brother, null, null);
    bigBrother = members[member.bigBrother];
  }
  bigBrother.addConnection(member);
}


// add options to select menus
var selectMember1 = document.getElementById('selectMember1');
var selectMember2 = document.getElementById('selectMember2');

function addNameAsOption(memberName, selectElement) {
  var opt = document.createElement('option');
  opt.appendChild( document.createTextNode(memberName) );
  opt.value = memberName;
  selectElement.appendChild(opt);
}

for (const memberKey in members) {
  memberName = members[memberKey].name;
  addNameAsOption(memberName, selectMember1);
  addNameAsOption(memberName, selectMember2);
}


// search implementation
var path = [];
var depth;

function recursive_connect(member1, member2, maxdepth) {
  path.push(member1);

  // base case
  if (member1.isConnectedTo(member2)) {
    path.push(member2);
    return true;
  }

  // recursive case
  if (maxdepth > 0) {
    for (const name of member1.connections) {
      if (name == null)
        continue;

      member = members[name];

      if (recursive_connect(member, member2, maxdepth-1)) {
        return true;
      }
    }
  }

  path.pop();
  return false;
}

function connect(member1, member2) {
  for (depth = 0; depth < 20; depth++) {
    if (recursive_connect(member1, member2, depth))
      return true;
  }
}

function printPath(path) {
  if (path.length == 0) {
    return "No connection found"
  }

  var fullString = "";
  for (let i = 0; i < path.length - 1; i++) {
    var currentMember = path[i];
    var nextMember = path[i+1];

    var isBig = (currentMember.bigSister == nextMember.name)
                  || (currentMember.bigBrother == nextMember.name);
    var bigOrLittle = isBig ? "Big " : "Little ";

    var isSister = nextMember.organization == sister;
    var sisterOrBrother = isSister ? "Sister " : "Brother ";

    fullString += currentMember.name + "'s " + bigOrLittle + sisterOrBrother
                  + "is " + nextMember.name + "<br>";
  }
  return fullString;
}

// main
function connectMembers() {
  var member1 = selectMember1.options[selectMember1.selectedIndex].text;
  var member2 = selectMember2.options[selectMember2.selectedIndex].text;
  path = [];
  connect(members[member1], members[member2]);
  document.getElementById("connections").innerHTML = printPath(path);
}
