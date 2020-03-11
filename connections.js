class Member {
  constructor(name, bigSister, bigBrother) {
    this.name = name;
    this.bigSister = bigSister;
    this.bigBrother = bigBrother;
    this.connections = [bigSister, bigBrother];
  }

  isConnectedTo(member2) {
    if (member2 == null)
      return false;
    return this.connections.includes(member2.name);
  }

  addConnection(member) {
    this.connections.push(member.name);
  }
}

var members = {
  // TBS Alpha Phi
  "Cheyenne Suzukawa":   new Member("Cheyenne Suzukawa", "Kathleen Oliphant", "Michie Leccese"),
  "Chris Calles":        new Member("Chris Calles", "Theo Wu", "Patrick Chesnut"),
  "Kyle Reidy":          new Member("Kyle Reidy", "Jareni Polanco", "Noah Ashman"),
  "Marcus Veal":         new Member("Marcus Veal", "Kayleigh Hart", "Jacob Hambalek"),
  "Martin Trang":        new Member("Martin Trang", "Emily Tsai", "Justin Hang"),
  "Sarah Jensen":        new Member("Sarah Jensen", "Kaitlyn Watkins", "Michie Leccese"),
  "Julianne Zingmond":   new Member("Julianne Zingmond", "Kathleen Oliphant", ""),

  // KKPsi Beta Upsilon
  "Casey Armstrong":     new Member("Casey Armstrong", "Shayna Warner", "Jacob Hambalek"),
  "Haley Breland":     new Member("Haley Breland", "Kathleen Oliphant", "Amanda Albini"),
  "Matthew Chin":     new Member("Matthew Chin", "Sharla Barlan", "Nishi Intwala"),
  "Vito Emanuel":     new Member("Vito Emanuel", "Susie Carlos", "John Malchar"),
  "Daniel Fernandez":     new Member("Daniel Fernandez", "Connie Chen", "David Egen"),
  "Keegan Fowler":     new Member("Keegan Fowler", "Sam Chavez", "Michie Leccesse"),
  "Eduardo Gordiano":     new Member("Eduardo Gordiano", "Angelica Rodriguez", "Vy Giap"),
  "Omer Lavian":     new Member("Omer Lavian", "Jenny Lindell", "Annie Cheng"),
  "Jade McVay":     new Member("Jade McVay", "Shannon Miner", "Sophia Inaba"),
  "Justin Nguyen":     new Member("Justin Nguyen", "Theo Wu", "Andy Hsu"),
  "Jacob Re":     new Member("Jacob Re", "Thomas Smith", "Joey Auer"),
  "Chris Routh":     new Member("Chris Routh", "Sara Mosgrove", "Melodie Butz"),
  "William Shu":     new Member("William Shu", "Daven Lagman", "Sukhi Bassi"),
  "Michael Stranieri":     new Member("Michael Stranieri", "Jareni Palonco", "Kevin King"),
  "Justin Wolfman":     new Member("Justin Wolfman", "Kayleigh Hart", "Brendan James"),

  // TBS Alpha Chi
  "Andy Nguyen":      new Member("Andy Nguyen", "Sarah Jensen", "Justin Nguyen"),
  "Aylin Henstridge":      new Member("Aylin Henstridge", "Natalie Aranda", "Sidney Kantono"),
  "Collin Lantz":      new Member("Collin Lantz", "Martin Trang", "Keegan Fowler"),
  "Daniela Hernandez":      new Member("Daniela Hernandez", "Kelly Flood", "Haley Nelson"),
  "Emma Atkins":      new Member("Emma Atkins", "Tabetha Van Heest", "Chris Routh"),
  "Ethan Brandt":      new Member("Ethan Brandt", "Emma Suchard", "Harry Mitchell"),
  "James Eichenbaum":      new Member("James Eichenbaum", "Shelby Olson", "Omer Lavian"),
  "Jana Boksan":      new Member("Jana Boksan", "Jordan Briggs", "Justin Wolfman"),
  "Kerianne Brennan":      new Member("Kerianne Brennan", "Julianne Zingmond", "Tia Liu"),
  "Leo Pfeiffer":      new Member("Leo Pfeiffer", "Owen Saites", "John Lassetter"),

  // KKPsi Beta Phi
  "Sara Acosta":     new Member("Sara Acosta", "Julianne Zingmond", "Jade McVay"),
  "Daniel Adea":     new Member("Daniel Adea", "Kelly Vines", "Matthew Chin"),
  "Emma Boone":     new Member("Emma Boone", "Marcus Veal", "Chris Routh"),
  "Ethan Cai":     new Member("Ethan Cai", "Sarah Jenson", "Justin Nguyen"),
  "Ronnie Chase":     new Member("Ronnie Chase", "Shelby Olson", "Harry Mitchell"),
  "Renu Chepuru":     new Member("Renu Chepuru", "Kyle Reidy", "Joey Auer"),
  "Emily Davis":     new Member("Emily Davis", "Kelly Flood", "Sofia Alemania"),
  "Brandon Free":     new Member("Brandon Free", "Cheyenne Suzukawa", "Jared Brock"),
  "Garrett Henkle":     new Member("Garrett Henkle", "Tabetha Van Heest", "Justin Wolfman"),
  "Trey Knudson":     new Member("Trey Knudson", "Delacey Rodriguez", "Sidney Kantono"),
  "Jeffrey Lin":     new Member("Jeffrey Lin", "Talia Fossa", "John Lassetter "),
  "Emily Liu":     new Member("Emily Liu", "Claire Locke", "Samantha Ono"),
  "David Matter":     new Member("David Matter", "Kathleen Oliphant", "Keegan Fowler"),
  "Katie Osborn":     new Member("Katie Osborn", "Nique Stumbaugh", "Abby McCallum"),
  "David Thorne":     new Member("David Thorne", "Sarah Truax", "Mike Stranieri"),
  "Chelsy Torres":     new Member("Chelsy Torres", "Cheyenne Suzukawa", "Michelle Leccese"),
  "Erica Vellanoweth":     new Member("Erica Vellanoweth", "Julianne Zingmond", "Casey Armstrong"),
  "Eric Wong":     new Member("Eric Wong", "Tesslyn Knapp", "Jacob Re"),

  // TBS Alpha Psi
  "Annabel Li":      new Member("Annabel Li", "Marcus Veal", "Erica Vellanoweth"),
  "Ashley Arellano":      new Member("Ashley Arellano", "Delacey Rodriguez", "Omer Lavian"),
  "Blanca Carla Arriaga":      new Member("Blanca Carla Arriaga", "Cheyenne Suzukawa", "Michie Leccese"),
  "Diana Greenwood":      new Member("Diana Greenwood", "Delaney Proudfoot", "Patrick Gardner"),
  "Elizabeth Gallmeister":      new Member("Elizabeth Gallmeister", "Claire Locke", "Emily Liu"),
  "Ethan Kim":      new Member("Ethan Kim", "Jeremy Huang", "Eric Wong"),
  "Isaac Boris":      new Member("Isaac Boris", "Phoebe Miller", "Jacob Re"),
  "Jazmin Aguila":      new Member("Jazmin Aguila", "Daniela Hernandez", "Eduardo Gordiano"),
  "Johnny Urosevic":      new Member("Johnny Urosevic", "Collin Lantz", "David Thorne"),
  "Justin Cole":      new Member("Justin Cole", "Leo Pfeiffer", "Jeffrey Lin"),
  "Madelyn Armes":      new Member("Madelyn Armes", "Kerianne Brennan", "Emma Boone"),
  "Makailah Hernandez":      new Member("Makailah Hernandez", "Jacob Panaro", "Tia Liu"),
  "Melissa Perrin":      new Member("Melissa Perrin", "Jana Boksan", "John Lassetter"),
  "Natasha Rodriguez":      new Member("Natasha Rodriguez", "Emma Atkins", "Casey Armstrong"),
  "Paolo Gaudiel":      new Member("Paolo Gaudiel", "Andy Nguyen", "Christiana Gutierrez"),
  "Shruti Indiresan":      new Member("Shruti Indiresan", "Aylin Henstridge", "Chelsy Torres"),
  "Sierra Talbert":      new Member("Sierra Talbert", "James Eichenbaum", "Ronnie Chase"),
  "Yahaira Cortez":      new Member("Yahaira Cortez", "Alexis Elliott", "Renu Chepuru"),

  // KKPsi Beta Chi
  "Carrie Appel":     new Member("Carrie Appel", "Emma Atkins", "William Shu"),
  "Chris Badroos":     new Member("Chris Badroos", "Chris Calles", "David Thorne"),
  "Gus Billing":     new Member("Gus Billing", "Cheyenne Suzakawa", "Sara Acosta"),
  "Evelyn Coffey":     new Member("Evelyn Coffey", "Andy Nguyen", "Erica Vellanoweth"),
  "Matthew Espinoza":     new Member("Matthew Espinoza", "Kelly Vines", "Katie Osborn"),
  "Ivy Kwok":     new Member("Ivy Kwok", "Kelly Flood", "Ronnie Chase"),
  "Ryan Lee":     new Member("Ryan Lee", "Marcus Veal", "Emily Davis"),
  "Adam Pingatore":     new Member("Adam Pingatore", "Kerianne Brennan", "Daniel Adea"),
  "Gabriel Ramirez":     new Member("Gabriel Ramirez", "Emma Atkins", "Emily Liu"),
  "Kevin Reidy":     new Member("Kevin Reidy", "Phoebe Miller", "Christopher Qiu"),
  "Randy Reza":     new Member("Randy Reza", "Jacob Eichenbaum", "Garrett Henkle"),
  "Alexis Toledo":     new Member("Alexis Toledo", "Marcus Veal", "Ethan Cai"),
  "Liam Wallace":     new Member("Liam Wallace", "Leo Pfeifer", "Brandon Free"),
  "Justin Ward":     new Member("Justin Ward", "Kyle Reidy", "Renu Chepuru"),
  "Meigan Wu":     new Member("Meigan Wu", "Jeremy Huang", "Haley Breland"),
  "Naveed Zaman":     new Member("Naveed Zaman", "Sarah Jensen", "Jeffrey Lin"),

  // TBS Alpha Omega
  "Nellie Kamenitsa-Hale":      new Member("Nellie Kamenitsa-Hale", "Martin Trang", "Adam Pingatore"),
  "Saúl Gutierrez":      new Member("Saúl Gutierrez", "Justin Cole", "Carrie Appel"),
  "Frances Kroll":      new Member("Frances Kroll", "Sierra Talcott", "Casey Armstrong"),
  "Ken Hollingsworth":      new Member("Ken Hollingsworth", "Collin Lantz", "Chris Badroos"),
  "Matt Sanruk":      new Member("Matt Sanruk", "Chris Calles", "Daniel Adea"),
  "Ellie Wan":      new Member("Ellie Wan", "Daniela Hernandez", "Daniel Fernandez"),
  "Henry Rosas":      new Member("Henry Rosas", "Johnny Urosevic", "David Matter"),
  "Monica Quevedo":      new Member("Monica Quevedo", "Yahaira Cortez", "Eduardo Gordiano"),
  "Dixie Zapeta":      new Member("Dixie Zapeta", "Emma Atkins", "Emma Boone"),
  "Sydney Myers":      new Member("Sydney Myers", "Kerianne Brennan", "Eric Wong"),
  "Alexis Arredondo":      new Member("Alexis Arredondo", "Blanca Carla Arriaga", "Evelyn Coffey"),
  "Gina Talcott":      new Member("Gina Talcott", "Leo Pfeiffer", "Gabriel Ramirez"),
  "Colin McClure":      new Member("Colin McClure", "Blanca Carla Arriaga", "Garrett Henkle"),
  "Matthew Van De Mheen":      new Member("Matthew Van De Mheen", "Jana Boksan", "Gus Billing"),
  "Natalie Wang":      new Member("Natalie Wang", "Madelyn Armes", "Haley Breland"),
  "Ariel Fernandez":      new Member("Ariel Fernandez", "Melissa Perrin", "Ivy Kwok"),
  "Peter Oh":      new Member("Peter Oh", "Andy Nguyen", "Jeffrey Lin"),
  "Willis Lam":      new Member("Willis Lam", "Kyle Reidy", "Justin Wolfman"),
  "Bryan Jefferson":      new Member("Bryan Jefferson", "Diana Greenwood", "Katie Osborn"),
  "Renee Shanteler":      new Member("Renee Shanteler", "Sarah Jensen", "Kevin Reidy"),
  "Ellis Song":      new Member("Ellis Song", "Annabel Li", "Matthew Chin"),
  "Sophia Buraglio":      new Member("Sophia Buraglio", "Aylin Henstridge", "Matthew Espinoza"),
  "Fidel Negrete":      new Member("Fidel Negrete", "Cheyenne Suzukawa", "Meigan Wu"),
  "Adriana Vree":      new Member("Adriana Vree", "Marcus Veal", "Naveed Zaman"),
  "Joshua Cielo":      new Member("Joshua Cielo", "James Eichenbaum", "Omer Lavian"),
  "Adam Traut":      new Member("Adam Traut", "Jazmin Aguila", "Randall Reza"),
  "Brianna Becerra":      new Member("Brianna Becerra", "Elizabeth Gallmeister", "Renu Chepuru"),
  "Cassidy Song":      new Member("Cassidy Song", "Ethan Kim", "Ryan Lee"),
  "Kylie Williams":      new Member("Kylie Williams", "Shruti Indiresan", "Sara Acosta"),
  "Cameron Uy":      new Member("Cameron Uy", "Melissa Perrin", "Sofia Alemania"),

  // KKPsi Beta Psi
  "Cecilia Luisa Porras":      new Member("Cecilia Luisa Porras", "Shruti Indiresan", "Gus Billing"),
  "Deborah Gallego":      new Member("Deborah Gallego", "Jazmin Aguila", "Justin"),
  "Elija Balanga":      new Member("Elija Balanga", "Andy Nguyen", "Matthew Chin"),
  "Elizabeth Gulli":      new Member("Elizabeth Gulli", "Melissa Perrin", "Casey Armstrong"),
  "Erik Tompkins":      new Member("Erik Tompkins", "Johnny Urosevic", "Emma Boone"),
  "Ethan Chen":      new Member("Ethan Chen", "Diana Greenwood", "Ivy Kwok"),
  "Gerald":      new Member("Gerald", "Blanca Carla Arriaga", "Evelyn Coffey"),
  "Ivan Briceño":      new Member("Ivan Briceño", "Yahaira Cortez", "Erica Vellanoweth"),
  "Jared Yuge":      new Member("Jared Yuge", "Ethan Kim", "Jeffrey Lin"),
  "Katy Rucker":      new Member("Katy Rucker", "Kyle Reidy", "Matthew Espinoza"),
  "Lorraine Katherine Sim":      new Member("Lorraine Katherine Sim", "Leo Pfeiffer", "Daniel Fernandez"),
  "Marco Antonio Albovias Cornelio, Jr.":      new Member("Marco Antonio Albovias Cornelio, Jr.", "Annabel Li", "Eric Wong"),
  "Niels Dawson":      new Member("Niels Dawson", "Aylin Henstridge", "Kevin Reidy"),
  "Pamela Jansen":      new Member("Pamela Jansen", "Madelyn Armes", "Naveed Zaman"),
  "Raghu Tekumalla":      new Member("Raghu Tekumalla", "Chris Calles", "Katie Osborn"),
  "Ryo Shiratori ":      new Member("Ryo Shiratori ", "Cheyenne Suzukawa", "David Matter"),
  "Sophie Robbins":      new Member("Sophie Robbins", "Elizabeth Gallmeister", "Gabe Ramirez"),
  "Tess Bo-Lin Louie":      new Member("Tess Bo-Lin Louie", "Sierra Talbert", "Ryan Lee"),
  "Victoria Sanchez":      new Member("Victoria Sanchez", "Paolo Gaudiel", "Emma Davis"),
  "Xitlaly":      new Member("Xitlaly", "Emma Atkins", "Adam Pingatore"),
  "Yoselin Lizeth Guzman Herrera":      new Member("Yoselin Lizeth Guzman Herrera", "Blanca Carla Arriaga", "Meigan Wu"),
  "Zachary Judson":      new Member("Zachary Judson", "Ethan Brandt", "Daniel Adea"),

};


// populate connections
for (const memberKey in members) {
  member = members[memberKey];
  var bigSister = members[member.bigSister];
  var bigBrother = members[member.bigBrother];

  if (bigSister == undefined) {
    members[member.bigSister] = new Member(member.bigSister, null, null);
    bigSister = members[member.bigSister];
  }
  bigSister.addConnection(member);

  if (bigBrother == undefined) {
    members[member.bigBrother] = new Member(member.bigBrother, null, null);
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
      if (members[name] == undefined)
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

function prettyFormat() {
  var fullString = path[0].name;
  for (const member of path.slice(1)) {
    fullString += " -> " + member.name
  }
  return fullString;
}

// main
if (connect(members["Chris Calles"], members["Melissa Perrin"]))
  console.log(prettyFormat());
else
  console.log("No connection found");
