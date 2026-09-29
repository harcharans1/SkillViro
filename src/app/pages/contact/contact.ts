import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  sent = signal(false);
  submit(): void { this.sent.set(true); }
}
