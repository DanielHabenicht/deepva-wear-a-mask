import {
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { HttpClient } from '@angular/common/http';
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
      state(
        'hasMask',
        style({
          'background-color': 'var(--green)',
        })
      ),
      state(
        'noMask',
        style({
          'background-color': 'var(--red)',
        })
      ),
      state(
        'neutral',
        style({
          'background-color': 'var(--blue)',
        })
      ),
      state(
        'noConnection',
        style({
          'background-color': 'var(--blue)',
        })
      ),
      transition(':enter', [
        style({ opacity: 0 }),
        animate('100ms', style({ opacity: 1 })),
      ]),
      transition('hasMask => noMask', [
        animate(
          '0.3s',
          keyframes([
            style({
              'background-position': '0 0',
              'background-size': '100% 300%',
              'background-image':
                'linear-gradient(-20deg, var(--red) 50%, var(--green) 50%)',
            }),
            style({
              'background-size': '100% 300%',
              'background-image':
                'linear-gradient(-20deg, var(--red) 50%, var(--green) 50%)',
              'background-position': '0 100%',
            }),
          ])
        ),
      ]),
      transition('noMask => hasMask', [
        animate(
          '0.3s',
          keyframes([
            style({
              'background-position': '0 0',
              'background-size': '100% 300%',
              'background-image':
                'linear-gradient(-20deg, var(--green) 50%, var(--red) 50%)',
            }),
            style({
              'background-size': '100% 300%',
              'background-image':
                'linear-gradient(-20deg, var(--green) 50%, var(--red) 50%)',
              'background-position': '0 100%',
            }),
          ])
        ),
      ]),
      transition('noMask => neutral', [
        animate(
          '0.3s',
          keyframes([
            style({
              'background-position': '0 0',
              'background-size': '100% 300%',
              'background-image':
                'linear-gradient(-20deg, var(--blue) 50%, var(--red) 50%)',
            }),
            style({
              'background-size': '100% 300%',
              'background-image':
                'linear-gradient(-20deg, var(--blue) 50%, var(--red) 50%)',
              'background-position': '0 100%',
            }),
          ])
        ),
      ]),
      transition('hasMask => neutral', [
        animate(
          '0.3s',
          keyframes([
            style({
              'background-position': '0 0',
              'background-size': '100% 300%',
              'background-image':
                'linear-gradient(-20deg, var(--blue) 50%, var(--green) 50%)',
            }),
            style({
              'background-size': '100% 300%',
              'background-image':
                'linear-gradient(-20deg, var(--blue) 50%, var(--green) 50%)',
              'background-position': '0 100%',
            }),
          ])
        ),
      ]),
      transition('neutral => hasMask', [
        animate(
          '0.3s',
          keyframes([
            style({
              'background-position': '0 0',
              'background-size': '100% 300%',
              'background-image':
                'linear-gradient(-20deg, var(--green) 50%, var(--blue) 50%)',
            }),
            style({
              'background-size': '100% 300%',
              'background-image':
                'linear-gradient(-20deg, var(--green) 50%, var(--blue) 50%)',
              'background-position': '0 100%',
            }),
          ])
        ),
      ]),
      transition('neutral => noMask', [
        animate(
          '0.3s',
          keyframes([
            style({
              'background-position': '0 0',
              'background-size': '100% 300%',
              'background-image':
                'linear-gradient(-20deg, var(--red) 50%, var(--blue) 50%)',
            }),
            style({
              'background-size': '100% 300%',
              'background-image':
                'linear-gradient(-20deg, var(--red) 50%, var(--blue) 50%)',
              'background-position': '0 100%',
            }),
          ])
        ),
      ]),
    ]),
  ],
})
export class AppComponent implements OnInit {
  public debug: boolean = !environment.production;
  public faces: Face[] = [];
  detectionState: DetectionState = DetectionState.neutral;
  detectionStateEnum: typeof DetectionState = DetectionState;
  public imageDimensions: {
    width: number;
    heigth: number;
  } | null = null;
  public innerWidth: number = 0;
  public innerHeight: number = 0;
  public captureImageObservable: Observable<any> = new Observable<any>(
    (observer) => {
      this.captureImageTrigger = observer;
    }
  );
  private captureImageTrigger: Observer<any> | undefined;
  public isHidden = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight;
    // this.imageDimensions = null;
  }
  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight;
    this.capture();
  }

  constructor(private httpClient: HttpClient) {
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        this.isHidden = true;
      } else {
        this.isHidden = false;
      }
    });
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
      if (!this.isHidden) {
        this.captureImageTrigger?.next('');
      }
      this.capture();
    }, 500);
  }

  capturedImage(event: WebcamImage) {
    if (this.imageDimensions == null) {
      var image = document.createElement('img');
      image.addEventListener('load', () => {
        this.imageDimensions = {
          width: image.width,
          heigth: image.height,
        };
        console.log(this.imageDimensions);
      });
      image.src = event.imageAsDataUrl;
    }
    this.analyzeImage(event.imageAsBase64);
  }

  analyzeImage(image: string) {
    this.httpClient
      .post<Result>(environment.baseUrl + '/v1/detection/mask', {
        image: image,
      })
      .subscribe(
        (result: Result) => {
          if (result.faces.length === 0) {
            this.detectionState = DetectionState.neutral;
          } else if (result.faces[0].mask === true) {
            this.detectionState = DetectionState.hasMask;
          } else if (result.faces[0].mask === false) {
            this.detectionState = DetectionState.noMask;
          }
          this.faces = result.faces;
          //console.log(this.faces[0].box.xmin, this.faces[0].box.ymin);

          // console.log(result);
        },
        (err) => {
          this.detectionState = DetectionState.noConnection;
          this.faces = [];
        }
      );
  }

  getStyle(box: Box) {
    return {
      left:
        (this.imageDimensions ? this.imageDimensions.width : 0) -
        box.xmin -
        (this.imageDimensions ? this.imageDimensions.width / 2 : 0) +
        'px',
      top: box.ymin + 'px',
      width: box.xmax - box.xmin + 'px',
      height: box.ymax - box.ymin + 'px',
    };
  }
}

export enum DetectionState {
  cameraDeactivated,
  noConnection = 'noConnection',
  neutral = 'neutral',
  hasMask = 'hasMask',
  noMask = 'noMask',
}

export interface Result {
  faces: Face[];
}

export interface Face {
  box: Box;
  conf: number;
  mask: boolean;
}

export interface Box {
  /**
   * X is vertical and inverted
   */
  xmax: number;
  xmin: number;
  /**
   * Y is horizontal
   */
  ymax: number;
  ymin: number;
}
