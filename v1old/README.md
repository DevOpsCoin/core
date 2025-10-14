# $DEVOPS MemeCoin Website

⚠️ **Important Update:**  
$DEVOPS is **migrating to the BNB Smart Chain (BSC)**.  
All previous Solana deployments are deprecated and no longer represent the official token.  
The website structure remains intact while wallet sections and token links are being updated for BNB.

A modern, community-driven memecoin project site built for DevOpsCoin. This static site uses Tailwind CSS for styling, SVG icons for a professional look, and a dynamic header for maintainability. Deployed via GitHub Pages.

## Features
- **Dynamic Header:** Shared navigation bar loaded via JavaScript for easy updates across all pages.
- **Tailwind CSS:** Rapid, responsive styling using CDN.
- **SVG Icons:** All navigation and section headers use modern, thematically appropriate SVG icons.
- **Consistent Layout:** All pages use a container with unified spacing, colors, and rounded corners.
- **Mobile Friendly:** Responsive design for all devices.
- **Pages:**
  - `index.html`: Home/landing page
  - `whitepaper.html`: Project whitepaper
  - `roadmap.html`: Project roadmap
  - `meet-the-devs.html`: Team profiles
  - `socials.html`: Social links
  - `join.html`: Community onboarding

## Getting Started
1. **Clone the repo:**
   ```sh
   git clone https://github.com/DevOpsCoin/website.git
   ```
2. **Open in VS Code or your editor.**
3. **Edit content:**
   - Update HTML files for your content.
   - Edit `assets/header.html` for navigation changes.
   - Add images to `assets/`.
4. **Preview locally:**
   - Open any `.html` file in your browser.
5. **Deploy:**
   - Push changes to `main` branch on GitHub. Site is auto-published via GitHub Pages.

## Customization
- **Navigation:** Edit `assets/header.html` to add/remove links or update icons.
- **Styling:** Use Tailwind utility classes directly in HTML. Custom styles can go in `assets/style.css`.
- **Header Loader:** `assets/load-header.js` injects the shared header into each page.

## Contributing
Pull requests welcome! For major changes, open an issue first to discuss what you’d like to change.

## License
MIT

---
*Built by DevOps. Fueled by memes.*

