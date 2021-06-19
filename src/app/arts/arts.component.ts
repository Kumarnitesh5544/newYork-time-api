import { Component, OnInit } from '@angular/core';
import{ TopstoryService} from '../topstory.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-arts',
  templateUrl: './arts.component.html',
  styleUrls: ['./arts.component.css']
})
export class ArtsComponent implements OnInit {

  
  TopStorydata: Array<any>=[];
    
  constructor(private TopStoryService: TopstoryService){}
  ngOnInit():void{
  this.TopStoryService.getdata().subscribe((response:any)=>{
   //  console.log(response.results);
      this.TopStorydata=response.results ;
  })
 //this.TopStorydata=this.TopStoryService.getdata()
}  


}
