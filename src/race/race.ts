import { Race } from "../class-interface/Race"
import { app } from "../main"
import { footer } from "../header-footer/footer"
import { afficherPersoParRace } from "./filtre_race"

export async function afficherRace():Promise<void>{

  const res = await fetch("https://dragonball-api.com/api/characters?limit=200")
  const data = await res.json()

  const races = data.items.map((char:any) => char.race).filter((r:string) => r)

  const racesUniques: string[] = Array.from(new Set(races))

  const allRace = racesUniques.map(r => new Race(r))
  

  const title:HTMLHeadingElement = document.createElement("h1")
  title.textContent = "Toutes les races (j'ui pas raciste)"
  title.className = "text-4xl font-[Bangers] text-orange-500 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] uppercase text-center pt-20 tracking-wide"
  

  const container:HTMLDivElement = document.createElement("div")
  container.className = "grid grid-cols-2 gap-6 p-10"
  

  const div: HTMLDivElement = document.createElement("div")
  div.className = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-10"
  app.appendChild(div)
  
  allRace.forEach((raceObj) => {
    const carte:HTMLDivElement = document.createElement("div")
    carte.className =
      "bg-gradient-to-br from-orange-400 to-yellow-200 rounded-xl p-6 text-black shadow-[0_4px_15px_rgba(0,0,0,0.4)] border-3 border-blue-900 hover:scale-105 transition-transform duration-300 cursor-pointer flex flex-col items-center justify-center aura-hover"
    carte.classList.add("hover:ring-4", "hover:ring-yellow-400", "hover:ring-offset-2")
    carte.classList.add("hover:shadow-[0_0_20px_rgba(255,255,0,0.8)]")


    const perso:HTMLHeadingElement = document.createElement("h1")
    perso.textContent = raceObj.race
    perso.className = "text-2xl font-[Bangers] text-blue-900"


    app.appendChild(title)
    app.appendChild(container)
    carte.appendChild(perso)
    container.appendChild(carte)

    carte.addEventListener("click", ():void=>{
      afficherPersoParRace(raceObj.race)
    })
  })

  footer()
}