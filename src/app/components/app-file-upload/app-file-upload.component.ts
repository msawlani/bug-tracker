import { Component, ElementRef, HostListener, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-file-upload',
  templateUrl: './app-file-upload.component.html',
  styleUrls: ['./app-file-upload.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: AppFileUploadComponent,
      multi: true,
    },
  ],
})
export class AppFileUploadComponent {
  @Input() progress: any;
  onChange: Function | undefined;
  public file: File | null = null;

  @HostListener('change', ['$event.target.files']) emitFiles(event: FileList) {
    const file = event && event.item(0);
    this.onChange?.(file);
    this.file = file;
  }
  constructor(private host: ElementRef<HTMLInputElement>) {}

  registerOnChange(fn: Function) {
    this.onChange = fn;
  }

  registerOnTouch(fn: Function) {}
}
