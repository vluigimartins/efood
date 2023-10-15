class Dish {
  origin: string
  highlight: boolean
  description: string
  image: string
  title: string
  note: string
  id: number

  constructor(
    origin: string,
    highlight: boolean,
    description: string,
    image: string,
    title: string,
    note: string,
    id: number
  ) {
    this.description = description
    this.highlight = highlight
    this.origin = origin
    this.image = image
    this.title = title
    this.note = note
    this.id = id
  }
}

export default Dish
