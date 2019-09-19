import {Utilisateur} from './utilisateur';
import {Permission} from './permission';

export class Profil {
    id: number ;
    description : string ;
    name: string ;
    users: Utilisateur[]  ;
    isActive : boolean ;
    permisRoles : Permission[] =[] ;
}
