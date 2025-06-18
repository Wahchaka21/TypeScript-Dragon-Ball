export class DetailPerso{
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