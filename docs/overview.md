---
slug: /overview
sidebar_position: 1
---

# 📚 Community Wiki Overview

Welcome to the central knowledge base. Use the sidebar navigation to explore available topics, or contribute your own synthesized notes to help expand this collective library.

### Current Modules
1. **Networking Fundamentals**
2. **Network Addressing & Subnetting**
3. **Introduction to Cybersecurity**
4. **Network Security**
5. **Data Privacy & Governance**
6. **Layered Security Architecture**
7. **Ethical Hacking**

---

## 🛠️ Contributor Guide: Embedding Media

Docusaurus supports rich media embeddings natively in all `.md` and `.mdx` files. Use the following syntax rules to add images or videos to your guides:

### 1. Embedding Images

You can embed images using standard Markdown syntax, relative assets, or HTML tags:

#### A. Static Folder Images (Recommended)
Place your images in the `static/img/` folder, and reference them using an absolute path starting from the site root:
```markdown
![Packet Flow Diagram](/img/undraw_docusaurus_mountain.svg)
```

#### B. HTML Image Elements
If you need custom dimensions, alignments, or styles, use standard HTML5 image tags:
```html
<img src="/img/undraw_docusaurus_react.svg" alt="React Architecture" style={{ maxWidth: '80%', display: 'block', margin: '12px auto' }} />
```

---

### 2. Embedding Videos

You can embed local mp4 files or external video feeds using standard web elements:

#### A. External Streaming Videos (YouTube/Vimeo)
Use an `<iframe>` player frame. Copy the embed URL from YouTube or Vimeo:
```html
<iframe 
  width="100%" 
  height="400" 
  src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
  title="Docusaurus Video Guide" 
  frameBorder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
  allowFullScreen
></iframe>
```

#### B. Local Video Player
Place your `.mp4` or `.webm` files inside the `static/video/` directory and use the HTML5 `<video>` element:
```html
<video controls width="100%" style={{ borderRadius: '8px', margin: '16px 0' }}>
  <source src="/video/tutorial-demo.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
```

