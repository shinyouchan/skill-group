export class Keyboard {
    #switchEl
    #fontSelectEl
    #containerEl
    #keyboardEl
    #inputGroupEl
    #inputEl
    constructor() {
        this.#assignElement()
        this.#addEvent()
    }
    #assignElement() {
        this.#containerEl = document.getElementById('container')
        this.#switchEl = this.#containerEl.querySelector('#switch')
        this.#fontSelectEl = this.#containerEl.querySelector('#font')
        this.#keyboardEl = this.#containerEl.querySelector('#keyboard')
        this.#inputGroupEl = this.#containerEl.querySelector('#input-group')
        this.#inputEl = this.#containerEl.querySelector('#input')
    }
    #addEvent() {
        this.#switchEl.addEventListener('change', (e) => {
            document.documentElement.setAttribute(
                'theme',
                e.target.checked ? 'dark-mode' : ''
            )
        })
        this.#fontSelectEl.addEventListener('change', (e) => {
            document.body.style.fontFamily = e.target.value
        })
        document.addEventListener('keydown', (e) => {
            this.#keyboardEl.querySelector(`[data-code=${e.code}]`)?.classList.add('active')
            this.#inputGroupEl.classList.toggle (
                'error', 
                e.key==='Process'
            )

        })
        document.addEventListener('keyup', (e) => {
            this.#keyboardEl.querySelector(`[data-code=${e.code}]`)?.classList.remove('active')
        })
        this.#inputEl.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[ㄱ-ㅎ| ㅏ-ㅣ | 가-힣]/ , '')
        })
        this.#keyboardEl.addEventListener('mousedown' , (e) => {
            e.target.closest('div.key')?.classList.add('active')

        })
        document.addEventListener('mouseup', (e) => {
            this.#keyboardEl.querySelector('.active')?.classList.remove('active')
        })
        
    }
}