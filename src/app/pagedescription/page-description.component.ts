import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DescriptionService } from '../description.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-description',
  templateUrl: './page-description.component.html',
  styleUrls: ['./page-description.component.css']
})
export class PageDescriptionComponent implements OnInit {
  page:any ={};
  current:any = {
    id:0
  }
  constructor(private descriptionService:DescriptionService,private route:ActivatedRoute) {} 
  ngOnInit(): void {
    this.current.id = this.route.snapshot.params['id']
    this.descriptionService.getPagedescription(this.current.id).subscribe (data=>{(this.page = data)
    console.log(this.page)
    console.log(this.page.name)
  })
  
    
  

 
}

}