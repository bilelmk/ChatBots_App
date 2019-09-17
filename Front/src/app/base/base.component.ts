import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {AjouterconnaissanceComponent} from './ajouterconnaissance/ajouterconnaissance.component';
import {Connaissance} from '../classes/connaissance';
import {ConnaissanceService} from '../services/connaissance.service';
import {ModifierconnaissanceComponent} from './modifierconnaissance/modifierconnaissance.component';
import {SupprimerconnaissanceComponent} from './supprimerconnaissance/supprimerconnaissance.component';
import {Utilisateur} from '../classes/utilisateur';
import {Chatbot} from '../classes/chatbot';

@Component({
  selector: 'app-professor-profile',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  connaissances: Connaissance[] = null ;
  displayedColumns: string[] = ['id','question','reponse','chatbots','actions'];

   dataSource: MatTableDataSource<Connaissance>;

  constructor(public dialog: MatDialog , private cnservice : ConnaissanceService) { }

  ngOnInit() {
    this.cnservice.getConnaissances().subscribe(
        (res) => {
          this.connaissances = res ;
          this.dataSource =  new MatTableDataSource(this.connaissances);
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
    const dialogRef = this.dialog.open(SupprimerconnaissanceComponent, {
      width: '800px',data: id
    });
      dialogRef.afterClosed().subscribe(
          (res => {
              this.cnservice.getConnaissances().subscribe(
                  (res) => {
                      this.connaissances = res ;
                      this.dataSource =  new MatTableDataSource(this.connaissances);
                      this.dataSource.paginator = this.paginator;
                      this.dataSource.sort = this.sort;
                  }
              )
          })
      );
  }

  openPatchDialog(bot : any): void {
    const dialogRef = this.dialog.open(ModifierconnaissanceComponent, {
      width: '800' ,height :'700',data: bot
    });
      dialogRef.afterClosed().subscribe(
          (res => {
              this.cnservice.getConnaissances().subscribe(
                  (res) => {
                      this.connaissances = res ;
                      this.dataSource =  new MatTableDataSource(this.connaissances);
                      this.dataSource.paginator = this.paginator;
                      this.dataSource.sort = this.sort;
                  }
              )
          })
      );
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(AjouterconnaissanceComponent, {
      width: '800' ,height :'500'
    });
    dialogRef.afterClosed().subscribe(
        (res => {
          this.cnservice.getConnaissances().subscribe(
              (res) => {
                this.connaissances = res ;
                this.dataSource =  new MatTableDataSource(this.connaissances);
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;
              }
          )
        })
    );
  }

    getBotName( cn : Connaissance ){
        let res : String = ""
        cn.chatBots.map(
            (c) => res = res +
                `
${c.name}
`
        );
        return res
    }
}



