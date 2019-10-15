import {Chatbot} from './chatbot';

export class Connaissance {
    id: number ;
    question : string ;
    reponse: string ;
    admin : string ;
    isActive : boolean ;
    chatBots : Chatbot[] = [];
}
