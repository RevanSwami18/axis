import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-cards',
  templateUrl: './list-cards.component.html',
  styleUrls: ['./list-cards.component.css']
})
export class ListCardsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  data1 = [
    {draft: 156, processed: 256, inprocess: 456, total: 868, color:"grey", title: "Create Initiated" },
    {draft: 0, processed: 256, inprocess: 456, total: 868, color:"golden", title: "Scrutiny" },
    {draft: 0, processed: 256, inprocess: 456, total: 868, color:"purple", title: "Data Entry" },
    {draft: 0, processed: 256, inprocess: 456, total: 868, color:"light-purple", title: "Checker" },
    {draft: 0, processed: 256, inprocess: 456, total: 868, color:"blue", title: "Import/Export" },
    {draft: 0, processed: 256, inprocess: 456, total: 868, color:"pink", title: "Physical Verification" }
  ]

}
