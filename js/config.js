/* =====================================================================
   config.js : site-wide settings. Edit the text between the quotes.
   Anything written like {{this}} shows up as a highlighted placeholder
   on the site so everyone can see what still needs to be filled in.
   Remove the {{ }} once the real information is confirmed.
   ===================================================================== */
window.SITE = {
  // The company name shown in the footer, page titles, and the quote form.
  name: "H4 Solutions",
  tagline: "Air cargo from South America to the Caribbean, made simple",

  // Show the "first draft" strip at the very top of every page? (true / false)
  draftBanner: true,

  contact: {
    phone: "{{Call center phone number}}",
    hours: "{{Call center hours}}",
    email: "{{Contact email}}",
    // When the real email is known, put it here (for example "quotes@example.com").
    // Quote requests will then open the visitor's email app, addressed to it.
    emailAddress: ""
  },

  // Quote form: paste a form-service URL here (for example a Formspree link
  // such as "https://formspree.io/f/xxxxxxx") to receive requests by email.
  // Leave empty for now; the form then shows a summary the visitor can copy.
  formEndpoint: "",

  // Placeholders required by the project brief.
  domain: "{{Demonstration domain}}",
  hosting: {
    organization: "{{Responsible organization in Barbados}}",
    administrator: "{{Site administrator}}"
  }
};
