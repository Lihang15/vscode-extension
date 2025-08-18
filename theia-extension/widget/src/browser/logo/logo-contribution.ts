import { injectable } from '@theia/core/shared/inversify';
import { FrontendApplicationContribution } from '@theia/core/lib/browser';

@injectable()
export class LogoContribution implements FrontendApplicationContribution {
    onStart(): void {
        requestAnimationFrame(() => {
            const logo = document.getElementById('theia:icon');
            if (logo) {
               logo.innerHTML = `
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none"
       style="display: block; margin: auto;">
    <path d="M4 4h16v16H4z" stroke="black" fill="#00BCD4"/>
    <circle cx="12" cy="12" r="4" fill="white"/>
  </svg>`


            }
        });
    }
}
