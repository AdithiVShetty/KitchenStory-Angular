import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-logout',
  templateUrl: './user-logout.component.html',
  styleUrls: ['./user-logout.component.css']
})
export class UserLogoutComponent implements OnInit{

  userId: number;
  userName: string;

  constructor(private userService: UserService, private router: Router){}

  ngOnInit(): void {
    const userInfo = this.userService.getUserInfo();
    this.userName = userInfo ? userInfo.userName : '';
    this.userId = userInfo ? userInfo.userId : 0;
    }

  logout() {
    this.userService.logout();
    this.router.navigate(['/login']); 
  }
}
