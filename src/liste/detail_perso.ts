import { Character } from "../class-interface/Character"
import { DetailPerso } from "../class-interface/DetailPerso"
import { app } from "../main"
import { footer } from "../header-footer/footer"
import { header } from "../header-footer/header"

export async function persoDetail(perso:Character){
  while(app.firstChild){
    app.removeChild(app.firstChild)
  }
  
  
  header()
  
  
  const res:any = await fetch("https://dragonball-api.com/api/characters?limit=100")
  const personnages:any = await res.json()
  
  
  const data:any = personnages.items.find((p:any) => Number(p.id) === Number(perso.id))
  
  
  const detail:any = new DetailPerso(
    data.image,
    data.id,
    data.name,
    data.ki,
    data.maxKi,
    data.race,
    data.gender,
    data.affiliation,)
  
  
  const titre:HTMLHeadingElement = document.createElement("h1")
  titre.textContent = `Detail de ${detail.name}`
  titre.className = "text-4xl text-orange-500 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] uppercase text-center pt-30 tracking-wide font-[Bangers]"
  app.appendChild(titre)
  
  
  const centerDiv:HTMLDivElement = document.createElement("div")
  centerDiv.className = "flex justify-center"
  
  
  const carte:HTMLDivElement = document.createElement("div")
  carte.className = "bg-gradient-to-br from-orange-400 to-yellow-200 rounded-lg p-6 m-4 flex flex-col items-center justify-center border-3 border-blue-900  w-[800px]"
    
  
  centerDiv.appendChild(carte)
  app.appendChild(centerDiv)
  
  
  const img:HTMLImageElement = document.createElement("img")
  img.src = detail.image
  img.alt = `image de ${detail.name}`
  img.className = "w-80 h-80 object-contain rounded-full border-3 border-black mb-4"
  
  
  carte.appendChild(img)
    
  
  const displayDetail:any = [
    detail.id,
    `Nom: ${detail.name}`,
    `Ki: ${detail.ki}`,
    `Ki maximal: ${detail.maxKi}`,
    `Race: ${detail.race}`,
    `Genre: ${detail.gender}`,
    `Affiliation: ${detail.affiliation}`
  ]
  
  
  for (const detail of displayDetail){
    const p:HTMLParagraphElement = document.createElement("p")
    p.textContent = detail.toString()
    p.className = "mb-1 p-1 font-bold text-blue-900 text-4xl font-[Bangers]"
    carte.appendChild(p)
  }
  
  footer()
}