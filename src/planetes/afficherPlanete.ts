import type { PlanetesAPI } from "../class-interface/PlanetesAPI"
import { Planetes } from "../class-interface/Planetes"
import { app } from "../main"
import { footer } from "../header-footer/footer"


export async function planetAPI():Promise<PlanetesAPI>{
  const res = await fetch("https://dragonball-api.com/api/planets")
  return await res.json()
}
  

export async function afficherPlanete():Promise<void>{
  const data = await planetAPI()


  const planete:Planetes[] = data.items.map((pla:any)=>
  new Planetes(pla.image, Number(pla.id), pla.name, Boolean(pla.isDestroyed)))


  const titre:HTMLHeadingElement = document.createElement("h1")
  titre.textContent = "Toutes les planètes !"
  titre.className = "text-4xl font-[Bangers] text-orange-500 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] uppercase text-center pt-40 tracking-wide"
  app.appendChild(titre)



  const container:HTMLDivElement = document.createElement("div")
  container.className = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-10"


  planete.forEach(planet=>{
    const carte:HTMLDivElement = document.createElement("div")
    carte.className = "bg-gradient-to-br from-orange-400 to-yellow-200 rounded-xl p-6 text-black shadow-[0_4px_15px_rgba(0,0,0,0.4)] border-3 border-blue-900 flex flex-col items-center justify-center"


    const img:HTMLImageElement = document.createElement("img")
    img.src = planet.image
    img.alt = `Image de la planète ${planet.name}`
    img.className = "w-60 h-60 object-contain rounded-full border-3 border-black mb-4"


    const idPlanet:HTMLParagraphElement = document.createElement("p")
    idPlanet.textContent = `${planet.id}`
    idPlanet.className = "text-sm text-gray-700 mb-1 font-[Bangers]"


    const nomPlanet:HTMLHeadElement = document.createElement("h2")
    nomPlanet.textContent = planet.name
    nomPlanet.className = "text-3xl font-[Bangers] text-blue-900"


    const status:HTMLParagraphElement = document.createElement("p")
    status.textContent = `La planète est ${planet.isDestroyed ? "Détruite" : "Intacte"}`


    carte.appendChild(img)
    carte.appendChild(idPlanet)
    carte.appendChild(nomPlanet)
    carte.appendChild(status)
    container.appendChild(carte)
  })

  app.appendChild(container)

  footer()
}