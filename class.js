class Character {
  constructor(name, gender, height, mass, hair_color, pictureUrl) {
    this.name = name;
    this.gender = gender;
    this.height = height;
    this.mass = mass;
    this.hair_color = hair_color;
    this.pictureUrl = pictureUrl;
  }
  masscheck(Person, answerbox) {
    answerbox.classList.remove("btn");
    if (parseInt(Person.mass) < parseInt(this.mass)) {
      answerbox.innerHTML = `I weigh ${this.mass - Person.mass}kg more than ${Person.name}`;
      console.log(this.mass - Person.mass);
    } else if (parseInt(Person.mass) > parseInt(this.mass)) {
      answerbox.innerHTML = `${Person.name} weigh ${Person.mass - this.mass}kg more then me `;
    } else {
      answerbox.innerHTML = `We weigh the same`;
    }
  }
  heightcheck(Person,answerbox) {
    answerbox.classList.remove("btn");
    if (parseInt(Person.height) > parseInt(this.height)) {
      answerbox.innerHTML = `${Person.name} is ${Person.height - this.height}cm taller than me`;
    } else if (parseInt(Person.height) < parseInt(this.height)) {
      answerbox.innerHTML = `I am ${this.height - Person.height}cm taller then ${Person.name}`;
    } else {
      characterinfo2.innerHTML = `${Person.name} has the same height as ${this.name}`;
    }
  }

  haircheck(Person, answerbox) {
    answerbox.classList.remove("btn");
    if (Person.hair_color == this.hairColor) {
      answerbox.innerHTML = `${Person.name}s haircoler is the same as my`;
    } else {
      answerbox.innerHTML = `${Person.name} haircoler is ${Person.hair_color} and thats not the same as my`;
    }
  }

  gendercheck(Person, answerbox) {
    answerbox.classList.remove("btn");
    if (Person.gender === this.gender) {
      answerbox.innerHTML = `${Person.name} and me go to the same toilet queue`;
    } else if (Person.gender !== this.gender) {
      answerbox.innerHTML = `${Person.name} and me do not go to the same toilet queue`;
    } else {
      answerbox.innerHTML = `none of us go to the bathroom`;
    }
  }
}
