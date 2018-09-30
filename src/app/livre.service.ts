import { Injectable } from '@angular/core';
import { Livre } from './livre';
import { LIVRES } from './mock-livres';
import { Observable, of} from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class LivreService {

  private livresUrl = 'api/livres';  // URL to web api

  /** GET livres from the server */
  getLivres(): Observable<Livre[]> {

    this.messages.add('LivreService: livres récupérés')
    return this.http.get<Livre[]>(this.livresUrl)
    .pipe(
      tap(livres => this.log('livres récupérés')),
      catchError(this.handleError('getLivres', []))
    );
  }

    /** GET hero by id. Will 404 if id not found */     
  getLivre(id: number): Observable<Livre> {
    const url = `${this.livresUrl}/${id}`;
    return this.http.get<Livre>(url).pipe(
      tap(_ => this.log(`livre récupéré id=${id}`)),
      catchError(this.handleError<Livre>(`getLivre id=${id}`))
    );
  }

    /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messages.add(`LivreService: ${message}`);
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

    /** PUT: update the hero on the server */
  updateLivre (livre: Livre): Observable<any> {
    return this.http.put(this.livresUrl, livre, httpOptions).pipe(
      tap(_ => this.log(`livre mis à jour id=${livre.id}`)),
      catchError(this.handleError<any>('updateLivre'))
    );
  }

    /** POST: add a new hero to the server */
  addLivre (livre: Livre): Observable<Livre> {
    return this.http.post<Livre>(this.livresUrl, livre, httpOptions).pipe(
      tap((hero: Livre) => this.log(`Livre ajouté  w/ id=${livre.id}`)),
      catchError(this.handleError<Livre>('addLivre'))
    );
  }

    /** DELETE: delete the livre from the server */
  deleteLivre (livre: Livre | number): Observable<Livre> {
    const id = typeof livre === 'number' ? livre : livre.id;
    const url = `${this.livresUrl}/${id}`;

    return this.http.delete<Livre>(url, httpOptions).pipe(
      tap(_ => this.log(`Livre supprimé id=${id}`)),
      catchError(this.handleError<Livre>('deleteLivre'))
    );
  }

    /* GET livres whose name contains search term */
  searchLivres(term: string): Observable<Livre[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Livre[]>(`${this.livresUrl}/?nom=${term}`).pipe(
      tap(_ => this.log(`livres trouvés "${term}"`)),
      catchError(this.handleError<Livre[]>('searchLivres', []))
    );
  }
  
  constructor(
    private http: HttpClient,
    private messages: MessageService) { }
}
