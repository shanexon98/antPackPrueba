import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UsersService } from './core/services/user/users.service';
import { Users } from './shared/models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = ['img', 'name', 'email', 'city', 'company'];
  dataSource : any;
  users: any;
  constructor(private userService: UsersService){

  }
  ngOnInit(): void {
      this.getUsers();
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
    console.log(filterValue);

}

  getUsers(){
      this.userService.getUsers().subscribe(response=>{

        this.dataSource = new MatTableDataSource();
    this.dataSource.data = response;
    console.log(this.dataSource.data);
    this.dataSource.sort=this.sort;
    this.dataSource.paginator = this.paginator;
      })
    }







}

