
document.addEventListener("DOMContentLoaded", function() {

  let menuBtn = document.querySelector('#mob-nav');
  menuBtn.addEventListener('click', OpenNavMenu);

  let mobMenu = document.querySelector("#mob-menu");
  mobMenu.addEventListener('click', CloseMenu);

  let btn = document.getElementsByClassName('anchor');
  for(var i = 0; i < btn.length; i++){
    btn[i].addEventListener('click', NavFunction);
  }

  let infoBtn = document.getElementsByClassName('info-button');
  for(var i = 0; i < infoBtn.length; i++){
    infoBtn[i].addEventListener('click', InfoClick);
  }
})

function NavFunction(){
  let currentSelection = this.id + '-section';
  let sec = document.getElementById(currentSelection);
  console.log(currentSelection);
  window.scrollTo({
    left: 0,
    top: sec.offsetTop - 210,
    behavior: "smooth",
    block: "start"
  })
}

function InfoClick(){
  let infoRequest = this.id 

  switch (infoRequest){
    case "home-info":
      let home = document.querySelector('.section-one-left');
      home.classList.add('mob-info-panel');
      document.querySelector('.mob-info-panel').addEventListener('click', ClosePanel);
      break;
    case "about-info":
      let abt = document.querySelector('.section-two-right');
      abt.classList.add('mob-info-panel');
      document.querySelector('.mob-info-panel').addEventListener('click', ClosePanel);
      break;
    case "why-info":
      let why = document.querySelector('.section-three-left');
      why.classList.add('mob-info-panel');
      document.querySelector('.mob-info-panel').addEventListener('click', ClosePanel);
      break;
    case "process-info":
      let process = document.querySelector('.section-four-right');
      process.classList.add('mob-info-panel');
      document.querySelector('.mob-info-panel').addEventListener('click', ClosePanel);
      break;
    case "contact-info":
      let contact = document.querySelector('.section-six-right');
      contact.classList.add('mob-info-panel');
      document.querySelector('.mob-info-panel').addEventListener('click', ClosePanel);
      break;
    default:
      break;
  }
}

function ClosePanel(){
  let panel = document.querySelector('.mob-info-panel');
  panel.addEventListener('click', ()=>{
    panel.classList.remove('mob-info-panel');
  })

}

function OpenNavMenu(){
  console.log('click');
  let mobNav = document.querySelector('#mob-menu');
  mobNav.classList.toggle('hide');
  CloseMenu;
  NavFunction;
}

function CloseMenu(){
  document.getElementById('mob-menu').classList.add('hide');
  
}