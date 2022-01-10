const team = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg',
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg',
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg',
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg',
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg',
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg',
  },
];

let teamContainer = document.querySelector(".team-container");

for (key in team) {
  teamContainer.innerHTML += `
  <div class="team-card">
    <div class="card-image">
      <img
      src="img/${team[key].image}"
      alt="${team[key].name}"
      />
    </div>
    <div class="card-text">
      <h3>${team[key].name}</h3>
      <p>${team[key].role}</p>
    </div>
  </div>
  `;
}

const formButton = document.getElementById("addMemberButton");
let formName = document.getElementById("name");
let formRole = document.getElementById("role");
let formImage = document.getElementById("image");

formButton.addEventListener("click", function(){
  const newMember = {
    name: formName.value,
    role: formRole.value,
    image: formImage.value,
  }

  console.log(newMember);

  team.push(newMember);

  teamContainer.innerHTML += `
  <div class="team-card">
    <div class="card-image">
      <img
      src="${newMember.image}"
      alt="${newMember.name}"
      />
    </div>
    <div class="card-text">
      <h3>${newMember.name}</h3>
      <p>${newMember.role}</p>
    </div>
  </div>
  `;

  formName.value = "";
  formRole.value = "";
  formImage.value = "";

  console.log(team);
});