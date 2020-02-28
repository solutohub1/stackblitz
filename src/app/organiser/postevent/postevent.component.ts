import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { OrgeventService } from '../orgevent.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-postevent',
  templateUrl: './postevent.component.html',
  styleUrls: ['./postevent.component.css']
})
export class PosteventComponent implements OnInit {
  posteventForm;
  constructor(public fb:FormBuilder,public os:OrgeventService,public route:Router) { 
    this.posteventForm=this.fb.group(
      {
        eventname:[],
        eventcategory:[],
        eventlocation:[],
        eventstartdate:[],
        eventclosedate:[],
        eventdisc:[],
        eventbroucher:[],
        title:[],
        firstName:[],
        lastName:[],
        bpn:[],
        pmn:[],
        email:[],
        password:[],
        confirmPassword:[],
        acceptTerms:[],
}
    )
  }


  submit(){
    
    this.os.save(this.posteventForm.value)
    alert('event added succesfully')
    this.route.navigate(['/'])
  }

  ngOnInit() {
  }

}
