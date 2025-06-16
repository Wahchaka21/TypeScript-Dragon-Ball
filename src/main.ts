import './style.css'

class Character {
  image:string
  id:number
  name:string


  constructor(image:string, id:number, name:string) {
    this.image = image
    this.id = id
    this.name = name
  }
}



//====================================================HEADER=========================================================



const app = document.querySelector<HTMLDivElement>('#app')!


function header() {
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




//============================================================PLANÈTES===================================================================




  planet.addEventListener("click", async(e:MouseEvent)=>{
    e.preventDefault()

    while(app.firstChild){
      app.removeChild(app.firstChild)
    }

    header()
    afficherPlanete() 
  })

//===========================================================KI=========================================================================


  ki.addEventListener("click", async(e:MouseEvent)=>{
    e.preventDefault()

    while(app.firstChild){
      app.removeChild(app.firstChild)
    }

    header()
    afficherParKi()
  })
}

//====================================================LISTE DES PERSONNAGES ACCUEIL=========================================================


const h1:HTMLHeadingElement = document.createElement("h1")
h1.textContent = "Tous les personnages !"
h1.className = "text-4xl font-[Bangers] text-orange-500 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] uppercase text-center pt-40 tracking-wide"


const div:HTMLDivElement = document.createElement("div")
div.className = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-10"


header()
app.appendChild(h1)
app.appendChild(div)


interface CharacterAPI {
  items:{
    id:number
    name:string
    image:string
  }[]
}

async function characterAPI(): Promise<CharacterAPI>{
    const res = await fetch("https://dragonball-api.com/api/characters?limit=100")
    return await res.json()
}


async function afficherPerso(): Promise<void>{
    const data = await characterAPI()


    const persos: Character[] = data.items.map((perso:any)=>
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


//====================================================DÉTAILS DES PERSONNAGES=========================================================


class DetailPerso{
  image:string
  id:number
  name:string
  ki:string
  maxKi:string
  race:string
  gender:string
  affiliation:string

  constructor(image:string, id:number, name:string, ki:string, maxKi:string, race:string, gender:string, affiliation:string) {
    this.image = image
    this.id = id
    this.name = name
    this.ki = ki
    this.maxKi = maxKi
    this.race = race
    this.gender = gender
    this.affiliation = affiliation
  }
}


async function persoDetail(perso: Character) {
  while(app.firstChild){
    app.removeChild(app.firstChild)
  }


  header()


  const res = await fetch("https://dragonball-api.com/api/characters?limit=100")
  const personnages = await res.json()


  const data = personnages.items.find((p:any) => Number(p.id) === Number(perso.id))


  const detail = new DetailPerso(
    data.image,
    data.id,
    data.name,
    data.ki,
    data.maxKi,
    data.race,
    data.gender,
    data.affiliation,
  )


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
  

  const displayDetail = [
    detail.id,
    `Nom: ${detail.name}`,
    `Ki: ${detail.ki}`,
    `Ki maximal: ${detail.maxKi}`,
    `Race: ${detail.race}`,
    `Genre: ${detail.gender}`,
    `Affiliation: ${detail.affiliation}`
  ]


  for (const detail of displayDetail) {
    const p = document.createElement("p")
    p.textContent = detail.toString()
    p.className = "mb-1 p-1 font-bold text-blue-900 text-4xl font-[Bangers]"
    carte.appendChild(p)
  }

  footer()
}


//==========================================FONCTION PLANÈTE=============================================

  class Planetes{
    image:string
    id:number
    name:string
    isDestroyed:boolean
  
    constructor(image:string, id:number, name:string, isDestroyed:boolean){
      this.image = image
      this.id = id
      this.name = name
      this.isDestroyed = isDestroyed
    }
  }
  

  interface PlanetesAPI {
    items:{
      image:string
      id:number
      name:string
      isDestroyed:boolean
    }[]
  }


  
  async function planetAPI():Promise<PlanetesAPI>{
    const res = await fetch("https://dragonball-api.com/api/planets")
    return await res.json()
  }
  

  async function afficherPlanete():Promise<void>{
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
      carte.className = "bg-gradient-to-br from-orange-400 to-yellow-200 rounded-xl p-6 text-black shadow-[0_4px_15px_rgba(0,0,0,0.4)] border-3 border-blue-900 hover:scale-105 transition-transform duration-300 cursor-pointer flex flex-col items-center justify-center aura-hover"
      carte.classList.add("hover:ring-4", "hover:ring-yellow-400", "hover:ring-offset-2")
      carte.classList.add("hover:shadow-[0_0_20px_rgba(255,255,0,0.8)]")


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



//===========================================================FONCTION KI=================================================


class CharacterKi {
  image:string
  id:number
  name:string
  ki:string


  constructor(image:string, id:number, name:string, ki:string) {
    this.image = image
    this.id = id
    this.name = name
    this.ki = ki
  }
}

async function afficherParKi(): Promise<void> {
  const res = await fetch("https://dragonball-api.com/api/characters?limit=100")
  const data = await res.json()

  const personnages: CharacterKi[] = data.items
  .filter((char: any) => char.ki && !isNaN(Number(char.ki)))
  .map((char: any) => new CharacterKi(char.image, Number(char.id), char.name, char.ki))


  personnages.sort()

 const h1 = document.createElement("h1")
  h1.textContent = "Classement par niveau de Ki"
  h1.className = "text-4xl font-[Bangers] text-orange-500 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] uppercase text-center pt-40 tracking-wide"
  app.appendChild(h1)

  const container = document.createElement("div")
  container.className = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-10"
  app.appendChild(container)

  personnages.forEach(perso => {
    const carte = document.createElement("div")
    carte.className = "bg-gradient-to-br from-orange-400 to-yellow-200 rounded-xl p-6 text-black shadow-lg border-3 border-blue-900 flex flex-col items-center justify-center"

    const img = document.createElement("img")
    img.src = perso.image
    img.alt = `Image de ${perso.name}`
    img.className = "w-60 h-60 object-contain rounded-full border-3 border-black mb-4"

    const nom = document.createElement("h2")
    nom.textContent = perso.name
    nom.className = "text-3xl font-[Bangers] text-blue-900"

    const ki = document.createElement("p")
    ki.textContent = `Ki : ${perso.ki}`
    ki.className = "text-lg font-[Bangers] text-gray-800"

    carte.appendChild(img)
    carte.appendChild(nom)
    carte.appendChild(ki)
    container.appendChild(carte)
  })

  footer()
}







//============================================================FOOTER======================================================



function footer():void {
  const footer = document.createElement('footer')
  footer.className = 'bg-orange-400 text-center py-4 font-[Bangers] text-white text-2xl'
  footer.textContent = '© Petitjean Quentyn'
  app.appendChild(footer)
}

footer()