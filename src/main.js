var FrontendSkills = [
  [
    {
      id: "angular",
      technologie: "Angular",
      porcentage: "60%",
    },
    {
      id: "js",
      technologie: "Javascript",
      porcentage: "80%",
    },
    {
      id: "css",
      technologie: "CSS",
      porcentage: "90%",
    },
    {
      id: "node",
      technologie: "Node JS",
      porcentage: "60%",
    },
    {
      id: "mongo",
      technologie: "Mongo DB",
      porcentage: "60%",
    },
    {
      id: "sql",
      technologie: "SQL",
      porcentage: "50%",
    },
    {
      id: "jquery",
      technologie: "JQuery",
      porcentage: "50%",
    }
  ],
  [
    {
        id: "figma",
        technologie: "Figma",
        porcentage: "50%",
    },
    {
        id: "photoshop",
        technologie: "Photoshop",
        porcentage: "70%",
    }
  ]
];
const FirstSkills = (skillBar, skillBarChild, skillNames, skillNamesChild) => {
  
    for (var i = 0; i < FrontendSkills[0].length; i++) {
      skillNamesChild += `
              <h2>${FrontendSkills[0][i].technologie}</h2>
          `;
      skillNames.innerHTML = skillNamesChild;
  
      skillBarChild += `
          <div class="barContent">
              <div class="barBackground">
                  <div class="barPorcentage ${FrontendSkills[0][i].id}"></div>
              </div>
          </div>
          `;
      skillBar.innerHTML = skillBarChild;
    }
    for (var i = 0; i < FrontendSkills[0].length; i++) {
      let cssName = `.${FrontendSkills[0][i].id}`;
      document.querySelector(
        cssName
      ).style.width = `${FrontendSkills[0][i].porcentage}`;
    }
};
const SecondSkills = (skillBar, skillBarChild, skillNames, skillNamesChild) => {
  
    for (var i = 0; i < FrontendSkills[1].length; i++) {
      skillNamesChild += `
              <h2>${FrontendSkills[1][i].technologie}</h2>
          `;
      skillNames.innerHTML = skillNamesChild;
  
      skillBarChild += `
          <div class="barContent">
              <div class="barBackground">
                  <div class="barPorcentage ${FrontendSkills[1][i].id}"></div>
              </div>
          </div>
          `;
      skillBar.innerHTML = skillBarChild;
    }
    for (var i = 0; i < FrontendSkills[1].length; i++) {
      let cssName = `.${FrontendSkills[1][i].id}`;
      document.querySelector(
        cssName
      ).style.width = `${FrontendSkills[1][i].porcentage}`;
    }
}
const SkillsConf = () => {
  let skillNames = document.querySelectorAll(".skillsNames");
  let skillBar = document.querySelectorAll(".skillsBar");
  let skillBarChild = "";
  var skillNamesChild = "";
  FirstSkills(skillBar[0], skillBarChild, skillNames[0], skillNamesChild);
  SecondSkills(skillBar[1], skillBarChild, skillNames[1], skillNamesChild);
};





SkillsConf();
