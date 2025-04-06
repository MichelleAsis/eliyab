document.addEventListener("DOMContentLoaded", () => {
  // Set current year in footer
  document.querySelectorAll("#currentYear").forEach((el) => {
    el.textContent = new Date().getFullYear()
  })

  // Mobile menu functionality
  const menuButton = document.getElementById("menuButton")
  const closeButton = document.getElementById("closeButton")
  const mobileMenu = document.getElementById("mobileMenu")

  if (menuButton && closeButton && mobileMenu) {
    menuButton.addEventListener("click", () => {
      mobileMenu.classList.add("active")
      document.body.style.overflow = "hidden"
    })

    closeButton.addEventListener("click", () => {
      mobileMenu.classList.remove("active")
      document.body.style.overflow = ""
    })
  }

  // Create ember particles
  const emberContainer = document.getElementById("emberContainer")
  if (emberContainer) {
    createEmbers(emberContainer)
  }
})

function createEmbers(container) {
  const emberCount = 20

  for (let i = 0; i < emberCount; i++) {
    const ember = document.createElement("div")
    ember.className = "ember"

    // Random position
    const left = Math.random() * 100
    const top = Math.random() * 100

    // Random animation duration and delay
    const duration = 3 + Math.random() * 7
    const delay = Math.random() * 5

    ember.style.left = `${left}%`
    ember.style.top = `${top}%`
    ember.style.animationDuration = `${duration}s`
    ember.style.animationDelay = `${delay}s`

    // Add animation classes
    ember.classList.add("animate-float")

    // Add flicker effect to some embers
    if (Math.random() > 0.5) {
      ember.classList.add("animate-flicker")
      ember.style.setProperty("--delay", Math.random() * 3)
    }

    container.appendChild(ember)
  }
}

