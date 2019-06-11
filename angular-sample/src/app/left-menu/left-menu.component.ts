import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {
   isCaseAccepted=false;
   noCaseAccepted=false;
  screeningCompleted=true;
  appReviewCompleted=true;
   fill=true;
  constructor() { }

  ngOnInit() {
    if(this.noCaseAccepted){
      console.log("ingreo");
      //$('#step-indicator').addClass('progressbar');
      this.addClass('step-indicator', 'noAccepted' )
    }else if(!this.noCaseAccepted && this.screeningCompleted && this.appReviewCompleted){
      this.addClass('step-indicator', 'caseAccepted' )
    }else{
      $('#step-indicator').removeClass('noAccepted');
    }
  }
  addClass(className: string, addingClass){
    const elements = document.getElementsByClassName(className) ;

    let i=0;
    while ( i<elements.length){
      const e = elements[i];
      e.classList.add(addingClass);
      i++;
    }
  }
}
