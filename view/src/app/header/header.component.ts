import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  searchIcon = faMagnifyingGlass;
  user = localStorage.getItem("user");

  constructor (private route:Router) {

  }

  ngOnInit(): void {
  }

  onClickDisconnect () {
    localStorage.removeItem("user");
    this.route.navigateByUrl("acceuil")
  }

}
