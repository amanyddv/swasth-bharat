import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.css']
})
export class ScanComponent {
constructor(private route: ActivatedRoute){
}
name="Rahul Rastogi"
ngOnInit():void{
  this.route.params.subscribe(params => {
    // Access individual parameter values using params object
    const paramValue = params['id'];
    // Use the parameter value as needed
    console.log('Parameter value:', paramValue);
  });
  
}

}
