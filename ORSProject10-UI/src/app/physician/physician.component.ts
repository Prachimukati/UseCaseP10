import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ActivatedRoute } from '@angular/router';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-physician',
  templateUrl: './physician.component.html',
  styleUrls: ['./physician.component.css']
})
export class PhysicianComponent extends BaseCtl {
  errorMessageTitle: string = '';
  errorMessagefullName: string = '';

  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
    super(locator.endpoints.PHYSICIAN, locator, route);
  }

  validateForm(form) {
    let flag = true;
    let validator = this.serviceLocator.dataValidator;
    flag = flag && validator.isNotNullObject(form.fullName);
    flag = flag && validator.isNotNullObject(form.birthDate);
    flag = flag && validator.isNotNullObject(form.phone);
    flag = flag && validator.isNotNullObject(form.specialization);

    return flag;
  }

  populateForm(form, data) {
    form.id = data.id;
    form.fullName = data.fullName;
    form.birthDate = data.birthDate;
    form.phone = data.phone;
    form.specialization = data.specialization;
  }

 
}