import {Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {debounceTime, Subject, Subscription} from "rxjs";

// @ts-ignore
@Component({
  selector: 'shared-search-box',
  template: `
    <input
     #searchInput
     type="text"
     class="form-control"
     [placeholder]="placeholder"
     (keyup)="onKeyUp(searchInput.value)">
  `
})
export class SearchBoxComponent implements OnInit, OnDestroy {
  @Input() placeholder:           string = '';
  @Output() onValue:              EventEmitter<string>= new EventEmitter<string>();
  private debouncer:              Subject<string> = new Subject<string>();
  private debouncerSubscription?: Subscription;

  ngOnInit(): void {
    this.debouncerSubscription = this.debouncer
      .pipe(
        debounceTime(700)
      )
      .subscribe((value: string) => {
        this.onValue.emit(value);
    });
  }

  ngOnDestroy(): void {
    this.debouncerSubscription?.unsubscribe();
  }

  onKeyUp( value: string ) {
    this.debouncer.next( value );
  }
}
