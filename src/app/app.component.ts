import { Component } from '@angular/core';
import { ObjectUnsubscribedError } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'amplify-app';
  item = 'IMG_9500.jpg';

  public formFields = {
    signUp: {
      email: {
        order:1
      },
      family_name: {
        order: 2
      },
      preferred_username: {
        order: 4
      },
      birthdate: {
        order: 3
      },
      password: {
        order: 5
      },
      confirm_password: {
        order: 6
      }
    }
  };
  
  onImagePicked(file: any) {

    let key = `pics/${file.name}`;

    console.log(key);

  }
  onImageLoaded(event: any) {
    console.log(event)
  }
}
