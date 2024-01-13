import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { FriendService } from 'src/app/add-friend/friend.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
	// images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
	user=JSON.parse(window.localStorage.getItem('user'));
	name=this.user.name;
	email=this.user.email;
	return = window.localStorage.getItem('return');
	
	constructor(private router:Router, private ser :FriendService, private route:ActivatedRoute) { }
	
	seeFriends(){
		this.ser.getAllUsers()
		this.router.navigate(["friends"],{relativeTo:this.route})
	  }
}
