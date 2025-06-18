import { app } from "../main"

export function footer():void{
  const footer:HTMLElement = document.createElement('footer')
  footer.className = 'bg-orange-400 text-center py-4 font-[Bangers] text-white text-2xl'
  footer.textContent = '© Petitjean Quentyn'
  app.appendChild(footer)
}
