import { Component,OnInit } from '@angular/core';
import * as $ from 'jquery';
 
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

	constructor() {
	  
	}
	
	ngOnInit() {
		$(document).ready(function(){
			//alert(‘JQuery is working!!’);
			console.log('Everting Is working...');
			//alert('JQuery Working....');
		});
	}

}
