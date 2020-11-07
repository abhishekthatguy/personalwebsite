class Typewriter {
  constructor(txtElm, words, delay = 1000) {
    this.txtElm = txtElm;
    this.words = words;
    this.txt = "..";
    this.wordIndex = 0;
    this.delay = parseInt(delay, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    const current = this.wordIndex % this.words.length;

    const fullTxt = this.words[current];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.txtElm.innerHTML = `<span class="txt">${this.txt}</span>`;

    let typeSpeed = 150;

    if (this.isDeleting) {
      typeSpeed /= 6;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      typeSpeed = this.delay;

      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;

      this.wordIndex += 1;

      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

document.addEventListener("DOMContentLoaded", init);

function init() {
  const txtElm = document.querySelector(".txt-type"),
    words = JSON.parse(txtElm.getAttribute("data-words")),
    delay = txtElm.getAttribute("data-delay");

  new Typewriter(txtElm, words, delay);
}