import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {UtilisateurService} from '../services/utilisateurs.service';
import {Utilisateur} from '../classes/utilisateur';
import {AjouterutilisateurComponent} from './ajouterutilisateur/ajouterutilisateur.component';
import {ModifierutilisateurComponent} from './modifierutilisateur/modifierutilisateur.component';
import {SupprimerutilisateurComponent} from './supprimerutilisateur/supprimerutilisateur.component';


@Component({
  selector: 'app-user-profile',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.css']
})
export class UtilisateursComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  Utilisateurs: Utilisateur[] = null ;
  displayedColumns: string[] = ['img','username','matricule' ,'firstName','lastName','profil','isSuperUser','isActive','isAdminGroup','groupes' ,'action'];

  dataSource: MatTableDataSource<Utilisateur>;

  constructor(private  utilisateurservice : UtilisateurService ,public dialog: MatDialog) { }

  ngOnInit() {
    this.utilisateurservice.getUsers().subscribe(
        (res) => {
          this.Utilisateurs = res ;
          this.dataSource =  new MatTableDataSource(this.Utilisateurs);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
    )

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

    resolve(){
        if(this.Utilisateurs == null ){
            return true
        }
        else if(this.Utilisateurs.length == 0){
            return true
        }
        else {
            return false
        }
    }

  openDeleteDialog(id : number): void {
    const dialogRef = this.dialog.open(SupprimerutilisateurComponent, {
      width: '800px',data: id
    });
    dialogRef.afterClosed().subscribe(
        (res => {
          this.utilisateurservice.getUsers().subscribe(
              (response) => {
                this.Utilisateurs = response;
                this.dataSource =  new MatTableDataSource(this.Utilisateurs);
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;

              },
              (error) => console.log('error'+error)
          )
        })
    );
  }

  openPatchDialog(emp : any): void {
    const dialogRef = this.dialog.open(ModifierutilisateurComponent, {
      width: '800px',height :'600px',data: emp
    });
    dialogRef.afterClosed().subscribe(
        (res => {
          this.utilisateurservice.getUsers().subscribe(
              (response) => {
                this.Utilisateurs = response;
                this.dataSource =  new MatTableDataSource(this.Utilisateurs);
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;

              },
              (error) => console.log('error'+error)
          )
        })
    );
  }



  openAddDialog(): void {
    const dialogRef = this.dialog.open(AjouterutilisateurComponent, {
      width: '800px' ,height :'700px'
    });
    dialogRef.afterClosed().subscribe(
        (res => {
            setTimeout( () => {
                    this.utilisateurservice.getUsers().subscribe(
                        (response) => {
                            this.Utilisateurs = response;
                            this.dataSource =  new MatTableDataSource(this.Utilisateurs);
                            this.dataSource.paginator = this.paginator;
                            this.dataSource.sort = this.sort;

                        },
                        (error) => console.log('error'+error)
                    )
                }
                ,500
            )

        })
    );
  }

 getGroupeName(user : Utilisateur){
      let res : String = ""
      user.groupes.map(
          (grp) => res = res +
`
${grp.name}
`
      );
     return res
 }

 getFirst(username){
      return username.substr(0,1).toUpperCase()
 }

}
