import { Component} from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from "../../services/pais.service";


@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent  {

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];
  
  constructor(private PaisService: PaisService) { }

  buscar(termino : string) {
    this.hayError = false;
    this.termino = termino

    this.PaisService.buscarRegion(termino)
      .subscribe(paises => {
        this.paises = paises;
        console.log(paises);
        
      }, (err) => {
        this.hayError = true;
        this.paises = [];
      });
  }
}
