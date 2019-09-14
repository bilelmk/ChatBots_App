import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Chatbot} from '../classes/chatbot';
import {ChatbotsService} from '../services/chatbots.service';
import {SupprimerchatbotComponent} from './supprimerchatbot/supprimerchatbot.component';
import {ModifierchatbotComponent} from './modifierchatbot/modifierchatbot.component';
import {AjouterchatbotComponent} from './ajouterchatbot/ajouterchatbot.component';
declare var $: any;

@Component({
  selector: 'app-icons',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  chatbots: Chatbot[] = null ;
  displayedColumns: string[] = ['name','description' ,'isActive','action'];

  dataSource: MatTableDataSource<Chatbot>;

  constructor(public dialog: MatDialog , private chatbotservice :ChatbotsService) { }

  ngOnInit() {
    this.chatbotservice.getChatbots().subscribe(
        (res) => {
          this.chatbots = res ;
          this.dataSource =  new MatTableDataSource(this.chatbots);
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
    const dialogRef = this.dialog.open(SupprimerchatbotComponent, {
      width: '800px',data: id
    });
    dialogRef.afterClosed().subscribe(
        (res => {
    this.chatbotservice.getChatbots().subscribe(
        (res) => {
          this.chatbots = res ;
          this.dataSource =  new MatTableDataSource(this.chatbots);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
    )
        })
    );
  }

  openPatchDialog(bot : any): void {
    const dialogRef = this.dialog.open(ModifierchatbotComponent, {
      width: '800' ,height :'700',data: bot
    });
      dialogRef.afterClosed().subscribe(
          (res => {
            this.chatbotservice.getChatbots().subscribe(
                (res) => {
                  this.chatbots = res ;
                  this.dataSource =  new MatTableDataSource(this.chatbots);
                  this.dataSource.paginator = this.paginator;
                  this.dataSource.sort = this.sort;
                }
            )
          })
      );
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(AjouterchatbotComponent, {
      width: '800' ,height :'500'
    });
    dialogRef.afterClosed().subscribe(
        (res => {
          this.chatbotservice.getChatbots().subscribe(
              (res) => {
                this.chatbots = res ;
                this.dataSource =  new MatTableDataSource(this.chatbots);
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;
              }
          )
        })
    );
  }
}
