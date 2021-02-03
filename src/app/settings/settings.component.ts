import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'at-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  statistic = {
    icon : "fa-cloud-download",
    label : "Days Uptime",
    value : 20
  }

  constructor() { }

  ngOnInit() {
  }
}
