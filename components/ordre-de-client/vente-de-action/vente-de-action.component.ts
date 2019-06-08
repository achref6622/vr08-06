import { Component, OnInit } from '@angular/core';
import {VenteService} from '../../../services/vente.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MessageService} from 'primeng/api';
import {OrdreService} from '../../../services/ordre.service';

@Component({
  selector: 'app-vente-de-action',
  templateUrl: './vente-de-action.component.html',
  styleUrls: ['./vente-de-action.component.css']
})
export class VenteDeActionComponent implements OnInit {

  idachat: any ;
  Ordre: any ;
  // tslint:disable-next-line:max-line-length
  constructor( private route: ActivatedRoute, private messageService: MessageService , private venteservice: VenteService ,  private router: Router , private Ordreservice: OrdreService) { }

  ngOnInit() {
    this.idachat = this.route.snapshot.paramMap.get('id');
    this.getbyaction() ;


  }
  getbyaction() {
    // @ts-ignore
    this.Ordreservice.gerordre(this.idachat).subscribe(data => {

 this.venteservice.getbyaction(data.portefeuillAction.action.id).subscribe(res => {
    this.Ordre = res ;




    }, ex => {
      console.log(ex);
    });
  });

  }

}
