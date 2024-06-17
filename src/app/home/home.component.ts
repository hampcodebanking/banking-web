import { Component, OnInit } from '@angular/core';
import { AuthService } from '../user/services/auth.service';
import { LoginResponse } from '../user/interfaces/login-response.interface';
import { TransactionService } from '../transaction/services/transaction.service';
import { TransactionResponse } from '../transaction/interfaces/transaction-response.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userFullName: string = ''; // Valor por defecto
  transactions: TransactionResponse[] = []; // Arreglo para almacenar las transacciones
  filteredTransactions: TransactionResponse[] = []; // Arreglo para almacenar las transacciones filtradas
  startDate: Date | null = null; // Fecha de inicio para el filtro
  endDate: Date | null = null; // Fecha de fin para el filtro

  constructor(
    private authService: AuthService,
    private transactionService: TransactionService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userFullName = `${this.authService.auth()?.user.firstName} ${this.authService.auth()?.user.lastName}`;
   

    // Llamar al método para obtener transacciones
    this.getTransactionData();
  }

  // Método para obtener datos de transacciones
  private getTransactionData(): void {
    this.transactionService.getAllTransactionsByCustomer().subscribe({
      next: (transaction: TransactionResponse[]) => {
        this.transactions = transaction;
        this.filteredTransactions = transaction;
      },
      error: (error) => {
        console.error('Error al obtener las transacciones:', error);
       } 
    });
  }

  // Método para aplicar el filtro de rango de fechas
  applyDateFilter(): void {
    if (this.startDate && this.endDate) {
      const start = new Date(this.startDate).setHours(0, 0, 0, 0);
      const end = new Date(this.endDate).setHours(23, 59, 59, 999);

      this.filteredTransactions = this.transactions.filter(transaction => {
        const transactionDate = new Date(transaction.transactionDate).getTime();
        return transactionDate >= start && transactionDate <= end;
      });
    } else {
      this.filteredTransactions = this.transactions;
    }
  }

  // Método para mostrar todas las transacciones
  showAllTransactions(): void {
    this.filteredTransactions = this.transactions;
    this.startDate = null;
    this.endDate = null;
  }

  // Método para navegar a los detalles de una transacción
  viewTransactionDetails(transactionId: number): void {
    this.router.navigate(['/transaction/details', transactionId]);
  }
}
