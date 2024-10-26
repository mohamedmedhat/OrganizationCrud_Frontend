import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { organizationProductionEnv } from '../../environments/env-prod';
import { ISendInvitationRequest } from '../shared/models/organization-request.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InvitationsService {
  constructor(private http: HttpClient) {}

  sendToUser(
    organizationId: string,
    body: ISendInvitationRequest
  ): Observable<any> {
    const url = organizationProductionEnv.inviteUrl(organizationId);
    return this.http.post(url, body);
  }

  accept(organizationId: string): Observable<any> {
    const url = organizationProductionEnv.acceptInvitationUrl(organizationId);
    return this.http.post(url, null);
  }

  cancel(organizationId: string): Observable<any> {
    const url = organizationProductionEnv.cancelInvitationUrl(organizationId);
    return this.http.post(url, null);
  }
}
