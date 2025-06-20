import { app } from "../main"

export function footer():void{
  const footer:HTMLElement = document.createElement('footer')
  footer.className = 'bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-600 shadow-[0_4px_15px_rgba(255,165,0,0.8)] border-b-4 border-blue-900 text-center py-4 font-[Bangers] text-white text-2xl aura border-t-4 border-blue-900'
  footer.textContent = '© Petitjean Quentyn'
  app.appendChild(footer)
}
