import { Restaurant } from './../restaurants/restaurant/restaurant.model';
import { RestaurantService } from './../restaurants/restaurants.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: Restaurant;

  constructor(
    private restaurantService: RestaurantService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.restaurantService.restaurantById(this.route.snapshot.params['id'])
      .subscribe(restaurant => this.restaurant = restaurant);
  }

}
