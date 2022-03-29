import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddClientModelComponent } from '../add-client-model/add-client-model.component';

import { PostServiceService } from '../services/post-service.service'
import { ButtonRendererComponent } from './ButtonRendererComponent';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  FeatchData: any;
  rowData = [];
  api:any;
  public searchValue: any;
  
  columnDefs = [

    { headerName: 'ID', field: 'id', sortable: true, filter: true, width: 115 },
    { headerName: 'Name', field: 'name', sortable: true, filter: true, editable: true, },
    { headerName: 'Birthday', field: 'birthday', sortable: true, filter: true,  },
    { headerName: 'Department', field: 'department', sortable: true, filter: true, },
    // If you want only one department will show on table so use this code 
    //cellRenderer:(data: any)=>{
    //   return data.value[0]
    // },
    { headerName: 'Email', field: 'email', sortable: true, filter: true, width: 300 },
    { headerName: 'CreatedAt', field: 'createdAt', sortable: true, filter: true, width: 200, editable: true },
    { headerName: 'Country', field: 'country', sortable: true, filter: true, width: 220 },
    {
      headerName: 'Delete',
      cellRenderer: 'buttonRenderer',
      cellRendererParams: {
      onClick: this.onDeleteButtonClick.bind(this),
      label: 'Delete'
      },
    },
  ];
  frameworkComponents: { buttonRenderer: any; };

  onDeleteButtonClick(params:any)
{
  var r=confirm("Are you sure want to delete");
  if (r==true)
  {
    this.api.updateRowData({remove: [params.data]});
  }
  else
  {
   
  }

}
onGridReady(params:any)
{
 
  this.api = params.api;
}

  countData: any[] = [];
  constructor(public dialog: MatDialog, private postData: PostServiceService) {
    this.countData = JSON.parse(localStorage.getItem('Users') ?? '[]');
    //console.log(this.countData);
    this.frameworkComponents = {
      buttonRenderer: ButtonRendererComponent,
    }

  }

  ngOnInit(): void {
    this.postData.getposts().subscribe((result) => {
      // console.log("results", result);
      this.FeatchData = result;
      this.rowData = this.FeatchData;
      //console.log("row data", this.rowData);
    })

  }


  openDialog() {
    const dialogRef = this.dialog.open(AddClientModelComponent, { disableClose: true });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
