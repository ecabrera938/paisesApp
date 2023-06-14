import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styles: [],
})
export class SearchBoxComponent implements OnInit,OnDestroy {
  private debouncer: Subject<string> = new Subject<string>();
  private debounceSuscription?: Subscription
  
  @Input()
  public placeholder: string = '';
  
  @Output()
  public onValue = new EventEmitter<string>();
  
  @Output()
  public onDebounce = new EventEmitter<string>();
  
  ngOnInit(): void {
    this.debounceSuscription = this.debouncer
    .pipe(
      debounceTime(450)
      )
      .subscribe((value) => {
        this.onDebounce.emit(value)
      });
    }
    
    ngOnDestroy(): void {
      this.debounceSuscription?.unsubscribe()
    }

  emitValue(value: string): void {
    this.onValue.emit(value);
  }

  onKeyPress(sherchTerm: string) {
    this.debouncer.next(sherchTerm)
  }
}
