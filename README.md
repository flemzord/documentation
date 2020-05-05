# Documentation

This website is built using Docusaurus 2, a modern static website generator.

<!--
     THIS FILE IS AUTOGENERATED!

     To make changes please edit the template located at:

     README.md.erb
-->

## Installation (website)

```bash
cd website
yarn
```

## Local Development

```bash
cd website
yarn start
```

This command starts a local development server and open up a browser window.
Most changes are reflected live without having to restart the server.

## Build

```bash
cd website
yarn build
```

This command generates static content into the `build` directory and can be
served using any static contents hosting service.

## Updating documentation, guides and articles

Install Ruby gems used for markdown generation in `scripts` folder:

```bash
cd scripts
bundle install
```

Do not edit markdown files directly - they're generated using `ERB` (Embedded RuBy).
Instead of editing `.md` files directly, apply your changes to some_doc.md**.erb** and
then generate markdown by running `make generate USE_CONTAINER=none` in the root folder
of this repository.

Running `make generate USE_CONTAINER=none` will apply your changes to all affected markdown files.
Commit, push & create a PR with markdown files generated by the templating system.



