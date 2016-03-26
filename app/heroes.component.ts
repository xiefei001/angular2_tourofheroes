import {Component, OnInit} from 'angular2/core';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';
import {Router} from "angular2/router";


@Component({
    selector: 'my-heroes',
    templateUrl: 'app/heroes.component.html',
    styleUrls: ['app/heroes.component.css'],
    directives: [HeroDetailComponent]
})

export class HeroesComponent implements OnInit {

    title:string = "Tour of Heroes";
    heroes:Hero[];
    selectedHero:Hero;

    constructor(private _router:Router, private _heroService:HeroService) {
    }

    ngOnInit() {
        this.getHeroes();
    }

    getHeroes() {
        this._heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
    }
    
    onSelect(hero:Hero) {
        this.selectedHero = hero;
    }

    gotoDetail() {
        this._router.navigate(['HeroDetail', {id:this.selectedHero.id}]);
    }

}
