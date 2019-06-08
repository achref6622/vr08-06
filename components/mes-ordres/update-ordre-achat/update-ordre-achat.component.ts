import { Component, OnInit } from '@angular/core';
import {Ordre} from '../../../model/ordre';
import {ActionService} from '../../../services/action.service';
import {ActivatedRoute, Router} from '@angular/router';
import {OrdreService} from '../../../services/ordre.service';
import {MessageService} from 'primeng/api';
import {PortefeuilleAction} from '../../../model/portefeuille-action';
import {Action} from '../../../model/action';
import {PortefeuilleActionId} from '../../../model/portefeuille-action-id';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-update-ordre-achat',
  templateUrl: './update-ordre-achat.component.html',
  styleUrls: ['./update-ordre-achat.component.css']
})
export class UpdateOrdreAchatComponent implements OnInit {
  ordre: Ordre = new  Ordre();
  action: any[] = new Array() ;
  actionselected: Action = new Action() ;
  actionnom: any ;
  id: any ;
  // tslint:disable-next-line:max-line-length
  constructor(  private Actionservice: ActionService , private userService: UserService ,   private router: Router , private route: ActivatedRoute , private ordreservice: OrdreService , private messageService: MessageService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getaction() ;
    this.getordre() ;



  }
  getaction() {
    this.Actionservice.get().subscribe(res => {
      this.action = res ;
    }, ex => {
      console.log(ex);
    });
  }

  getordre() {
    this.ordreservice.gerordre(this.id).subscribe(res => {
      this.ordre = res ;

      this.actionnom = this.ordre.portefeuillAction.action.nom ;
    }, ex => {
      console.log(ex);
    });
  }

  updateordre() {
    this.Actionservice.getaction(this.actionnom).subscribe(res => {
      this.actionselected = res ;
      console.log(res) ;
      this.actionnom = this.ordre.portefeuillAction.action.nom ;
    }, ex => {
      console.log(ex);
    });

    // @ts-ignore
    this.userService.getUser().subscribe( res => {

      const portefeuillAction = new PortefeuilleAction();
      const action = new Action();
      action.id = this.actionselected.id ;
      portefeuillAction.action = action;
      portefeuillAction.portefeuille = res.portefeuille;
      this.ordre.portefeuillAction = portefeuillAction ;
      const id = new PortefeuilleActionId();
      id.idAction = this.actionselected.id ;
      id.idPortefeuille = res.portefeuille.id;
      portefeuillAction.id = id ;

      this.ordreservice.updateachat(this.ordre).subscribe(data => {
      if (data.success) {
        this.messageService.add({severity: 'success', summary: data.message});

      } else {
        this.messageService.add({severity: 'warn', summary: data.message});
      }
    }, ex => {
      this.messageService.add({severity: 'error', summary: 'Erreur de modification :', detail: 'Modification  Non  effectué'});
      console.log(ex);
    });
    });
  }

}
