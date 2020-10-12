import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  name1: string
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', name1:'hi'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', name1:'hi'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', name1:'hi'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', name1:'hi'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B', name1:'hi'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', name1:'hi'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', name1:'hi'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', name1:'hi'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', name1:'hi'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', name1:'hi'},
];
  
@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'name1'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  constructor() { }

  ngOnInit() {
    this.clickPagination();
  }
  clickPagination(){
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
