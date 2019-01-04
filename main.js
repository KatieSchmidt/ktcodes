let descriptionCounter = 0;

function changeDescription() {
  const developerDescriptions = ["Developer", "Creator", "Innovator"];
  let currentDescription = document.getElementById(
    "header__text-description-word"
  );

  if (descriptionCounter < developerDescriptions.length - 1) {
    descriptionCounter += 1;
    currentDescription.innerHTML = developerDescriptions[descriptionCounter];
  } else {
    descriptionCounter = 0;
    currentDescription.innerHTML = developerDescriptions[descriptionCounter];
  }
}

let logoCounter = 0;

function changeLogo() {
  const developerLogos = [
    "./img/css3-logo-small.png",
    "./img/HTML5_Logo_128.png",
    "./img/javascript.png",
    "./img/react.png",
    "./img/redux.png",
    "./img/node.png",
    "./img/mongoDB-transparent.png",
    "./img/bootstrap.png"
  ];
  let currentLogo = document.getElementById("technologies__technologies-logo");

  if (logoCounter < developerLogos.length - 1) {
    logoCounter += 1;
    currentLogo.src = developerLogos[logoCounter];
  } else {
    logoCounter = 0;
    currentLogo.src = developerLogos[logoCounter];
  }
}

let projectCounter = 0;
const projects = [
  {
    name: "Four a Day Berries",
    github: "https://github.com/KatieSchmidt/blueberries",
    info:
      "This is one of the first web sites I created. It was created using simple technologies: HTML, Express/Node.js, and Pug Templates. Then, it was styled using Bootstrap and CSS.",
    images: [
      "https://res.cloudinary.com/dvwdtlhxx/image/upload/v1543348267/blueberries_k8fsa3.png",
      "https://res.cloudinary.com/dvwdtlhxx/image/upload/v1543348266/blueberries2_e6xg83.png",
      "https://res.cloudinary.com/dvwdtlhxx/image/upload/v1543348266/blueberries3_eyiusu.png",
      "https://res.cloudinary.com/dvwdtlhxx/image/upload/v1543348266/blueberries4_bc7h9o.png",
      "https://res.cloudinary.com/dvwdtlhxx/image/upload/v1543348265/blueberries5_sf0weg.png"
    ]
  },
  {
    name: "Simple Meal Planning",
    github: "https://github.com/KatieSchmidt/react_meal_plan",
    info:
      "One of my favorite pet projects. I made it to learn Redux. This project utilizes React, Redux, Express/Node.js, and MongoDB. It is also styled using a combination of Bootstrap and CSS.",
    images: [
      "https://res.cloudinary.com/dvwdtlhxx/image/upload/v1543348265/mealplan1_q7hkam.png",
      "https://res.cloudinary.com/dvwdtlhxx/image/upload/v1543348266/mealplan2_a71rgz.png",
      "https://res.cloudinary.com/dvwdtlhxx/image/upload/v1543348266/mealplan3_z9lefj.png",
      "https://res.cloudinary.com/dvwdtlhxx/image/upload/v1543348266/mealplan4_swoaeb.png",
      "https://res.cloudinary.com/dvwdtlhxx/image/upload/v1543348266/mealplan5_l4ykgx.png",
      "https://res.cloudinary.com/dvwdtlhxx/image/upload/v1543348268/mealplan6_gtosnb.png"
    ]
  },
  {
    name: "First Portfolio",
    github: "https://github.com/KatieSchmidt/portfolio",
    info:
      "This is one of my first attempts at a web portfolio. I worked on it for a long time before I realized I was including way more functionality than I wanted for a portfolio website. The technologies: MongoDB, Express/Node.js, Bootstrap,CSS, Pug templates, and I went ahead and used Docker because thats what I originally used to host it on DigitalOcean.",
    images: [
      "https://res.cloudinary.com/dvwdtlhxx/image/upload/v1543348270/portfolio2_jtgvh0.png",
      "https://res.cloudinary.com/dvwdtlhxx/image/upload/v1543348270/portfolio1_wqmtyz.png",
      "https://res.cloudinary.com/dvwdtlhxx/image/upload/v1543348271/portfolio3_vqdwyd.png",
      "https://res.cloudinary.com/dvwdtlhxx/image/upload/v1543348271/portfolio4_fjjoaa.png",
      "https://res.cloudinary.com/dvwdtlhxx/image/upload/v1543348273/portfolio5_pkpwxb.png"
    ]
  }
];

function changeProject() {
  let name = document.getElementById("projects__display-name");
  let github = document.getElementById("projects__display-github");
  let info = document.getElementById("projects__display-description");

  if (projectCounter < projects.length - 1) {
    projectCounter += 1;
    name.innerHTML = projects[projectCounter].name;
    github.href = projects[projectCounter].github;
    info.innerHTML = projects[projectCounter].info;
  } else {
    projectCounter = 0;
    name.innerHTML = projects[projectCounter].name;
    github.href = projects[projectCounter].github;
    info.innerHTML = projects[projectCounter].info;
  }
}

function toggleImages() {
  imageCount = 0;
  nextImage();
  let imageDisplayClasses = document.getElementById("projects__images-display")
    .classList;

  if (imageDisplayClasses.contains("imagesVisible")) {
    imageDisplayClasses.remove("imagesVisible");
    imageDisplayClasses.add("imagesInvisible");
  } else {
    imageDisplayClasses.add("imagesVisible");
    imageDisplayClasses.remove("imagesInvisible");
  }
}

let imageCount = 0;
function nextImage() {
  let currentProjectImages = projects[projectCounter].images;
  let currentlyDisplayedImage = document.getElementById(
    "projects__images-display-img"
  );

  if (imageCount < currentProjectImages.length - 1) {
    imageCount += 1;
    currentlyDisplayedImage.src = currentProjectImages[imageCount];
  } else {
    imageCount = 0;
    currentlyDisplayedImage.src = currentProjectImages[imageCount];
  }
}
