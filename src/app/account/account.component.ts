
import { Component, inject, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AccountResponse } from './interfaces/account-response.interface';
import { AccountService } from './services/account.service';
import { AuthService } from '../user/services/auth.service';
import { LoginResponse } from '../user/interfaces/login-response.interface';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {

  displayedColumns: string[] = ['id', 'numero', 'saldo', 'acciones'];
  dataSource = new MatTableDataSource<AccountResponse>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;


  private  accountService = inject(AccountService);
  private authService= inject(AuthService);
  private customerId: number | undefined;

  constructor() {
   
   }

   ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


   ngOnInit(): void {         
       
      this.customerId = this.authService.auth()?.user?.id || undefined;
      //this.loadAccounts(this.customerId); 
      this.loadAccounts(); 
    
  }

  //loadAccounts(customerId: number | undefined): void {
  loadAccounts(): void {
      //if (customerId !== undefined) {
        //this.accountService.getAllAccounts(customerId).subscribe({
        this.accountService.getAllAccounts().subscribe({
          next: (accounts: AccountResponse[]) => {
            this.dataSource.data = accounts;
            console.log('Cuentas del cliente:', accounts);
          },
          error: (error) => {
            console.error('Error al cargar cuentas del cliente:', error);
          }
        });
      //}
    }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
