import {Utilisateur} from './utilisateur';

export class Groupe {
    id: number ;
    description : string ;
    isActive: boolean ;
    name: string ;
    users: Utilisateur[] ;

}

