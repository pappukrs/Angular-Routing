import { Component,OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
userId:string | null=null;

  constructor(private route: ActivatedRoute){

}

ngOnInit():void {
// console.log("user id is",this.route.snapshot.paramMap.get("id"))
//   this.userId = this.route.snapshot.paramMap.get("id");
this.route.params.subscribe(param => {
  console.log("user id is",param['id'])
  this.userId = param['id'];
})

}

}
