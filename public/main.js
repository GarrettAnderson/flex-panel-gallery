/* ==========================
      GARRETT ANSWER
   ========================== */

let panels = Array.from(document.querySelectorAll('.panel'))

console.log(panels)

panels.map(panel => {
  console.log(panel)

  panel.addEventListener('click', function(e) {
    console.log('panel clicked')
  })

})


// panel.addEventListener('click', (e) => {
//   console.log('clicked panel')
//   // console.log(this)
//   panel.classList.add('open')
//
// })
//
// function panelClicked() {
//   console.log('panel clicked')
// }























/* ==========================
      WES BOS ANSWER
   ========================== */



// const panels = document.querySelectorAll('.panel')
//
// function toggleOpen() {
//   this.classList.toggle('open')
// }
//
// function toggleActive(event) {
//   console.log(event.propertyName)
//   if (event.propertyName.includes('flex')) {
//     this.classList.toggle('open-active')
//   }
// }
//
// panels.forEach((panel) => panel.addEventListener('click', toggleOpen))
//
// panels.forEach((panel) => panel.addEventListener('transitionend', toggleActive))
