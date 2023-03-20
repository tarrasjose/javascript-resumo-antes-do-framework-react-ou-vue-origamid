class SmoothScroll {
  constructor(links) {
    this.linkElements = document.querySelectorAll(links);

    this.addClickEvent();
  }
  handleClick(event) {
    event.preventDefault();

    const href = event.currentTarget.getAttribute("href");
    console.log(href);
    const section = document.querySelector(href);
    console.log(section.offsetTop);
    console.log(window.innerHeight);
    console.log(section.clientHeight);

    window.scrollTo({
      top: section.offsetTop - (window.innerHeight - section.clientHeight) / 2,
      behavior: "smooth"
    })


    
  }
  addClickEvent() {
    this.linkElements.forEach(link => {
      link.addEventListener("click", this.handleClick);
    })
  }
}

class ActiveSmoothScroll extends SmoothScroll {
  constructor(links, sections) {
    super(links);
    this.sectionElements = document.querySelectorAll(sections);
    this.handleScroll = this.handleScroll.bind(this);
    this.handleScroll();
    this.activeNavScroll();
  }
  handleScroll() {
    this.sectionElements.forEach((section, index) => {
      if(window.pageYOffset > section.offsetTop - window.innerHeight * 0.5) {
        this.linkElements[index].classList.add("active");
      } else {
        this.linkElements[index].classList.remove("active");
      }
    })
  }
  activeNavScroll() {
    window.addEventListener("scroll", this.handleScroll);
  }
}

const scroll = new ActiveSmoothScroll("a[href^='#']", "section");