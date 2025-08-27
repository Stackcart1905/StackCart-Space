import Navigation from "../navbar/Navigation";
import Footer from "../footer/Footer";

function ContactUs() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
          <p className="mb-4">Last updated on Aug 13, 2025</p>
          
          <p>
            You may contact us using the information below:
        </p>
        <br/>
        <p>
            Merchant Legal entity name: StackCart
            Registered Address: F/F, H-C.56, HASTSHAL VIHAR, UTTAM NAGAR, MADAN GERNAL STORE, WEST DELHI, New Delhi, West Delhi, Delhi, 110059 Uttam Nagar DELHI 110059
            Operational Address: Plot No.21 The Greenview Apartment Near Pratap Park Sector-5 Rohini,New Delhi-110085. North West Delhi DELHI 110085
            Telephone No: 9289916169
            E-Mail ID: support@stackcart.in
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default ContactUs;
