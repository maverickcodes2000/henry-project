"use client"
import {faker} from '@faker-js/faker'
const fakemaleusers=()=>{
    return  {
        firstname:faker.person.firstName('male'),
        lastname:faker.person.lastName('male'),
        birthdate:faker.date.anytime({min:4,max:15, mode:'age'}),
        gender:'male'
     }
}
const fakefemaleusers=()=>{
    return  {
        firstname:faker.person.firstName('female'),
        lastname:faker.person.lastName('male'),
        birthdate:faker.date.anytime({min:4,max:15, mode:'age'}),
        gender:'female'
     }
}
const datagenerator = (length)=>{
    let users = []
    for(let i=0; i<length; i++){
     users.push(fakemaleusers())
  }
  for(let i=0; i<length; i++){
    users.push(fakefemaleusers())
 }
  return users
}

export default datagenerator