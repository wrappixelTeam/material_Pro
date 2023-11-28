// Sidebar-nav
const first_label = document.querySelector(".first-label");
const sidebar_link = document.querySelectorAll(".sidebar-link");
const sidebar_link_arr = Array.from(sidebar_link);

const handleClick = (e) => {
 

    const element = e.target;
    if(element.classList.contains("extreme-right")){
          let finalelem = element.parentElement;
           finalelem.classList.toggle("active");
          let nextElem = finalelem.nextElementSibling;
          nextElem.classList.toggle("in");
    }
    else if(element.classList.contains("sidebar-link")){
       element.classList.toggle("active");
       let nextElem = element.nextElementSibling;
       nextElem.classList.toggle("in");
    }
    else if(element.classList.contains("extreme-left")){
         let firstelem = element.parentElement;
         let secondelem = firstelem.parentElement;
         secondelem.classList.toggle("active");
         let nextElem = secondelem.nextElementSibling;
         nextElem.classList.toggle("in");
    }
    else{
       let firstelem = element.parentElement;
       let secondelem = firstelem.parentElement;
       secondelem.classList.toggle("active");
       let nextElem = secondelem.nextElementSibling;
       nextElem.classList.toggle("in");
    }
   }

   // modified-click version

const handlemodified = (e) => {
   const element = e.target;
   const modifiedsidebar_link = document.querySelectorAll(".sidebar-link");
   const modifiedsidebar_link_arr = Array.from(modifiedsidebar_link);

 let data =   modifiedsidebar_link_arr.filter((elem) => {
      return elem!==element;
   })

   data.forEach((elem) => {
      elem.classList.remove("active");
      let nextElem = elem.nextElementSibling;
      nextElem.classList.remove("in");
   })

   if(element.classList.contains("extreme-right")){
         let finalelem = element.parentElement;
          finalelem.classList.toggle("active");
         let nextElem = finalelem.nextElementSibling;
         nextElem.classList.toggle("in");
   }
   else if(element.classList.contains("sidebar-link")){
      element.classList.toggle("active");
      let nextElem = element.nextElementSibling;
      nextElem.classList.toggle("in");
   }
   else if(element.classList.contains("extreme-left")){
        let firstelem = element.parentElement;
        let secondelem = firstelem.parentElement;
        secondelem.classList.toggle("active");
        let nextElem = secondelem.nextElementSibling;
        nextElem.classList.toggle("in");
   }
   else{
      let firstelem = element.parentElement;
      let secondelem = firstelem.parentElement;
      secondelem.classList.toggle("active");
      let nextElem = secondelem.nextElementSibling;
      nextElem.classList.toggle("in");
   }
}


sidebar_link_arr.forEach((elem)=>{
    elem.addEventListener("click",handleClick);
})


// Navigation

const menu = document.querySelector(".menu-icon");
const sidebar = document.querySelector(".sidebar");
const header = document.querySelector("header");
const grid_icon = document.querySelector(".grid-icon");
const grid_megadropdown = document.querySelector(".grid-megadropdown");

const dashboard = document.querySelector(".dashboard");
const main_dashboard = document.querySelector(".main-dashboard");

console.log(dashboard);

const handleNav = () => {
   sidebar.classList.toggle("active");
   dashboard.classList.toggle("in");
}

const handledropdown = () => {
   grid_megadropdown.classList.toggle("grid");
}

menu.addEventListener("click",handleNav);
grid_icon.addEventListener("click" , handledropdown);

