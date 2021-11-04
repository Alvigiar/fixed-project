import './main.scss'

document.addEventListener('DOMContentLoaded', () => {
  
  const btnOpenModalEntrance = document.querySelector('#open-entrance')
  const btnOpenModalRegister = document.querySelector('#open-register')

  btnOpenModalEntrance.addEventListener('click', () => {
    const modalEntrance = document.querySelector('#modal-entrance')
    const modalOpen = new Modal(modalEntrance)
    modalOpen.open()
  })
  
  btnOpenModalRegister.addEventListener('click', () => {
    const modalRegister = document.querySelector('#modal-register')
    const modalOpen = new Modal(modalRegister)
    modalOpen.open()
  })
})

class Modal {
  constructor(modalBox) {
    this.modal = modalBox
    this.btnClose = modalBox.querySelector('.modal-close')

    this.btnClose.addEventListener('click', () => {
      this.close()
    })
  }

  open() {
    this.modal.classList.add('modal--hide')
    setTimeout(() => {
      this.modal.classList.add('modal--show')
      this.modal.classList.remove('modal--hide')
    }, 0);
  }

  close() {
    this.modal.classList.add('modal--hide')
    this.modal.classList.remove('modal--show')
    setTimeout(() => {
      this.modal.classList.remove('modal--hide')
    }, 500);
  }
}