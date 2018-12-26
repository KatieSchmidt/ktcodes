let descriptionCounter = 0;
function changeDescription() {
  const developerDescriptions = ["Developer", "Creator", "Innovator"];
  let currentDescription = document.getElementById("header__text-description");

  console.log(
    `descriptionCounter: ${descriptionCounter} developerDescriptions length: ${
      developerDescriptions.length
    }`
  );

  if (descriptionCounter < developerDescriptions.length - 1) {
    descriptionCounter += 1;
    currentDescription.innerHTML = developerDescriptions[descriptionCounter];
  } else {
    descriptionCounter = 0;
    currentDescription.innerHTML = developerDescriptions[descriptionCounter];
  }
}
