import { Component} from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';


@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`

  button{
    margin-right: 5px
  }

  `
  ]
})
export class PorRegionComponent  {

  regiones : string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  //paises : Country[] = ''

  regionActiva : string = '';


  constructor ( private paisService : PaisService ) { }

  getClaseCss ( region : string ) :string {
    return region == this.regionActiva ? 'btn-primary' : 'btn-outline-primary' 
  }

  activarRegion ( region : string ){
    this.regionActiva = region

    //TODO Hacer llamado al servicio
  }


}
