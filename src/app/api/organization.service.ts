import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { organizationProductionEnv } from '../../environments/env-prod';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  constructor(private http: HttpClient) { }

  createOrganization(formGroup: FormGroup){
    const url = organizationProductionEnv.createUrl;
    const formData = formGroup.value
    return this.http.post(url, formData);
  }


}
