import './style.css'
import { header } from './header-footer/header'
import { accueil } from './liste/perso'
import { footer } from './header-footer/footer'
import { planetAPI } from './planetes/afficherPlanete'
import { afficherPlanete } from './planetes/afficherPlanete'
import { afficherParKi } from './ki/ki_tri'
import { afficherRace } from './race/race'

export const app:HTMLElement = document.querySelector<HTMLDivElement>('#app')!

header()
accueil()
footer()


planetAPI()
afficherPlanete()


afficherParKi()

afficherRace()