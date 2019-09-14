import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Groupe} from '../classes/groupe';
import {GroupeService} from '../services/groupes.service';
import {SupprimergroupeComponent} from './supprimergroupe/supprimergroupe.component';
import {AjoutergroupeComponent} from './ajoutergroupe/ajoutergroupe.component';
import {ModifiergroupeComponent} from './modifiergroupe/modifiergroupe.component';
import {UtilisateurgroupeComponent} from './utilisateurgroupe/utilisateurgroupe.component';
declare var $: any;

@Component({
  selector: 'app-typography',
  templateUrl: './groupe.component.html',
  styleUrls: ['./groupe.component.css']
})
export class GroupeComponent implements OnInit   {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private  groupeservice : GroupeService ,public dialog: MatDialog) { }

  groupes: Groupe[] = null ;
  displayedColumns: string[] = ['name','description' ,'isActive' ,'chatbot' , 'action'];

  dataSource: MatTableDataSource<Groupe>;


  ngOnInit() {
    this.groupeservice.getGroupes().subscribe(
        (res) => {
          this.groupes = res;
          this.dataSource =  new MatTableDataSource(this.groupes);
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
    const dialogRef = this.dialog.open(SupprimergroupeComponent, {
      width: '800px',data: id
    });
    dialogRef.afterClosed().subscribe(
        (res => {
          this.groupeservice.getGroupes().subscribe(
              (response) => {
                this.groupes = response;
                this.dataSource =  new MatTableDataSource(this.groupes);
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;

              },
              (error) => console.log('error'+error)
          )
        })
    );
  }

  openPatchDialog(grp : any): void {
    const dialogRef = this.dialog.open(ModifiergroupeComponent, {
      width: '800' ,height :'700',data: grp
    });
      dialogRef.afterClosed().subscribe(
          (res => {
              this.groupeservice.getGroupes().subscribe(
                  (response) => {
                      this.groupes = response;
                      this.dataSource =  new MatTableDataSource(this.groupes);
                      this.dataSource.paginator = this.paginator;
                      this.dataSource.sort = this.sort;

                  },
                  (error) => console.log('error'+error)
              )
          })
      );
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(AjoutergroupeComponent, {
      width: '800' ,height :'500'
    });
  dialogRef.afterClosed().subscribe(
      (res => {
        this.groupeservice.getGroupes().subscribe(
            (response) => {
              this.groupes = response;
              this.dataSource =  new MatTableDataSource(this.groupes);
              this.dataSource.paginator = this.paginator;
              this.dataSource.sort = this.sort;

            },
            (error) => console.log('error'+error)
        )
      })
  );
  }


    ManageUser(grp : Groupe): void {
        const dialogRef = this.dialog.open(UtilisateurgroupeComponent, {
            width: '800' ,height :'500' , data : grp
        });
  }


  }
