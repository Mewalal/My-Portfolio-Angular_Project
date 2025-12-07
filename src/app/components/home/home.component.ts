import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ProjectComponent } from '../project/project.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { ServicesComponent } from '../services/services.component';
import { SkillsComponent } from '../skills/skills.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HeroComponent } from '../hero/hero.component';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, HeroComponent, HeaderComponent, ProjectComponent, AboutComponent, ContactComponent, ServicesComponent, SkillsComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


}
