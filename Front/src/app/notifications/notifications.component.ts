import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Groupe} from '../classes/groupe';
import {SansrepService} from '../services/sansrep.service';
import {SansReponse} from '../classes/SansReponse';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(private  sansrepservice : SansrepService ,public dialog: MatDialog) { }

    questions: SansReponse[] = null ;
    displayedColumns: string[] = ['question' ,'name', 'action'];

    dataSource: MatTableDataSource<SansReponse>;

    resolve(){
        if(this.questions == null ){
            return true
        }
        else if(this.questions.length == 0){
            return true
        }
        else {
            return false
        }
    }


    ngOnInit() {
        this.sansrepservice.getSansRepQuestions().subscribe(
            (res) => {
                this.questions = res;
                this.dataSource =  new MatTableDataSource(this.questions);
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



    supprimer(id){
        this.sansrepservice.DeleteSansRepQuestion(id).subscribe(
            res => {
                this.sansrepservice.getSansRepQuestions().subscribe(
                    (res) => {
                        this.questions = res;
                        this.dataSource =  new MatTableDataSource(this.questions);
                        this.dataSource.paginator = this.paginator;
                        this.dataSource.sort = this.sort;
                    }
                )
            },
            err => console.log(err )
        )
    }








}
