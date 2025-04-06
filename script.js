document.addEventListener("DOMContentLoaded", () => {
  // Set current year in footer
  document.getElementById("currentYear").textContent = new Date().getFullYear()

  // Mobile menu functionality
  const menuButton = document.getElementById("menuButton")
  const closeButton = document.getElementById("closeButton")
  const mobileMenu = document.getElementById("mobileMenu")

  menuButton.addEventListener("click", () => {
    mobileMenu.classList.add("active")
    document.body.style.overflow = "hidden"
  })

  closeButton.addEventListener("click", () => {
    mobileMenu.classList.remove("active")
    document.body.style.overflow = ""
  })

  // Navigation functionality
  const sections = document.querySelectorAll(".section")
  const navLinks = document.querySelectorAll(".nav-link, .mobile-nav-link, .footer-link, .feature-button, .learn-more")

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()

      const targetSection = this.getAttribute("data-section")

      // Hide all sections
      sections.forEach((section) => {
        section.classList.remove("active")
      })

      // Show target section
      document.getElementById(targetSection).classList.add("active")

      // Update active nav links
      document.querySelectorAll(".nav-link, .mobile-nav-link").forEach((navLink) => {
        if (navLink.getAttribute("data-section") === targetSection) {
          navLink.classList.add("active")
        } else {
          navLink.classList.remove("active")
        }
      })

      // Close mobile menu if open
      mobileMenu.classList.remove("active")
      document.body.style.overflow = ""

      // Scroll to top
      window.scrollTo(0, 0)
    })
  })

  // Create ember particles for each section
  const emberContainers = document.querySelectorAll(".ember-container")
  emberContainers.forEach((container) => {
    createEmbers(container)
  })

  // Dictionary functionality
  initDictionary()

  // Quiz functionality
  initQuiz()
})

// Create ember particles
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

// Dictionary functionality
function initDictionary() {
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
    // Add more terms as needed
  ]

  const searchInput = document.getElementById("searchInput")
  const dictionaryAccordion = document.getElementById("dictionaryAccordion")
  const dictionaryAllWordsView = document.getElementById("dictionaryAllWordsView")
  const simpleViewBtn = document.getElementById("simpleViewBtn")
  const allWordsBtn = document.getElementById("allWordsBtn")
  const dictionarySimpleView = document.getElementById("dictionarySimpleView")

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
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="volume-icon">
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
}

// Quiz functionality
function initQuiz() {
  // Quiz data
  const quizQuestions = [
    {
      id: 1,
      term: "Apoy",
      definition: "Ang ningas o sunog na ginagamit sa pagpapasimula ng proseso ng pag-uuling.",
      audioUrl: "/audio/apoy.mp3",
      options: [
        { id: "A", image: "images/quiz/apoy_1.jpg", alt: "Usok", isCorrect: false },
        { id: "B", image: "images/quiz/apoy_2.jpg", alt: "Uling", isCorrect: false },
        { id: "C", image: "images/quiz/apoy_3.jpg", alt: "Apoy - Ningas o sunog", isCorrect: true },
        { id: "D", image: "images/quiz/apoy_4.jpg", alt: "Abo", isCorrect: false },
      ],
      letter: "A",
    },
    {
      id: 2,
      term: "Bao",
      definition: "Ang matigas na balat ng niyog na ginagamit sa paggawa ng uling.",
      audioUrl: "/audio/bao.mp3",
      options: [
        { id: "A", image: "images/quiz/bao_1.jpg", alt: "Bao - Matigas na balat ng niyog", isCorrect: true },
        { id: "B", image: "images/quiz/bao_2.jpg", alt: "Niyog - Buong prutas", isCorrect: false },
        { id: "C", image: "images/quiz/bao_3.jpg", alt: "Puno ng niyog", isCorrect: false },
        { id: "D", image: "images/quiz/bao_4.jpg", alt: "Dahon ng niyog", isCorrect: false },
      ],
      letter: "B",
    },
    // Add more questions with unique images for each option
    // Each question should have 4 options with different images
  ]

  // DOM elements
  const quizContainer = document.getElementById("quizContainer")
  const quizResults = document.getElementById("quizResults")
  const currentQuestionEl = document.getElementById("currentQuestion")
  const totalQuestionsEl = document.getElementById("totalQuestions")
  const currentLetterEl = document.getElementById("currentLetter")
  const currentScoreEl = document.getElementById("currentScore")
  const progressBarEl = document.getElementById("progressBar")
  const quizTermEl = document.getElementById("quizTerm")
  const quizDefinitionEl = document.getElementById("quizDefinition")
  const quizOptionsEl = document.getElementById("quizOptions")
  const submitButton = document.getElementById("submitButton")
  const nextButton = document.getElementById("nextButton")
  const audioButton = document.getElementById("audioButton")
  const finalScoreEl = document.getElementById("finalScore")
  const maxScoreEl = document.getElementById("maxScore")
  const resultsProgressBarEl = document.getElementById("resultsProgressBar")
  const restartButton = document.getElementById("restartButton")

  // Quiz state
  let currentQuestionIndex = 0
  let selectedOption = null
  let isAnswerSubmitted = false
  let score = 0

  // Initialize quiz if elements exist
  if (quizContainer) {
    // Set total questions
    if (totalQuestionsEl) {
      totalQuestionsEl.textContent = quizQuestions.length
    }

    if (maxScoreEl) {
      maxScoreEl.textContent = quizQuestions.length
    }

    // Load first question
    loadQuestion(currentQuestionIndex)

    // Set up event listeners
    if (submitButton) {
      submitButton.addEventListener("click", handleSubmitAnswer)
    }

    if (nextButton) {
      nextButton.addEventListener("click", handleNextQuestion)
    }

    if (audioButton) {
      audioButton.addEventListener("click", () => {
        playAudio(quizQuestions[currentQuestionIndex].term)
      })
    }

    if (restartButton) {
      restartButton.addEventListener("click", restartQuiz)
    }
  }

  // Function to load a question
  function loadQuestion(index) {
    const question = quizQuestions[index]

    // Update question info
    if (currentQuestionEl) {
      currentQuestionEl.textContent = index + 1
    }

    if (currentLetterEl) {
      currentLetterEl.textContent = question.letter
    }

    // Update progress bar
    if (progressBarEl) {
      const progress = ((index + 1) / quizQuestions.length) * 100
      progressBarEl.style.width = `${progress}%`
    }

    // Update question content
    if (quizTermEl) {
      quizTermEl.textContent = question.term
    }

    if (quizDefinitionEl) {
      quizDefinitionEl.textContent = question.definition
    }

    // Generate options
    if (quizOptionsEl) {
      quizOptionsEl.innerHTML = ""

      question.options.forEach((option) => {
        const optionEl = document.createElement("div")
        optionEl.className = "quiz-option"
        optionEl.dataset.id = option.id

        optionEl.innerHTML = `
          <div class="option-image">
            <img src="${option.image}" alt="${option.alt}">
            <div class="option-label">
              <span class="option-label-text">${option.id}</span>
            </div>
          </div>
        `

        optionEl.addEventListener("click", () => {
          if (!isAnswerSubmitted) {
            selectOption(option.id)
          }
        })

        quizOptionsEl.appendChild(optionEl)
      })
    }

    // Reset state
    selectedOption = null
    isAnswerSubmitted = false

    // Update buttons
    if (submitButton && nextButton) {
      submitButton.disabled = true
      submitButton.classList.remove("hidden")
      nextButton.classList.add("hidden")
    }
  }

  // Function to select an option
  function selectOption(optionId) {
    selectedOption = optionId

    // Update UI
    document.querySelectorAll(".quiz-option").forEach((option) => {
      if (option.dataset.id === optionId) {
        option.classList.add("selected")
      } else {
        option.classList.remove("selected")
      }
    })

    // Enable submit button
    if (submitButton) {
      submitButton.disabled = false
    }
  }

  // Function to handle submit answer
  function handleSubmitAnswer() {
    if (selectedOption) {
      isAnswerSubmitted = true

      const question = quizQuestions[currentQuestionIndex]
      const selectedOptionObj = question.options.find((option) => option.id === selectedOption)

      // Update score
      if (selectedOptionObj && selectedOptionObj.isCorrect) {
        score++
        if (currentScoreEl) {
          currentScoreEl.textContent = score
        }
      }

      // Update UI
      document.querySelectorAll(".quiz-option").forEach((option) => {
        const optionId = option.dataset.id
        const optionObj = question.options.find((opt) => opt.id === optionId)

        if (optionObj.isCorrect) {
          option.classList.add("correct")

          // Add correct indicator
          const indicator = document.createElement("div")
          indicator.className = "option-indicator correct"
          indicator.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          `
          option.appendChild(indicator)
        } else if (optionId === selectedOption) {
          option.classList.add("incorrect")

          // Add incorrect indicator
          const indicator = document.createElement("div")
          indicator.className = "option-indicator incorrect"
          indicator.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="15" y1="9" x2="9" y2="15"></line>
              <line x1="9" y1="9" x2="15" y2="15"></line>
            </svg>
          `
          option.appendChild(indicator)
        }
      })

      // Update buttons
      if (submitButton && nextButton) {
        submitButton.classList.add("hidden")
        nextButton.classList.remove("hidden")

        // Update next button text for last question
        if (currentQuestionIndex === quizQuestions.length - 1) {
          nextButton.innerHTML = `
            Tingnan ang Resulta
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="arrow-icon">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          `
        }
      }
    }
  }

  // Function to handle next question
  function handleNextQuestion() {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      currentQuestionIndex++
      loadQuestion(currentQuestionIndex)
    } else {
      showResults()
    }
  }

  // Function to show results
  function showResults() {
    if (quizContainer && quizResults) {
      quizContainer.querySelector(".quiz-card").classList.add("hidden")
      quizContainer.querySelector(".quiz-progress-container").classList.add("hidden")
      quizResults.classList.remove("hidden")

      // Update final score
      if (finalScoreEl) {
        finalScoreEl.textContent = score
      }

      // Update progress bar
      if (resultsProgressBarEl) {
        const progress = (score / quizQuestions.length) * 100
        resultsProgressBarEl.style.width = `${progress}%`
      }
    }
  }

  // Function to restart quiz
  function restartQuiz() {
    currentQuestionIndex = 0
    selectedOption = null
    isAnswerSubmitted = false
    score = 0

    if (currentScoreEl) {
      currentScoreEl.textContent = score
    }

    if (quizContainer && quizResults) {
      quizContainer.querySelector(".quiz-card").classList.remove("hidden")
      quizContainer.querySelector(".quiz-progress-container").classList.remove("hidden")
      quizResults.classList.add("hidden")
    }

    loadQuestion(currentQuestionIndex)
  }

  // Function to play audio
  function playAudio(termId) {
    // In a real implementation, this would play the actual audio file
    console.log(`Playing audio for: ${termId}`)

    // Add playing class for animation
    audioButton.classList.add("playing")

    // Simulate audio playing for 2 seconds
    setTimeout(() => {
      audioButton.classList.remove("playing")
    }, 2000)
  }
}

