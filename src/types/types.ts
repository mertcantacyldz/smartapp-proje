export interface Root {
    date: string
    city: string
    type: string
    degree: number
    airConditions: string
    forecast: Forecast
    weeklyWeather: WeeklyWeather
  }
  
  export interface Forecast {
    "08:00": string
    "12:00": string
    "15:00": string
    "18:00": string
    "21:00": string
    "00:00": string
  }
  
  export interface WeeklyWeather {
    previous: Previous
    current: Current
    next: Next
  }
  
  export interface Previous {
    sunday: Sunday
    monday: Monday
    tuesday: Tuesday
    wednesday: Wednesday
    thursday: Thursday
    friday: Friday
    saturday: Saturday
  }
  
  export interface Sunday {
    type: string
    degree: string
  }
  
  export interface Monday {
    type: string
    degree: string
  }
  
  export interface Tuesday {
    type: string
    degree: string
  }
  
  export interface Wednesday {
    type: string
    degree: string
  }
  
  export interface Thursday {
    type: string
    degree: string
  }
  
  export interface Friday {
    type: string
    degree: string
  }
  
  export interface Saturday {
    type: string
    degree: string
  }
  
  export interface Current {
    sunday: Sunday2
    monday: Monday2
    tuesday: Tuesday2
    wednesday: Wednesday2
    thursday: Thursday2
    friday: Friday2
    saturday: Saturday2
  }
  
  export interface Sunday2 {
    type: string
    degree: string
  }
  
  export interface Monday2 {
    type: string
    degree: string
  }
  
  export interface Tuesday2 {
    type: string
    degree: string
  }
  
  export interface Wednesday2 {
    type: string
    degree: string
  }
  
  export interface Thursday2 {
    type: string
    degree: string
  }
  
  export interface Friday2 {
    type: string
    degree: string
  }
  
  export interface Saturday2 {
    type: string
    degree: string
  }
  
  export interface Next {
    sunday: Sunday3
    monday: Monday3
    tuesday: Tuesday3
    wednesday: Wednesday3
    thursday: Thursday3
    friday: Friday3
    saturday: Saturday3
  }
  
  export interface Sunday3 {
    type: string
    degree: string
  }
  
  export interface Monday3 {
    type: string
    degree: string
  }
  
  export interface Tuesday3 {
    type: string
    degree: string
  }
  
  export interface Wednesday3 {
    type: string
    degree: string
  }
  
  export interface Thursday3 {
    type: string
    degree: string
  }
  
  export interface Friday3 {
    type: string
    degree: string
  }
  
  export interface Saturday3 {
    type: string
    degree: string
  }
  