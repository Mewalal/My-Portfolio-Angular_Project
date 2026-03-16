import {  Component, AfterViewInit, ElementRef, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import Typed from 'typed.js';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css' 
})
export class AppComponent implements AfterViewInit {
  title = 'MyPortfolio';

  @ViewChild('logo') logo!: ElementRef; // ✅ Logo element ke liye reference
  
  @ViewChildren('navLinks') navLinks!: QueryList<ElementRef>; // ✅ Navbar ke sare `<a>` ko select karna

  ngAfterViewInit() { // ✅ Ye function ensure karega ke DOM load hone ke baad script chale
          var typed = new Typed(".text", {
            strings: ["Java Full Developer", "Angular Developer"],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true
          });

          // ✅ Animation ke liye CSS apply karna
          if (this.logo) {
            this.logo.nativeElement.style.animation = 'slideRight 1s ease forwards';
          }
        

        //////////////////////////////////////////////////////
        // ✅ Navbar Animation Apply Karna
        let delay = 0; // Har link ke liye delay
        this.navLinks.forEach((link) => {
          setTimeout(() => {
            link.nativeElement.style.animation = `slideTop 1s ease forwards`;
          }, delay);
          delay += 200; // Har link ke beech 200ms ka delay
        });
  }


}
