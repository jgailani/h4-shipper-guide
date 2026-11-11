# H4 Solutions Shipper Guide (first draft)

A website that walks first-time shippers through sending cargo by air from South America, through Barbados, to the Caribbean. It is plain HTML, CSS, and JavaScript, so it runs on GitHub Pages for free with nothing to install.

## What is in this folder

| File or folder | What it is | Who edits it |
|---|---|---|
| `index.html` | Home page | Rarely |
| `journey.html` | The 5-stage interactive journey and process map | Rarely |
| `cargo.html` | Cargo rules, product checker, restricted cargo | Rarely |
| `who.html` | Who's involved, handoffs | Rarely |
| `schedules.html` | Routes, schedule, cutoff planner, capacity | Rarely |
| `checklist.html` | Interactive checklist and documents table | Rarely |
| `mistakes.html` | Common mistakes | Rarely |
| `faq.html` | FAQ and glossary | Rarely |
| `resources.html` | Downloads and tools | Rarely |
| `quote.html` | Quote request form | Rarely |
| `404.html` | "Page not found" page | Never |
| **`js/content.js`** | **Almost all the words on the site** | **Everyone** |
| **`js/config.js`** | **Phone, hours, email, domain, and other settings** | **Everyone** |
| `js/app.js` | The code behind every feature | The web developer only |
| `css/styles.css` | Colors, fonts, and layout | The web developer only |
| `assets/` | Logos and the favicon (put licensed photos in `assets/images/`) | Anyone |

**Rule for everyone except the developer:** edit `js/content.js` and `js/config.js` only.

## Part 1: Put the site on GitHub (the owner does this once)

1. Everyone on the team creates a free account at github.com. The owner picks the account that will hold the site.
2. Owner: click the **+** (top right) and choose **New repository**.
   - Name it `h4-shipper-guide`.
   - Choose **Public** (GitHub Pages is free for public repositories).
   - Leave the other boxes unchecked and click **Create repository**.
3. On the empty repository page, click **uploading an existing file**.
   - Open this folder on your computer, select everything **inside** it (all the `.html` files plus the `css`, `js`, and `assets` folders, and `README.md`), and drag it all into the browser.
   - Do not upload the zip itself, and do not drag in the outer folder.
   - The file `.nojekyll` is hidden on some computers. It is optional, so skip it if you don't see it.
   - Scroll down and click **Commit changes**.
4. Turn the website on: **Settings** (top tab) → **Pages** (left menu) → under **Build and deployment**, set **Source** to **Deploy from a branch**, set **Branch** to `main` and the folder to `/ (root)`, then click **Save**.
5. Wait one to three minutes and refresh the Pages screen. A link appears at the top:
   `https://YOUR-USERNAME.github.io/h4-shipper-guide/`
   Share it with the team and the CEO.

## Part 2: Give your teammates access

1. In the repository, go to **Settings** → **Collaborators** → **Add people**.
2. Type each teammate's GitHub username or email, then send the invite.
3. Each teammate accepts the invitation from their email. After that they can edit files.

## Part 3: How teammates edit the content

1. Open the repository and click the `js` folder, then click `content.js`.
2. Click the **pencil icon** (Edit this file) at the top right of the file.
3. Change the words **between the quotation marks**. Do not delete quotation marks, commas, square brackets `[ ]`, or curly braces `{ }`.
4. Click **Commit changes**, keep **Commit directly to the main branch**, and click **Commit changes** again.
5. Wait about a minute, then refresh the live site (hold Shift and click refresh).

Tips:
- To show a highlighted **placeholder**, write `{{like this}}`. When the real answer is confirmed, delete the `{{ }}` so it becomes normal text.
- To use a quotation mark inside text, write `\"` instead of `"`.
- Split the work so two people don't edit the same part at once. For example: one person takes the five stages, one takes cargo and the product checker, one takes the FAQ and mistakes, and one takes schedules and the checklist.
- If the site goes **blank** after an edit, a quotation mark or comma is missing. Open the file, click **History**, and restore the previous version. Or press F12 on the site and read the red error, which names the line.

## Part 4: Preview on your own computer (optional, developer)

- Easiest: double-click `index.html`. It works without a server.
- Or run `python -m http.server 8000` in this folder and visit http://localhost:8000.
- With Git: `git clone` the repository, edit in VS Code, then `git add .`, `git commit -m "message"`, and `git push`. The site updates a minute later.

## Placeholders still to fill in

Search for `{{` in `content.js` and `config.js`. The main ones are:

- Call center phone number, hours, and email (`config.js`)
- Real email for quote requests, or a form-service link (`config.js`)
- Demonstration domain, hosting organization, and site administrator (`config.js`)
- Flight schedule table (`schedule` in `content.js`)
- Final cutoff, connection period, and payment timing
- Approved forwarders, and the handling organizations
- Transit forms and responsible parties in Barbados
- Product certificates, insurance and liability terms, and the claims process
- Packaging and pallet standards, and the spoilage procedure
- Logo and photographs (use appropriately licensed stock photos)
- Official color palette (change the colors at the top of `css/styles.css`)

## Rules from the CEO that the site follows

- English only.
- **No prices** on the site. Visitors request a quote.
- **No partner names** (airlines, handlers, airport organizations) at this stage.
- Schedules are shown so shippers can plan.
- Booking and shipment requests are a placeholder for now.
- Brand colors reference the Barbados airport. The palette here (blue and gold) is a placeholder until the official one is confirmed.

## Moving the site off github.io later

A GitHub Pages site starts at `username.github.io/h4-shipper-guide`. You have three ways to give it a proper address:

1. **Custom domain (easiest).** The organization buys a domain, then in **Settings → Pages → Custom domain** you enter it and add the DNS records GitHub lists at the registrar. HTTPS is free.
2. **Host it elsewhere.** The site is just static files. Upload the whole folder to any web host, including a host in Barbados.
3. **Transfer the repository** to the organization's GitHub account: **Settings → General → Danger Zone → Transfer ownership**.

Good to know:
- GitHub Pages sites are **public**, even from a private repository. If the site must be hidden before launch, use a different host.
- The site has **no backend**, so the quote form needs a form service. Create a free form link, paste it into `formEndpoint` in `config.js`, and requests will arrive by email.
