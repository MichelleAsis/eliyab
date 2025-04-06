document.addEventListener("DOMContentLoaded", () => {
  // Quiz data
  const quizQuestions = [
    {
      id: 1,
      term: "Apoy",
      definition: "Ang ningas o sunog na ginagamit sa pagpapasimula ng proseso ng pag-uuling.",
      audioUrl: "/audio/apoy.mp3",
      options: [
        { id: "A", image: "/placeholder.svg?height=150&width=150", alt: "Usok", isCorrect: false },
        { id: "B", image: "/placeholder.svg?height=150&width=150", alt: "Uling", isCorrect: false },
        { id: "C", image: "/placeholder.svg?height=150&width=150", alt: "Apoy - Ningas o sunog", isCorrect: true },
        { id: "D", image: "/placeholder.svg?height=150&width=150", alt: "Abo", isCorrect: false },
      ],
      letter: "A",
    },
    {
      id: 2,
      term: "Bao",
      definition: "Ang matigas na balat ng niyog na ginagamit sa paggawa ng uling.",
      audioUrl: "/audio/bao.mp3",
      options: [
        {
          id: "A",
          image: "/placeholder.svg?height=150&width=150",
          alt: "Bao - Matigas na balat ng niyog",
          isCorrect: true,
        },
        { id: "B", image: "/placeholder.svg?height=150&width=150", alt: "Niyog - Buong prutas", isCorrect: false },
        { id: "C", image: "/placeholder.svg?height=150&width=150", alt: "Puno ng niyog", isCorrect: false },
        { id: "D", image: "/placeholder.svg?height=150&width=150", alt: "Dahon ng niyog", isCorrect: false },
      ],
      letter: "B",
    },
    {
      id: 3,
      term: "Calero",
      definition: "Tawag sa manggagawa ng uling mula sa bao.",
      audioUrl: "/audio/calero.mp3",
      options: [
        { id: "A", image: "/placeholder.svg?height=150&width=150", alt: "Magsasaka", isCorrect: false },
        {
          id: "B",
          image: "/placeholder.svg?height=150&width=150",
          alt: "Calero - Manggagawa ng uling",
          isCorrect: true,
        },
        { id: "C", image: "/placeholder.svg?height=150&width=150", alt: "Mangingisda", isCorrect: false },
        { id: "D", image: "/placeholder.svg?height=150&width=150", alt: "Karpintero", isCorrect: false },
      ],
      letter: "C",
    },
    // Add more questions as needed
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

  // Initialize quiz
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
})

