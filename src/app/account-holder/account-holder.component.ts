import { Component, OnInit } from '@angular/core';
import {AccountService} from "../shared/account.service";

@Component({
  selector: 'app-account-holder',
  templateUrl: './account-holder.component.html',
  styleUrls: ['./account-holder.component.css']
})
export class AccountHolderComponent implements OnInit {

  accounts: {name: string, status: string}[] = [];

  constructor(private  accountService: AccountService) {
  }

  ngOnInit(): void {
    this.accounts = this.accountService.accounts;
  }

}
