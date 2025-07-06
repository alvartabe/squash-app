import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withEnabledBlockingInitialNavigation } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { SVG_ICON_DEFAULT_OPTIONS } from '@muziehdesign/components';

bootstrapApplication(AppComponent, {
    providers: [
        provideRouter(routes, withEnabledBlockingInitialNavigation()),
        {
            provide: SVG_ICON_DEFAULT_OPTIONS,
            useFactory: () => {
                return { svgIconDefinitionUrl: `/assets/icondefinitions.svg` };
            },
        },
    ],
}).catch((err) => console.error(err));
