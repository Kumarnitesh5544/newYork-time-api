import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{TopstoryService} from '../topstory.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})

  export class TopbarComponent implements OnInit{
  topic:any;
    constructor(private route:Router , private topstory: TopstoryService){ }
    ngOnInit():void{
         
    }
    newsSearch(){
     // console.log(this.topic);
      this.route.navigate(['welcome',this.topic])
     //  this.topic="";
   
   
    }
  }


