import {Component, ElementRef} from '@angular/core';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/distinctUntilChanged';

/**
 * provide an example of Narrow interfaces in TypeScript
 * blog: https://medium.com/@OlegVaraksin/narrow-interfaces-in-typescript-5dadbce7b463
 **/

///////////////// type guard example 1

interface IAnimal1 {
    kind: string;
}

interface IWildAnimal1 extends IAnimal1 {
    livingArea: string;
}

interface IPet1 extends IAnimal1 {
    name: string;
}

class Dog1 implements IPet1 {
    constructor(public kind: string, public name: string) {}

    sayBark() { }
}

class Cat1 implements IPet1 {
    constructor(public kind: string, public name: string) {}

    sayMeow() { }
}

///////////////// type guard example 2

enum EnumAnimalKind {
    WILD,
    PET
}

interface IWildAnimal2 {
    kind: EnumAnimalKind.WILD;
    subkind: string;
    livingArea: string;
}

interface IPet2 {
    kind: EnumAnimalKind.PET;
    subkind: string;
    name: string;
}

class Dog2 implements IPet2 {
    kind;

    constructor(public subkind: string, public name: string) {
        this.kind = EnumAnimalKind.PET;
    }

    sayBark() { }
}

class Cat2 implements IPet2 {
    kind;

    constructor(public subkind: string, public name: string) {
        this.kind = EnumAnimalKind.PET;
    }

    sayMeow() { }
}


/**
 * Logo component for Application header
 * activated via elementRef and listen to mouse events via angular
 * adapter interface
 **/
@Component({
    selector: 'Logo',
    template: `
            <div id="logoContainer" class="reshid flip">
              <div class="flipcard">
                <div class="face front">
                  <img class="img-responsive" src="assets/logo_s.png"/>
                </div>
                <div class="face back">
                  <img class="img-responsive" src="assets/logo_b.png"/>
                </div>
              </div>
            </div>
    `
})

export class Logo {
    constructor(private elementRef:ElementRef) {
        this.listenMouse();
        this.printAnimal1(new Dog1("dog", "Max"));
        this.printAnimal2(new Dog2("dog", "Johny"));
    }

    listenMouse():void {
        var over:Observable<any> = Observable.fromEvent(this.elementRef.nativeElement, 'mouseover').map(e=> {
            return Observable.from([1])
        });
        var out:Observable<any> = Observable.fromEvent(this.elementRef.nativeElement, 'mouseout').map(e=> {
            return Observable.from([0])
        });
        over
            .merge(out)
            .distinctUntilChanged()
            .subscribe(events => {
            if (events.value) {
                jQuery(this.elementRef.nativeElement).find('.flipcard').addClass('flipped');
            } else {
                jQuery(this.elementRef.nativeElement).find('.flipcard').removeClass('flipped');
            }
        });
    }

    isPet(animal: IAnimal1): animal is IPet1 {
        return (<IPet1>animal).name !== undefined;
    }

    printAnimal1(animal: IWildAnimal1 | IPet1) {
        console.log(animal.kind);

        if (this.isPet(animal)) {
            console.log(animal.name);
        } else {
            console.log(animal.livingArea);
        }
    }

    printAnimal2(animal: IWildAnimal2 | IPet2) {
        console.log(animal.subkind);

        switch (animal.kind) {
            case EnumAnimalKind.PET:
                console.log(animal.name);
                break;
            case EnumAnimalKind.WILD:
                console.log(animal.livingArea);
        }
    }
}