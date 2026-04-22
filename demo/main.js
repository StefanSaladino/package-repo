import {
  mountAndInit,
  renderButton,
  renderCard,
  renderForm,
  renderTimeline,
  renderStaggeredTimeline,
  renderAccordion,
  renderReviewCarousel,
  renderHeader,
  renderFooter
} from "../src/index.js";

const cards = document.getElementById("cards");
if (cards) {
  cards.innerHTML = [
    renderCard({
      eyebrow: "Service",
      title: "Card One",
      body: "Reusable card component.",
      ctaLabel: "Learn more",
      ctaHref: "#contact"
    }),
    renderCard({
      eyebrow: "Feature",
      title: "Card Two",
      body: "Drop this anywhere.",
      ctaLabel: "View details",
      ctaHref: "#contact"
    }),
    renderCard({
      eyebrow: "System",
      title: "Card Three",
      body: "Consistent styling system.",
      ctaLabel: "Start now",
      ctaHref: "#contact"
    })
  ].join("");
}

document.querySelector("[data-component='form']")?.remove();

const formHost = document.createElement("div");
formHost.setAttribute("data-component", "form");
formHost.setAttribute(
  "data-props",
  JSON.stringify({
    netlifyName: "demo-contact",
    submitLabel: "Send Message",
    note: "This form is rendered from the package and wired like a Netlify form.",
    fields: [
      {
        label: "First Name",
        name: "firstName",
        placeholder: "First name",
        required: true,
        autocomplete: "given-name"
      },
      {
        label: "Last Name",
        name: "lastName",
        placeholder: "Last name",
        required: true,
        autocomplete: "family-name"
      },
      {
        label: "Email",
        name: "email",
        type: "email",
        placeholder: "Email address",
        required: true,
        autocomplete: "email"
      },
      {
        label: "Message",
        name: "message",
        type: "textarea",
        placeholder: "Tell us what you need...",
        required: true,
        rows: 5
      }
    ]
  })
);
document.getElementById("contact")?.querySelector(".container")?.appendChild(formHost);

await mountAndInit(document);