import {Groupe} from './groupe';
import {Profil} from './profil';

export  class  Utilisateur {
    id: number ;
    matricule: number;
    username: string ;
    password: string;
    firstName: string ;
    lastName: string ;
    email : string ;
    groupes: Groupe[] = [] ;
    profil: Profil ;
    isSuperUser: boolean ;
    isActive: boolean ;
    isAdminGroup: boolean ;
    isWrite: boolean ;
    isRead: boolean ;
    isAdd: boolean ;
    isDelete: boolean ;
}
