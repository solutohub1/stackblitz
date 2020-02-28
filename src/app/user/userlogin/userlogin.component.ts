import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { UservService } from '../userv.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
  ulog;
  constructor(public fb:FormBuilder,public us:UservService,public rt:Router) { 
    this.ulog=this.fb.group({
      uname:['',Validators.required],
      pwd:['',Validators.required]
    })
  }

  login(){
    this.us.check(this.ulog.value).subscribe((res:any[])=>{
      
      if(res.length!=0){

        if(this.ulog.value.pwd==res[0].pwd){
          this.rt.navigate(['']);     
        }

        else{
          alert("Invalid Password");
        }

    }
      else{
        alert("Invalid Username");
    }

    })
  }

  ngOnInit() {
  }

}
