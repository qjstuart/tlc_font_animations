async function animateTheLoungeConjecture(numberOfRepeats, totalAnimationTime) {
  // Select the target container
  const projectTitleContainerDiv = document.querySelector(".project-title-container div")

  // Create <p> element (sentence) with the class 'project-title'
  const projectTitle1 = document.createElement("p")
  const projectTitle2 = document.createElement("p")
  const projectTitle3 = document.createElement("p")
  projectTitle1.classList.add("project-title")
  projectTitle2.classList.add("project-title")
  projectTitle3.classList.add("project-title")

  // Create array to store project title variants
  const projectTitleVariants = [projectTitle1, projectTitle2, projectTitle3]

  /* ------------------------------------------- */
  /*            CREATE TITLE VARIANT 1           */
  /* ------------------------------------------- */
  const the1 = document.createElement("span")
  the1.classList.add("black-extended", "oblique")
  the1.textContent = "the"

  const lounge1 = document.createElement("span")
  lounge1.classList.add("bold-extended", "oblique")
  lounge1.textContent = "lounge"

  const conjecture1 = document.createElement("span")
  conjecture1.classList.add("regular-extended", "oblique")
  conjecture1.textContent = "conjecture"

  // Append the <span> elements to the <p> element
  projectTitle1.appendChild(the1)
  projectTitle1.appendChild(lounge1)
  projectTitle1.appendChild(conjecture1)

  /* ------------------------------------------- */
  /*            CREATE TITLE VARIANT 2           */
  /* ------------------------------------------- */
  const the2 = document.createElement("span")
  the2.classList.add("regular-extended", "oblique")
  the2.textContent = "the"

  const lounge2 = document.createElement("span")
  lounge2.classList.add("black-extended", "oblique")
  lounge2.textContent = "lounge"

  const conjecture2 = document.createElement("span")
  conjecture2.classList.add("bold-extended", "oblique")
  conjecture2.textContent = "conjecture"

  // Append the <span> elements to the <p> element
  projectTitle2.appendChild(the2)
  projectTitle2.appendChild(lounge2)
  projectTitle2.appendChild(conjecture2)

  /* ------------------------------------------- */
  /*            CREATE TITLE VARIANT 3           */
  /* ------------------------------------------- */
  const the3 = document.createElement("span")
  the3.classList.add("bold-extended", "oblique")
  the3.textContent = "the"

  const lounge3 = document.createElement("span")
  lounge3.classList.add("regular-extended", "oblique")
  lounge3.textContent = "lounge"

  const conjecture3 = document.createElement("span")
  conjecture3.classList.add("black-extended", "oblique")
  conjecture3.textContent = "conjecture"

  // Append the <span> elements to the <p> element
  projectTitle3.appendChild(the3)
  projectTitle3.appendChild(lounge3)
  projectTitle3.appendChild(conjecture3)

  // Calculate the total number of lines to be printed
  const totalNumberOfLines = numberOfRepeats * projectTitleVariants.length
  // Calculate the amount of time to print each line
  const animationDelay = totalAnimationTime / totalNumberOfLines

  // Start printing lines
  for (let i = 0; i < numberOfRepeats; i++) {
    // // Create a copy of all variants
    const newProjectTitleVariants = projectTitleVariants.map((variant) => variant.cloneNode(true))

    // Print all variants ONCE
    for (let j = 0; j < newProjectTitleVariants.length; j++) {
      const variant = newProjectTitleVariants[j]

      // Set the animation property for the line
      variant.style.animation = `typing ${animationDelay / 1000}s steps(22) forwards, blink 1s step-end infinite`

      // Append variant to DOM as new line
      projectTitleContainerDiv.appendChild(variant)

      // Wait for the animation to finish before printing the next line
      await delay(animationDelay)
    }

    //
    // await delay(animationDelay * projectTitleVariants.length)

    // // Create a copy of the first line
    // const newLine = projectTitle1.cloneNode(true)

    // // Set the animation property for the new line
    // newLine.style = `animation: typing ${animationDelay / 1000}s steps(22) forwards, blink 1s step-end infinite;`

    // // Add the new line to the DOM
    // projectTitleContainerDiv.appendChild(newLine)

    // // Wait for the animation to finish before printing the next line
    // await delay(animationDelay)
  }
}

document.addEventListener("DOMContentLoaded", function () {
  animateTheLoungeConjecture(4, 1000)
})

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
