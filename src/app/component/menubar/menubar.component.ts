import { Component } from '@angular/core';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent {

  badgeVisible= false;

  badgeVisibility(){
    this.badgeVisible = true;
  }

}
