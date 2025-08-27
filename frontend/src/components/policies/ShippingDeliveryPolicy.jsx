import Navigation from "../navbar/Navigation";
import Footer from "../footer/Footer";

function ShippingDeliveryPolicy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Shipping & Delivery Policy</h1>
          <p className="mb-4">Last updated on Aug 13, 2025</p>

          <br/>
          <p>
            For International buyers, orders are shipped and delivered through registered international courier companies and/or International speed post only. For domestic buyers, orders are shipped through registered domestic courier companies and /or speed post only. Orders are shipped within 0-7 days or as per the delivery date agreed at the time of order confirmation and delivering of the shipment subject to Courier Company / post office norms. StackCart is not liable for any delay in delivery by the courier company / postal authorities and only guarantees to hand over the consignment to the courier company or postal authorities within 0-7 days rom the date of the order and payment or as per the delivery date agreed at the time of order confirmation. Delivery of all orders will be to the address provided by the buyer. Delivery of our services will be confirmed on your mail ID as specified during registration. For any issues in utilizing our services you may contact our helpdesk on 9289916169 or support@stackcart.in

          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default ShippingDeliveryPolicy;
