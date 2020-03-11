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
  "Nellie Kamenitsa-Hale":new Member("Nellie Kamenitsa-Hale", sister, "Martin Trang", "Adam Pingatore"),
  "Saúl Gutierrez":       new Member("Saúl Gutierrez", sister, "Justin Cole", "Carrie Appel"),
  "Frances Kroll":        new Member("Frances Kroll", sister, "Sierra Talcott", "Casey Armstrong"),
  "Ken Hollingsworth":    new Member("Ken Hollingsworth", sister, "Collin Lantz", "Chris Badroos"),
  "Matt Sanruk":          new Member("Matt Sanruk", sister, "Chris Calles", "Daniel Adea"),
  "Ellie Wan":            new Member("Ellie Wan", sister, "Daniela Hernandez", "Daniel Fernandez"),
  "Henry Rosas":          new Member("Henry Rosas", sister, "Johnny Urosevic", "David Matter"),
  "Monica Quevedo":       new Member("Monica Quevedo", sister, "Yahaira Cortez", "Eduardo Gordiano"),
  "Dixie Zapeta":         new Member("Dixie Zapeta", sister, "Emma Atkins", "Emma Boone"),
  "Sydney Myers":         new Member("Sydney Myers", sister, "Kerianne Brennan", "Eric Wong"),
  "Alexis Arredondo":     new Member("Alexis Arredondo", sister, "Blanca Carla Arriaga", "Evelyn Coffey"),
  "Gina Talcott":         new Member("Gina Talcott", sister, "Leo Pfeiffer", "Gabriel Ramirez"),
  "Colin McClure":        new Member("Colin McClure", sister, "Blanca Carla Arriaga", "Garrett Henkle"),
  "Matthew Van De Mheen": new Member("Matthew Van De Mheen", sister, "Jana Boksan", "Gus Billing"),
  "Natalie Wang":         new Member("Natalie Wang", sister, "Madelyn Armes", "Haley Breland"),
  "Ariel Fernandez":      new Member("Ariel Fernandez", sister, "Melissa Perrin", "Ivy Kwok"),
  "Peter Oh":             new Member("Peter Oh", sister, "Andy Nguyen", "Jeffrey Lin"),
  "Willis Lam":           new Member("Willis Lam", sister, "Kyle Reidy", "Justin Wolfman"),
  "Bryan Jefferson":      new Member("Bryan Jefferson", sister, "Diana Greenwood", "Katie Osborn"),
  "Renee Shanteler":      new Member("Renee Shanteler", sister, "Sarah Jensen", "Kevin Reidy"),
  "Ellis Song":           new Member("Ellis Song", sister, "Annabel Li", "Matthew Chin"),
  "Sophia Buraglio":      new Member("Sophia Buraglio", sister, "Aylin Henstridge", "Matthew Espinoza"),
  "Fidel Negrete":        new Member("Fidel Negrete", sister, "Cheyenne Suzukawa", "Meigan Wu"),
  "Adriana Vree":         new Member("Adriana Vree", sister, "Marcus Veal", "Naveed Zaman"),
  "Joshua Cielo":         new Member("Joshua Cielo", sister, "James Eichenbaum", "Omer Lavian"),
  "Adam Traut":           new Member("Adam Traut", sister, "Jazmin Aguila", "Randall Reza"),
  "Brianna Becerra":      new Member("Brianna Becerra", sister, "Elizabeth Gallmeister", "Renu Chepuru"),
  "Cassidy Song":         new Member("Cassidy Song", sister, "Ethan Kim", "Ryan Lee"),
  "Kylie Williams":       new Member("Kylie Williams", sister, "Shruti Indiresan", "Sara Acosta"),
  "Cameron Uy":           new Member("Cameron Uy", sister, "Melissa Perrin", "Sofia Alemania"),

  // KKPsi Beta Psi
  "Cecilia Luisa Porras": new Member("Cecilia Luisa Porras", brother, "Shruti Indiresan", "Gus Billing"),
  "Deborah Gallego":      new Member("Deborah Gallego", brother, "Jazmin Aguila", "Justin"),
  "Elija Balanga":        new Member("Elija Balanga", brother, "Andy Nguyen", "Matthew Chin"),
  "Elizabeth Gulli":      new Member("Elizabeth Gulli", brother, "Melissa Perrin", "Casey Armstrong"),
  "Erik Tompkins":        new Member("Erik Tompkins", brother, "Johnny Urosevic", "Emma Boone"),
  "Ethan Chen":           new Member("Ethan Chen", brother, "Diana Greenwood", "Ivy Kwok"),
  "Gerald":               new Member("Gerald", brother, "Blanca Carla Arriaga", "Evelyn Coffey"),
  "Ivan Briceño":         new Member("Ivan Briceño", brother, "Yahaira Cortez", "Erica Vellanoweth"),
  "Jared Yuge":           new Member("Jared Yuge", brother, "Ethan Kim", "Jeffrey Lin"),
  "Katy Rucker":          new Member("Katy Rucker", brother, "Kyle Reidy", "Matthew Espinoza"),
  "Lorraine Katherine Sim":                    new Member("Lorraine Katherine Sim", brother, "Leo Pfeiffer", "Daniel Fernandez"),
  "Marco Antonio Albovias Cornelio, Jr.":      new Member("Marco Antonio Albovias Cornelio, Jr.", brother, "Annabel Li", "Eric Wong"),
  "Niels Dawson":         new Member("Niels Dawson", brother, "Aylin Henstridge", "Kevin Reidy"),
  "Pamela Jansen":        new Member("Pamela Jansen", brother, "Madelyn Armes", "Naveed Zaman"),
  "Raghu Tekumalla":      new Member("Raghu Tekumalla", brother, "Chris Calles", "Katie Osborn"),
  "Ryo Shiratori ":       new Member("Ryo Shiratori ", brother, "Cheyenne Suzukawa", "David Matter"),
  "Sophie Robbins":       new Member("Sophie Robbins", brother, "Elizabeth Gallmeister", "Gabe Ramirez"),
  "Tess Bo-Lin Louie":    new Member("Tess Bo-Lin Louie", brother, "Sierra Talbert", "Ryan Lee"),
  "Victoria Sanchez":     new Member("Victoria Sanchez", brother, "Paolo Gaudiel", "Emma Davis"),
  "Xitlaly":              new Member("Xitlaly", brother, "Emma Atkins", "Adam Pingatore"),
  "Yoselin Lizeth Guzman Herrera":             new Member("Yoselin Lizeth Guzman Herrera", brother, "Blanca Carla Arriaga", "Meigan Wu"),
  "Zachary Judson":       new Member("Zachary Judson", brother, "Ethan Brandt", "Daniel Adea"),

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


// start search
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

function printPath() {
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
                  + "is " + nextMember.name + "\n";
  }
  return fullString;
}

// main
if (connect(members["Carrie Appel"], members["Jade McVay"]))
  console.log(printPath());
else
  console.log("No connection found");
