import { Component, inject } from '@angular/core';
import { GeminiService } from './gemini.service';

interface DashboardToggle{
  screenWidth:number;
  collapsed:boolean;

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'LegalAdviceApp';
  isSideNavCollapsed = false;
  screenWidth=100;
  onToggleSideNav(data:DashboardToggle): void{
    this.screenWidth=data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;

  }
 
}
