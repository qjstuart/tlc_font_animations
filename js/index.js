const TLC_TOTAL_ANIM_TIME = 890;
const TLC_NUMBER_OF_REPEATS = 4;

const EXC_IN_TOTAL_ANIM_TIME = 1800;
const EXC_IN_CHARS_PER_LINE = 30;
const EXC_IN_NUMBER_OF_LINES = 12;

const EXC_OUT_TOTAL_ANIM_TIME = 700;

const GENRES_TOTAL_ANIM_TIME = 1500;
const GENRES_NUMBER_OF_REPEATS = 3;

const GENRE1_NUMBER_OF_REPEATS = 4;
const GENRE1_TOTAL_ANIM_TIME = 800;

const GENRES_NUMBER_OF_LINES = 12;
const GENRES_OUT_TOTAL_ANIM_TIME = 700;

async function main() {
  await delay(1000);

  // Initialize 45RPM spinner
  const spinner = document.querySelector(".spinner img");

  // Import audio track
  const audio = new Audio(
    "./audio/RETURN of the ORIGINAL ART FORM feat DJ MILO (cropped).mp3"
  );
  // Start playback
  audio.play();

  // Animate in "Exclamation Marks"
  await animateInExclamationMarks(
    EXC_IN_NUMBER_OF_LINES,
    EXC_IN_TOTAL_ANIM_TIME,
    EXC_IN_CHARS_PER_LINE
  );
  const exclamationMarkContainer = document
    .querySelector(".exclamation-mark-container")
    .cloneNode(true);

  // Flash the exclamation mark container
  for (let i = 0; i < 3; i++) {
    hideElement(".exclamation-mark-container");
    await delay(220);
    showElement(".exclamation-mark-container");
    await delay(220);
  }

  // Animate out exclamation marks
  await animateOutExclamationMarks(
    EXC_IN_NUMBER_OF_LINES,
    EXC_OUT_TOTAL_ANIM_TIME
  );

  // Remove exclamation mark container
  destroyElements(".exclamation-mark-container");

  // Run TLC text animation
  const animationRuns = 3;
  for (let i = 0; i < animationRuns; i++) {
    await animateTheLoungeConjecture(
      TLC_NUMBER_OF_REPEATS,
      TLC_TOTAL_ANIM_TIME
    );
    if (i + 1 !== animationRuns) {
      destroyElements(".project-title");
    }
    await delay(100);
  }

  // Flash the project title container
  for (let i = 0; i < 3; i++) {
    hideElement(".project-title-container");
    await delay(150);
    showElement(".project-title-container");
    await delay(150);
  }

  // Clear project title animation
  destroyElements(".project-title");

  // Animate "breakbeat" word
  await animateGenre3Variants(
    "BREAKBEAT",
    GENRE1_NUMBER_OF_REPEATS,
    GENRE1_TOTAL_ANIM_TIME
  );
  await delay(200);
  destroyElements(".line");

  // Show & Hide 45RPM spinner
  showElement(".spinner");
  await delay(900);
  hideElement(".spinner");

  // Animate "house" word
  await animateGenre3Variants(
    "HOUSE",
    GENRE1_NUMBER_OF_REPEATS,
    GENRE1_TOTAL_ANIM_TIME
  );
  await delay(200);
  destroyElements(".line");

  // Show & Hide 45RPM spinner (FASTER SPINNING)
  spinner.classList.add("spin-fast");
  showElement(".spinner");
  await delay(900);
  hideElement(".spinner");

  // Animate "acidjazz" word
  await animateGenre3Variants(
    "ACIDJAZZ",
    GENRE1_NUMBER_OF_REPEATS,
    GENRE1_TOTAL_ANIM_TIME
  );
  await delay(200);
  destroyElements(".line");

  // Show & Hide 45RPM spinner
  spinner.classList.remove("spin-fast");
  showElement(".spinner");
  await delay(900);
  hideElement(".spinner");

  // Animate "&more!" word
  await animateGenre3Variants(
    "&MORE!",
    GENRE1_NUMBER_OF_REPEATS,
    GENRE1_TOTAL_ANIM_TIME
  );
  await delay(200);
  destroyElements(".line");

  // Show & Hide 45RPM spinner
  showElement(".spinner");
  await delay(900);
  hideElement(".spinner");

  // Run Genres animation
  for (let i = 0; i < 1; i++) {
    await animateGenres(GENRES_NUMBER_OF_REPEATS, GENRES_TOTAL_ANIM_TIME);
    // destroyElements(".genre")
    await delay(100);
  }

  // Leave the genres container visible for a bit
  await delay(80);

  // Flash the genres container
  for (let i = 0; i < 2; i++) {
    hideElement(".genres-container");
    await delay(230);
    showElement(".genres-container");
    await delay(230);
  }

  await delay(320);

  // Clear genres animation and destroy
  await animateOutGenres(GENRES_NUMBER_OF_LINES, 750);
  destroyElements(".genres-container");

  // Run TLC text animation (single line)
  const projectTitleContainerDiv = document.querySelector(
    ".project-title-container div"
  );
  const tlcP1 = document.createElement("p");
  const tlcP2 = document.createElement("p");
  const tlcP3 = document.createElement("p");

  tlcP1.classList.add("project-title", "justify-start", "pb-8px");
  tlcP2.classList.add("project-title", "justify-start", "pb-8px");
  tlcP3.classList.add("project-title", "justify-start", "pb-8px");

  const the1Span = document.createElement("span");
  const lounge1Span = document.createElement("span");
  const conjecture1Span = document.createElement("span");
  const the2Span = document.createElement("span");
  const lounge2Span = document.createElement("span");
  const conjecture2Span = document.createElement("span");
  const the3Span = document.createElement("span");
  const lounge3Span = document.createElement("span");
  const conjecture3Span = document.createElement("span");
  // Set fonts
  the1Span.classList.add("black-extended", "oblique");
  lounge1Span.classList.add("bold-extended", "oblique");
  conjecture1Span.classList.add("regular-extended", "oblique");
  the2Span.classList.add("regular-extended", "oblique");
  lounge2Span.classList.add("black-extended", "oblique");
  conjecture2Span.classList.add("bold-extended", "oblique");
  the3Span.classList.add("bold-extended", "oblique");
  lounge3Span.classList.add("regular-extended", "oblique");
  conjecture3Span.classList.add("black-extended", "oblique");
  // Set text content
  the1Span.textContent = "THE";
  lounge1Span.textContent = "LOUNGE";
  conjecture1Span.textContent = "CONJECTURE";
  the2Span.textContent = "THE";
  lounge2Span.textContent = "LOUNGE";
  conjecture2Span.textContent = "CONJECTURE";
  the3Span.textContent = "THE";
  lounge3Span.textContent = "LOUNGE";
  conjecture3Span.textContent = "CONJECTURE";
  // Append <span>s to <p>s
  tlcP1.appendChild(the1Span);
  tlcP1.appendChild(lounge1Span);
  tlcP1.appendChild(conjecture1Span);
  tlcP2.appendChild(the2Span);
  tlcP2.appendChild(lounge2Span);
  tlcP2.appendChild(conjecture2Span);
  tlcP3.appendChild(the3Span);
  tlcP3.appendChild(lounge3Span);
  tlcP3.appendChild(conjecture3Span);
  // Add animation style
  tlcP1.style.animation = `typing 0.5Rs steps(22) forwards`;
  tlcP2.style.animation = `typing 0.5Rs steps(22) forwards`;
  tlcP3.style.animation = `typing 0.5Rs steps(22) forwards`;

  // Append to container div
  projectTitleContainerDiv.appendChild(tlcP1.cloneNode(true));
  document.querySelector(".spinner-1").classList.remove("hidden");
  await delay(300);
  projectTitleContainerDiv.appendChild(tlcP2.cloneNode(true));
  document.querySelector(".spinner-2").classList.remove("hidden");
  await delay(300);
  projectTitleContainerDiv.appendChild(tlcP3.cloneNode(true));
  document.querySelector(".spinner-3").classList.remove("hidden");
  await delay(300);
  projectTitleContainerDiv.appendChild(tlcP1.cloneNode(true));
  document.querySelector(".spinner-4").classList.remove("hidden");
  await delay(300);
  projectTitleContainerDiv.appendChild(tlcP2.cloneNode(true));
  document.querySelector(".spinner-5").classList.remove("hidden");
  await delay(300);
  projectTitleContainerDiv.appendChild(tlcP3.cloneNode(true));
  document.querySelector(".spinner-6").classList.remove("hidden");
  await delay(300);
  projectTitleContainerDiv.appendChild(tlcP1.cloneNode(true));
  document.querySelector(".spinner-7").classList.remove("hidden");
  await delay(300);
  projectTitleContainerDiv.appendChild(tlcP2.cloneNode(true));
  document.querySelector(".spinner-8").classList.remove("hidden");
  await delay(300);
  projectTitleContainerDiv.appendChild(tlcP3.cloneNode(true));
  document.querySelector(".spinner-9").classList.remove("hidden");
  await delay(1250);

  // Clear animations
  destroyElements(".project-title-container");
  destroyElements(".spinner-grid");

  // Re-create "Exclamation Marks" div and animate in
  //   const container = document.createElement("div")
  //   container.classList.add("exclamation-mark-container")
  //   const innerDiv = document.createElement("div")
  //   container.appendChild(innerDiv)
  //   document.body.appendChild(container)
  //   await animateInExclamationMarks(EXC_IN_NUMBER_OF_LINES, EXC_IN_TOTAL_ANIM_TIME, EXC_IN_CHARS_PER_LINE)

  // Disable animations on exclamation mark lines before rendering them
  const exclamationMarkLines = exclamationMarkContainer.querySelectorAll(
    ".exclamation-mark-line"
  );
  exclamationMarkLines.forEach((line) => {
    line.style.animation = "";
  });
  document.body.appendChild(exclamationMarkContainer);

  // Flash the exclamation mark container
  for (let i = 0; i < 3; i++) {
    hideElement(".exclamation-mark-container");
    await delay(220);
    showElement(".exclamation-mark-container");
    await delay(220);
  }

  // Animate out exclamation marks
  await animateOutExclamationMarks(EXC_IN_NUMBER_OF_LINES, 350);

  // Pause playback
  audio.pause();
}

async function animateTheLoungeConjecture(
  numberOfRepeats,
  totalAnimationTime,
  animateLines = false
) {
  // Select the target container
  const projectTitleContainerDiv = document.querySelector(
    ".project-title-container div"
  );

  // Create <p> elements with the class 'project-title'
  // Each one will be a variant of the project title, with different fonts
  const projectTitle1 = document.createElement("p");
  const projectTitle2 = document.createElement("p");
  const projectTitle3 = document.createElement("p");
  projectTitle1.classList.add("project-title");
  projectTitle2.classList.add("project-title");
  projectTitle3.classList.add("project-title");

  // Create array to store project title variants
  const projectTitleVariants = [projectTitle1, projectTitle2, projectTitle3];

  /* ------------------------------------------- */
  /*          POPULATE TITLE VARIANT 1           */
  /* ------------------------------------------- */
  const the1 = document.createElement("span");
  the1.classList.add("black-extended", "oblique");
  the1.textContent = "THE";

  const lounge1 = document.createElement("span");
  lounge1.classList.add("bold-extended", "oblique");
  lounge1.textContent = "LOUNGE";

  const conjecture1 = document.createElement("span");
  conjecture1.classList.add("regular-extended", "oblique");
  conjecture1.textContent = "CONJECTURE";

  // Append the <span> elements to the <p> element
  projectTitle1.appendChild(the1);
  projectTitle1.appendChild(lounge1);
  projectTitle1.appendChild(conjecture1);

  /* ------------------------------------------- */
  /*          POPULATE TITLE VARIANT 2           */
  /* ------------------------------------------- */
  const the2 = document.createElement("span");
  the2.classList.add("regular-extended", "oblique");
  the2.textContent = "THE";

  const lounge2 = document.createElement("span");
  lounge2.classList.add("black-extended", "oblique");
  lounge2.textContent = "LOUNGE";

  const conjecture2 = document.createElement("span");
  conjecture2.classList.add("bold-extended", "oblique");
  conjecture2.textContent = "CONJECTURE";

  // Append the <span> elements to the <p> element
  projectTitle2.appendChild(the2);
  projectTitle2.appendChild(lounge2);
  projectTitle2.appendChild(conjecture2);

  /* ------------------------------------------- */
  /*          POPULATE TITLE VARIANT 3           */
  /* ------------------------------------------- */
  const the3 = document.createElement("span");
  the3.classList.add("bold-extended", "oblique");
  the3.textContent = "THE";

  const lounge3 = document.createElement("span");
  lounge3.classList.add("regular-extended", "oblique");
  lounge3.textContent = "LOUNGE";

  const conjecture3 = document.createElement("span");
  conjecture3.classList.add("black-extended", "oblique");
  conjecture3.textContent = "CONJECTURE";

  // Append the <span> elements to the <p> element
  projectTitle3.appendChild(the3);
  projectTitle3.appendChild(lounge3);
  projectTitle3.appendChild(conjecture3);

  /* ------------------------------------------- */
  /*         PRE-CALCULATE LOOP VARIABLES        */
  /* ------------------------------------------- */
  // Calculate the total number of lines to be printed
  const totalNumberOfLines = numberOfRepeats * projectTitleVariants.length;
  // Calculate the amount of time to print each line
  const animationDelay = totalAnimationTime / totalNumberOfLines;

  /* -------------------------------------------------- */
  /*    PRINT ALL TITLE VARIANTS * NUMBER OF REPEATS    */
  /* -------------------------------------------------- */
  // Start printing lines
  for (let i = 0; i < numberOfRepeats; i++) {
    // // Create a copy of all variants
    const newProjectTitleVariants = projectTitleVariants.map((variant) =>
      variant.cloneNode(true)
    );

    // Print all variants ONCE
    for (let j = 0; j < newProjectTitleVariants.length; j++) {
      const variant = newProjectTitleVariants[j];

      // Set the animation property for the line
      if (animateLines) {
        variant.style.animation = `typing ${
          animationDelay / 1000
        }s steps(22) forwards`;
      }

      // Append variant to DOM as new line
      projectTitleContainerDiv.appendChild(variant);

      // Wait for the animation to finish before printing the next line
      await delay(animationDelay);
    }
  }
}

async function animateInExclamationMarks(
  numberOfLines,
  totalAnimationTime,
  charsPerLine
) {
  const exclamationMarkContainer = document.querySelector(
    ".exclamation-mark-container div"
  );
  const animationDelay = totalAnimationTime / numberOfLines;

  for (let i = 0; i < numberOfLines; i++) {
    const line = document.createElement("p");
    line.classList.add(
      "exclamation-mark-line",
      "regular-extended",
      "oblique",
      "letter-spacing"
    );
    line.style.animation = `typing ${
      animationDelay / 1000
    }s steps(200) forwards`;
    line.textContent = "!".repeat(charsPerLine);

    exclamationMarkContainer.appendChild(line);
    await delay(animationDelay);
  }
}

async function animateOutExclamationMarks(numberOfLines, totalAnimationTime) {
  const exclamationMarkLines = Array.from(
    document.querySelectorAll(".exclamation-mark-line")
  ).reverse();
  const animationDelay = totalAnimationTime / numberOfLines;

  for (const line of exclamationMarkLines) {
    line.style.animation = `typing-reverse ${
      animationDelay / 1000
    }s steps(200) forwards`;
    await delay(animationDelay);
    line.style.opacity = 0;
  }
}

async function animateGenres(numberOfRepeats, totalAnimationTime) {
  // Select the target container
  const genresContainerDiv = document.querySelector(".genres-container div");

  // Create <p> elements with the class 'genre'
  // Each one will be a variant of the genre, with different fonts
  const genre1P = document.createElement("p");
  const genre2P = document.createElement("p");
  const genre3P = document.createElement("p");
  const genre4P = document.createElement("p");
  genre1P.classList.add("genre");
  genre2P.classList.add("genre");
  genre3P.classList.add("genre");
  genre4P.classList.add("genre");

  // Create array to store project title variants
  const genreVariants = [genre1P, genre2P, genre3P, genre4P];

  /* ------------------------------------------- */
  /*          POPULATE TITLE VARIANT 1           */
  /* ------------------------------------------- */
  const breakbeat1Span = document.createElement("span");
  breakbeat1Span.classList.add("black-extended", "oblique");
  breakbeat1Span.textContent = "BREAKBEAT";

  const house1Span = document.createElement("span");
  house1Span.classList.add("bold-extended", "oblique");
  house1Span.textContent = "HOUSE";

  const acidJazz1Span = document.createElement("span");
  acidJazz1Span.classList.add("regular-extended", "oblique");
  acidJazz1Span.textContent = "ACIDJAZZ";

  const andMore1Span = document.createElement("span");
  andMore1Span.classList.add("thin-extended", "oblique");
  andMore1Span.textContent = "&MORE!";

  // Append the <span> elements to the <p> element
  genre1P.appendChild(breakbeat1Span);
  genre1P.appendChild(house1Span);
  genre1P.appendChild(acidJazz1Span);
  genre1P.appendChild(andMore1Span);

  /* ------------------------------------------- */
  /*          POPULATE TITLE VARIANT 2           */
  /* ------------------------------------------- */
  const breakbeat2Span = document.createElement("span");
  breakbeat2Span.classList.add("thin-extended", "oblique");
  breakbeat2Span.textContent = "BREAKBEAT";

  const house2Span = document.createElement("span");
  house2Span.classList.add("black-extended", "oblique");
  house2Span.textContent = "HOUSE";

  const acidJazz2Span = document.createElement("span");
  acidJazz2Span.classList.add("bold-extended", "oblique");
  acidJazz2Span.textContent = "ACIDJAZZ";

  const andMore2Span = document.createElement("span");
  andMore2Span.classList.add("regular-extended", "oblique");
  andMore2Span.textContent = "&MORE!";

  // Append the <span> elements to the <p> element
  genre2P.appendChild(breakbeat2Span);
  genre2P.appendChild(house2Span);
  genre2P.appendChild(acidJazz2Span);
  genre2P.appendChild(andMore2Span);

  /* ------------------------------------------- */
  /*          POPULATE TITLE VARIANT 3           */
  /* ------------------------------------------- */
  const breakbeat3Span = document.createElement("span");
  breakbeat3Span.classList.add("regular-extended", "oblique");
  breakbeat3Span.textContent = "BREAKBEAT";

  const house3Span = document.createElement("span");
  house3Span.classList.add("thin-extended", "oblique");
  house3Span.textContent = "HOUSE";

  const acidJazz3Span = document.createElement("span");
  acidJazz3Span.classList.add("black-extended", "oblique");
  acidJazz3Span.textContent = "ACIDJAZZ";

  const andMore3Span = document.createElement("span");
  andMore3Span.classList.add("bold-extended", "oblique");
  andMore3Span.textContent = "&MORE!";

  // Append the <span> elements to the <p> element
  genre3P.appendChild(breakbeat3Span);
  genre3P.appendChild(house3Span);
  genre3P.appendChild(acidJazz3Span);
  genre3P.appendChild(andMore3Span);

  /* ------------------------------------------- */
  /*          POPULATE TITLE VARIANT 4           */
  /* ------------------------------------------- */
  const breakbeat4Span = document.createElement("span");
  breakbeat4Span.classList.add("bold-extended", "oblique");
  breakbeat4Span.textContent = "BREAKBEAT";

  const house4Span = document.createElement("span");
  house4Span.classList.add("regular-extended", "oblique");
  house4Span.textContent = "HOUSE";

  const acidJazz4Span = document.createElement("span");
  acidJazz4Span.classList.add("thin-extended", "oblique");
  acidJazz4Span.textContent = "ACIDJAZZ";

  const andMore4Span = document.createElement("span");
  andMore4Span.classList.add("black-extended", "oblique");
  andMore4Span.textContent = "&MORE!";

  // Append the <span> elements to the <p> element
  genre4P.appendChild(breakbeat4Span);
  genre4P.appendChild(house4Span);
  genre4P.appendChild(acidJazz4Span);
  genre4P.appendChild(andMore4Span);

  /* ------------------------------------------- */
  /*         PRE-CALCULATE LOOP VARIABLES        */
  /* ------------------------------------------- */
  // Calculate the total number of lines to be printed
  const totalNumberOfLines = numberOfRepeats * genreVariants.length;
  // Calculate the amount of time to print each line
  const animationDelay = totalAnimationTime / totalNumberOfLines;

  /* -------------------------------------------------- */
  /*    PRINT ALL TITLE VARIANTS * NUMBER OF REPEATS    */
  /* -------------------------------------------------- */
  // Start printing lines
  for (let i = 0; i < numberOfRepeats; i++) {
    // // Create a copy of all variants
    const newGenreVariants = genreVariants.map((variant) =>
      variant.cloneNode(true)
    );

    // Print all variants ONCE
    for (let j = 0; j < newGenreVariants.length; j++) {
      const variant = newGenreVariants[j];

      // Set the animation property for the line
      variant.style.animation = `typing ${
        animationDelay / 1000
      }s steps(22) forwards`;

      // Append variant to DOM as new line
      genresContainerDiv.appendChild(variant);

      // Wait for the animation to finish before printing the next line
      await delay(animationDelay);
    }
  }
}

async function animateOutGenres(numberOfLines, totalAnimationTime) {
  const genresLines = Array.from(document.querySelectorAll(".genre")).reverse();
  const animationDelay = totalAnimationTime / numberOfLines;

  for (const line of genresLines) {
    line.style.animation = `typing-reverse ${
      animationDelay / 1000
    }s steps(200) forwards`;
    await delay(animationDelay);
    line.style.opacity = 0;
  }
}

async function animateGenre3Variants(
  word,
  numberOfRepeats,
  totalAnimationTime
) {
  // Select the target container
  const wordContainerDiv = document.querySelector(".word-container div");

  // Create <p> elements with the class 'word'
  // Each one will be a variant of the word, with different fonts
  const lineA = document.createElement("p");
  const lineB = document.createElement("p");
  const lineC = document.createElement("p");
  lineA.classList.add("line");
  lineB.classList.add("line");
  lineC.classList.add("line");

  // Create array to store project title variants
  const lineVariants = [lineA, lineB, lineC];

  /* ------------------------------------------- */
  /*           POPULATE LINE VARIANT A           */
  /* ------------------------------------------- */
  const word1a = document.createElement("span");
  word1a.classList.add("black-extended", "oblique");
  word1a.textContent = word;

  const word2a = document.createElement("span");
  word2a.classList.add("medium-extended", "oblique");
  word2a.textContent = word;

  const word3a = document.createElement("span");
  word3a.classList.add("ultra-light-extended", "oblique");
  word3a.textContent = word;

  // Construct the first line (<p>) with the three words (<span>)
  lineA.appendChild(word1a);
  lineA.appendChild(word2a);
  lineA.appendChild(word3a);

  /* ------------------------------------------- */
  /*           POPULATE LINE VARIANT B           */
  /* ------------------------------------------- */
  const word1b = document.createElement("span");
  word1b.classList.add("black-extended", "oblique");
  word1b.textContent = word;

  const word2b = document.createElement("span");
  word2b.classList.add("medium-extended", "oblique");
  word2b.textContent = word;

  const word3b = document.createElement("span");
  word3b.classList.add("ultra-light-extended", "oblique");
  word3b.textContent = word;

  // Construct the first line (<p>) with the three words (<span>)
  lineB.appendChild(word1b);
  lineB.appendChild(word2b);
  lineB.appendChild(word3b);

  /* ------------------------------------------- */
  /*           POPULATE LINE VARIANT C           */
  /* ------------------------------------------- */
  const word1c = document.createElement("span");
  word1c.classList.add("medium-extended", "oblique");
  word1c.textContent = word;

  const word2c = document.createElement("span");
  word2c.classList.add("ultra-light-extended", "oblique");
  word2c.textContent = word;

  const word3c = document.createElement("span");
  word3c.classList.add("black-extended", "oblique");
  word3c.textContent = word;

  // Append the <span> elements to the <p> element
  lineC.appendChild(word1c);
  lineC.appendChild(word2c);
  lineC.appendChild(word3c);

  /* ------------------------------------------- */
  /*         PRE-CALCULATE LOOP VARIABLES        */
  /* ------------------------------------------- */
  // Calculate the total number of lines to be printed
  const totalNumberOfLines = numberOfRepeats * lineVariants.length;
  // Calculate the amount of time to print each line
  const animationDelay = totalAnimationTime / totalNumberOfLines;

  /* -------------------------------------------------- */
  /*    PRINT ALL TITLE VARIANTS * NUMBER OF REPEATS    */
  /* -------------------------------------------------- */
  // Start printing lines
  for (let i = 0; i < numberOfRepeats; i++) {
    // // Create a copy of all variants
    const newLineVariants = lineVariants.map((variant) =>
      variant.cloneNode(true)
    );

    // Print all variants ONCE
    for (let j = 0; j < newLineVariants.length; j++) {
      const variant = newLineVariants[j];

      // Set the animation property for the line
      variant.style.animation = `typing ${
        animationDelay / 1000
      }s steps(22) forwards`;

      // Append variant to DOM as new line
      wordContainerDiv.appendChild(variant);

      // Wait for the animation to finish before printing the next line
      await delay(animationDelay);
    }
  }
}

function showElement(element) {
  const targetElement = document.querySelector(element);
  if (targetElement) {
    targetElement.classList.remove("hidden");
  }
}

function hideElement(element) {
  const targetElement = document.querySelector(element);
  if (targetElement) {
    targetElement.classList.add("hidden");
  }
}

function destroyElements(element) {
  /* ------------------------------------------- */
  /*              DESTROY ANIMATION              */
  /* ------------------------------------------- */
  // Remove all variants from the DOM
  const allElements = document.querySelectorAll(element);
  console.log(allElements);
  allElements.forEach((element) => {
    element.remove();
  });
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

document.addEventListener("DOMContentLoaded", function () {
  main();
});
