function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }


  let projectSection = document.querySelector(".projects-demo")
  let projectSection2 = document.querySelector(".projects-demo2")
  let projectSection3 = document.querySelector(".projects-demo3")

  let projectSection4 = document.querySelector(".projects-demo4")
  let projectSection5 = document.querySelector(".projects-demo5")
  let projectSection6 = document.querySelector(".projects-demo6")
  
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

  function showHideProjects4(){
    isShow = true;
    projectSection4.classList.toggle("hide");
    projectSection5.classList.toggle("hide",isShow);
    projectSection6.classList.toggle("hide",isShow);
  }

  function showHideProjects5(){
    isShow = true;
    projectSection5.classList.toggle("hide");
    projectSection4.classList.toggle("hide",isShow);
    projectSection6.classList.toggle("hide",isShow);
  }

  function showHideProjects6(){
    isShow = true;
    projectSection6.classList.toggle("hide");
    projectSection4.classList.toggle("hide",isShow);
    projectSection5.classList.toggle("hide",isShow);
  }