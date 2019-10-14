import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { AjouterprofilComponent } from './ajouterprofil/ajouterprofil.component';
import { SupprimerprofilComponent } from './supprimerprofil/supprimerprofil.component';
import { ModifierprofilComponent } from './modifierprofil/modifierprofil.component';
import {Profil} from '../classes/profil';
import {ProfilService} from '../services/profil.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './profils.component.html',
  styleUrls: ['./profils.component.css']
})
export class ProfilsComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  profils: Profil[] = null ;
  displayedColumns: string[] = ['name','description' ,'isActive','action'];

  dataSource: MatTableDataSource<Profil>;

  constructor(public dialog: MatDialog , private  profilservice : ProfilService) { }

    resolve(){
        if(this.profils == null ){
            return true
        }
        else if(this.profils.length == 0){
            return true
        }
        else {
            return false
        }
    }

  ngOnInit() {
    this.profilservice.getProfils().subscribe(
        (res) => {
          this.profils = res ;
          this.dataSource =  new MatTableDataSource(this.profils);
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

  openDeleteDialog(id : number): void {
    const dialogRef = this.dialog.open(SupprimerprofilComponent, {
      width: '800px',data: id
    });
    dialogRef.afterClosed().subscribe(
        (res => {
          this.profilservice.getProfils().subscribe(
              (response) => {
                this.profils = response;
                this.dataSource =  new MatTableDataSource(this.profils);
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;

              },
              (error) => console.log('error'+error)
          )
        })
    );
  }

  openPatchDialog(profil : any): void {
    const dialogRef = this.dialog.open(ModifierprofilComponent, {
      width: '850px' ,height :'700px' , data : profil
    });
    dialogRef.afterClosed().subscribe(
        (res => {
          this.profilservice.getProfils().subscribe(
              (response) => {
                this.profils = response;
                this.dataSource =  new MatTableDataSource(this.profils);
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;

              },
              (error) => console.log('error'+error)
          )
        })
    );
  }



  openAddDialog(): void {
    const dialogRef = this.dialog.open(AjouterprofilComponent, {
      width: '850px' ,height :'700px'
    });
    dialogRef.afterClosed().subscribe(
        (res => {
          this.profilservice.getProfils().subscribe(
              (response) => {
                this.profils = response;
                this.dataSource =  new MatTableDataSource(this.profils);
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;

              },
              (error) => console.log('error'+error)
          )
        })
    );
  }

}
