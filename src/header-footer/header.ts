import { app } from "../main"
import { afficherPlanete } from "../planetes/afficherPlanete"
import { afficherParKi } from "../ki/ki_tri"
import { afficherRace } from "../race/race"

export function header() {
  const headerDiv:HTMLDivElement = document.createElement("div")
  headerDiv.className = 'header py-10 bg-orange-400 fixed top-0 right-0 left-0 z-50 flex gap-8 ps-50'

  const logo:HTMLImageElement = document.createElement("img")
  logo.src = ("/src/img/logo.png")
  logo.alt = "Logo Dragon Ball"
  logo.className = 'absolute w-40 left-5 top-5'

  const liste:HTMLAnchorElement = document.createElement("a")
  liste.href =""
  liste.textContent = "Personnage"
  liste.className = "px-8 text-2xl text-white transition-transform duration-300 transform hover:scale-120 cursor-pointer font-[Bangers] aura-hover"


  const planet:HTMLAnchorElement = document.createElement("a")
  planet.textContent = "Planètes"
  planet.className = "px-8 text-2xl text-white transition-transform duration-300 transform hover:scale-120 cursor-pointer font-[Bangers] aura-hover"

  const ki:HTMLAnchorElement = document.createElement("a")
  ki.textContent = "Ki"
  ki.className = "px-8 text-2xl text-white transition-transform duration-300 transform hover:scale-120 cursor-pointer font-[Bangers] aura-hover"


  const race:HTMLAnchorElement = document.createElement("a")
  race.textContent = "Races"
  race.className = "px-8 text-2xl text-white transition-transform duration-300 transform hover:scale-120 cursor-pointer font-[Bangers] aura-hover"

  headerDiv.appendChild(logo)
  headerDiv.appendChild(liste)
  headerDiv.appendChild(planet)
  headerDiv.appendChild(ki)
  headerDiv.appendChild(race)
  app.appendChild(headerDiv)



  planet.addEventListener("click", async(e:MouseEvent)=>{
    e.preventDefault()

    while(app.firstChild){
      app.removeChild(app.firstChild)
    }

    header()
    afficherPlanete() 
  })



  ki.addEventListener("click", async(e:MouseEvent)=>{
    e.preventDefault()

    while(app.firstChild){
      app.removeChild(app.firstChild)
    }

    header()
    afficherParKi()
  })



  race.addEventListener("click", async(e:MouseEvent)=>{
    e.preventDefault()

    while(app.firstChild){
      app.removeChild(app.firstChild)
    }

    header()
    afficherRace()
  })
}