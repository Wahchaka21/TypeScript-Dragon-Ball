export class Planetes{
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