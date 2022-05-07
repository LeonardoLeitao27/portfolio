const body = document.querySelector('body'),
      sidebar = body.querySelector('nav'),
      toggle = body.querySelector(".toggle"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text");
      iconeH = document.getElementsByClassName("bloco-habilidades");
      projetos = document.getElementsByClassName("blocosproj");


toggle.addEventListener("click" , () =>{
    sidebar.classList.toggle("close");
})



modeSwitch.addEventListener("click" , () =>{
    body.classList.toggle("dark");
    sidebar.classList.add("close");

    for (let i = 0; i < iconeH.length; i++) {
        iconeH[i].classList.toggle("fundo-bloco");
      }

    for (let i = 0; i < projetos.length; i++) {
        projetos[i].classList.toggle("fundo-bloco");
      }
    
    if(body.classList.contains("dark")){
        modeText.innerText = "Light mode";
    }else{
        modeText.innerText = "Dark mode";
        
    }
});