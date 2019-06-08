import { Component, OnInit } from '@angular/core';
import {OrdreService} from '../../../services/ordre.service';
import {AchatService} from '../../../services/achat.service';
import {VenteService} from '../../../services/vente.service';
import {UserService} from '../../../services/user.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-executee',
  templateUrl: './executee.component.html',
  styleUrls: ['./executee.component.css']
})
export class ExecuteeComponent implements OnInit {

  select: any ;
  Order: any [] = new Array();
  etat = 'Executée' ;
  constructor(private Ordreservice: OrdreService , private achatservice: AchatService , private venteservice: VenteService,
              private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.select = 'tous' ;
    this.getAll() ;
  }
  private getAll() {

    this.userService.getUser().subscribe( res => {
      this.Ordreservice.findOrderByGestionnaire(res.id, this.etat).subscribe(data => {
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


}
