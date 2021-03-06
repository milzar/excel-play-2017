import { Router } from '@angular/router';

import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { CookieService } from "angular2-cookie/services/cookies.service";

import { ApiRoot } from '../classes/api-root';

import { AuthService } from './auth.service';

import { ProgressiveLoader } from '../classes/progressive-loader';

import { Service } from '../classes/service';

import 'rxjs/add/operator/map';

@Injectable()
export class KryptosService extends Service {

  constructor(
    protected router: Router,
    protected http: Http,
    protected cookieService: CookieService,
    protected auth: AuthService
  ) {
    super(router, http, cookieService, auth);
  }

  pullUserLevel() {
    return this.makeGETAPICall('/kryptos/');
  }

  pullRanklist() {
    return this.makeGETAPICall('/kryptos/ranklist');
  }

  submitAnswer(answer) {
    let body = new FormData();
    body.append('answer', answer);
    body.append('csrfmiddlewaretoken', this.cookieService.get('csrftoken'));

    return this.makePOSTAPICall('/kryptos/submitanswer', body);
  }

  pullMyRank() {
    return this.makeGETAPICall('/kryptos/myrank/');
  }

}
