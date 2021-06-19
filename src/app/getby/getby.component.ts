import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {TopstoryService} from '../topstory.service';
@Component({
  selector: 'app-getby',
  templateUrl: './getby.component.html',
  styleUrls: ['./getby.component.css']
})
export class GetbyComponent implements OnInit {
  id1: any;
  data:Array<any>=[];
  constructor(private router:Router,private topstoryservice:TopstoryService,private route :ActivatedRoute) {
    this.id1=this.route.params.subscribe((res:any)=>{
     // this.data=(res.results);
    // console.log(res);
     this.topstoryservice.getbyname(res.id).subscribe((res:any)=>{
      this.data=(res.results);
  })
  });
   }

  ngOnInit(): void {
    
  }

}
