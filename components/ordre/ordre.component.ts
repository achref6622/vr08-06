import {AfterContentInit, AfterViewChecked, Component, DoCheck, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {DropdownModule} from 'primeng/dropdown';
import {Ordre} from '../../model/ordre';
import {OrdreService} from '../../services/ordre.service';
import {Achat} from '../../model/achat';
import {Vente} from '../../model/vente';
import {VenteService} from '../../services/vente.service';
import {AchatService} from '../../services/achat.service';
import {AuthenticationService} from '../../services/authentication.service';
import {UserService} from '../../services/user.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-ordre',
  templateUrl: './ordre.component.html',
  styleUrls: ['./ordre.component.css']
})
export class OrdreComponent implements OnInit, DoCheck {
select: any ;
Order: any [] = new Array();
etat: string;
  constructor(private Ordreservice: OrdreService , private achatservice: AchatService , private venteservice: VenteService,
              private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {


    const stat = this.route.snapshot.paramMap.get('param');
    if ( stat === 'cree') {
      this.etat = 'Crée';
    }  else if ( stat === 'executee') {
      this.etat = 'Executer';
    } else {
      this.etat = 'Annulée';
    }


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

  ngAfterContentInit(): void {

    const stat = this.route.snapshot.paramMap.get('param');
    if ( stat === 'cree') {
      this.etat = 'Crée';
    }  else if ( stat === 'executee') {
      this.etat = 'Executer';
    } else {
      this.etat = 'Annulée';
    }
    this.select = 'tous' ;
    this.getAll() ;

  }

  ngDoCheck(): void {
  }




}
