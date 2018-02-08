//vendors
import { Component, ViewChild, OnInit , AfterViewInit} from '@angular/core';
import {MatTableDataSource, MatSort,MatPaginator} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

//services
import {FormsService} from '../services/forms.service';

//models
import {Form} from '../models/form';

//composent
import {ConfirmDialogComponent} from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-forms-list',
  templateUrl: './forms-list.component.html',
  styleUrls: ['./forms-list.component.css'],
  
})
export class FormsListComponent implements OnInit {

  loader=true;
  displayedColumns = ['name', 'actions'];
  formsList:any;
  dataSource :MatTableDataSource<Form>;


  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngAfterViewInit() {
 }

  constructor(private formsService:FormsService,public dialog: MatDialog  ) {
        this.dataSource=new MatTableDataSource<Form>();
        formsService.getFormsList().subscribe((res:Form[]) =>{
        this.loader=true;
        this.dataSource=new MatTableDataSource<Form>(res);this.loader=true;
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      });
   }

   openDialog(id): void {
      let dialogRef = this.dialog.open(ConfirmDialogComponent, {
        width: '250px',
        data: { content: "Vous êtes sur de supprimer ce formulaire", action: this.delete,id:id }
      });
    }


   delete=(id)=>{
     this.formsService.deleteForm(id);
   }


  ngOnInit() {
  }

}
