import {Component, OnInit} from '@angular/core';
import {StepIndicator} from "../step-indicator";

declare var $: any;

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {
  isCaseAccepted = false;
  noCaseAccepted = false;
  screeningCompleted = true;
  appReviewCompleted = true;
  fill = true;

  constructor() {
  }

  ngOnInit() {

    const stepConfig: StepIndicator [] = [];

    stepConfig.push({
      DEFAULT:'',
      INDICATOR_CASE_ASSIGNMENT: 'InProgress',
      INDICATOR_SCREENING_REVIEW: 'InProgress',
      INDICATOR_APPLICATION_REVIEW: 'InProgress',
      INDICATOR_PROPOSED_RESOLUTION:'InProgress'
    });


    stepConfig.forEach(function (step, i) {
      const case_accepted=(step.INDICATOR_CASE_ASSIGNMENT === 'Completed');
      const sr_review=(step.INDICATOR_SCREENING_REVIEW === 'Completed');
      const ap_review=(step.INDICATOR_APPLICATION_REVIEW === 'Completed');
      const res_review=(step.INDICATOR_PROPOSED_RESOLUTION === 'Completed');

      console.log("acepte----",case_accepted);
      console.log("acepte----",sr_review);
      console.log("acepte----",ap_review);
      console.log("acepte----",res_review);
      if (!case_accepted && !sr_review && !ap_review && !res_review) {
        console.log("Case_no_Accepted")
      } else if (case_accepted && !sr_review && !ap_review && !res_review) {
        console.log("Case_accepted")

      } /*else if (configStep[0].INDICATOR_CASE_ASSIGNMENT === 'Completed' && configStep[0].INDICATOR_SCREENING_REVIEW === 'Completed' && configStep[0].INDICATOR_APPLICATION_REVIEW === 'InProgress') {
        console.log(" ingreso aca3333333")
        return stepConfig.sr_completed; //screening compelted

      } else if (configStep[0].INDICATOR_CASE_ASSIGNMENT === 'Completed' && configStep[0].INDICATOR_SCREENING_REVIEW === 'InProgress' && configStep[0].INDICATOR_APPLICATION_REVIEW === 'InProgress') {
        console.log(" ingreso aca 4444444")
        return stepConfig.sr_not_completed;
      } else if (configStep[0].INDICATOR_CASE_ASSIGNMENT === 'Completed' && configStep[0].INDICATOR_SCREENING_REVIEW === 'InProgress' && configStep[0].INDICATOR_APPLICATION_REVIEW === 'Completed') {
        console.log(" ingreso aca 555555555555")
        return stepConfig.sr_not_completed;
      }
      else if (configStep[0].INDICATOR_CASE_ASSIGNMENT === 'Completed' && configStep[0].INDICATOR_APPLICATION_REVIEW === 'Completed' && configStep[0].INDICATOR_SCREENING_REVIEW === 'InProgress') {
        console.log(" ingreso aca 666666666666")
        return stepConfig.ar_completed; //screening compelted
      }
      else if (configStep[0].INDICATOR_CASE_ASSIGNMENT === 'Completed' && configStep[0].INDICATOR_APPLICATION_REVIEW === 'Completed' && configStep[0].INDICATOR_SCREENING_REVIEW === 'Completed' && configStep[0].INDICATOR_PROPOSED_RESOLUTION === '') {
        console.log(" ingreso aca 77777777777")
        return stepConfig.sr_ar_completed;
      } else if (configStep[0].INDICATOR_CASE_ASSIGNMENT === 'Completed' && configStep[0].INDICATOR_APPLICATION_REVIEW === 'Completed' && configStep[0].INDICATOR_SCREENING_REVIEW === 'Completed' && configStep[0].INDICATOR_PROPOSED_RESOLUTION === 'Completed') {
        console.log(" ingreso aca 8888888888888")
        return stepConfig.res_completed;
      }
      else if (configStep[0].INDICATOR_CASE_ASSIGNMENT === 'Completed' && configStep[0].INDICATOR_APPLICATION_REVIEW === 'Completed' && configStep[0].INDICATOR_SCREENING_REVIEW === 'Completed' && configStep[0].INDICATOR_PROPOSED_RESOLUTION === 'InProgress') {
        console.log(" ingreso aca 8888888888888")
        return stepConfig.res_in_progress;
      }*/

    });

    if (this.noCaseAccepted) {
      this.addClass('step-indicator', 'noAccepted')
    } else if (!this.noCaseAccepted && this.screeningCompleted && this.appReviewCompleted) {
      this.addClass('step-indicator', 'caseAccepted')
    } else {
    }
  }

  addClass(className: string, addingClass) {
    const elements = document.getElementsByClassName(className);
    let i = 0;
    while (i < elements.length) {
      const e = elements[i];
      e.classList.add(addingClass);
      i++;
    }
  }
}
