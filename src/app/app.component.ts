import { animate, style, transition, trigger } from '@angular/animations';
import { Component, HostListener, OnInit } from '@angular/core';
import { WebcamImage, WebcamInitError } from 'ngx-webcam';
import { Observable, Observer } from 'rxjs';

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
  ],
})
export class AppComponent implements OnInit {
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
  neutral,
  hasMask,
  noMask,
}
