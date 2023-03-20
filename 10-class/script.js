class SmoothScroll {
  constructor(links) {
    this.linkElements = document.querySelectorAll(links);

    this.addClickEvent()
  }
  handleClick(event) {
    // console.log(event);
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    console.log(href);
    const section = document.querySelector(href);
    console.log(section);
    console.log(section.offsetTop);

    window.scrollTo({
      top: section.offsetTop - (window.innerHeight - section.clientHeight) / 2,
      behavior: "smooth" //Deixar suave
    });
  }
  addClickEvent() {
    this.linkElements.forEach(link => {
      link.addEventListener("click", this.handleClick)
    })
  }
}

class ActiveSmoothScroll extends SmoothScroll {
  constructor(links, sections) {
    super(links);

    this.sectionElements = document.querySelectorAll(sections);
    this.handleScroll = this.handleScroll.bind(this); // com isso o handleScroll vai ter um this forçado e esse this vai ter que ser sempre referente ao ActiveSmoothScroll
    console.log(this.sectionElements);
    this.handleScroll(); //ativação ao carregar página
    this.activeNavScroll(); //ativando
  }
  handleScroll() {
    // console.log("ativou");
    console.log(this);
    this.sectionElements.forEach((section, index) => {
      // console.log(section);
      if(window.pageYOffset > section.offsetTop - window.innerHeight * 0.5) {
        this.linkElements[index].classList.add("active");
      } else {
        this.linkElements[index].classList.remove("active");
      }
    });
  }
  activeNavScroll() {
    window.addEventListener("scroll", this.handleScroll)
  }
}

// const scroll = new SmoothScroll("a[href^='#']")
const scroll = new ActiveSmoothScroll("a[href^='#']", "section");
// scroll.addClickEvent()

console.log(scroll);
console.log(scroll.linkElements);