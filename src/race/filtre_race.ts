import { app } from "../main"
import { header } from "../header-footer/header"
import { persoDetail } from "../liste/detail_perso"
import { footer } from "../header-footer/footer"

export async function afficherPersoParRace(raceName:string):Promise<void>{
  while (app.firstChild) {
    app.removeChild(app.firstChild)
  }
  
  header()
  
  const res:any = await fetch("https://dragonball-api.com/api/characters?limit=200")
  const allCharacters:any = await res.json()
  
  const filtered:any = allCharacters.items.filter((char:any) => char.race === raceName)
  
  const titre:HTMLHeadingElement = document.createElement("h1")
  titre.textContent = `Personnages de la race : ${raceName}`
  titre.className = "text-4xl font-[Bangers] text-orange-500 text-center pt-40"
  app.appendChild(titre)
  
  const container:HTMLDivElement = document.createElement("div")
  container.className = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-10"
  app.appendChild(container)
  
  filtered.forEach((perso: any) => {
    const carte:HTMLDivElement = document.createElement("div")
    carte.className = "bg-gradient-to-br from-orange-400 to-yellow-200 rounded-xl p-6 text-black shadow-[0_4px_15px_rgba(0,0,0,0.4)] border-3 border-blue-900 hover:scale-105 transition-transform duration-300 cursor-pointer flex flex-col items-center justify-center aura-hover"
    carte.classList.add("hover:ring-4", "hover:ring-yellow-400", "hover:ring-offset-2", "hover:shadow-[0_0_20px_rgba(255,255,0,0.8)]")
  
    const img:HTMLImageElement = document.createElement("img")
    img.src = perso.image
    img.alt = `Image de ${perso.name}`
    img.className = "w-60 h-60 object-contain rounded-full border-3 border-black mb-4"
  
    const idPerso:HTMLParagraphElement = document.createElement("p")
    idPerso.textContent = `${perso.id}`
    idPerso.className = "text-sm text-gray-700 mb-1 font-[Bangers]"
  
    const nomPerso:HTMLHeadingElement = document.createElement("h2")
    nomPerso.textContent = perso.name
    nomPerso.className = "text-3xl font-[Bangers] text-blue-900"
  
    carte.appendChild(img)
    carte.appendChild(idPerso)
    carte.appendChild(nomPerso)
    container.appendChild(carte)
  
    carte.addEventListener("click", ():void => {
      persoDetail(perso)
    })
  })
  
  footer()
}