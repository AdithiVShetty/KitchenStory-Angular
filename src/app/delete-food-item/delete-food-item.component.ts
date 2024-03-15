import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-food-item',
  templateUrl: './delete-food-item.component.html',
  styleUrls: ['./delete-food-item.component.css']
})
export class DeleteFoodItemComponent implements OnInit{

  foodId: number;
  foodName:string;
  successMessage: string;
  errorMessage: string;

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.foodId = +this.route.snapshot.paramMap.get('id');
    this.userService.getFoodItem(this.foodId).subscribe(data => {
      this.foodName = data.Name;

    });
  }

  deleteFoodItem(): void {
    this.userService.deleteFoodItem(this.foodId).subscribe(
      (response) => {
        this.successMessage = response;
        this.errorMessage = '';
      },
      (error) => {
        console.error(error);
        this.errorMessage = 'An error occurred during user deletion. Please try again.';
        this.successMessage = '';
      }
    );
  }

  cancelDelete() {
    this.router.navigate(['/master-food-menu']);
  }

  goBackToMenu() {
    this.router.navigate(['/master-food-menu']); 
  }

}
