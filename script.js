document.addEventListener("DOMContentLoaded", () => {
    const mobileMenuToggle = document.getElementById("mobileMenuToggle")
    const darkModeToggle = document.getElementById("darkModeToggle")
    const navMenu = document.querySelector("nav ul")
  
    // Mobile menu toggle
    mobileMenuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("show")
    })
  
    // Dark mode toggle
    darkModeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode")
      updateDarkModeIcon()
      localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"))
    })
  
    // Check for saved dark mode preference
    if (localStorage.getItem("darkMode") === "true") {
      document.body.classList.add("dark-mode")
      updateDarkModeIcon()
    }
  
    // Update dark mode icon
    function updateDarkModeIcon() {
      darkModeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙"
    }
  
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
        navMenu.classList.remove("show")
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        })
      })
    })
  
    // Form submission (you can replace this with your own logic)
    const form = document.querySelector("form")
    form.addEventListener("submit", (e) => {
      e.preventDefault()
      alert("Form submitted! (This is a placeholder - implement your own form submission logic)")
    })
  
    // Intersection Observer for fade-in effect
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in")
          }
        })
      },
      { threshold: 0.1 },
    )
  
    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section)
    })
  
    // Typing effect for hero text
    const heroText = document.querySelector(".hero h1")
    const text = heroText.textContent
    heroText.textContent = ""
    let i = 0
  
    function typeWriter() {
      if (i < text.length) {
        heroText.textContent += text.charAt(i)
        i++
        setTimeout(typeWriter, 100)
      }
    }
  
    setTimeout(typeWriter, 500)
  })
  
  