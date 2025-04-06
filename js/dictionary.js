document.addEventListener("DOMContentLoaded", () => {
  // Dictionary data
  const dictionaryTerms = [
    {
      id: "apoy",
      term: "Apoy",
      definition: "Ang ningas o sunog na ginagamit sa pagpapasimula ng proseso ng pag-uuling.",
      example: "Sinisindihan ang apoy sa pinakaloob na bahagi ng lutuan.",
      audioUrl: "/audio/apoy.mp3",
      letter: "A",
      isFireRelated: true,
    },
    {
      id: "bao",
      term: "Bao",
      definition: "Ang matigas na balat ng niyog na ginagamit sa paggawa ng uling.",
      example: "Ang bao ay kailangang tuyo bago gamitin sa paggawa ng uling.",
      audioUrl: "/audio/bao.mp3",
      letter: "B",
      isFireRelated: false,
    },
    {
      id: "calero",
      term: "Calero",
      definition: "Tawag sa manggagawa ng uling mula sa bao.",
      example: "Ang mga calero ay may masusing kaalaman sa proseso ng pag-uuling.",
      audioUrl: "/audio/calero.mp3",
      letter: "C",
      isFireRelated: false,
    },
    {
      id: "dahon",
      term: "Dahon ng Saging",
      definition: "Ginagamit sa pagtakip ng lutuan kasama ng katawan ng saging.",
      example: "Ang dahon ng saging ay tumutulong sa pagkontrol ng hangin sa lutuan.",
      audioUrl: "/audio/dahon.mp3",
      letter: "D",
      isFireRelated: false,
    },
    {
      id: "embudo",
      term: "Embudo",
      definition: "Hugis ng pagkakasalansan ng mga bao sa lutuan.",
      example: "Ang embudo na pagkakasalansan ay nakakatulong sa mas mahusay na pagkasunog.",
      audioUrl: "/audio/embudo.mp3",
      letter: "E",
      isFireRelated: false,
    },
    {
      id: "fuego",
      term: "Fuego",
      definition: "Ang lakas ng apoy na ginagamit sa proseso ng pag-uuling.",
      example: "Kailangang kontrolin ang fuego para sa tamang pagkasunog.",
      audioUrl: "/audio/fuego.mp3",
      letter: "F",
      isFireRelated: true,
    },
    // Add more terms as needed
  ]

  // DOM elements
  const searchInput = document.getElementById("searchInput")
  const dictionaryAccordion = document.getElementById("dictionaryAccordion")
  const dictionarySimpleView = document.getElementById("dictionarySimpleView")
  const dictionaryAllWordsView = document.getElementById("dictionaryAllWordsView")
  const simpleViewBtn = document.getElementById("simpleViewBtn")
  const allWordsBtn = document.getElementById("allWordsBtn")

  // Initialize dictionary
  if (dictionaryAccordion && dictionaryAllWordsView) {
    // Populate accordion view
    populateAccordionView(dictionaryTerms)

    // Populate A-Z view
    populateAllWordsView(dictionaryTerms)

    // Set up search functionality
    if (searchInput) {
      searchInput.addEventListener("input", function () {
        const searchTerm = this.value.toLowerCase()
        filterDictionary(searchTerm)
      })
    }

    // Set up view toggle
    if (simpleViewBtn && allWordsBtn) {
      simpleViewBtn.addEventListener("click", () => {
        dictionarySimpleView.classList.remove("hidden")
        dictionaryAllWordsView.classList.add("hidden")
        simpleViewBtn.classList.add("active")
        allWordsBtn.classList.remove("active")
      })

      allWordsBtn.addEventListener("click", () => {
        dictionarySimpleView.classList.add("hidden")
        dictionaryAllWordsView.classList.remove("hidden")
        simpleViewBtn.classList.remove("active")
        allWordsBtn.classList.add("active")
      })
    }
  }

  // Function to populate accordion view
  function populateAccordionView(terms) {
    dictionaryAccordion.innerHTML = ""

    terms.forEach((term) => {
      const accordionItem = document.createElement("div")
      accordionItem.className = "accordion-item"
      accordionItem.dataset.id = term.id

      const header = document.createElement("div")
      header.className = "accordion-header"
      header.innerHTML = `
        <div class="accordion-header-content">
          ${
            term.isFireRelated
              ? `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="accordion-icon animate-flicker">
              <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
            </svg>
          `
              : ""
          }
          <span>${term.term}</span>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="chevron-icon">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      `

      const content = document.createElement("div")
      content.className = "accordion-content"
      content.innerHTML = `
        <div class="accordion-definition">
          <p class="definition-text">${term.definition}</p>
          <button class="audio-button" data-id="${term.id}">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke  width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="volume-icon">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
            </svg>
          </button>
        </div>
        <p class="example-text">"${term.example}"</p>
      `

      accordionItem.appendChild(header)
      accordionItem.appendChild(content)
      dictionaryAccordion.appendChild(accordionItem)

      // Add event listener to toggle accordion
      header.addEventListener("click", () => {
        const isActive = content.classList.contains("active")

        // Close all other accordion items
        document.querySelectorAll(".accordion-content.active").forEach((item) => {
          if (item !== content) {
            item.classList.remove("active")
            item.style.maxHeight = "0"
          }
        })

        // Toggle current accordion item
        if (isActive) {
          content.classList.remove("active")
          content.style.maxHeight = "0"
        } else {
          content.classList.add("active")
          content.style.maxHeight = content.scrollHeight + "px"
        }
      })
    })

    // Add event listeners for audio buttons
    document.querySelectorAll(".audio-button").forEach((button) => {
      button.addEventListener("click", function (e) {
        e.stopPropagation()
        const termId = this.dataset.id
        playAudio(termId, this)
      })
    })
  }

  // Function to populate A-Z view
  function populateAllWordsView(terms) {
    dictionaryAllWordsView.innerHTML = ""

    // Group terms by letter
    const groupedTerms = {}
    for (let i = 65; i <= 90; i++) {
      const letter = String.fromCharCode(i)
      groupedTerms[letter] = []
    }

    terms.forEach((term) => {
      const letter = term.letter || term.term.charAt(0).toUpperCase()
      if (groupedTerms[letter]) {
        groupedTerms[letter].push(term)
      }
    })

    // Create sections for each letter
    Object.entries(groupedTerms).forEach(([letter, terms]) => {
      if (terms.length > 0) {
        const letterSection = document.createElement("div")
        letterSection.className = "letter-section"

        const letterHeader = document.createElement("div")
        letterHeader.className = "letter-header"
        letterHeader.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="sort-icon">
            <path d="m3 16 4 4 4-4"></path>
            <path d="M7 20V4"></path>
            <path d="M11 4h10"></path>
            <path d="M11 8h7"></path>
            <path d="M11 12h4"></path>
          </svg>
          <h3 class="letter-title">${letter}</h3>
        `

        const termsContainer = document.createElement("div")
        termsContainer.className = "terms-container"

        terms.forEach((term) => {
          const termCard = document.createElement("div")
          termCard.className = "term-card"
          termCard.dataset.id = term.id

          termCard.innerHTML = `
            <div class="term-header">
              <h4 class="term-title">
                ${
                  term.isFireRelated
                    ? `
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="term-flame-icon animate-flicker">
                    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
                  </svg>
                `
                    : ""
                }
                ${term.term}
              </h4>
              <button class="audio-button" data-id="${term.id}">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="volume-icon">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                  <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
                </svg>
              </button>
            </div>
            <p class="term-definition">${term.definition}</p>
            <p class="example-text">"${term.example}"</p>
          `

          termsContainer.appendChild(termCard)
        })

        letterSection.appendChild(letterHeader)
        letterSection.appendChild(termsContainer)
        dictionaryAllWordsView.appendChild(letterSection)
      }
    })

    // Add event listeners for audio buttons
    document.querySelectorAll(".audio-button").forEach((button) => {
      button.addEventListener("click", function (e) {
        e.stopPropagation()
        const termId = this.dataset.id
        playAudio(termId, this)
      })
    })
  }

  // Function to filter dictionary based on search term
  function filterDictionary(searchTerm) {
    const filteredTerms = dictionaryTerms.filter(
      (term) => term.term.toLowerCase().includes(searchTerm) || term.definition.toLowerCase().includes(searchTerm),
    )

    // Update both views
    populateAccordionView(filteredTerms)
    populateAllWordsView(filteredTerms)
  }

  // Function to play audio
  function playAudio(termId, button) {
    // In a real implementation, this would play the actual audio file
    console.log(`Playing audio for: ${termId}`)

    // Add playing class for animation
    button.classList.add("playing")

    // Simulate audio playing for 2 seconds
    setTimeout(() => {
      button.classList.remove("playing")
    }, 2000)
  }
})

