import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodModel } from '../food-model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit{

  userId: number;
  userName: string;
  resultFoodList: FoodModel[];
  errorMessage: string;
  searchTerm: string;

  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    const userInfo = this.userService.getUserInfo();
    this.userName = userInfo ? userInfo.userName : '';
    this.userId = userInfo ? userInfo.userId : 0;
    }

  searchFoodItem(): void {
    this.resultFoodList = []; // Clear existing results
    this.errorMessage = '';

    if(this.searchTerm) 
    {
      this.userService.getFoodByName(this.searchTerm).subscribe(
      response => {
        if (Array.isArray(response)) 
        {
          this.resultFoodList = response;
          this.errorMessage = '';
        } 
        else
        {
          this.errorMessage = 'No Food Items found!';
          this.resultFoodList =[];
        }      
      },
      error => {       
          this.errorMessage = 'Error fetching food items.';
          this.resultFoodList = [];
        }
      );
    }
    else 
    {
      this.errorMessage = 'Please enter a search term.';
      this.resultFoodList = [];
    }
  }

  goToFoodMenu() {
    this.router.navigate(['/food-menu']); 
  }
}