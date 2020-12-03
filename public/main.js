/* ==========================
      GARRETT ANSWER
   ========================== */

let panels = Array.from(document.querySelectorAll('.panel'))

console.log(panels)

// panels.map((panel, i) => {
//   console.log(panel)
//   console.log(i)
//   console.log(panels[i])
//
//   panel.addEventListener('click', function(e) {
//     console.log('panel clicked')
//     console.log(this)

    // if (this.className.contains('open')) {
    //   console.log('working')
    // } else {
    //   console.log('else statement triggered')
    // }
    // this.classList.toggle('open')
//
//   })
// })

  for (i = 0; i < panels.length; i++) {

    console.log(panels[i])
    panels[i].classList.remove('open')
    // if (panels[i].classList.contains('open')) {
    //   panels[i].classList.add('open')
    // }

    panels[i].addEventListener('click', function(e) {

    // panels[i].addEventListener('transitioned', function(){
    //             console.log(this)
    //             this.classList.remove('open')
    // })

    panels.forEach((option, i) => {
        console.log('forEach loop')
        console.log(option)
        console.log(i)

        let data = this.getAttribute('data-item')
        console.log(data)

        if (i !== data) {
          console.log('add open styles')
          this.classList.toggle('open')
          this.classList.toggle('open-active')
        } else if (i !== data && option.classList.contains('open')) {
          console.log('remove open styles')
        }
        // function transition(e){
        //     console.log(e)
        //     // this.classList.toggle('open')
        // }
        //
        // option.addEventListener('transitioned', transition)
      })

      console.log(i)
      console.log(this)
      console.log(e)

      // let current = (i)
      // console.log(current - 1)
      //
      // if ( (current - 1) == data) {
      //     console.log('horray')
      //     this.classList.add('open')
      //     this.classList.add('open-active')
      //   }
      // } else if (current !== data) {
      //   console.log('shucks')
      //   this.classList.remove('open')
      //   this.classList.remove('open-active')
      // }
      // let cn = this
      // console.log(this.classList.contains('open'))
      // console.log(this.classList.contains('open-active'))

      // if (!this.classList.contains('open')) {
      //     console.log('horray')
      //     this.classList.toggle('open')
      //     this.classList.toggle('open-active')
      //   } else {
      //     console.log('shucks')
      //     this.classList.toggle('open')
      //     this.classList.toggle('open-active')
      //   }
    })
  }





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
