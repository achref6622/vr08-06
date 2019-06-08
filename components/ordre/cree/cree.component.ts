import { Component, OnInit } from '@angular/core';
import {OrdreService} from '../../../services/ordre.service';
import {AchatService} from '../../../services/achat.service';
import {VenteService} from '../../../services/vente.service';
import {UserService} from '../../../services/user.service';
import {ActivatedRoute} from '@angular/router';
import {Confirmation, ConfirmationService, MessageService} from 'primeng/api';

@Component({
  selector: 'app-cree',
  templateUrl: './cree.component.html',
  styleUrls: ['./cree.component.css']
})
export class CreeComponent implements OnInit {

  ordre: any = {};
  select: any ;
  Order: any [] = new Array();
  etat = 'Crée' ;
  constructor(private ordreservice: OrdreService , private achatservice: AchatService , private venteservice: VenteService,
              private userService: UserService, private route: ActivatedRoute,
              private confirmationService: ConfirmationService, private messageService: MessageService) { }

  ngOnInit() {
    this.select = 'tous' ;
    this.getAll() ;
  }
  private getAll() {

    this.userService.getUser().subscribe( res => {
      this.ordreservice.findOrderByGestionnaire(res.id, this.etat).subscribe(data => {
        this.Order = data ;

        console.log(data);
      }, ex => {
        console.log(ex);
      });
    });
  }

  private getachat() {
    this.userService.getUser().subscribe( res => {
      this.achatservice.findOrderByGestionnaire(res.id, this.etat).subscribe(data => {
        this.Order = data ;

        console.log(data);
      }, ex => {
        console.log(ex);
      });
    });
  }
  private getvente() {
    this.userService.getUser().subscribe( res => {
      this.venteservice.findOrderByGestionnaire(res.id, this.etat).subscribe(data => {
        this.Order = data ;

        console.log(data);
      }, ex => {
        console.log(ex);
      });
    });
  }



  menuselected(val: any) {
    this.customfunction( val) ;
    if (this.select === 'tous') {
      this.getAll() ;
    } else if (this.select === 'achat') {
      this.getachat() ;
    } else {
      this.getvente() ;
    }


  }

  customfunction(val: any) {

    this.select = val ;
  }

  annuler(ordr) {
    this.confirmationService.confirm({
      message: 'Voullez vous annuler cet ordre?',
      accept: () => {
        Object.assign(this.ordre, ordr);

        this.ordreservice.annuler(this.ordre).subscribe( res => {
          if (res.success) {
            this.Order = this.Order.filter(obj => obj !== ordr);
            this.messageService.add({ severity: 'success', summary: res.message});
          } else {
            this.messageService.add({ severity: 'warn', summary: res.message});
          }
        }, ex => {
          this.messageService.add({ severity: 'warn', summary: 'Erreur:', detail: 'Opération non effectuée'});
          console.log(ex);
        });
      }
    });
  }


  executer(ordr) {
    this.confirmationService.confirm({
      message: 'Voullez vous executer cet ordre?',
      accept: () => {
        Object.assign(this.ordre, ordr);

        this.ordreservice.executer(this.ordre).subscribe( res => {
          if (res.success) {
            this.Order = this.Order.filter(obj => obj !== ordr);
            this.messageService.add({ severity: 'success', summary: res.message});
          } else {
            this.messageService.add({ severity: 'warn', summary: res.message});
          }
        }, ex => {
          this.messageService.add({ severity: 'warn', summary: 'Erreur:', detail: 'Opération non effectuée'});
          console.log(ex);
        });
      }
    });
  }

}
