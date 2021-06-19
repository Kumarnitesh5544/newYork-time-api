import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'  ;

@Injectable({
  providedIn: 'root'
})
export class TopstoryService {

  constructor(private httpClient :HttpClient) { }

   getdata(){

   return this.httpClient.get(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=tKseGqIlGPj2qsE41qll50nPFah1q9Ga`)
  //  return this.httpClient.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=tKseGqIlGPj2qsE41qll50nPFah1q9Ga`);
  }

  getbyname(id:string){
    return this.httpClient.get(`https://api.nytimes.com/svc/topstories/v2/${id}.json?api-key=tKseGqIlGPj2qsE41qll50nPFah1q9Ga`)
  }
   
    searchbyname(id:string){
    //  return  this.httpClient.get(`https://api.nytimes.com/svc/topstories/v2/${id}.json?api-key=tKseGqIlGPj2qsE41qll50nPFah1q9Ga`)
   return this.httpClient.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${id}&api-key=tKseGqIlGPj2qsE41qll50nPFah1q9Ga`);
  }
    
}
