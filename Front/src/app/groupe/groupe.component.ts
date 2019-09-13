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
  displayedColumns: string[] = ['name','description' ,'isActive' , 'action'];

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
  //   dialogRef.afterClosed().subscribe(
  //       (res => {
  //         this.empService.getEmployees().subscribe(
  //             (response) => {
  //               this.EMPS = response;
  //               this.dataSource =  new MatTableDataSource(this.EMPS);
  //               this.dataSource.paginator = this.paginator;
  //               this.dataSource.sort = this.sort;
  //
  //             },
  //             (error) => console.log('error'+error)
  //         )
  //       })
  //   );
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
        // dialogRef.afterClosed().subscribe(
        //     (res => {
        //         this.groupeservice.getGroupes().subscribe(
        //             (response) => {
        //                 this.groupes = response;
        //                 this.dataSource =  new MatTableDataSource(this.groupes);
        //                 this.dataSource.paginator = this.paginator;
        //                 this.dataSource.sort = this.sort;
        //
        //             },
        //             (error) => console.log('error'+error)
        //         )
        //     })
        // );
    }











  showNotification(from, align){
    const type = ['','info','success','warning','danger'];

    // const color = Math.floor((Math.random() * 4) + 1);

    $.notify({
      icon: "notifications",
      message: " CLASS was inserted successfully "
    },{
      type: type[2],
      timer: 4000,
      placement: {
        from: from,
        align: align
      },
      template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
          '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
          '<i class="material-icons" data-notify="icon">notifications</i> ' +
          '<span data-notify="title">{1}</span> ' +
          '<span data-notify="message">{2}</span>' +
          '<div class="progress" data-notify="progressbar">' +
          '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
          '</div>' +
          '<a href="{3}" target="{4}" data-notify="url"></a>' +
          '</div>'
    });
  }
  showNotificationError(from, align){
    const type = ['','info','success','warning','danger'];

    // const color = Math.floor((Math.random() * 4) + 1);

    $.notify({
      icon: "notifications",
      message: " error of insertion check your data "
    },{
      type: type[4],
      timer: 4000,
      placement: {
        from: from,
        align: align
      },
      template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
          '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
          '<i class="material-icons" data-notify="icon">notifications</i> ' +
          '<span data-notify="title">{1}</span> ' +
          '<span data-notify="message">{2}</span>' +
          '<div class="progress" data-notify="progressbar">' +
          '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
          '</div>' +
          '<a href="{3}" target="{4}" data-notify="url"></a>' +
          '</div>'
    });
  }


  }
