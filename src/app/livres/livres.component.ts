import { Component, OnInit } from '@angular/core';
import { Livre } from '../livre' ;
import { LivreService } from '../livre.service';

@Component({
  selector: 'app-livres',
  templateUrl: './livres.component.html',
  styleUrls: ['./livres.component.css']
})
export class LivresComponent implements OnInit {
  
  livres: Livre[];

  getLivres(): void {
     this.livreService.getLivres().subscribe(livres => this.livres = livres);
  }

  add(nom: string): void {
    nom = nom.trim();
    if (!nom) { return; }
    this.livreService.addLivre({ nom } as Livre)
      .subscribe(livre => {
        this.livres.push(livre);
      });
  }

  delete(livre: Livre): void {
    this.livres = this.livres.filter(h => h !== livre);
    this.livreService.deleteLivre(livre).subscribe();
  }

  constructor(private livreService: LivreService) { }

  ngOnInit() {
    this.getLivres();
  }

}
