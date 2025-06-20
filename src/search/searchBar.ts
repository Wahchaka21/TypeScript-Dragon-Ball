import { Character } from "../class-interface/Character"
import { app } from "../main"
import { persoDetail } from "../liste/detail_perso"
import { header } from "../header-footer/header"
import { footer } from "../header-footer/footer"

export async function filterCharacterByName(valeur:string):Promise<void>{
    const res:any = await fetch ("https://dragonball-api.com/api/characters?limit=200")
    const data:any = await res.json()

    const name:string = valeur.trim().toLowerCase()

    const persoData:any = data.items.find((char:any)=> char.name.toLowerCase() === name)

    while (app.firstChild){
        app.removeChild(app.firstChild)
    }

    header()

    if (persoData){
        const perso:any = new Character(persoData.image, Number(persoData.id), persoData.name)
        persoDetail(perso)
    }
    else {
        const error:HTMLParagraphElement = document.createElement("p")
        error.textContent = `Aucun personnage trouvé pour ${valeur}`
        error.className = "text-red-600 text-3xl font-[Bangers] text-center pt-40"
        app.appendChild(error)
        footer()
    }
}