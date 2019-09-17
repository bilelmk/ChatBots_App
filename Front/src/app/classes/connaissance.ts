import {Chatbot} from './chatbot';

export class Connaissance {
    id: number ;
    question : string ;
    reponse: boolean ;
    chatBots : Chatbot[] = [];
}
