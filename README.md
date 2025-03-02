# Flipped Energy Front Page Prototype

This project is a simple implementation of [Vike](https://vike.dev) with server-side rendering (SSR) configured for GitHub Pages.

## GitHub Pages URL

The project is deployed at: [https://aceslick911.github.io/flipped-fe/](https://aceslick911.github.io/flipped-fe/)

## Contents

* [Introduction](#introduction)
* [Setup](#setup)
* [Configuration](#configuration)
  * [`/pages/+config.ts`](#pagesconfigts)
  * [Routing](#routing)
  * [Error Page](#error-page)
  * [Page Transition Hooks](#page-transition-hooks)
  * [SSR](#ssr)
  * [HTML Streaming](#html-streaming)
* [Deployment](#deployment)

## Introduction

This app is powered by [Vike](https://vike.dev) and [React](https://react.dev/learn). It is configured to use server-side rendering and is deployed on GitHub Pages.

## Setup

To set up the project, run the following commands:

```sh
npm install
npm run build
npm run start
```

## Configuration

### +config.ts

Such `+` files are [the interface](https://vike.dev/config) between Vike and your code. It defines:

* A default [`<Layout>` component](https://vike.dev/Layout) (that wraps your [`<Page>` components](https://vike.dev/Page)).
* A default [`title`](https://vike.dev/title).
* Global [`<head>` tags](https://vike.dev/head-tags).

### Routing

[Vike's built-in router](https://vike.dev/routing) lets you choose between:

* [Filesystem Routing](https://vike.dev/filesystem-routing) (the URL of a page is determined based on where its `+Page.jsx` file is located on the filesystem)
* [Route Strings](https://vike.dev/route-string)
* [Route Functions](https://vike.dev/route-function)

### Error Page

The [error page](https://vike.dev/error-page) which is rendered when errors occur.

### Page Transition Hooks

The [`onPageTransitionStart()` hook](https://vike.dev/onPageTransitionStart), together with [`onPageTransitionEnd()`](https://vike.dev/onPageTransitionEnd), enables you to implement page transition animations.

### SSR

SSR is enabled by default. You can [disable it](https://vike.dev/ssr) for all your pages or only for some pages.

### HTML Streaming

You can enable/disable [HTML streaming](https://vike.dev/stream) for all your pages, or only for some pages while still using it for others.

## Deployment

To deploy the project to GitHub Pages, use the following GitHub Actions workflow:

```yaml
name: GitHub Pages Deploy
on:
  push:
    branches:
      - main
permissions:
  contents: write
  pages: write
jobs:
  build-and-deploy:
    concurrency: ci-${{ github.ref }} # Recommended if you intend to make multiple deployments in quick succession.
    runs-on: ubuntu-latest
    steps:
      - name: Checkout 🛎️
        uses: actions/checkout@v4

      - name: Install and Build 🔧
        run: |
          yarn
          yarn build
        env:
          PUBLIC_ENV__GOOGLE_ANALYTICS: ${{ secrets.GOOGLE_ANALYTICS }}
      - name: Deploy 🚀
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: dist/client/
```
```

Similar code found with 1 license type