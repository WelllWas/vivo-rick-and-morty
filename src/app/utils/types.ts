
export interface apiResult {
    info: {
      count: number,
      pages: number,
      next: string,
      prev: string | null
    }
    results: character[]
  }
  
export interface character {
    id: number,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    origin: {
        name: string,
        url: string
    },
    location: {
        name: string,
        url: string
    },
    image: string,
    episode: string[],
    url: string,
    created: Date
  }

  export interface episode {
    id: number,
    name: string,
    air_date: string,
    episode: string,
    characters:string[],
    url:string,
    created:Date
  }
  
  export interface fact {
    id: number,
    text:string,
  }