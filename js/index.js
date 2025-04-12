const TLC_TOTAL_ANIM_TIME = 740
const TLC_NUMBER_OF_REPEATS = 4

const EXC_IN_TOTAL_ANIM_TIME = 1800
const EXC_IN_CHARS_PER_LINE = 30
const EXC_IN_NUMBER_OF_LINES = 9

const EXC_OUT_TOTAL_ANIM_TIME = 700

async function main() {
  await delay(2000)

  // Import audio track
  const audio = new Audio("./audio/RETURN of the ORIGINAL ART FORM feat DJ MILO.mp3")
  // Start playback
  audio.play()
  // Account for silence at the beginning of the track
  await delay(600)

  // Animate in "Exclamation Marks"
  await animateInExclamationMarks(EXC_IN_NUMBER_OF_LINES, EXC_IN_TOTAL_ANIM_TIME, EXC_IN_CHARS_PER_LINE)
  // destroyElements(".exclamation-mark-line")

  // Flash the exclamation mark container
  for (let i = 0; i < 3; i++) {
    hideElement(".exclamation-mark-container")
    await delay(200)
    showElement(".exclamation-mark-container")
    await delay(200)
  }

  // Animate out "Exclamation Marks"
  await animateOutExclamationMarks(EXC_IN_NUMBER_OF_LINES, EXC_OUT_TOTAL_ANIM_TIME)

  // Run "The Lounge Conjecture" animation
  for (let i = 0; i < 4; i++) {
    await animateTheLoungeConjecture(TLC_NUMBER_OF_REPEATS, TLC_TOTAL_ANIM_TIME)
    destroyElements(".project-title")
    await delay(100)
  }

  // Pause playback
  audio.pause()
}

async function animateTheLoungeConjecture(numberOfRepeats, totalAnimationTime) {
  // Select the target container
  const projectTitleContainerDiv = document.querySelector(".project-title-container div")

  // Create <p> elements with the class 'project-title'
  // Each one will be a variant of the project title, with different fonts
  const projectTitle1 = document.createElement("p")
  const projectTitle2 = document.createElement("p")
  const projectTitle3 = document.createElement("p")
  projectTitle1.classList.add("project-title")
  projectTitle2.classList.add("project-title")
  projectTitle3.classList.add("project-title")

  // Create array to store project title variants
  const projectTitleVariants = [projectTitle1, projectTitle2, projectTitle3]

  /* ------------------------------------------- */
  /*          POPULATE TITLE VARIANT 1           */
  /* ------------------------------------------- */
  const the1 = document.createElement("span")
  the1.classList.add("black-extended", "oblique")
  the1.textContent = "THE"

  const lounge1 = document.createElement("span")
  lounge1.classList.add("bold-extended", "oblique")
  lounge1.textContent = "LOUNGE"

  const conjecture1 = document.createElement("span")
  conjecture1.classList.add("regular-extended", "oblique")
  conjecture1.textContent = "CONJECTURE"

  // Append the <span> elements to the <p> element
  projectTitle1.appendChild(the1)
  projectTitle1.appendChild(lounge1)
  projectTitle1.appendChild(conjecture1)

  /* ------------------------------------------- */
  /*          POPULATE TITLE VARIANT 2           */
  /* ------------------------------------------- */
  const the2 = document.createElement("span")
  the2.classList.add("regular-extended", "oblique")
  the2.textContent = "THE"

  const lounge2 = document.createElement("span")
  lounge2.classList.add("black-extended", "oblique")
  lounge2.textContent = "LOUNGE"

  const conjecture2 = document.createElement("span")
  conjecture2.classList.add("bold-extended", "oblique")
  conjecture2.textContent = "CONJECTURE"

  // Append the <span> elements to the <p> element
  projectTitle2.appendChild(the2)
  projectTitle2.appendChild(lounge2)
  projectTitle2.appendChild(conjecture2)

  /* ------------------------------------------- */
  /*          POPULATE TITLE VARIANT 3           */
  /* ------------------------------------------- */
  const the3 = document.createElement("span")
  the3.classList.add("bold-extended", "oblique")
  the3.textContent = "THE"

  const lounge3 = document.createElement("span")
  lounge3.classList.add("regular-extended", "oblique")
  lounge3.textContent = "LOUNGE"

  const conjecture3 = document.createElement("span")
  conjecture3.classList.add("black-extended", "oblique")
  conjecture3.textContent = "CONJECTURE"

  // Append the <span> elements to the <p> element
  projectTitle3.appendChild(the3)
  projectTitle3.appendChild(lounge3)
  projectTitle3.appendChild(conjecture3)

  /* ------------------------------------------- */
  /*         PRE-CALCULATE LOOP VARIABLES        */
  /* ------------------------------------------- */
  // Calculate the total number of lines to be printed
  const totalNumberOfLines = numberOfRepeats * projectTitleVariants.length
  // Calculate the amount of time to print each line
  const animationDelay = totalAnimationTime / totalNumberOfLines

  /* -------------------------------------------------- */
  /*    PRINT ALL TITLE VARIANTS * NUMBER OF REPEATS    */
  /* -------------------------------------------------- */
  // Start printing lines
  for (let i = 0; i < numberOfRepeats; i++) {
    // // Create a copy of all variants
    const newProjectTitleVariants = projectTitleVariants.map((variant) => variant.cloneNode(true))

    // Print all variants ONCE
    for (let j = 0; j < newProjectTitleVariants.length; j++) {
      const variant = newProjectTitleVariants[j]

      // Set the animation property for the line
      //   variant.style.animation = `typing ${animationDelay / 1000}s steps(22) forwards`

      // Append variant to DOM as new line
      projectTitleContainerDiv.appendChild(variant)

      // Wait for the animation to finish before printing the next line
      await delay(animationDelay)
    }
  }
}

async function animateInExclamationMarks(numberOfLines, totalAnimationTime, charsPerLine) {
  const exclamationMarkContainer = document.querySelector(".exclamation-mark-container div")
  const animationDelay = totalAnimationTime / numberOfLines

  for (let i = 0; i < numberOfLines; i++) {
    const line = document.createElement("p")
    line.classList.add("exclamation-mark-line", "regular-extended", "oblique", "letter-spacing")
    line.style.animation = `typing ${animationDelay / 1000}s steps(200) forwards`
    // line.textContent = "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
    line.textContent = "!".repeat(charsPerLine)

    exclamationMarkContainer.appendChild(line)
    await delay(animationDelay)
  }
}

async function animateOutExclamationMarks(numberOfLines, totalAnimationTime) {
  const exclamationMarkLines = Array.from(document.querySelectorAll(".exclamation-mark-line")).reverse()
  const animationDelay = totalAnimationTime / numberOfLines

  for (const line of exclamationMarkLines) {
    line.style.animation = `typing-reverse ${animationDelay / 1000}s steps(200) forwards`
    await delay(animationDelay)
    line.style.opacity = 0
  }
}

async function animateGenres(numberOfRepeats, totalAnimationTime) {}

function showElement(element) {
  const targetElement = document.querySelector(element)
  if (targetElement) {
    targetElement.classList.remove("hidden")
  }
}

function hideElement(element) {
  const targetElement = document.querySelector(element)
  if (targetElement) {
    targetElement.classList.add("hidden")
  }
}

function destroyElements(element) {
  /* ------------------------------------------- */
  /*              DESTROY ANIMATION              */
  /* ------------------------------------------- */
  // Remove all variants from the DOM
  const allElements = document.querySelectorAll(element)
  console.log(allElements)
  allElements.forEach((element) => {
    element.remove()
  })
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

document.addEventListener("DOMContentLoaded", function () {
  main()
})
