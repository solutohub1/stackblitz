import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { UservService } from '../userv.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.css']
})
export class UserregisterComponent implements OnInit {
  ureg;
  constructor(public fb:FormBuilder,public us:UservService,public rt:Router) { 
    this.ureg=this.fb.group(
      {
        name:['',Validators.required],
        uname:['',Validators.required],
        email:['',Validators.required],
        pwd:['',Validators.required],
    }
    )
    }

    create(){
      this.us.adduser(this.ureg.value).then((res)=>{
        console.log(res);
        alert("Congrats! Registration Successful!")
        this.rt.navigate(['user/userlogin']);
      })
    }

  ngOnInit() {
  }

}
