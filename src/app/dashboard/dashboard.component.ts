import { Component, OnInit } from '@angular/core';
import { Livre } from '../livre';
import { LivreService } from '../livre.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  livres: Livre[] = [];

  constructor(private livreService: LivreService) { }

  ngOnInit() {
    this.getLivres();
  }

  getLivres(): void {
    this.livreService.getLivres()
      .subscribe(livres => this.livres = livres.slice(1, 5));
  }
}