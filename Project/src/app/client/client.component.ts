import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PostServiceService } from '../services/post-service.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  FeatchData:any;
  countData:any[]=[];
  constructor(public dialog: MatDialog,private postData:PostServiceService) {
    this.countData = JSON.parse(localStorage.getItem('Users')??'[]') ;
    console.log(this.countData);

  }

  ngOnInit(): void {
    this.postData.getposts().subscribe((result)=>{
      console.log("results",result);
        this.FeatchData=result;
      })
      
  }

}
