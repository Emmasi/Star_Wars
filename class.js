const answerbox1 = document.querySelector("#answerbox1");
const answerbox2 = document.querySelector("#answerbox2");

class Character {
  constructor(name, gender, height, mass, hair_color, pictureUrl) {
    this.name = name;
    this.gender = gender;
    this.height = height;
    this.mass = mass;
    this.hair_color = hair_color;
    this.pictureUrl=pictureUrl
  }
  masscheck(Person) {
    answerbox1.classList.remove("btn")
    if (parseInt(Person.mass) < parseInt(this.mass)) {
      answerbox1.innerHTML = `I weigh more than ${Person.name}`;
      console.log(Person.name, Person.mass);
    } else if (parseInt(Person.mass) > parseInt(this.mass)) {
      answerbox1.innerHTML = `${Person.name} weigh more then me `;
      console.log(Person.name, Person.mass);
    } else {
      answerbox1.innerHTML = `We weigh the same`;
      console.log(Person.name, Person.mass);
    }
  }
  masscheck2(Person) {
    answerbox2.classList.remove("btn")
    if (parseInt(Person.mass) > parseInt(this.mass)) {
      answerbox2.innerHTML = `${Person.name} weigh more than me`;
      console.log(Person.name, Person.mass);
    } else if (parseInt(Person.mass) < parseInt(this.mass)) {
      answerbox2.innerHTML = `I weigh more then ${Person.name} `;
      console.log(Person.name, Person.mass);
    } else {
      answerbox2.innerHTML = `We weigh the same`;
      console.log(Person.name, Person.mass);
    }
  }
  heightcheck(Person) {
    answerbox1.classList.remove("btn")
    if (parseInt(Person.height) > parseInt(this.height)) {
      answerbox1.innerHTML = `${Person.name} is taller than me`;
      console.log(Person.name, Person.height);
    } else if (parseInt(Person.height) < parseInt(this.height)) {
      answerbox1.innerHTML = `I am taller then ${Person.name}`;
      console.log(Person.name, Person.height);
    } else {
      characterinfo2.innerHTML = `${Person.name} has the same height as ${this.name}`;
      console.log(Person.name, Person.height);
    }
  }
  heightcheck2(Person) {
    answerbox2.classList.remove("btn")
    if (parseInt(Person.height) > parseInt(this.height)) {
      answerbox2.innerHTML = `${Person.name} is taller than me`;
      console.log(Person.name, Person.height);
    } else if (parseInt(Person.height) < parseInt(this.height)) {
      answerbox2.innerHTML = `I am taller then ${Person.name}`;
      console.log(Person.name, Person.height);
    } else {
      answerbox2.innerHTML = `${Person.name} has the same height as ${this.name}`;
      console.log(Person.name, Person.height);
    }
  }

  haircheck(Person) {
    answerbox1.classList.remove("btn")
    if (Person.hair_color == this.hairColor) {
      answerbox1.innerHTML = `${Person.name}s haircoler is the same as my`;
      console.log(Person.name, Person.hair_color);
    } else{
      answerbox1.innerHTML = `${Person.name} haircoler is ${Person.hair_color} and thats not the same as my`;
      console.log(Person.name, Person.hair_color);
    }
  }
  haircheck2(Person) {
    answerbox2.classList.remove("btn")
    if (Person.hair_color == this.hairColor) {
      answerbox1.innerHTML = `${Person.name}s haircoler is the same as my`;
      console.log(Person.name, Person.hair_color);
    } else{
      answerbox1.innerHTML = `${Person.name} haircoler is ${Person.hair_color} and thats not the same as my`;
      console.log(Person.name, Person.hair_color);
    }
  }
  gendercheck(Person) {
    answerbox1.classList.remove("btn")
    if (Person.gender === this.gender) {
      answerbox1.innerHTML = `${Person.name} and me go to the same toilet queue`;
      console.log(Person.name, Person.gender);
    } else if (Person.gender !== this.gender) {
      answerbox1.innerHTML = `${Person.name} and me do not go to the same toilet queue`;
      console.log(Person.name, Person.gender);
    } else {
      answerbox1.innerHTML = `none of us go to the bathroom`;
      console.log(Person.name, Person.gender);
    }
  }
  gendercheck2(Person) {
    answerbox2.classList.remove("btn")
    if (Person.gender === this.gender) {
      answerbox2.innerHTML = `${Person.name} and me go to the same toilet queue`;
      console.log(Person.name, Person.gender);
    } else if (Person.gender !== this.gender) {
      answerbox2.innerHTML = `${Person.name} and me do not go to the same toilet queue`;
      console.log(Person.name, Person.gender);
    } else {
      answerbox2.innerHTML = `none of us go to the bathroom`;
      console.log(Person.name, Person.gender);
    }
  }
}
