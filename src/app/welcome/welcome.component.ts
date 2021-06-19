import { Component, OnInit } from '@angular/core';
import{ TopstoryService} from '../topstory.service';
import {ActivatedRoute , Router} from '@angular/router';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

getdata:any;
  

 id1:any;
 TopStorydata:  Array<any>=[];
 constructor( private TopStoryService : TopstoryService  , private router : Router ,private route : ActivatedRoute){

 this.id1=this.route.params.subscribe((res:any)=>{
  this.TopStoryService.searchbyname(res.id).subscribe((res:any)=>{
     
    this.TopStorydata=(res.response.docs);
 })

 })

}
  
  ngOnInit():void{

}
}