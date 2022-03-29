import { Component, OnInit } from '@angular/core';
import { PostServiceService } from '../services/post-service.service';

@Component({
  selector: 'app-dynamic-card',
  templateUrl: './dynamic-card.component.html',
  styleUrls: ['./dynamic-card.component.scss']
})
export class DynamicCardComponent implements OnInit {
  profiles: ProfileInfo[]=[];
  cards:cardinfo[]=[];
  FeatchData: any;
  constructor(private postData: PostServiceService) { 
    this.profiles.push(new ProfileInfo());
    this.cards.push(new cardinfo());
  }
  ngOnInit(): void {
    this.postData.getposts().subscribe((result) => {
   
      //console.log("results", result);
      this.FeatchData = result;
     
    })
  }


  add() {
    this.profiles.push(new ProfileInfo());
  }

  addcard(){
    this.cards.push(new cardinfo());
  }
  deletecard(id:number){
    this.FeatchData= this.FeatchData.filter((element: { id: number; }) =>
      element.id !=id)
      console.log("results", this.FeatchData);
    }
     
}

export class ProfileInfo {
  city!: string ;
  state!: string;
  zip!: string;



}
export class cardinfo {
  
  id!: Number ;
  Email!: string;
  birthday!: string;
  Department!: string;


}
