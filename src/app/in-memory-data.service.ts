import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const livres = [
        { id: 1, nom: 'Assira' },
        { id: 2, nom: 'Sahih Al Bokhari' },
        { id: 3, nom: 'Sahih Moslim' }
    ];
    return {livres};
  }
}