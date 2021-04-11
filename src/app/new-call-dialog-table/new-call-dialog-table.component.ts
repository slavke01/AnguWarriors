import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-call-dialog-table',
  templateUrl: './new-call-dialog-table.component.html',
  styleUrls: ['./new-call-dialog-table.component.css'],
})
export class NewCallDialogTableComponent implements OnInit {
  constructor() {
    this.tabela = [
      {
        name: 'Mirko1',
        lastName: 'Mirkovic',
        Account: 12345,
        Adresa: 'NS',
        Prioritet: 'nema',
      },
      {
        name: 'Mirko2',
        lastName: 'Mirkovic',
        Account: 12345,
        Adresa: 'NS',
        Prioritet: 'nema',
      },
      {
        name: 'Mirko3',
        lastName: 'Mirkovic',
        Account: 12345,
        Adresa: 'NS',
        Prioritet: 'nema',
      },
    ];
  }
  proba="Jebo te bog";
  proba2= {
    name: 'Mirko',
    lastName: 'Mirkovic',
    Account: 12345,
    Adresa: 'NS',
    Prioritet: 'nema',
  };
  tabela=[];
  ngOnInit(): void {
    
  }
}
