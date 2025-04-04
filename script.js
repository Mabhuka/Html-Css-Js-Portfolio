function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }


  let projectSection = document.querySelector(".projects-demo")
  let projectSection2 = document.querySelector(".projects-demo2")
  let projectSection3 = document.querySelector(".projects-demo3")
  
  function showHideProjects(){
    isShow = true;
    projectSection.classList.toggle("hide");
    projectSection2.classList.toggle("hide",isShow);
    projectSection3.classList.toggle("hide",isShow);
  }
  
  function showHideProjects2(){
    isShow = true;
    projectSection2.classList.toggle("hide");
    projectSection.classList.toggle("hide",isShow);
    projectSection3.classList.toggle("hide",isShow);
  }
  
  function showHideProjects3(){
    projectSection3.classList.toggle("hide");
    projectSection.classList.toggle("hide",isShow);
    projectSection2.classList.toggle("hide",isShow);
  }