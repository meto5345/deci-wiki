---
id: reconnaissance-footprinting
title: Reconnaissance & Footprinting
sidebar_label: 2. Reconnaissance & Footprinting
sidebar_position: 2
tags:
  - Cybersecurity
  - Ethical Hacking
  - Information Gathering
---

# Reconnaissance & Footprinting

**TL;DR:** Gathering public information about a target before touching their network.

:::info Course Context
* Course: Level 3 Cybersecurity
* Module: Week 7 — Ethical Hacking
* Topic: Topic 2
:::

## Step 1: Look From Far Away (Passive Recon)

* **Invisible Mode:** You do not touch the target's computers. They cannot see you.
* **Open Terminal:** Run these commands to harvest public facts:

```bash
# Get domain registration profiles and IP blocks
whois bbc.com

# Scrape public engines for emails and subdomains
theHarvester -d bbc.com -b google

# Find the exact machine handling email traffic
nslookup -type=mx bbc.com
```

### Other Data Spaces

* **Google Dorking:** Use advanced terms like `filetype:pdf` to find hidden files.
* **Shodan:** A search engine tracking connected hardware devices.
* **Social Media:** Use LinkedIn to see what tools employees mention using.

## Step 2: Touch the System (Active Recon)

:::warning Alert
Active tools interact directly with the target. This leaves logs. Get authorization first.
:::

* **Ping Sweep:** Shout at a range of IP network addresses to see who answers.
* **Traceroute:** Map the exact data road to the target system.
* **DNS Zone Transfer:** Attempt to download the entire internal network map.

## Step 3: Collected Outputs (The Target Snapshot)

Your final notes folder must show:

* **IP Blocks:** Owned numbers (e.g., `212.58.224.0/19`).
* **Subdomains:** Auxiliary entry paths (e.g., `vpn.example.com`).
* **Emails:** Predictable patterns (e.g., `firstname.lastname@company.com`).

## Quick Definitions

* **Reconnaissance:** Collecting information before testing.
* **Passive Recon:** Gathering data without touching the target.
* **Active Recon:** Gathering data by interacting with the target.
* **OSINT:** Public information available legally to anyone.
* **DNS:** The internet phonebook translating names to IP numbers.
