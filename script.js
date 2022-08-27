/////SELECT ELEMENTS ///////

const body = document.querySelector("body");
const navLinks = document.querySelectorAll(".nav-link");
const mainMain = document.querySelectorAll(".about-me-content");
const main = document.querySelector(".main-content");
const initialCoords = main.getBoundingClientRect();
const header = document.querySelector("#home");

const header2 = document.querySelector("header");
const toggleDay = document.querySelectorAll(".theme");
const moonIcon = document.querySelector(".fa-moon");
const sunIcon = document.querySelector(".fa-sun");
const allFilterBtns = document.querySelectorAll(".filter");
const projectsContainer = document.querySelector(".project-img");

const root = document.querySelector(":root");

//NAV BAR

const menuIcon = document.querySelector(".menu-icon");

const menuLinks = document.querySelector(".nav-links");

const navLink = document.querySelector("li");
// const body1 = document.querySelector(".body");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("active");
  menuLinks.classList.toggle("active");
  // header.classList.add("header-sticky");
  header.classList.toggle("header-background");
  navLink.classList.toggle("active");

  // if(menuLinks.style.background = 'blue'){
  //   console.log('done');
  // }
});

menuLinks.addEventListener("click", () => {
  menuLinks.classList.remove("active");
});

// console.log(header2.getBoundingClientRect().height);
// console.log(initialCoords);
// const navHeight = header2.getBoundingClientRect().height;
// console.log(scrollIntoView);

// console.log(navHeight);
///SCROLL////////
navLinks.forEach((navLink) => {
  navLink.addEventListener("click", (e) => {
    const id = navLink.getAttribute("href");
    //prevent default
    e.preventDefault();
    // console.log(id);

    const idSelect = document.querySelector(id);
    ///select values/////
    const headerOffset = header2.getBoundingClientRect().height;
    idSelectPosition = idSelect.getBoundingClientRect().top;
    const offsetPosition = idSelectPosition + window.pageYOffset - headerOffset;

    ////Scroll effect///////
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  });
});

//DARK MODE

toggleDay.forEach((btn) => {
  btn.addEventListener("click", () => {
    // console.log('Day');

    body.classList.toggle("light-theme");
    if (body.classList.contains("light-theme")) {
      console.log("back to day");
      moonIcon.classList.add("hidden");
      sunIcon.classList.remove("hidden");
    } else {
      moonIcon.classList.remove("hidden");
      sunIcon.classList.add("hidden");
      console.log("back to night");

    }
  });
});

window.addEventListener("scroll", function (e) {
  // initialCoords.top
  let height = 5;
  if (window.scrollY > height) {
    header.classList.add("header-sticky");
  } else header.classList.remove("header-sticky");
});



////MOVVING TEXT ANIMATION


const text = document.querySelector(".sec-text");
// console.log(header.getBoundingClientRect());
// console.log(main.getBoundingClientRect());

const textLoad = ()=>{
  setTimeout(()=>{
    text.textContent = "Web Developer"
  }, 0)
  setTimeout(()=>{
    text.textContent = "Programmer"
  }, 4000)
  setTimeout(()=>{
    text.textContent = "Freelancer"
  }, 8000)
}

textLoad()
setInterval(textLoad,12000)


//FILTER PROJECTS
// prevent prettier
const projects = [
  {
    category: "web-design",
    image: "bank-app.png",
    href: "https://gbengashowunmi.github.io/my-banking-app/",
    price: "50",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quia architecto ipsa quis provident iste quibusdam consequuntur in quae Lorem ipsum dolor sit.",
  },
  {
    category: "web-design",
    image: "filter-project.png",
    href: "https://gbengashowunmi.github.io/menu-filter/",
    price: "50",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quia architecto ipsa quis provident iste quibusdam consequuntur in quae Lorem ipsum dolor sit.",
  },
  {
    category: "data-visuals",
    image: "landing-page.png",
    href: "https://gbengashowunmi.github.io/landingpage/",
    price: "50",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quia architecto ipsa quis provident iste quibusdam consequuntur in quae Lorem ipsum dolor sit.",
  },
  {
    category: "data-visuals",
    image: "tribute-page.png",
    href: "https://gbengashowunmi.github.io/tribute-page.io/",
    price: "50",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quia architecto ipsa quis provident iste quibusdam consequuntur in quae Lorem ipsum dolor sit.",
  },
  {
    category: "clone",
    image: "bank-app.png",
    href: "https://gbengashowunmi.github.io/my-banking-app/",
    price: "50",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quia architecto ipsa quis provident iste quibusdam consequuntur in quae Lorem ipsum dolor sit.",
  },
  {
    category: "clone",
    image: "bank-app.png",
    href: "https://gbengashowunmi.github.io/my-banking-app/",
    price: "50",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quia architecto ipsa quis provident iste quibusdam consequuntur in quae Lorem ipsum dolor sit.",
  },
];

const displayProjects = function (projectsArray) {
  // console.log(projectsArray);
  let displayProjectsItems = projectsArray.map((project) => {
    return `<div class="project-img-container">
    <img src=${project.image} alt=${project.category} class="image" />
    <div class="overlay-project-image ">
      <a class="open--project--link" href=${project.href}
        ><p class="open-project">Open Project</p></a
      >
    </div>
    </div>`;
  });

  displayProjectsItems= displayProjectsItems.join(' ')
  projectsContainer.innerHTML = displayProjectsItems;
  return displayProjectsItems
};


displayProjects(projects)

allFilterBtns.forEach((filterBtn) => {
  filterBtn.addEventListener("click", (e) => {
    const btn = e.currentTarget.classList[1];
    // const btnn = e.currentTarget.dataset.me;

    
   const filtered = projects.filter((filterProjetcs) => {
      if (btn === filterProjetcs.category)
      // filterBtn.classList.add('active')

      return filterProjetcs
    });

      btn === 'all'?displayProjects(projects):
        displayProjects(filtered)    

// console.log(filtered)


  });
});


window.addEventListener('DOMContentLoaded', ()=>{
displayProjects(projects)
})

