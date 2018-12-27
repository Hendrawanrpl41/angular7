import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent implements OnInit {
  @Input() nama: String;
  @Input() nama2: String;
  @Output() tutup = new EventEmitter();
  firstname: String;
  lastname: String;
  // brithdate = '';
  // phonetype = '';
  // phonenumber = '';
  // username = '';
  // password = '';

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.firstname = params['firstname'];
      this.lastname = params['lastname'];
    });
  }
  childdata(event) {
    this.tutup.emit(event);
  }
}

