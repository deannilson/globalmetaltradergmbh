<template>
  <v-breadcrums title="Terms of Service" />
  <div class="container bg-white p-6 sm:p-16 font-medium shadow-lg text-sm">
    <h4>Reservation</h4>
    <ul>
      <li>
        All buyers requesting for stock reservation must make know their exact
        initial order so as to meet up with stock.
      </li>
      <li>
        All buyers must make a reservation deposit of their order so as to
        enable stock availability.
      </li>
      <li>
        Interested buyers must send their basic information’s (Names, Address,
        and Phone number) for confirmation and reservation of their order.
      </li>
      <li>
        Buyers must provide a time period for the reservation of their stock
        which may include extra charges for exclusive time period
      </li>
      <li>
        Reservation in person will have to comply with article 1 of our
        Visitation Terms below.
      </li>
      <li>
        Our payment terms is 50% upon proforma invoice and sales purchase
        contract form and the rest balance 50% upon delivery tracking details of
        your order.
      </li>
    </ul>
    <h4>Visitation</h4>
    <ul>
      <li>
        All visitation will be granted only on official appointment and
        invitations.
      </li>
      <li>
        Visitation is accepted only to buyers buying in bulk as to give an over
        view of our livestock.
      </li>
      <li>All visitation entails a substantial fee (Visitation fee).</li>
      <li>
        All visitors are required to fill the mailing list and make known of
        their aim of visiting.
      </li>
      <li>
        We do Online Sells Only, Visiting and Viewing Is At The 1st Of Every
        Months And It’s On Appointment
      </li>
    </ul>
    <h4>Delivery</h4>
    <ul>
      <li>
        All buyers requesting delivery must make known their exact order for
        their delivery.
      </li>
      <li>
        All buyers for delivery must provide their basic information’s (Names,
        Address, and Phone number) for confirmation delivery.
      </li>
      <li>
        No stock will be delivered until 50% deposit is confirmed depending on
        the order.
      </li>
      <li>We Don’t Accept C.O.D. Deposit payment before we delivered</li>
      <li>Buyers should give accurate information on their delivery date.</li>
    </ul>
    <h4>Returns</h4>
    Our return policy for all our livestock’s products which are damage in cause
    of transportation is something we consider very important in other to meet
    client satisfaction. We have a 14-day return policy, which means you have 14
    days after receiving your stock to request a return. To be eligible for a
    return, your stock must be in the same condition that you received them.
    You’ll also need the receipt or proof of purchase.<br />
    <br />
    To start a return, you can contact us on our email. Please note that returns
    will need to be sent to the following address:
    <b> {{ $app.address.replace("<br />",", ") }}</b>. <br />
    If your return is accepted, we’ll send you our couriers, as well as
    instructions on how and where to send the stock back to us without first
    requesting a return will not be accepted. <br />
    <br />
    <h4>Damages and issues</h4>
    Please inspect your order upon reception and contact us immediately if the
    stock is complete, or if you received the wrong stock, so that we can
    evaluate the issue and make it right. <br />
    <br />
    <h4>Returns & Refunds</h4>
    We will notify you once we’ve received and inspected your return, and let
    you know if the refund was approved or not. If approved, you’ll be
    automatically refunded on your original payment method within 3 business
    days according to our sales policy. Please remember it can take some time
    for your bank to process and post the refund too.
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
