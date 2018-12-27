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
  console.log("working");
  const developerLogos = [
    "./img/html5-css3-js.png",
    "./img/mongodb.jpg",
    "./img/bootstrap.png"
  ];
  let currentLogo = document.getElementById("about__technologies-logo");

  if (logoCounter < developerLogos.length - 1) {
    logoCounter += 1;
    currentLogo.src = developerLogos[logoCounter];
  } else {
    logoCounter = 0;
    currentLogo.src = developerLogos[logoCounter];
  }
}
