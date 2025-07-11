function BreakText() {
  var h1 = document.querySelector('h1')
  var texth1 = h1.textContent
  var SplitText = texth1.split('')
  var clutter = ''

  SplitText.forEach(function (item) {
    clutter += `<span>${item}</span>`
  })

  h1.innerHTML = clutter
}

BreakText()

gsap.from('h1 span', {
  y: 100,
  duration: 0.5,
  delay: 1,
  stagger: 0.15,
  opacity: 0,
})
