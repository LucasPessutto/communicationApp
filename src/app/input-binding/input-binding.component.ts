import { Client } from './client.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-binding',
  templateUrl: './input-binding.component.html',
  styleUrls: ['./input-binding.component.css']
})
export class InputBindingComponent implements OnInit {

  @Input() name: string = ""
  @Input() lastName: string = ""

  clients: Client[] = []

  constructor() {
    this.clients = [
      { id: 1, name: "Lucas", age: 25 },
      { id: 2, name: "Marieta", age: 23 },
      { id: 3, name: "John", age: 30 },
      { id: 4, name: "Ana", age: 35 }
    ]
  }

  ngOnInit(): void {
  }

}
