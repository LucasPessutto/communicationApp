import { Client } from '../client.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-item-clients',
  templateUrl: './item-clients.component.html',
  styleUrls: ['./item-clients.component.css']
})
export class ItemClientsComponent implements OnInit {

  @Input() client: Client | any
  @Output() updateClient = new EventEmitter<Client>()
  @Output() removeClient = new EventEmitter<any>()
  onEdit: boolean = false

  name: string = ""
  age: number = 0

  constructor() { }

  ngOnInit(): void {
  }

  edit() {
    this.onEdit = true
    this.name = this.client.name
    this.age = this.client.age
  }

  remove() {
    this.removeClient.emit()
  }

  save() {
    this.onEdit = false
    this.updateClient.emit({
      name: this.name, age: this.age
    })
  }
}
