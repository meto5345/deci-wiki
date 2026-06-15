---
id: ethics-laws-disclosure
title: Ethics, Laws & Responsible Disclosure
sidebar_label: 6. Ethics, Laws & Responsible Disclosure
sidebar_position: 6
tags:
  - Cybersecurity
  - Ethical Hacking
  - Legal Frameworks
  - Responsible Disclosure
---

# Ethics, Laws & Responsible Disclosure

**TL;DR:** Knowing how to find computer bugs safely and legally without going to jail.

:::info Course Context
* Course: Level 3 Cybersecurity
* Module: Week 7 — Ethical Hacking
* Topic: Topic 6
:::

## Step 1: Obey Global Cybersecurity Laws

* **The Permission Boundary:** Doing a network port scan can be legal with written permission, but a criminal offense without it.
* **CFAA (US, 1986):** Computer Fraud and Abuse Act. Outlaws entering computer systems without permission.
* **Computer Misuse Act (UK, 1990):** Makes it a crime to access or change digital machine files without authorization.
* **EU NIS Directive:** Forces countries to build structural incident response networks.
* **GDPR:** Strict data rules that can fine companies if personal user data is breached.

## Step 2: Follow the Responsible Disclosure Blueprint

When you find a security bug in a company's software system, follow this reporting guide:

* **Document:** Take clear notes and screenshots showing a proof-of-concept validation. Do not access more data than needed to prove the bug exists.
* **Contact:** Send a private, securely encrypted email report to `security@company.com`.
* **Wait 90 Days:** Give the vendor a standard 90-day window to fix the code with a patch.
* **Publish:** Work with the vendor to share the bug details publicly so other firms can protect themselves.

### Sample Disclosure Email Template

```text
To: security@company.com
Subject: XSS Vulnerability in Contact Form — Responsible Disclosure

Dear Security Team,

I have identified a reflected XSS vulnerability in your contact form at /contact.
Severity: High. Impact: session hijacking for any user who visits a crafted URL.
Proof of Concept: [URL with payload like <script>alert(document.cookie)</script>].
Suggested Fix: encode all user input before rendering with htmlspecialchars().

I will keep this confidential for 90 days to allow remediation.
[Researcher name and contact]
```

## Step 3: Hack Legally in Bug Bounty Programs

* **Bug Bounty Platform:** Websites where companies invite hackers to safely test their software in exchange for cash rewards.
* **HackerOne & Bugcrowd:** Two well-known platforms that manage programs for companies and organizations.
* **Payout Rules:** Cash bounties scale strictly by flaw impact, and the amounts vary widely.
* **Check Scope Limits:** Always read the program's strict scope boundary list before doing any testing.

## Step 4: Practice Strict Professional Ethics

* **Data Restraint:** Prove a flaw exists once, then stop. Never read, steal, or alter internal company databases.
* **Sign NDAs:** Always sign and honor Non-Disclosure Agreements to keep client technical data confidential.
* **No Extortion:** Never weaponize or threaten to leak a vulnerability for personal financial gain.

## Quick Definitions

* **CFAA:** Computer Fraud and Abuse Act — the primary US federal cyber law banning unauthorized access.
* **Responsible Disclosure:** Reporting bugs privately and giving the company time to fix them before telling the public.
* **Bug Bounty:** Programs where companies pay rewards to hackers for safely identifying software gaps.
* **NDA:** Non-Disclosure Agreement — a legally binding contract to keep sensitive discoveries confidential.
