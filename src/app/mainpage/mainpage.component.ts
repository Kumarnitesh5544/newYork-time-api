import { Component, OnInit } from '@angular/core';
import{ TopstoryService} from '../topstory.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {


  TopStorydata: Array<any>=[];
    
  constructor(private TopStoryService: TopstoryService){}
  ngOnInit():void{
  this.TopStoryService.getdata().subscribe((response:any)=>{
  //   console.log(response.json);
      this.TopStorydata=response.results ;
  })
 //this.TopStorydata=this.TopStoryService.getdata()
}  

}
