---
id: scanning-enumeration
title: Scanning & Enumeration
sidebar_label: 3. Scanning & Enumeration
sidebar_position: 3
tags:
  - Cybersecurity
  - Ethical Hacking
  - Infrastructure Probing
  - Network Mapping
---

# Scanning & Enumeration

**TL;DR:** Finding open doors (ports) and checking what software version runs behind them.

:::info Course Context
* Course: Level 3 Cybersecurity
* Module: Week 7 — Ethical Hacking
* Topic: Topic 3
:::

## Step 1: Knock on Doors with Nmap

* **Communication Doors:** Computers use numbers called ports to talk.
* **Pick a Scan Command:** Open your terminal and scan your authorized target:

```bash
# Stealth mode (SYN Scan): Fast, drops connection before firewalls log it
nmap -sS 192.168.1.10

# Loud mode (TCP Connect Scan): Completes full handshake, leaves heavy logs
nmap -sT 192.168.1.10

# UDP mode (UDP Scan): Checks silent lanes like DNS/DHCP. Very slow
nmap -sU 192.168.1.10
```

## Step 2: Identify Critical Ports

* **Port 22 (SSH):** Secure remote command logins.
* **Port 80 (HTTP):** Normal unencrypted web traffic.
* **Port 443 (HTTPS):** Secure encrypted web traffic.
* **Port 445 (SMB):** File sharing on Windows networks.
* **Port 3306 (MySQL):** Database filing cabinets holding application profiles.

## Step 3: Grab Version Numbers (Enumeration)

* You must discover the exact software version running behind the port.
* Embed version detection (`-sV`) and OS fingerprinting (`-O`) parameters:

```bash
# Scan for ports, application versions, and operating system types
nmap -sS -sV -O 192.168.1.10
```

### Reading the Result Snapshot

```text
PORT     STATE SERVICE VERSION
22/tcp   open  ssh     OpenSSH 7.9 (Ubuntu)
80/tcp   open  http    Apache httpd 2.4.38
3306/tcp open  mysql   MySQL 5.7.33
OS: Linux 4.15
```

* **Analysis:** Look up OpenSSH 7.9 or Apache 2.4.38 on public databases to find known security bugs.

## Step 4: Run Targeted Scanning Scripts

```bash
# If Port 445 is open, run this to scrape Windows usernames
enum4linux -a 192.168.1.10

# If Port 80 is open, use netcat to read the web server text banner
nc -v 192.168.1.10 80
```

## Quick Definitions

* **Port Scan:** Searching a target for open communication pathways.
* **Enumeration:** Gathering deep version and user details from an open port.
* **Banner Grabbing:** Reading the plain-text software name sent back by a port.
* **Open Port:** A network path actively accepting connection requests.
