import { Component, OnInit } from '@angular/core';
import { elementAt } from 'rxjs';
import { PostServiceService } from '../services/post-service.service';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss']
})
export class CardViewComponent implements OnInit {
  countData:any[]=[];
  FeatchData: any;
  rowData = [];
  constructor( private postData: PostServiceService) { 

    this.countData = JSON.parse(localStorage.getItem('Users')??'[]') ;
    console.log(this.countData);
  }

  ngOnInit(): void {
    this.postData.getposts().subscribe((result) => {
   
      //console.log("results", result);
      this.FeatchData = result;
     
    })
  }
  deletecard(id:number){
    this.FeatchData= this.FeatchData.filter((element: { id: number; }) =>
      element.id !=id)
    }
}
