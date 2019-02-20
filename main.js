//function counters
let descriptionCounter = 0;
let logoCounter = 0;
let projectCounter = 0;
let imageCount = 0;

//clickable divs in the HTML
const headerText = document.getElementById("header__text");

const technologiesTechnologies = document.getElementById(
  "technologies__technologies"
);

const imageVisibilityToggler = document.getElementById("image__toggler");

const closeImageVisibility = document.getElementById(
  "projects__images-display-exit"
);

const showNextImage = document.getElementById("projects__images-display-next");

const previousProjectIcon = document.getElementById(
  "projects__display-previous"
);

const nextProjectIcon = document.getElementById("projects__display-next");

const projectDisplayIconBox = document.getElementById(
  "projects__display-icon-box"
);

//project information list
const projects = [
  {
    name: "Four a Day Berries",
    github: "https://github.com/KatieSchmidt/blueberries",
    website: "https://fouradayberries.herokuapp.com/",
    info:
      "Four a Day Berries is a small company/farm in Kentucky. This is their personal website to inform customers about their farm/products. Created with Node.js, Pug templates and styled with a combination of Bootstrap and CSS.",
    images: [
      "./img/4ad.png",
      "./img/4ad2.png",
      "./img/4ad3.png",
      "./img/4ad4.png",
      "./img/4ad5.png",
      "./img/4ad6.png",
      "./img/4ad7.png"
    ]
  },
  {
    name: "Waggle Simulator",
    github: "https://github.com/KatieSchmidt/waggle_dance_simulator",
    website: "https://katieschmidt.github.io/waggle_dance_simulator",
    info:
      "The waggle dance is a dance done by honey bees. This informative site explains the dance and also provides an interactive simulation with animations created with CSS and vanilla Javascript.",
    images: [
      "./img/waggle.png",
      "./img/waggle-2.png",
      "./img/waggle-3.png",
      "./img/waggle-4.png"
    ]
  },
  {
    name: "Simple Meal Planning",
    github: "https://github.com/KatieSchmidt/react_meal_plan",
    info:
      "One of my favorite pet projects. I made it to learn Redux. This project utilizes React, Redux, Express/Node.js, and MongoDB. It is also styled using a combination of Bootstrap and CSS.",

    images: [
      "./img/mp.png",
      "./img/mp2.png",
      "./img/mp3.png",
      "./img/mp4.png",
      "./img/mp5.png",
      "./img/mp6.png",
      "./img/mp7.png",
      "./img/mp8.png"
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

//functionality
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

function changeLogo() {
  const developerLogos = [
    "./img/css3-logo-small.png",
    "./img/HTML5_Logo_128.png",
    "./img/javascript.png",
    "./img/react.png",
    "./img/Redux.png",
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

function changeProject() {
  let name = document.getElementById("projects__display-name");
  let github = document.getElementById("projects__display-github");
  let info = document.getElementById("projects__display-description");
  let website = document.getElementById("projects__display-website");

  if (projectCounter < projects.length - 1) {
    projectCounter += 1;
    let projectIsLive = projects[projectCounter].hasOwnProperty("website");
    if (projectIsLive) {
      website.style.display = "inline";
      website.href = projects[projectCounter].website;
    } else {
      website.style.display = "none";
    }
    name.innerHTML = projects[projectCounter].name;
    github.href = projects[projectCounter].github;
    info.innerHTML = projects[projectCounter].info;
  } else {
    projectCounter = 0;
    let projectIsLive = projects[projectCounter].hasOwnProperty("website");
    if (projectIsLive) {
      website.style.display = "inline";
      website.href = projects[projectCounter].website;
    } else {
      website.style.display = "none";
    }
    name.innerHTML = projects[projectCounter].name;
    github.href = projects[projectCounter].github;
    info.innerHTML = projects[projectCounter].info;
  }
}

function previousProject() {
  let name = document.getElementById("projects__display-name");
  let github = document.getElementById("projects__display-github");
  let info = document.getElementById("projects__display-description");
  let website = document.getElementById("projects__display-website");

  if (projectCounter > 0) {
    projectCounter -= 1;
    let projectIsLive = projects[projectCounter].hasOwnProperty("website");
    if (projectIsLive) {
      website.style.display = "inline";
      website.href = projects[projectCounter].website;
    } else {
      website.style.display = "none";
    }
    name.innerHTML = projects[projectCounter].name;
    github.href = projects[projectCounter].github;
    info.innerHTML = projects[projectCounter].info;
  } else {
    projectCounter = projects.length - 1;
    let projectIsLive = projects[projectCounter].hasOwnProperty("website");
    if (projectIsLive) {
      website.style.display = "inline";
      website.href = projects[projectCounter].website;
    } else {
      website.style.display = "none";
    }
    name.innerHTML = projects[projectCounter].name;
    github.href = projects[projectCounter].github;
    info.innerHTML = projects[projectCounter].info;
  }
  console.log("clicked previous");
}

function toggleImageVisibility() {
  imageCount = 0;
  nextImage();
  let projectsIconBox = document.getElementById("projects__display-icon-box")
    .classList;
  let imageDisplayClasses = document.getElementById("projects__images-display")
    .classList;

  if (imageDisplayClasses.contains("imagesVisible")) {
    imageDisplayClasses.remove("imagesVisible");
    imageDisplayClasses.add("imagesInvisible");
    projectsIconBox.remove("iconsInvisible");
    projectsIconBox.add("iconsVisible");
  } else {
    imageDisplayClasses.add("imagesVisible");
    imageDisplayClasses.remove("imagesInvisible");
    projectsIconBox.remove("iconsVisible");
    projectsIconBox.add("iconsInvisible");
  }
  console.log("clicked next");
}

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

//actions
technologiesTechnologies.onclick = changeLogo;
headerText.onclick = changeDescription;
showNextImage.onclick = nextImage;
closeImageVisibility.onclick = toggleImageVisibility;
imageVisibilityToggler.onclick = toggleImageVisibility;

nextProjectIcon.onclick = changeProject;
previousProjectIcon.onclick = previousProject;

// setInterval(() => changeDescription(), 4000);

// setInterval(() => changeLogo(), 3000);
