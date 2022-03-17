let fetchdata = async (url) => {
  let response = await fetch(url);
  let json = await response.json();
  return json;
};

let onRender = async () => {
  let data = await fetchdata("https://swapi.dev/api/people/");

  const selectbtn = document.querySelector("#selectChar");
  const charactername1 = document.querySelector("#charactername1");
  const charactername2 = document.querySelector("#charactername2");
  const characterinfo1 = document.querySelector("#characterinfo1");
  const characterinfo2 = document.querySelector("#characterinfo2");
  const Yellowborder = document.querySelector("#Yellowborder");
  const Yellowborder1 = document.querySelector("#Yellowborder1");
  const massbtn = document.querySelector("#massbtn");
  const heightbtn = document.querySelector("#heightbtn");
  const hairColorbtn = document.querySelector("#hairColorbtn");
  const genderbtn = document.querySelector("#genderbtn");
  const massbtn2 = document.querySelector("#massbtn2");
  const heightbtn2 = document.querySelector("#heightbtn2");
  const hairColorbtn2 = document.querySelector("#hairColorbtn2");
  const genderbtn2 = document.querySelector("#genderbtn2");
  answerbox1.classList.add("btn")
  answerbox2.classList.add("btn")

  const characters = data.results.map((res) => {
    let findPicture = pictures.find((picture) => picture.id == res.name).bild;
    return new Character(
      res.name,
      res.gender,
      res.height,
      res.mass,
      res.hair_color,
      findPicture,
    );
  });
  console.log(characters);
  const getCharatersByName = (name) => characters.find((character) => character.name === name);
  const Createcharacter = (name, head, info, placeImg) => {
    head.innerText = name.name;
    placeImg.innerHTML = `<img src="${name.pictureUrl}" alt="Bild">`;
    info.innerHTML = `This character from Star Wars is called ${name.name}.
    ${name.name} is a ${name.gender} character and is:
    <ul><li>${name.height}cm tall</li>
    <li>${name.mass}kg</li>
    <li>Haircolor is ${name.hair_color}</li></ul>
    ${name.name} can you tell me something about the outher character?`;
  };
  const allBtn = (name, btnM, btnH, btnHa, btnG) => {
    btnM.innerText = `I can tell you ${name.name} weigh`;
    btnH.innerText = `I can tell ${name.name} height`;
    btnHa.innerText = `I can tell ${name.name} haircolor`;
    btnG.innerText = `I can tell you ${name.name}s gender`;
  };

  selectbtn.addEventListener("click", () => {
    const selectPer1 = document.querySelector("#per1").value;
    const selectPer2 = document.querySelector("#per2").value;
    const Pictuerplace1 = document.querySelector("#pictuer1");
    const Pictuerplace2 = document.querySelector("#pictuer2");
    const Character1 = getCharatersByName(selectPer1);
    const Character2 = getCharatersByName(selectPer2);
    const allBtnArray = [
      massbtn,
      heightbtn,
      hairColorbtn,
      genderbtn,
      massbtn2,
      hairColorbtn2,
      heightbtn2,
      genderbtn2,
    ];
    allBtnArray.forEach((item) => {
      item.classList.remove("btn");
    });
    answerbox1.classList.add("btn")
    answerbox2.classList.add("btn")
    Createcharacter(Character1, charactername1, characterinfo1, Pictuerplace1);
    Createcharacter(Character2, charactername2, characterinfo2, Pictuerplace2);
    allBtn(Character2, massbtn, heightbtn, hairColorbtn, genderbtn);
    allBtn(Character1, massbtn2, heightbtn2, hairColorbtn2, genderbtn2);
    Yellowborder.classList.add("yellow");
    Yellowborder1.classList.add("yellow");
    massbtn.addEventListener("click", () => {
      Character1.masscheck(Character2);
    });
    heightbtn.addEventListener("click", () => {
      Character1.heightcheck(Character2);
    });
    hairColorbtn.addEventListener("click", () => {
      Character1.haircheck(Character2);
    });
    genderbtn.addEventListener("click", () => {
      Character1.gendercheck(Character2);
    });
    massbtn2.addEventListener("click", () => {
      Character2.masscheck2(Character1);
    });
    heightbtn2.addEventListener("click", () => {
      Character2.heightcheck2(Character1);
    });
    hairColorbtn2.addEventListener("click", () => {
      Character2.haircheck2(Character1);
    });
    genderbtn2.addEventListener("click", () => {
      Character2.gendercheck2(Character1);
    });
  });
};
onRender();
