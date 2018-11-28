import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-attribute-entry',
  templateUrl: './attribute-entry.component.html',
  styleUrls: ['./attribute-entry.component.scss']
})
export class AttributeEntryComponent implements OnInit {

    @Input() control: FormControl; // This is the actual form control from the form group
    @Input() original: FormControl;
    @Input() text: string; // "Strength"
    @Input() label: string; // "STR"
    @Input() minvalue: number; // 1
    @Input() maxvalue: number; // 18

  constructor() { }

  ngOnInit() {
  }

}
