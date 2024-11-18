import { Component, EventEmitter, Output } from '@angular/core';
import { navbarData } from './nav-Data';

interface DashboardToggle{
  screenWidth:number;
  collapsed:boolean;

}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  @Output() onToggleDasgboard:EventEmitter<DashboardToggle> = new EventEmitter();
  screenWidth=0;
 collapsed=true;
 navData= navbarData;

 toggleCollapse():void{
  this.collapsed = !this.collapsed;
  this.onToggleDasgboard.emit({collapsed: this.collapsed,screenWidth:this.screenWidth});
 }



 closeSidenav():void{
  this.collapsed = false
  this.onToggleDasgboard.emit({collapsed: this.collapsed,screenWidth:this.screenWidth});

 }
 
}
