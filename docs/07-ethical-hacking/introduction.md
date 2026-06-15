---
id: intro-ethical-hacking
title: Introduction to Ethical Hacking
sidebar_label: 1. Introduction
sidebar_position: 1
tags:
  - Cybersecurity
  - Ethical Hacking
  - Penetration Testing
---

# Introduction to Ethical Hacking

Ethical hacking is the practice of intentionally probing computer systems, networks, and applications for security vulnerabilities with the explicit, written permission of the system owner. The goal is to discover weaknesses before malicious actors do, allowing organizations to fix them proactively.

:::info Course Context
* **Course:** Level 3 Cybersecurity
* **Module:** Week 7 — Ethical Hacking
* **Topic:** Topic 1
:::

## 🎯 Learning Objectives

By the end of this topic, you will be able to:
* **Define** ethical hacking and explain its true purpose in defensive cybersecurity.
* **Distinguish** between White Hat, Black Hat, and Grey Hat hackers.
* **Describe** the five standard phases of penetration testing.
* **Explain** the critical legal and ethical frameworks that govern authorized testing.

---

## 👥 Categories of Hackers

The cybersecurity field separates categories of hackers based on two primary factors: **authorization** and **intent**.

| Hacker Type | Authorization | Intent | Legal Status |
| :--- | :--- | :--- | :--- |
| **White Hat** | 🟢 Full, Explicit Permission | 🛡️ Improve security & protect assets | Fully Legal |
| **Grey Hat** | 🟡 No Prior Permission | 🔍 Vulnerability discovery & disclosure | Legally Risky / Ambiguous |
| **Black Hat** | 🔴 Zero Permission | 💰 Personal gain, theft, or damage | Illegal / Criminal |

---

## 🔄 The 5 Phases of Penetration Testing

Penetration testing relies on a structured, repeatable methodology to simulate threat actors accurately.

1. **Reconnaissance**
   * Gathering passive and active intelligence about the target architecture before firing a single exploit payload.
2. **Scanning**
   * Actively probing the infrastructure for open ports, active services, operating system versions, and initial vulnerabilities.
3. **Exploitation**
   * Safely leveraging discovered flaws to establish an initial foothold or bypass security boundaries.
4. **Post-Exploitation**
   * Evaluating business impact by attempting lateral movement and privilege escalation inside the network.
5. **Reporting**
   * Documenting all technical evidence, exploitation steps, and actionable remediation roadmaps for management.

---

## ⚖️ Legal and Ethical Frameworks

:::danger Mandatory Guardrail
**Written authorization**—specifically an executed Scope of Work (SoW) and Rules of Engagement (RoE)—is strictly mandatory before running any technical scans. Diverging from the agreed scope crosses the line from legitimate security testing into a cybercrime.
:::

### Governing Legislation
* **Computer Fraud and Abuse Act (CFAA) [US]:** The fundamental federal statute used to prosecute unauthorized computer access.
* **Computer Misuse Act (CMA) [UK]:** The primary legislative framework outlawing unauthorized access to digital materials in the United Kingdom.

### Industry Standards & References
* **NIST SP 800-115:** *Technical Guide to Information Security Testing and Assessment*. Provides formal structural guidelines for auditing security controls.
* **MITRE ATT&CK®:** A living, comprehensive matrix documenting real-world adversary tactics, techniques, and procedures (TTPs).
* **Industry Certifications:** Leading professional benchmarks include EC-Council's **CEH** (Certified Ethical Hacker) and Offensive Security's **OSCP** (Offensive Security Certified Professional).

---

## 🔍 Real-World Scenario Walkthrough

:::note Practical Application
A professional penetration tester is hired to test a firm's perimeter security assets. The pipeline progresses through the following steps:
1. **Reconnaissance:** The tester performs a standard `WHOIS` lookup on the client's public domain.
2. **Scanning:** A targeted `Nmap` network sweep identifies an open **Port 22 (SSH)**.
3. **Exploitation Prep:** Analysis confirms the running SSH version is vulnerable to a known public flaw (**CVE-2023-38408**).
4. **Remediation:** Rather than breaking the system, the tester documents the vector and delivers a clear fix: *“Upgrade OpenSSH to version 9.3p2 or later immediately.”*
:::

---

## 📖 Glossary

| Term | Definition |
| :--- | :--- |
| **Ethical Hacking** | Authorized security validation aimed at finding flaws before hostile forces exploit them. |
| **Penetration Testing** | A structured, simulated cyberattack against an infrastructure's defenses. |
| **CVE** | *Common Vulnerabilities and Exposures* — the public dictionary database tracking known software vulnerabilities. |
| **Scope** | The strict technical and physical boundaries defined in an assessment agreement. |
