import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  faqs = [

    {
      q: "Q: What is a UHID?", a: "A: A UHID is a Unique Health ID, a digital identity number assigned to each individual for the purpose of maintaining their health records in a centralized electronic database.  "

    },
    {
      q: "Q: Why is a UHID important?",a:"A: A UHID is important because it ensures that an individual's health records are accurate, up-to-date, and easily accessible by authorized healthcare providers. This can improve the quality of care received, reduce medical errors, and potentially save lives in emergency situations.      "
    },
    {
      q: "Q: How is a UHID created?",a:"A: A UHID is typically created by a healthcare provider or government agency, such as a hospital, clinic, or health department.      "

    },
    {
      q: "Q: How is a UHID secure?",a:" A: UHID systems must be designed with robust security measures to protect individual privacy and prevent unauthorized access, hacking, and data breaches.      "
    },
    {
      q: "Q: Who has access to my UHID?",a:" A: Only authorized healthcare providers and individuals have access to your UHID. Access to UHID systems is typically governed by strict privacy and security regulations.      "
    },
    {
      q: "Q: Can I access my own UHID?",a:"A: In most cases, individuals can access their own UHID through a secure online portal or mobile app.      "
    },
    {
      q: "Q: Is a UHID mandatory?",a:"A: The use of UHID systems is not mandatory in all countries, but some governments have implemented UHID programs as part of their national healthcare system.      "
    },
    {
      q: "Q: Can UHID systems be used across borders?",a:" A: In theory, UHID systems could be used across borders to facilitate the sharing of health information between different countries. However, this would require international agreements and coordination between governments and healthcare providers."
    }
  ]
}
