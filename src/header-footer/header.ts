import { app } from "../main"
import { afficherPlanete } from "../planetes/afficherPlanete"
import { afficherParKi } from "../ki/ki_tri"
import { afficherRace } from "../race/race"
import { accueil } from "../liste/perso"
import { filterCharacterByName } from "../search/searchBar"

export function header() {
  const headerDiv:HTMLDivElement = document.createElement("div")
  headerDiv.className = 'header py-8 px-10 bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-600 shadow-[0_4px_15px_rgba(255,165,0,0.8)] border-b-4 border-blue-900 fixed top-0 left-0 right-0 z-50 flex items-center justify-center gap-10 aura'

  
  const logo:HTMLImageElement = document.createElement("img")
  logo.src = ("/src/img/logo.png")
  logo.alt = "Logo Dragon Ball"
  logo.className = 'absolute w-40 left-5 top-5'



  const liste:HTMLAnchorElement = document.createElement("a")
  liste.textContent = "Personnage"
  liste.className = "px-8 text-2xl text-white grid content-center transition-transform duration-300 transform hover:scale-120 cursor-pointer font-[Bangers] aura-hover"



  const planet:HTMLAnchorElement = document.createElement("a")
  planet.textContent = "Planètes"
  planet.className = "px-8 text-2xl text-white grid content-center transition-transform duration-300 transform hover:scale-120 cursor-pointer font-[Bangers] aura-hover"



  const ki:HTMLAnchorElement = document.createElement("a")
  ki.textContent = "Ki"
  ki.className = "px-8 text-2xl text-white grid content-center transition-transform duration-300 transform hover:scale-120 cursor-pointer font-[Bangers] aura-hover"



  const race:HTMLAnchorElement = document.createElement("a")
  race.textContent = "Races"
  race.className = "px-8 text-2xl text-white grid content-center transition-transform duration-300 transform hover:scale-120 cursor-pointer font-[Bangers] aura-hover"



  const input:HTMLInputElement = document.createElement("input")
  input.type = "search"
  input.id = "searchBar"
  input.placeholder = "Rechercher un personnage"
  input.className = "w-170 px-4 py-2 bg-gradient-to-br from-orange-500 to-yellow-300  text-blue-900 font-[Bangers] text-xl border-4 border-blue-900  rounded-lg shadow-[0_4px_15px_rgba(0,0,0,0.5)] placeholder:text-white placeholder:opacity-80 focus:outline-none focus:ring-4 focus:ring-yellow-400"
  
  

  const button:HTMLButtonElement = document.createElement("button")
  button.textContent = "Rechercher"
  button.className = "px-6 py-2  bg-blue-900 text-white text-xl font-[Bangers] rounded-lg border-2 border-yellow-300 cursor-pointer hover:bg-yellow-400 hover:text-blue-900  transition duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.5)]"



  button.addEventListener("click", async(e:MouseEvent)=>{
    e.preventDefault()

    filterCharacterByName(input.value)
  })
  

  const shenron:HTMLImageElement = document.createElement("img")
  shenron.src = ("/src/img/shenron.png")
  shenron.alt = "Shenron"
  shenron.className = "absolute w-35 right-10 top-1"


  headerDiv.appendChild(logo)
  headerDiv.appendChild(liste)
  headerDiv.appendChild(planet)
  headerDiv.appendChild(ki)
  headerDiv.appendChild(race)
  headerDiv.appendChild(input)
  headerDiv.appendChild(button)
  headerDiv.appendChild(shenron)
  app.appendChild(headerDiv)



  liste.addEventListener("click", async(e:MouseEvent)=>{
    e.preventDefault()

    while(app.firstChild){
      app.removeChild(app.firstChild)
    }

    header()
    accueil()
  })




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