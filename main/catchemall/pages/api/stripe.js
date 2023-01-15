import Stripe from "stripe";    

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
    if (req.method === 'POST') {
        console.log(req.body.cartItems);
      try {
        const params = {
            submit_type: 'pay',
            mode: 'payment',
            payment_method_types: ['card'],
            shipping_options:[{shipping_rate: 'shr_1MPyCsDusieQBY9z7FwDYJh6'},
            {shipping_rate: 'shr_1MPyAgDusieQBY9zYXrDX7VG'},
            {shipping_rate: 'shr_1MPyDvDusieQBY9z6Jq7tWyD'},],
            billing_address_collection: 'auto',
            line_items: [
              {
                price: '{{PRICE_ID}}',
                quantity: 1,
              },
            ],
            mode: 'payment',
            success_url: `${req.headers.origin}/?success=true`,
            cancel_url: `${req.headers.origin}/?canceled=true`,
          }
        // Create Checkout Sessions from body params.
        const session = await stripe.checkout.sessions.create(params);
        res.redirect(303, session.url);
      } catch (err) {
        res.status(err.statusCode || 500).json(err.message);
      }
    } else {
      res.setHeader('Allow', 'POST');
      res.status(405).end('Method Not Allowed');
    }
  }