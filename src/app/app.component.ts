import { Component } from '@angular/core';
import { NewServiseService } from './new-servise.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  template: `<div>
              <router-outlet></router-outlet>
            </div>`,
  providers: [NewServiseService]
})
export class AppComponent {
  title = 'Taxiapp';
}
