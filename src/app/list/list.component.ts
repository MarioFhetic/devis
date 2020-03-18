import { Component, OnInit } from '@angular/core';

import {HttpService} from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  //On va créer un objet uqi contient tous les résultats de l'API de biere
  brews: Object;

  // on créer une instance _http ou ça peut être tout ce que l'on veut, mtn on peut utiliser ça dans notre composant pour y accéder
  constructor(private _http: HttpService) { }

  // lifecycleHook il run dès que le composant est chargé
  ngOnInit(): void { 
    this._http.getBeer().subscribe(data =>
      {
        this.brews = data;
        console.log(this.brews)
      });
  }
}
 