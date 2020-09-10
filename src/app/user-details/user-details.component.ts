import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { UserService } from '../user.service';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})


export class UserDetailsComponent implements OnInit {
    @Input() user: User;
  constructor(private route: ActivatedRoute,
    private userService: UserService,
    private location: Location) { }

  ngOnInit(): void {
    this.getUser();
  }
  getUser(): void {
    const rank = +this.route.snapshot.paramMap.get('rank');
    this.userService.getUser(rank)
      .subscribe(user => this.user = user);
  }

  goBack(): void {
    this.location.back();
  }
}
