# DECI Community Wiki

An unofficial, open-source knowledge base and study guide built by students, for students participating in the DECI program. This platform serves as a centralized hub for tracking curriculum milestones, sharing synthesized study notes, and practicing with community-driven quizzes.

The production site is automatically compiled and hosted at: https://deciwiki.netlify.app

## Project Architecture

This project is built using the Docusaurus Jamstack framework and is optimized for static delivery via Netlify.

*   `docs/` - Contains all educational content, organized by lessons and topics in standard Markdown.
*   `src/css/custom.css` - Controls the custom blue color variables and overall site styling.
*   `src/pages/` - Contains the standalone pages, including the custom landing homepage.
*   `docusaurus.config.js` - The central configuration file for navigation bars, routing, and plugins.

## Technical Stack

*   **Framework:** Docusaurus (React-based static site generator)
*   **Hosting & Deployment:** Netlify Continuous Integration (CI/CD)
*   **Styling Engine:** Infima CSS
*   **Content Format:** MDX (Markdown + React components)

## Collaboration Workflow

You do not need access to the Netlify deployment dashboard to contribute to this project. All updates are handled directly through GitHub.

### How to Contribute Content

1.  **Request Repository Access:** Coordinate with the project maintainer to be added as a collaborator to the GitHub repository.
2.  **Locate the Target Lesson:** Navigate to the `docs/` folder.
3.  **Create or Edit Markdown Files:** Add your notes using standard Markdown formatting. Ensure that all technical explanations reference original public documentation rather than proprietary program assets.
4.  **Push Changes:** Commit and push your changes to the main branch. Netlify will automatically detect the push, compile the markdown, and update the live site within seconds.

### Guidelines for Notes and Quizzes

*   **Clean-Room Curation:** Do not copy verbatim text from proprietary slides or student guides. Summarize the core technical concepts in your own words.
*   **Public References:** When adding links or citations, point directly to the official open-source documentation (e.g., Python documentation, MDN Web Docs, Microsoft Learn) rather than internal course portals.
*   **Original Quiz Data:** When writing interactive quiz modules, modify variables, framing, and code snippets so that questions remain original while testing the identical conceptual milestone.

## Local Development (Optional)

If you wish to preview edits locally on your machine before pushing to production, execute the following commands in your terminal:

```bash
# Install dependencies
npm install

# Start the local development server
npm run start

The local server will initialize, typically at http://localhost:3000.

# Legal Disclaimer

This repository is an independent, community-led student initiative. It is not affiliated with, funded by, endorsed by, or officially connected to DECI, eYouth, or the Ministry of Communications and Information Technology (MCIT). All product names, logos, and brands are property of their respective owners.
