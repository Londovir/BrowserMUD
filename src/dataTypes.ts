export class PlayerClass {
    Name: string;
    Key: string;
    Str: number;
    Dex: number;
    Con: number;
    Wis: number;
    Int: number;
    Chr: number;
    ReleaseDate: Date;

    IsCustom: boolean;
    PoolPoints: number;
    _Str: number;
    _Dex: number;
    _Con: number;
    _Wis: number;
    _Int: number;
    _Chr: number;
    _PoolPoints: number;

    constructor(Name?: string, Key?: string, Str?: number, Dex?: number,
      Con?: number, Wis?: number, Int?: number, Chr?: number, Custom?: boolean, ReleaseDate?: Date) {
        this.Name = Name;
        this.Key = Key;
        this.Str = this._Str = Str;
        this.Dex = this._Dex = Dex;
        this.Con = this._Con = Con;
        this.Wis = this._Wis = Wis;
        this.Int = this._Int = Int;
        this.Chr = this._Chr = Chr;
        this.IsCustom = Custom;
        this.ReleaseDate = ReleaseDate;
    }
  }

  export class Player {
    Stats: PlayerClass;
    HitPoints: number;
    Name: string;
    Inventory: ItemClass[];
    ArmorClass: number;
    Thac0: number;
    Level: number;
  }

  export class Mob extends Player {
    HomeZone: number; // This is the zone of the world for the mob
    PlayerHostile: boolean; // Is the mob aggro on the player?
  }

  export class ItemClass {
    Name: string;
    Weight: number;
    Value: number;
  }

  export class RoomClass {
    RoomID: number;
    Zone: number;
    ShortName: string;
    Description: string;
    Exits: number[];
    // 0 = North, 1 = East, 2 = South, 3 = West
    // If no room is an exit in that direction, the
    // array entry is null.
  }
