import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.scss']
})
export class SidebarItemComponent implements OnInit {

  @Input() public icon: string;
  @Input() public text:string;
  
  @Input() color:string;

  constructor(private _router: Router, private _route:ActivatedRoute) { }

  ngOnInit() {
    console.log(this.text);
  }


}
