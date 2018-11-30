import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { PlayerClass } from 'src/dataTypes';

@Component({
  selector: 'app-character-editor',
  templateUrl: './character-editor.component.html',
  styleUrls: ['./character-editor.component.scss']
})
export class CharacterEditorComponent implements OnInit {

    Classes: PlayerClass[];
    EditedClass: PlayerClass;
    SelectedClass: PlayerClass;

    CharacterForm: FormGroup;

    // Getters
    get Background() {
        return this.CharacterForm.get('Background');
    }

    get Str() { return this.CharacterForm.get('Str'); }
    get Dex() { return this.CharacterForm.get('Dex'); }
    get Con() { return this.CharacterForm.get('Con'); }
    get Wis() { return this.CharacterForm.get('Wis'); }
    get Int() { return this.CharacterForm.get('Int'); }
    get Chr() { return this.CharacterForm.get('Chr'); }
    get PoolPoints() { return this.CharacterForm.get('PoolPoints'); }
    get _Str() { return this.CharacterForm.get('_Str'); }
    get _Dex() { return this.CharacterForm.get('_Dex'); }
    get _Con() { return this.CharacterForm.get('_Con'); }
    get _Wis() { return this.CharacterForm.get('_Wis'); }
    get _Int() { return this.CharacterForm.get('_Int'); }
    get _Chr() { return this.CharacterForm.get('_Chr'); }
    get _PoolPoints() { return this.CharacterForm.get('_PoolPoints'); }

    get PoolPctAvailable() {
        if (this.PoolPoints.value > this._PoolPoints.value) {
            return 100.0;
        } else {
            return (this.PoolPoints.value * 100.0 / this._PoolPoints.value);
        }
    }

    constructor(private fb: FormBuilder) {
        this.Classes = [
            new PlayerClass('Select...', '', 0, 0, 0, 0, 0, 0),
            new PlayerClass('Fighter', 'F', 18, 10, 18, 8, 8, 1),
            new PlayerClass('Cleric', 'C', 8, 8, 10, 18, 18, 10),
            new PlayerClass('Ranger', 'R', 8, 18, 15, 10, 10, 10),
            new PlayerClass('Thief', 'T', 1, 18, 10, 10, 10, 18),
            new PlayerClass('Monk', 'M', 18, 18, 18, 18, 18, 18),
            new PlayerClass('Barbarian', 'B', 1, 1, 1, 1, 1, 1, false, new Date('2018-11-01')),
            new PlayerClass('Custom', 'Cu', 0, 0, 0, 0, 0, 0, true)
          ];
        this.SelectedClass = this.Classes[0];
        this.EditedClass = {...this.SelectedClass};

        this.CharacterForm = this.fb.group({
            Name: ['Default Name', [Validators.required, Validators.maxLength(20)]],
            Background: [null, Validators.maxLength(50)],
            Class: [this.Classes[0], Validators.required],
            Str: [null, [Validators.required, Validators.min(1), Validators.max(18)]],
            Dex: [null, [Validators.required, Validators.min(1), Validators.max(18)]],
            Con: [null, [Validators.required, Validators.min(1), Validators.max(18)]],
            Wis: [null, [Validators.required, Validators.min(1), Validators.max(18)]],
            Int: [null, [Validators.required, Validators.min(1), Validators.max(18)]],
            Chr: [null, [Validators.required, Validators.min(1), Validators.max(18)]],
            PoolPoints: [null],
            // Original values
            _Str: [null],
            _Dex: [null],
            _Con: [null],
            _Wis: [null],
            _Int: [null],
            _Chr: [null],
            _PoolPoints: [null]
        });

        this.CharacterForm.valueChanges.subscribe(newvalue => {
            console.log('Form changed!');
            let totalChange = 0;

            totalChange += (newvalue.Str - newvalue._Str);
            totalChange += (newvalue.Dex - newvalue._Dex);
            totalChange += (newvalue.Con - newvalue._Con);
            totalChange += (newvalue.Int - newvalue._Int);
            totalChange += (newvalue.Wis - newvalue._Wis);
            totalChange += (newvalue.Chr - newvalue._Chr);

            // totalChange is the number of points I'm spending
            // from the pool (if +) or I'm adding back to the
            // pool (if -) after this.
            this.PoolPoints.setValue(this._PoolPoints.value - totalChange, {emitEvent: false});
        });
    }

    FillClass() {
        // Get the current class that is in the form group
        const selectedClass = <PlayerClass>this.CharacterForm.get('Class').value;

        // Is this class the custom class? If not, set the patch values
        // now.
        if (!selectedClass.IsCustom) {
            this.CharacterForm.patchValue({
                Str: selectedClass.Str,
                Dex: selectedClass.Dex,
                Con: selectedClass.Con,
                Wis: selectedClass.Wis,
                Int: selectedClass.Int,
                Chr: selectedClass.Chr,
                PoolPoints: 0
            });

            this.PoolPoints.clearValidators();

            return;
        }

        // Roll 3d6 for each stat
        this.RerollStats();
        this.PoolPoints.setValidators(Validators.min(0));
    }

    GetForm() {
        if (this.CharacterForm.invalid) { return; }

        console.log(this.CharacterForm.value);
    }

    GetRandom(low: number, high: number) {
        return Math.floor(Math.random() * (high - low)) + low;
    }

    RerollStats() {
        // Roll 3d6 for each stat
        const patch = {
            Str: this.RollDice(3, 6),
            Dex: this.RollDice(3, 6),
            Con: this.RollDice(3, 6),
            Wis: this.RollDice(3, 6),
            Int: this.RollDice(3, 6),
            Chr: this.RollDice(3, 6),
            PoolPoints: this.RollDice(2, 6)
        };

        this.CharacterForm.patchValue(patch, {emitEvent: false});
        this.CharacterForm.patchValue({
            _Str: patch.Str,
            _Dex: patch.Dex,
            _Con: patch.Con,
            _Wis: patch.Wis,
            _Int: patch.Int,
            _Chr: patch.Chr,
            _PoolPoints: patch.PoolPoints
        });
    }

    RollDice(num: number, die: number) {
        let total = 0;

        for (let i = 1; i <= num; ++i) {
            total += this.GetRandom(1, die);
        }

        return total;
    }

  ngOnInit() {
  }

}
