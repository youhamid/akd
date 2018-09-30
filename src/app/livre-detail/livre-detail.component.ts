import { Component, OnInit, Input } from '@angular/core';
import  { Livre } from '../livre';
import { ActivatedRoute } from '@angular/router';
import { LivreService }  from '../livre.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-livre-detail',
  templateUrl: './livre-detail.component.html',
  styleUrls: ['./livre-detail.component.css']
})
export class LivreDetailComponent implements OnInit {

  @Input() livre: Livre;

  constructor(
    private route: ActivatedRoute,
    private livreService: LivreService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getLivre();
  }

  getLivre(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.livreService.getLivre(id)
      .subscribe(livre => this.livre = livre);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.livreService.updateLivre(this.livre)
      .subscribe(() => this.goBack());
  }
}
