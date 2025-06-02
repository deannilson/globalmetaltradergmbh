<template>
  <section class="p-6 sm:p-12 md">
    <h1 class="text-4xl lg:text-5xl font-black mb-6">{{ title }}</h1>
    <div class="v-html">
      <p><strong>Effective Date:</strong> {{ date }}</p>
      <p>
        Welcome to <strong>{{ $app.name }}</strong
        >. These Terms and Conditions govern your use of our website and the
        purchase of our products. By accessing our website or placing an order,
        you agree to the following terms.
      </p>
      <hr />
      <h4>1. <strong>Company Information</strong></h4>
      <p>
        <strong>{{ $app.name }}</strong
        ><br />Registered in Germany<br />{{ $app.address.replace("<br />", " ")
        }}<br />Email: {{ $app.email }}<br />Phone: {{ $app.phone
        }}<br />VAT/Tax ID: {{ $app.vat }}<br />Reg. No.: {{ $app.reg }}
      </p>
      <hr />
      <h4>2. <strong>Scope of Services</strong></h4>
      <p>{{ $app.desc }}</p>

      <hr />
      <h4>3. <strong>Website Use</strong></h4>
      <ul>
        <li>
          <p>
            The content on this site is for general information and may be
            updated without notice.
          </p>
        </li>
        <li>
          <p>
            Unauthorized use or reproduction of website content is prohibited.
          </p>
        </li>
      </ul>
      <hr />
      <h4>4. <strong>Reservation</strong></h4>
      <ol>
        <li>
          <p>
            All buyers requesting a product reservation must specify their exact
            initial order quantity to ensure timely fulfillment.
          </p>
        </li>
        <li>
          <p>
            A <strong>reservation deposit</strong> is required based on the
            total order value to secure product availability. This deposit
            confirms the buyer’s commitment to purchase.
          </p>
        </li>
        <li>
          <p>
            Interested buyers must provide the following basic information for
            order confirmation and reservation:
          </p>
          <ul>
            <li><p>Full Name</p></li>
            <li><p>Delivery Address</p></li>
            <li><p>Contact Phone Number</p></li>
          </ul>
        </li>
        <li>
          <p>
            Buyers must indicate the desired reservation period. Extended or
            exclusive reservation periods may incur additional charges.
          </p>
        </li>
        <li>
          <p>
            In-person reservations must comply with
            <strong>Article 1</strong> of our
            <strong>Visitation Terms</strong> (see below).
          </p>
        </li>
        <li>
          <p><strong>Payment Terms</strong>:</p>
          <ul>
            <li>
              <p>
                50% deposit upon issuance of a
                <strong>Proforma Invoice</strong> and
                <strong>Sales Purchase Contract</strong>.
              </p>
            </li>
            <li>
              <p>
                Remaining 50% due upon issuance of
                <strong>delivery tracking details</strong>.
              </p>
            </li>
          </ul>
        </li>
      </ol>
      <hr />
      <h4>5. <strong>Product Information</strong></h4>
      <ul>
        <li>
          <p>
            All product descriptions, specifications, and prices are subject to
            change.
          </p>
        </li>
        <li>
          <p>Images are for illustrative purposes; actual products may vary.</p>
        </li>
        <li>
          <p>
            Products are subject to availability at the time of order
            confirmation.
          </p>
        </li>
      </ul>
      <hr />
      <h4>6. <strong>Orders and Contracts</strong></h4>
      <ul>
        <li>
          <p>
            Orders are not binding until accepted in writing by
            {{ $app.name }}.
          </p>
        </li>
        <li>
          <p>
            We reserve the right to cancel or refuse any order at our
            discretion.
          </p>
        </li>
        <li>
          <p>
            Payment terms, currency, and delivery details will be specified in
            the invoice or contract.
          </p>
        </li>
      </ul>
      <hr />
      <h4>7. <strong>Shipping Policy</strong></h4>
      <ul>
        <li>
          <p>
            <strong>Shipping Regions:</strong> We ship worldwide, subject to
            import/export regulations.
          </p>
        </li>
        <li>
          <p>
            <strong>Processing Time:</strong> Orders are typically processed
            within 3–7 business days after payment confirmation.
          </p>
        </li>
        <li>
          <p>
            <strong>Delivery Time:</strong> Depends on destination, shipping
            method, and customs clearance. Estimated timelines will be
            communicated.
          </p>
        </li>
        <li>
          <p>
            <strong>Shipping Charges:</strong> Calculated based on order size,
            weight, and delivery location.
          </p>
        </li>
        <li>
          <p>
            <strong>Delays:</strong> We are not responsible for delays caused by
            customs, force majeure, or courier service disruptions.
          </p>
        </li>
      </ul>
      <h4>8. <strong>Returns and Refund Policy</strong></h4>
      <p>
        Due to the nature of food and agricultural products, we follow strict
        quality and hygiene standards. Therefore:
      </p>
      <ul>
        <li>
          <p>
            <strong>Returns:</strong> Returns are accepted
            <strong
              >only in the case of damaged, spoiled, or incorrect goods</strong
            >, reported within <strong>3 days of delivery</strong>.
          </p>
        </li>
        <li>
          <p><strong>Eligibility for Refunds:</strong></p>
          <ul>
            <li>
              <p>
                Goods must be unused, in original packaging, and accompanied by
                proof of purchase.
              </p>
            </li>
            <li>
              <p>Photos or video evidence of damage must be provided.</p>
            </li>
          </ul>
        </li>
        <li>
          <p>
            <strong>Refund Method:</strong> Refunds will be issued to the
            original payment method within 7–14 business days after approval.
          </p>
        </li>
        <li>
          <p><strong>Exclusions:</strong> We do not offer refunds for:</p>
          <ul>
            <li><p>Perishable goods after delivery</p></li>
            <li><p>Delay in transit not caused by us</p></li>
            <li>
              <p>Buyer’s change of mind or incorrect storage after delivery</p>
            </li>
          </ul>
        </li>
        <li>
          <p>
            <strong>Return Shipping:</strong> If a return is approved, we will
            provide instructions. In most cases, the buyer covers return
            shipping unless the error is ours.
          </p>
        </li>
      </ul>
      <hr />
      <h4>9. <strong>Intellectual Property</strong></h4>
      <p>
        All website content — including images, logos, text, and graphics — is
        the intellectual property of {{ $app.name }} or its licensors.
        Unauthorized use is strictly prohibited.
      </p>
      <hr />
      <h4>10. <strong>Limitation of Liability</strong></h4>
      <p>We are not liable for:</p>
      <ul>
        <li><p>Indirect, incidental, or consequential damages</p></li>
        <li><p>Business interruption or loss of profits</p></li>
        <li>
          <p>Any damage due to misuse or improper storage of our products</p>
        </li>
      </ul>
      <p>
        Our maximum liability is limited to the purchase price of the goods in
        question.
      </p>
      <hr />
      <h4>11. <strong>Privacy</strong></h4>
      <p>
        Your use of our site is governed by our
        <nuxt-link to="/privacy-policy">Privacy Policy</nuxt-link> , which
        outlines how we collect, use, and protect your data.
      </p>
      <hr />
      <h4>12. <strong>Governing Law</strong></h4>
      <p>
        These Terms are governed by the laws of <strong>Germany</strong>.
        Disputes arising out of these terms shall be subject to the exclusive
        jurisdiction of the Local Court of <strong>Duisburg, Germany</strong>.
      </p>
      <hr />
      <h4>13. <strong>Modifications</strong></h4>
      <p>
        We reserve the right to update or change these Terms and Conditions at
        any time. Updates will be posted on this page and take effect
        immediately.
      </p>
      <hr />
      <h4>14. <strong>Contact Us</strong></h4>
      <p>For questions about these Terms, shipping, or returns, contact:</p>
      <p>
        <strong>{{ $app.name }}</strong
        ><br />Email: {{ $app.email }}<br />Phone: {{ $app.phone
        }}<br />Business Hours: {{ $app.hours }}
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
const title = "Terms & Conditions";
const date = new Date("2025-05-23").toLocaleDateString([], {
  year: "numeric",
  month: "long",
  day: "2-digit",
});
useHead({ title });
</script>

<style scoped></style>
