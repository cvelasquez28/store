import { Component, Input, SimpleChanges } from '@angular/core';
import { repeat } from 'rxjs';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  @Input({ required: true }) duration = 0;
  @Input({ required: true }) message = '';

  constructor() {
    //antes de renderizar
    //una vez
    console.log('constructor');
    console.log('-'.repeat(10))
  }

  ngOnChanges(changes: SimpleChanges): void {
    //antes del render y tb durante detecta los cambios
    console.log('ngOnChanges');
    console.log('-'.repeat(10))
    console.log(changes);
    const duration = changes['duration'];
    if(duration && duration.currentValue !== duration.previousValue){
      this.doSomething();
    }

  }

  ngOnInit(): void {
    //despuees del render
    //Corre una vez
    //llamadas async, promesas, peticiones, susbscribe
    console.log('ngOnInit');
    console.log('-'.repeat(10))
    console.log('duracion =>', this.duration);
    console.log('message =>', this.message);
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log('ngAfterViewInit');
    console.log('-'.repeat(10))
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log('ngOnDestroy');
    console.log('-'.repeat(10))
  }

  doSomething(){
    console.log('change duration');
    //logica asyncrona o no
  }
}
