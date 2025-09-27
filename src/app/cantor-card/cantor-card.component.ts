import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cantor-card',
  templateUrl: './cantor-card.component.html',
  styleUrls: ['./cantor-card.component.css']
})
export class CantorCardComponent {

    @Input() cantor:any;
    getListaClasses(){
      return ['badge', 'badge-primary']
    }
    getEstilosCard(){
      return {
        'border-width':this.cantor.id + 'px',
        backgroundColor: this.cantor.id %2 ===0 ? 'lightblue': 'lightgreen'
      };
    }
}

