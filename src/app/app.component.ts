import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonIcon, IonTabs, IonTabBar, IonTabButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { home, personAddOutline, readerOutline } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonTabButton, IonTabBar, IonTabs, IonIcon, IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {

    addIcons ({ home, personAddOutline, readerOutline })
  }
}
