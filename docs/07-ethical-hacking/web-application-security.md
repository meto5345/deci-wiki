---
id: web-application-security
title: Web Application Security
sidebar_label: 5. Web Application Security
sidebar_position: 5
tags:
  - Cybersecurity
  - Ethical Hacking
  - Web Security
  - OWASP
---

# Web Application Security

**TL;DR:** Websites have bugs in their code logic. Attackers use these bugs through browsers to steal data or trick users.

:::info Course Context
* Course: Level 3 Cybersecurity
* Module: Week 7 — Ethical Hacking
* Topic: Topic 5
:::

## Step 1: Learn the Top Weaknesses (OWASP Top 10)

* **OWASP:** A group that lists the most critical dangers facing websites.
* **A01 Broken Access Control:** Users sneaking into files or features they are not allowed to see.
* **A02 Cryptographic Failures:** Secret data being leaked because encryption is missing or weak.
* **A03 Injection:** Feeding bad text input that tricks the backend into running unauthorized commands.
* **A05 Security Misconfiguration:** Leaving default setup settings, open files, or unneeded active functions.
* **A07 Identification Failures:** Bad passwords or weak login systems that allow user account hijacking.

## Step 2: Understand SQL Injection (SQLi)

* **The Bug:** The website takes user input and glues it directly into a database query string without checking it.
* **The Injection Trick:** Feeding math statements that are always true to confuse the login gate.
* **The Payload:** Drop this text snippet into a vulnerable input field:

```text
' OR '1'='1
```

* **How the Backend Breaks:** The database reads the string and returns every user account record because the math statement `1=1` is always true:

```sql
SELECT * FROM users WHERE id='1' OR '1'='1'
```

* **The Fix:** Use parameterized queries (prepared statements) to isolate input text from code commands:

```php
$stmt = $pdo->prepare('SELECT * FROM users WHERE id = ?');
$stmt->execute([$user_id]);
```

## Step 3: Understand XSS and CSRF Bugs

* **Cross-Site Scripting (XSS):** Injecting browser code like JavaScript into a page so it executes inside another user's browser session.
  * **Stored XSS:** The bad script saves directly to the server's database and runs every time anyone loads the page.
  * **Reflected XSS:** The script bounces off a temporary URL parameter and runs immediately.
  * **The Fix:** Output encoding, which escapes special HTML characters so they cannot run as live scripts.

* **Cross-Site Request Forgery (CSRF):** Tricking a logged-in user's browser into clicking a hidden button that transfers funds or resets details without their clear consent.
  * **The Fix:** Using unique, unpredictable verification keys called anti-CSRF tokens.

## Step 4: Intercept Live Traffic with Burp Suite

* **Burp Suite:** An interception tool that sits between your browser and the web server so you can pause and alter web requests manually.

### Core Tool Components

* **Proxy:** The traffic cop that pauses outbound HTTP and HTTPS communication packets for inspection.
* **Repeater:** A manual testing chamber used to edit and resend a single web request over and over.
* **Intruder:** An automated testing tool used to cycle through lists of passwords or attack payloads quickly.
* **OWASP ZAP:** A free, open-source alternative tool option used to run automated vulnerability scans.

## Quick Definitions

* **OWASP:** Open Web Application Security Project — a group tracking web application code standard risks.
* **SQL Injection:** Forcing a backend database to run malicious query commands via unsanitized input fields.
* **XSS:** Injecting malicious script code into web pages viewed by active users.
* **CSRF:** Tricking an authenticated browser session into sending an unauthorized state-changing request.
* **Burp Suite:** A proxy workspace platform used to manually test and inspect application traffic.
* **DVWA:** Damn Vulnerable Web App — a safe training sandbox environment used to practice hacking techniques legally.
