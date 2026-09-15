import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
    selectedColor = signal('#3498db');

    onColorChange(newColor: string) {
        this.selectedColor.set(newColor);
    }

    copyColor(){
       navigator.clipboard.writeText(this.selectedColor());
       alert('Color Copied: ' + this.selectedColor());
    }
}
