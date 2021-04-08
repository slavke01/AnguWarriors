import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-incident-comp',
  templateUrl: './new-incident-comp.component.html',
  styleUrls: ['./new-incident-comp.component.css'],
})
export class NewIncidentCompComponent implements OnInit {
  show_basic = true;
  show_devices = false;
  show_resolution = false;
  show_calls = false;
  show_crew = false;
  show_multimedia = false;
  show_equipment = false;
  constructor() {}

  ngOnInit(): void {}

  on_click_basic() {
    this.show_basic = true;
    this.show_devices = false;
    this.show_resolution = false;
    this.show_calls = false;
    this.show_crew = false;
    this.show_multimedia = false;
    this.show_equipment = false;
  }

  on_click_devices() {
    this.show_basic = false;
    this.show_devices = true;
    this.show_resolution = false;
    this.show_calls = false;
    this.show_crew = false;
    this.show_multimedia = false;
    this.show_equipment = false;
  }
  on_click_resolution() {
    this.show_basic = false;
    this.show_devices = false;
    this.show_resolution = true;
    this.show_calls = false;
    this.show_crew = false;
    this.show_multimedia = false;
    this.show_equipment = false;
  }
  on_click_calls() {
    this.show_basic = false;
    this.show_devices = false;
    this.show_resolution = false;
    this.show_calls = true;
    this.show_crew = false;
    this.show_multimedia = false;
    this.show_equipment = false;
  }
  on_click_crew() {
    this.show_basic = false;
    this.show_devices = false;
    this.show_resolution = false;
    this.show_calls = false;
    this.show_crew = true;
    this.show_multimedia = false;
    this.show_equipment = false;
  }
  on_click_multimedia() {
    this.show_basic = false;
    this.show_devices = false;
    this.show_resolution = false;
    this.show_calls = false;
    this.show_crew = false;
    this.show_multimedia = true;
    this.show_equipment = false;
  }
  on_click_equipment() {
    this.show_basic = false;
    this.show_devices = false;
    this.show_resolution = false;
    this.show_calls = false;
    this.show_crew = false;
    this.show_multimedia = false;
    this.show_equipment = true;
  }
}
