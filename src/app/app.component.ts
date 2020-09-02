import { animate, style, state, keyframes, transition, trigger } from '@angular/animations';
import { Component, HostListener, OnInit } from '@angular/core';
import { WebcamImage, WebcamInitError } from 'ngx-webcam';
import { Observable, Observer } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('openClose', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('100ms', style({ opacity: 1 })),
      ]),
    ]),
    trigger('background', [
      state('hasMask', style({
        "background-color": "var(--green)"
      })),
      state('noMask', style({
        "background-color": "var(--red)"
      })),
      state('neutral', style({
        "background-color": "var(--blue)"
      })),
      transition(':enter', [
        style({ opacity: 0 }),
        animate('100ms', style({ opacity: 1 })),
      ]),
      transition('hasMask => noMask', [
        animate('0.3s', keyframes([
          style({ 
          "background-position": "0 0",
          "background-size": "100% 300%",
          "background-image": "linear-gradient(-20deg, var(--red) 50%, var(--green) 50%)" 
          }),
          style({ 
          "background-size": "100% 300%",
          "background-image": "linear-gradient(-20deg, var(--red) 50%, var(--green) 50%)",
          "background-position": "0 100%" }),
        ])),
      ]),
      transition('noMask => hasMask', [
        animate('0.3s', keyframes([
          style({ 
          "background-position": "0 0",
          "background-size": "100% 300%",
          "background-image": "linear-gradient(-20deg, var(--green) 50%, var(--red) 50%)" 
          }),
          style({ 
          "background-size": "100% 300%",
          "background-image": "linear-gradient(-20deg, var(--green) 50%, var(--red) 50%)",
          "background-position": "0 100%" }),
        ])),
      ]),
      transition('noMask => neutral', [
        animate('0.3s', keyframes([
          style({ 
          "background-position": "0 0",
          "background-size": "100% 300%",
          "background-image": "linear-gradient(-20deg, var(--blue) 50%, var(--red) 50%)" 
          }),
          style({ 
          "background-size": "100% 300%",
          "background-image": "linear-gradient(-20deg, var(--blue) 50%, var(--red) 50%)",
          "background-position": "0 100%" }),
        ])),
      ]),
      transition('hasMask => neutral', [
        animate('0.3s', keyframes([
          style({ 
          "background-position": "0 0",
          "background-size": "100% 300%",
          "background-image": "linear-gradient(-20deg, var(--blue) 50%, var(--green) 50%)" 
          }),
          style({ 
          "background-size": "100% 300%",
          "background-image": "linear-gradient(-20deg, var(--blue) 50%, var(--green) 50%)",
          "background-position": "0 100%" }),
        ])),
      ]),
      transition('neutral => hasMask', [
        animate('0.3s', keyframes([
          style({ 
          "background-position": "0 0",
          "background-size": "100% 300%",
          "background-image": "linear-gradient(-20deg, var(--green) 50%, var(--blue) 50%)" 
          }),
          style({ 
          "background-size": "100% 300%",
          "background-image": "linear-gradient(-20deg, var(--green) 50%, var(--blue) 50%)",
          "background-position": "0 100%" }),
        ])),
      ]),
      transition('neutral => noMask', [
        animate('0.3s', keyframes([
          style({ 
          "background-position": "0 0",
          "background-size": "100% 300%",
          "background-image": "linear-gradient(-20deg, var(--red) 50%, var(--blue) 50%)" 
          }),
          style({ 
          "background-size": "100% 300%",
          "background-image": "linear-gradient(-20deg, var(--red) 50%, var(--blue) 50%)",
          "background-position": "0 100%" }),
        ])),
      ]),
    ]),
  ],
})
export class AppComponent implements OnInit {
  public debug: boolean = !environment.production;
  detectionState: DetectionState = DetectionState.neutral;
  detectionStateEnum: typeof DetectionState = DetectionState;
  public innerWidth: number = 0;
  public innerHeight: number = 0;
  public captureImageObservable: Observable<any> = new Observable<any>(
    (observer) => {
      this.captureImageTrigger = observer;
    }
  );
  private captureImageTrigger: Observer<any> | undefined;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight;
  }
  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight;
    this.capture();
  }

  public handleInitError(error: WebcamInitError): void {
    this.detectionState = DetectionState.cameraDeactivated;
    if (
      error.mediaStreamError &&
      error.mediaStreamError.name === 'NotAllowedError'
    ) {
      console.warn('Camera access was not allowed by user!');
    }
  }

  capture() {
    setTimeout(() => {
      this.captureImageTrigger?.next('');
      this.capture();
    }, 1000);
  }

  capturedImage(event: WebcamImage) {
    console.log(event);
  }
}

export enum DetectionState {
  cameraDeactivated,
  neutral = 'neutral',
  hasMask = 'hasMask',
  noMask = 'noMask',
}
