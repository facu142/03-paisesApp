import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap } from "rxjs/operators";

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private PaisService: PaisService


  ) { }

  ngOnInit(): void {
    
    this.activatedRoute.params
      .pipe(
        switchMap( (param) => this.PaisService.getPaisPorAlpha( param.id ) )
      )
      .subscribe(res => {
        console.log(res);
      })
    
    
    /* 
    this.activatedRoute.params
      .subscribe(({ id }) => {
        console.log(id);
        this.PaisService.getPaisPorAlpha( id )
        .subscribe( pais => {
          console.log(pais);
        })
      })
    */

  }

}
