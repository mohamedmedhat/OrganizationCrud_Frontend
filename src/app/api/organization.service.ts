import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { organizationProductionEnv } from '../../environments/env-prod';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrganizationService {
  constructor(private http: HttpClient) {}

  createOrganization(formGroup: FormGroup) {
    const url = organizationProductionEnv.createUrl;
    const formData = formGroup.value;
    return this.http.post(url, formData);
  }

  deleteOrganization(id: string): Observable<any> {
    const url = organizationProductionEnv.deleteUrl(id);
    return this.http.delete(url);
  }

  updateOrganozation(id: string, formGroup: FormGroup): Observable<any> {
    const formData = formGroup.value;
    const url = organizationProductionEnv.updateUrl(id);
    return this.http.put(url, formData);
  }

  getAllOrganizations(page: number, size: number): Observable<any> {
    const url = organizationProductionEnv.getAllUrl(page, size);
    return this.http.get(url);
  }

  getOrganization(id: string): Observable<any> {
    const url = organizationProductionEnv.getOneUrl(id);
    return this.http.get(url);
  }
}
