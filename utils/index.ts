import categories from "../resources/categories.json";
export const $app = {
  name: "Global Metal Trader GmbH",
  desc: "Global Metal Trader GmbH is a leading scrap metal supplier and exporter, specializing in the purchase and sale of ferrous and non-ferrous metals. Based in Germany, we deliver reliable recycling solutions worldwide.",
  domain: "www.globalmetaltradergmbh.com",
  email: "sales@globalmetaltradergmbh.com",
  phone: "+49 4321 8890",
  address: "Schönbühlstr. 46  <br />70188 Stuttgart, Germany",
  hours: "Mon-Fri: 7:00am-6:00pm",
  vat: "DE 317082838",
  reg: "HRB 763998",
  contact: "Vijaypal Kishorilal",
  api: "https://xtremnet.vercel.app/mailer",
};

export const $locales = Object.fromEntries(
  categories.map(({ slug, name }) => [slug, name])
);
