import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

    WeaponsForSale: ItemInfo[];

  constructor() {

  }

  ngOnInit() {
      this.WeaponsForSale = [
        {
            Class: 'Fighter',
            Cost: 100,
            Name: 'Axe'
        },
        {
            Class: 'Thief',
            Cost: 50,
            Name: 'Dagger'
        },
        {
            Class: 'Cleric',
            Cost: 25,
            Name: 'Mace of Doom'
        }
      ];

      console.log(this.WeaponsForSale);
  }

  BuyIt(item: ItemInfo) {
    alert('Thank you for buying a ' + item.Name);
  }
}

export class ItemInfo {
    Name: string;
    Class: string;
    Cost: number;
}
