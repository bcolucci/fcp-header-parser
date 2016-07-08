
# Header parser

## Description

User stories:
- I can get the IP address, language and operating system for my browser.

Example usage:

    https://cryptic-ridge-9197.herokuapp.com/api/whoami/
    {"ipaddress":"193.55.245.67","language":"fr","software":"X11; Linux x86_64"}

## How to test

    git clone https://github.com/bcolucci/fcp-header-parser.git \
      && npm install \
      && npm test \
      && npm start \
      && xdg-open http://localhost:3210/
