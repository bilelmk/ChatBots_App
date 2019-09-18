import {Utilisateur} from './utilisateur';
import {Chatbot} from './chatbot';

export class Groupe {
    id: number ;
    description : string ;
    isActive: boolean ;
    name: string ;
    users: Utilisateur[] ;
    chatBot : Chatbot ;

}

