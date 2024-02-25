import { Component } from '@angular/core';
import { TestService } from './services/test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'profrontend-pro-1';

  data: any;

  constructor(
    private testService: TestService
  ) {
    this.store();
  }

  toggleActive(container: HTMLElement, isActive: boolean) {
    if (isActive) {
      container.classList.add('active');
    } else {
      container.classList.remove('active');
    }
  }

  store() {
    const subsidiary_id = 1;
    this.testService.store(subsidiary_id)
      .subscribe(
        {
          next: (data) => {
            console.log(data, 'data');
            this.data = data;
          },
          error: (error) => {
            console.log(error, 'error');
          }
        }) 
  }

}
