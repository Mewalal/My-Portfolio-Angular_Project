// import { Routes } from '@angular/router';
// import { HomeComponent } from './components/home/home.component';
// import { ContactComponent } from './components/contact/contact.component';
// import { AboutComponent } from './components/about/about.component';
// import { ServicesComponent } from './components/services/services.component';
// import { SkillsComponent } from './components/skills/skills.component';
// import { ProjectComponent } from './components/project/project.component';

// export const routes: Routes = [
//     { path:'', component:HomeComponent},
//     { path:"about", component:AboutComponent},
//     { path:"contact", component:ContactComponent},
//     { path:"Services", component:ServicesComponent},
//     {path:"Skills", component:SkillsComponent},
//     {path:"project",component:ProjectComponent},
    
// ];
//////////////////////////////////////
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectComponent } from './components/project/project.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'skills', component: SkillsComponent },
    { path: 'project', component: ProjectComponent },
];

export const appRouting = provideRouter(routes, 
    withInMemoryScrolling({ scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled' })
);


