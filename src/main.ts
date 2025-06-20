import './style.css'
import { header } from './header-footer/header'
import { accueil } from './liste/perso'
import { footer } from './header-footer/footer'


export const app:HTMLElement = document.querySelector<HTMLDivElement>('#app')!

header()
accueil()
footer()
