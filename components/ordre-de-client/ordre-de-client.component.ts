import { Component, OnInit } from '@angular/core';
import {Ordre} from '../../model/ordre';
import {UserService} from '../../services/user.service';
import {MessageService} from 'primeng/api';
import {AchatService} from '../../services/achat.service';
import {VenteService} from '../../services/vente.service';
import {ActivatedRoute, Router} from '@angular/router';
import {OrdreService} from '../../services/ordre.service';
import {Client} from '../../model/client';
import {ClientService} from '../../services/client.service';

@Component({
  selector: 'app-ordre-de-client',
  templateUrl: './ordre-de-client.component.html',
  styleUrls: ['./ordre-de-client.component.css']
})
export class OrdreDeClientComponent implements OnInit {




  Client: Client = new Client();
  select: any ;
idclient: string ;
  Ordre: Ordre [] = new  Array() ;
  constructor( private userService: UserService , private route: ActivatedRoute, private messageService: MessageService , private achatservice: AchatService , private venteservice: VenteService ,  private router: Router , private Clientservice: ClientService) { }

  ngOnInit() {
this.select = 'achat' ;
this.idclient = this.route.snapshot.paramMap.get('id');
this.getallachat()

  }

  getallachat() {
    this.Clientservice.findid(this.idclient).subscribe(data => {
      this.achatservice.getmycachat(data.portefeuille.id).subscribe(res => {
        this.Ordre = res ;


      }, ex => {
        console.log(ex);
      });
    });

  }

  getallvente() {
    this.Clientservice.findid(this.idclient).subscribe(data => {

      this.venteservice.getmyvente(data.portefeuille.id).subscribe(res => {
        this.Ordre = res ;



      }, ex => {
        console.log(ex);
      });

    });
  }

  menuselected(val: any) {
    this.customfunction( val) ;
    if (this.select === 'achat') {
      this.getallachat() ;
    }  else {
      this.getallvente() ;
    }


  }

  customfunction(val: any) {

    this.select = val ;
  }






}
