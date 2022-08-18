
/////SELECT ELEMENTS ///////

const body = document.querySelector("body");
const navLinks = document.querySelectorAll(".nav-link");
const mainMain = document.querySelectorAll(".about-me-content");
const main = document.querySelector(".main-content");
const initialCoords = main.getBoundingClientRect();
const header = document.querySelector("#home");

const header2 = document.querySelector('header');
const toggleDay = document.querySelectorAll('.theme');
const moonIcon = document.querySelector('.fa-moon');
const sunIcon = document.querySelector('.fa-sun');
const root = document.querySelector(':root')




//NAV BAR

const menuIcon = document.querySelector(".menu-icon");

const menuLinks = document.querySelector(".nav-links");

const navLink = document.querySelector('li')
// const body1 = document.querySelector(".body");

menuIcon.addEventListener("click", ()=> {
    menuIcon.classList.toggle("active");
    menuLinks.classList.toggle("active");
    // header.classList.add("header-sticky");
    header.classList.toggle('header-background');
    navLink.classList.toggle('active')
    
    // if(menuLinks.style.background = 'blue'){
    //   console.log('done');
    // }
    
})

menuLinks.addEventListener("click", ()=> {
  menuLinks.classList.remove("active")

})

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
      top:offsetPosition,
       behavior: "smooth"
  });
  });
});

//DARK MODE

toggleDay.forEach((btn)=>{

  btn.addEventListener('click', ()=>{
    // console.log('Day');
  
      body.classList.toggle('light-theme');
      if(body.classList.contains('light-theme')){
        console.log('back to dark');
        moonIcon.classList.add('hidden')
        sunIcon.classList.remove('hidden')
      }
    
      else{
        
        moonIcon.classList.remove('hidden')
        sunIcon.classList.add('hidden')
      }
      
    
  })
})

window.addEventListener("scroll", function (e) {
  if (window.scrollY > initialCoords.top) {
    header.classList.add("header-sticky");
  } else header.classList.remove("header-sticky");
});




//FILTER PROJECTS

const frame = [
  {
      category : 'web design',
      image: "20210914_172354.jpg",
      title : 'Bread',
      price : '50',
      details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quia architecto ipsa quis provident iste quibusdam consequuntur in quae Lorem ipsum dolor sit.' 
  },
  {
      category : 'web design',
      image: "20210918_200420.jpg",
      title : 'Beans',
      price : '53',
      details: ' Commodi labore repellat excepturi earum sequi molestias repudiandae non odio ea quisquam ab voluptates dicta debitis quo, tempora totam nam magni.' 
  },
  {
      category : 'data visualization',
      image: "20211116_120211.jpg",
      title : 'Amala',
      price : '65',
      details: 'Autem assumenda eaque sit voluptatem consectetur dolorum et. Ducimus quam quos vero ipsum illum dicta in veniam quod voluptate recusandae aut assumenda voluptatibus.' 
  },
  {
      category : 'data visualization',
      image: "20211126_234427.jpg",
      title : 'yam',
      price : '48',
      details: 'quo repudiandae. Inventore, neque tenetur sit nesciunt consequuntur, optio illum fuga modi eligendi non corporis dolor explicabo animi. Dolorum unde alias molestiae quod.' 
  },
  {
      category : 'data visualization',
      image: "20220207_195528.jpg",
      title : 'susage roll',
      price : '83',
      details: 'aperiam vel. Nam, dolorem culpa? Sequi est libero nemo blanditiis dolores aliquid optio! Ut delectus officiis, laboriosam et accusantium ipsam neque facere est tempore!' 
  },
  {
      category : 'web app clones',
      image: "20220207_195528.jpg",
      title : 'susage roll',
      price : '83',
      details: 'aperiam vel. Nam, dolorem culpa? Sequi est libero nemo blanditiis dolores aliquid optio! Ut delectus officiis, laboriosam et accusantium ipsam neque facere est tempore!' 
  },
  {
      category : 'web app clones',
      image: "20220207_195528.jpg",
      title : 'susage roll',
      price : '83',
      details: 'aperiam vel. Nam, dolorem culpa? Sequi est libero nemo blanditiis dolores aliquid optio! Ut delectus officiis, laboriosam et accusantium ipsam neque facere est tempore!' 
  }
]
// const obsCallback = function (entries) {
//   const [entry] = entries;
//   // console.log(entry);
//   if (entry.isIntersecting) {
//     sectionObserver  }
//   // else {mainMain.classList.add('section--hidden')}
//   // console.log(entries);
// };
// const obsOptions = {
//   root: null,
//   threshold: 0.1,
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);

// mainMain.forEach(function (section) {
//   const sectionObserver = section.classList.add("section--show");
//   observer.observe(section);
// });
// const projectImageLabel = document.querySelectorAll('.project-img-container')

// const overlayLabel = document.querySelector('.overlay-project-image')

// projectImageLabel.forEach(function(eachImage){

//   console.log(eachImage);
//   eachImage.addEventListener('mouseover', function(){
    
//     console.log('action');
//     overlayLabel.classList.toggle('hidden')
//   })
// })















// const text = document.querySelector(".sec-text");
// console.log(header.getBoundingClientRect());
// console.log(main.getBoundingClientRect());

// const textLoad = ()=>{
//   setTimeout(()=>{
//     text.textContent = "Web Developer"
//   }, 0)
//   setTimeout(()=>{
//     text.textContent = "Freelancer"
//   }, 4000)
// }

// textLoad()
// setInterval(textLoad,12000)




// const obsOptions = {
//   root: null,
//   threshold: 0.1,
// };

// const obsCallback = function (entries, observer) {
//   entries.forEach((entry) => {
//     console.log(entry);
//   });
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);

// observer.observe(main);
