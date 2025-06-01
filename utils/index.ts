import categories from "../resources/categories.json";
export const $app = {
  name: "Global Metal Trader GmbH",
  domain: "www.globalmetaltradergmbh.com",
  email: "sales@globalmetaltradergmbh.com",
  phone: "+49 4321 8890",
  address: "Schönbühlstr.46  <br />70188 Stuttgart Germany",
  hours: "Mon-Sat: 7:00am-6:00pm",
  vat: "DE 317082838",
  reg: "HRB 763998",
  contact: "Vijaypal Kishorilal",
  api: "https://xtremnet.vercel.app/mailer",
};
export function generateSlug(str: string) {
  return str
    .toLowerCase() // Convert to lowercase
    .replace(/[^a-z0-9\s-]/g, " ") // Replace non-alphanumeric with space
    .trim() // Remove leading/trailing spaces
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-"); // Replace multiple hyphens with a single hyphen
}
export const $products = categories.flatMap(({ slug, products }) =>
  products.map((name) => ({
    slug: generateSlug(name),
    name,
    cat: slug,
    image: "",
    desc: "",
    specs: "",
  }))
);

export const $locales = Object.fromEntries(
  categories.map(({ slug, name }) => [slug, name])
);
