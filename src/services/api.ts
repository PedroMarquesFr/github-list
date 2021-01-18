// import axios from "axios";
// import {Perfil} from "./api"

export function handleFetchPersonName(personName:string){
    return fetch(`https://api.github.com/users/${personName}`).then(resp=>resp.json()).then(data=>data)
}

export function Projects(){

}