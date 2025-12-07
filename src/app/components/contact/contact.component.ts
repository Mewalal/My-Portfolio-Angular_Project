import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  formData = {
    from_name: '',
    from_email: '',
    subject: '',
    message: ''
  };
~
  sendEmail(form: NgForm) {
    const copyData = { ...this.formData };

   
    emailjs.send(
      'service_nob415t',
      'template_zmfr1o2',
      this.formData,
      '5e2vzSiSddXQcEgIR'
    )
      .then(() => {
    alert("Message Sent Successfully!");
    form.resetForm();       // reset only after sending
  })
  
    .catch((err) => {
      alert("Failed to Send! " + JSON.stringify(err));
    });
  }
}
