import { AccountResponse } from "../../account/interfaces/account-response.interface";

export interface TransactionResponse {
    id: number;
    targetAccount: AccountResponse;
    amount: number;
    description: string; 
    transactionDate:string;     
  }
  
