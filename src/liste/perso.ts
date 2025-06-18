import { header } from "../header-footer/header"
import { persoDetail } from "./detail_perso"
import { app } from "../main"
import { Character } from "../class-interface/Character"
import type { CharacterAPI } from "../class-interface/CharacterAPI"

export function accueil(){
  const h1:HTMLHeadingElement = document.createElement("h1")
  h1.textContent = "Tous les personnages !"
  h1.className = "text-4xl font-[Bangers] text-orange-500 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] uppercase text-center pt-40 tracking-wide"


  const div:HTMLDivElement = document.createElement("div")
  div.className = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-10"


  header()
  app.appendChild(h1)
  app.appendChild(div)

  async function characterAPI():Promise<CharacterAPI>{
    const res = await fetch("https://dragonball-api.com/api/characters?limit=100")
    return await res.json()
  }


  async function afficherPerso():Promise<void>{
    const data:any = await characterAPI()


    const persos:Character[] = data.items.map((perso:any)=>
    new Character(perso.image, Number(perso.id), perso.name))


    persos.forEach(perso =>{
      const carte:HTMLDivElement = document.createElement("div")
      carte.className = "bg-gradient-to-br from-orange-400 to-yellow-200 rounded-xl p-6 text-black shadow-[0_4px_15px_rgba(0,0,0,0.4)] border-3 border-blue-900 hover:scale-105 transition-transform duration-300 cursor-pointer flex flex-col items-center justify-center aura-hover"
      carte.classList.add("hover:ring-4", "hover:ring-yellow-400", "hover:ring-offset-2")
      carte.classList.add("hover:shadow-[0_0_20px_rgba(255,255,0,0.8)]")


      const img:HTMLImageElement = document.createElement("img")
      img.src = perso.image
      img.alt = `Image de ${perso.name}`
      img.className = "w-60 h-60 object-contain rounded-full border-3 border-black mb-4"


      const idPerso:HTMLParagraphElement = document.createElement("p")
      idPerso.textContent = `${perso.id}`
      idPerso.className = "text-sm text-gray-700 mb-1 font-[Bangers]"


      const nomPerso:HTMLHeadElement = document.createElement("h2")
      nomPerso.textContent = perso.name
      nomPerso.className = "text-3xl font-[Bangers] text-blue-900"
      

      carte.appendChild(img)
      carte.appendChild(idPerso)
      carte.appendChild(nomPerso)
      div.appendChild(carte)


      carte.addEventListener("click", ():void=>{
        persoDetail(perso)
      })
    })
  }
  afficherPerso()
}