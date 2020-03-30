---
layout: assignment
title: Web Sockets
---

For this assignment, you will create a very basic version of Google Docs in your Laravel app.

Start by creating a public route `/docs` in your Laravel project. On this page, display a simple editor using an editable div through the [`contenteditable` attribute](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Editable_content).

Users will be able to type content into this div. As a user types, send the content through a web socket connection so that all connected clients receive it and see the most up to date document.

## Submission

Submit your web socket server repo to [https://classroom.github.com/a/O2g5Hf2f](https://classroom.github.com/a/O2g5Hf2f). Create a README.md file and add a link to the `/docs` route of your Laravel app.
