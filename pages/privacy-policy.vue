<template>
  <section class="p-6 sm:p-12 md">
    <h1 class="text-4xl lg:text-5xl font-black mb-6">{{ title }}</h1>
    <div class="v-html">
      <p>
        <strong>Effective Date:</strong>
        {{ date }}
      </p>
      <p>
        At <strong>{{ $app.name }}</strong
        >, we are committed to protecting your privacy and ensuring that your
        personal data is handled responsibly. This Privacy Policy outlines how
        we collect, use, and protect your information when you interact with our
        website or services.
      </p>
      <h4>1. <strong>Who We Are</strong></h4>
      <p>{{ $app.desc }}</p>
      <h4>2. <strong>Information We Collect</strong></h4>
      <p>We may collect the following types of personal information:</p>
      <ul>
        <li>
          <p>
            <strong>Contact Details:</strong> Name, email address, phone number,
            company name, and country.
          </p>
        </li>
        <li>
          <p>
            <strong>Website Data:</strong> IP address, browser type, pages
            visited, and cookies.
          </p>
        </li>
        <li>
          <p>
            <strong>Communication Data:</strong> Inquiries, feedback, and any
            information you provide via forms or email.
          </p>
        </li>
      </ul>
      <h4>3. <strong>How We Use Your Information</strong></h4>
      <p>We use the collected data to:</p>
      <ul>
        <li><p>Respond to inquiries and provide customer service</p></li>
        <li><p>Process orders and manage business relationships</p></li>
        <li>
          <p>
            Send updates, newsletters, or marketing material (only with your
            consent)
          </p>
        </li>
        <li><p>Improve our website and services</p></li>
        <li><p>Comply with legal obligations</p></li>
      </ul>
      <h4>4. <strong>Legal Basis for Processing</strong></h4>
      <p>We process personal data under the following legal grounds:</p>
      <ul>
        <li>
          <p>Your <strong>consent</strong></p>
        </li>
        <li>
          <p>Fulfillment of a <strong>contract</strong></p>
        </li>
        <li>
          <p>
            <strong>Legitimate interests</strong> (such as business
            communication)
          </p>
        </li>
        <li>
          <p><strong>Legal obligations</strong></p>
        </li>
      </ul>
      <h4>5. <strong>Cookies and Tracking</strong></h4>
      <p>
        We use cookies to enhance your browsing experience and analyze website
        traffic. You can manage or disable cookies via your browser settings.
      </p>
      <h4>6. <strong>Data Sharing and Third Parties</strong></h4>
      <p>
        We do not sell your personal information. We may share your data with:
      </p>
      <ul>
        <li>
          <p>Service providers and partners who help us operate our business</p>
        </li>
        <li><p>Legal authorities when required by law</p></li>
      </ul>
      <h4>7. <strong>Data Storage and Security</strong></h4>
      <p>
        We implement appropriate technical and organizational measures to
        safeguard your data against unauthorized access, alteration, or
        disclosure.
      </p>
      <h4>8. <strong>Your Rights</strong></h4>
      <p>You have the right to:</p>
      <ul>
        <li><p>Access the personal data we hold about you</p></li>
        <li><p>Request correction or deletion of your data</p></li>
        <li><p>Withdraw consent at any time</p></li>
        <li><p>Lodge a complaint with a data protection authority</p></li>
      </ul>
      <h4>9. <strong>International Data Transfers</strong></h4>
      <p>
        As a global company, your data may be transferred to and processed in
        countries outside the EU/EEA. We ensure such transfers comply with
        applicable data protection laws.
      </p>
      <h4>10. <strong>Changes to This Policy</strong></h4>
      <p>
        We may update this Privacy Policy from time to time. Changes will be
        posted on our website with an updated "{{ date }}"
      </p>
      <h4>11. <strong>Contact Us</strong></h4>
      <p>
        If you have questions about this Privacy Policy or wish to exercise your
        rights, please contact us:
      </p>
      <p>
        <strong>{{ $app.name }}</strong
        ><br />{{ $app.address.replace("<br />", " ") }}<br />Email:
        {{ $app.email }}<br />Phone: {{ $app.phone }}
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
const date = new Date("2025-05-23").toLocaleDateString([], {
  year: "numeric",
  month: "long",
  day: "2-digit",
});
const title = "Privacy Policy";
useHead({ title });
</script>

<style scoped></style>
