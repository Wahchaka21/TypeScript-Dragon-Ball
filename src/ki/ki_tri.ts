import { CharacterKi } from "../class-interface/Characterki"
import { app } from "../main"
import { persoDetail } from "../liste/detail_perso"
import { footer } from "../header-footer/footer"

export async function afficherParKi(): Promise<void> {
  const res:any = await fetch("https://dragonball-api.com/api/characters?limit=200")
  const data:any = await res.json()


  const parseKi = (ki: string): number => {
    const cleaned:any = ki.trim().toLowerCase()
    
    if (cleaned.includes("billion")) {
      const value:number = parseFloat(cleaned.replace("billion", ""))
      return value * 1_000_000_000
    }

    if (cleaned.includes("trillion")) {
      const value:number = parseFloat(cleaned.replace("trillion", ""))
      return value * 1_000_000_000_000
    }
    
    if (cleaned.includes("quadrillion")) {
      const value:number = parseFloat(cleaned.replace("quadrillion", ""))
      return value * 1_000_000_000_000_000
    }

    if (cleaned.includes("quintillion")) {
      const value:number = parseFloat(cleaned.replace("quintillion", ""))
      return value * 1_000_000_000_000_000_000_000_000_000_000
    }

    if (cleaned.includes("septillion")) {
    const value:number = parseFloat(cleaned.replace("septillion", ""))
      return value * 1_000_000_000_000_000_000_000_000_000_000_000_000_000_000
    }

    if (cleaned.includes("googolplex")) {
      const value:number = parseFloat(cleaned.replace("googolplex", ""))
      return value * 1_000_000_000_000_000_000_000_000_000_000_000_000_000_000_000_000_000_000_000_000_000_000_000_000_000_000_000_000_000_000_000_000_000_000_000_000_000_000_000_000_000
    }

    return Number(cleaned.replace(/\./g, "").replace(/\s/g, "").replace(/\,/g, ""))
  }


  const personnages:CharacterKi[] = data.items.filter((perso:any) => perso.ki).map((perso:any) => new CharacterKi(perso.image, Number(perso.id), perso.name, perso.ki))


  personnages.sort((persoX, persoY) => parseKi(persoY.ki) - parseKi(persoX.ki))


  const h1:HTMLHeadingElement = document.createElement("h1")
  h1.textContent = "Classement par niveau de Ki"
  h1.className = "text-4xl font-[Bangers] text-orange-500 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] uppercase text-center pt-40 tracking-wide"
  app.appendChild(h1)


  const container:HTMLDivElement = document.createElement("div")
  container.className = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-10"
  app.appendChild(container)


  personnages.forEach(perso => {
    const carte:HTMLDivElement = document.createElement("div")
    carte.className = "bg-gradient-to-br from-orange-400 to-yellow-200 rounded-xl p-6 text-black shadow-[0_4px_15px_rgba(0,0,0,0.4)] border-3 border-blue-900 hover:scale-105 transition-transform duration-300 cursor-pointer flex flex-col items-center justify-center aura-hover"
    carte.classList.add("hover:ring-4", "hover:ring-yellow-400", "hover:ring-offset-2")
    
    carte.classList.add("hover:shadow-[0_0_20px_rgba(255,255,0,0.8)]")

    const img:HTMLImageElement = document.createElement("img")
    img.src = perso.image;
    img.alt = `Image de ${perso.name}`
    img.className = "w-60 h-60 object-contain rounded-full border-3 border-black mb-4"


    const nom:HTMLHeadingElement = document.createElement("h2")
    nom.textContent = perso.name;
    nom.className = "text-3xl font-[Bangers] text-blue-900"


    const ki:HTMLParagraphElement = document.createElement("p")
    ki.textContent = `Ki : ${perso.ki}`
    ki.className = "text-lg font-[Bangers] text-gray-800"


    carte.appendChild(img)
    carte.appendChild(nom)
    carte.appendChild(ki)
    container.appendChild(carte)

    carte.addEventListener("click", ():void=>{
      persoDetail(perso)
    })

  })

  //console.log(personnages.map(p => `${p.name}: ${parseKi(p.ki)}`))

  footer()
}