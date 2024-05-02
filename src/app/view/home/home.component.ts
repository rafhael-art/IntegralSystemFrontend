import { Component } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NzTableModule
  ],
  templateUrl: './home.component.html'
})
export default class HomeComponent {

}
