# Contributing to @clxrity/react-audio

Please review the following guidelines and familiarize yourself with the repository structure before submitting a pull request.

- [Repository Ecosystem](#repository-ecosystem)
  - [Directory Structure](#directory-structure)
  - [Package Structure](#package-structure)
  - [Application Structure](#application-structure)
- [Development Workflow](#development-workflow)
  - [Changesets](#changesets)
  - [Documentation](#documentation)
  - [Testing](#testing)
- [Submitting a Pull Request](#submitting-a-pull-request)
  - [Code Review Checklist](#code-review-checklist)
  - [Pull Request Guidelines](#pull-request-guidelines)

```bash
git clone https://github.com/clxrity/react-audio.git
cd react-audio
pnpm install
pnpm dev # Start the development server
```

---

## Repository Ecosystem

- [pnpm v10](https://pnpm.io/) for package management.
  ```bash
  npm install -g pnpm
  ```
- [Node.js v23](https://nodejs.org/en/) for running the development server and scripts.
  ```bash
  nvm install 23
  ```

  - Ensure you have the correct Node.js version by running:
  ```bash
  nvm use
  ```
  > Based on `.nvmrc` file in the root directory.

#### The repository uses the following tools and libraries:

- [React](https://reactjs.org/) for building user interfaces.
- [TypeScript](https://www.typescriptlang.org/) for static type checking.
- [Vitest](https://vitejs.dev/) for testing React components.
- [Next.js](https://nextjs.org/) for server-side rendering and static site generation of the documentation.
- [Nextra](https://nextra.site/) for documentation generation.
- [ESLint](https://eslint.org/) for linting JavaScript and TypeScript code.
- [Prettier](https://prettier.io/) for code formatting.

## Directory Structure

The primary sources of the project are located within `apps/` & `packages/`.

- `~/`
  - `.changeset/` - Directory for changeset configuration and local changesets.
  - `.github/` - GitHub-specific configurations and workflows.
  - `apps/` - Contains the main application and documentation.
    - `docs/` - Documentation application built with Next.js and Nextra.
  - `packages/` - Contains reusable packages and components.
    - `main/` - The main package containing the core React audio
      tools/components.
  - `...` - Configuration and metadata files at the root of the repository.
    - `.editorconfig` - Editor configuration file for consistent coding styles.
    - `.nvmrc` - Node.js version manager configuration file.
    - `pnpm-workspace.yaml` - pnpm workspace configuration file.
    - `turbo.json` - Configuration file for Turborepo, used for task running and caching.

### Package Structure

The `packages/` directory contains the main package and any additional packages that may be added in the future. Each package should follow a consistent structure to ensure maintainability and ease of use.

- `packages/`
  - `main/` - The main package (**`@clxrity/react-audio`**).
    - `src/` - Source code for the package.
      - `...`
      - `index.ts` - Entry point for the package.
    - `tests/` - Unit tests for the package.
    - `...`

#### Source

The source directory (`src/`) contains the core components and utilities of the package. Each component should be organized in its own directory, with a clear naming convention.

**Within, you will find:**

- `components/` - Contains reusable React components.
  - `lib/` - The component library. (**Importable**)
  - `ui/` - The UI components.
- `hooks/` - Custom React hooks. (**Importable**)
- `utils/` - Utility functions and helpers.

All components, hooks, and utilities that are meant to be used externally should be exported from the `index.ts` file in the `src/` directory. This allows for a clean and organized API surface for the package.

### Application Structure

The `apps/` directory contains, as you've likely guessed, the applications that use the packages in `packages/`. This includes the documentation application built with Next.js and Nextra (`docs/`).

**Within `apps/docs/`, you will find:**

- `app/` - The Next.js application structure.
  - `docs/[[...mdxPath]]/` - The documentation pages.
    - `page.tsx` - The wrapper for the `.mdx` content.
  - `_meta.ts` - Metadata for the documentation.
  - `globals.css` - Global styles for the application, including CSS imports.
    ```css
    @import "tailwindcss";
    @import "nextra-theme-docs/style.css";
    @import "@clxrity/react-audio/index.css";
    ```
  - `layout.tsx` - The layout component for the application.
  - `page.tsx` - The main page component for the application.
  - `not-found.tsx` - Custom 404 page for the application.
- `components/` - Shared components for the application.
- `content/` - Content files for documentation pages.
  - `_meta.ts` - Metadata for the content.
  - `[...].mdx` - Markdown files for documentation pages.
- `public/` - Static assets for the application.

---

## Development Workflow

1. **Install Dependencies**: Run `pnpm install` to install all dependencies.
2. **Start Development Server**: Use `pnpm dev` to start the development server for the documentation application.
3. **Run Tests**: Use `pnpm test` to run tests for the main package.
4. **Lint Code**: Use `pnpm lint` to lint the codebase.
5. **Build for Production**: Use `pnpm build` to build the main package and the documentation application for production.

### Changesets

This project uses [Changesets](https://github.com/changesets/changesets) to manage versioning and changelogs. When making changes to the codebase, you should create a changeset to describe your changes.

To create a new changeset, run:

```bash
pnpm changeset
```

Make sure to follow the prompts and provide a clear description of the changes made. This will aid in generating accurate changelogs and versioning for the project.

> **Note**: Unless you are an author or maintainer of this repository and/or package, please do not run the following commands:

- `pnpm changeset version` - This command is used to update the package versions based on the changesets created.
- `pnpm publish` - This command is used to publish the package to the npm registry.

These commands are reserved for maintainers and will not allow you to publish your changes without the necessary permissions.

Instead, please create a [pull request](#submitting-a-pull-request) with your changes and a changeset(s), and the maintainers will handle the versioning and publishing process.

### Documentation

The documentation is built using [Next.js](https://nextjs.org/) and [Nextra](https://nextra.site/). The documentation files are located in the `apps/docs/content/` directory, and they are written in Markdown with support for MDX.

#### Adding Documentation

To add new documentation pages, create a new Markdown file in the `apps/docs/content/` directory. You can use the following template:

```markdown
---
title: My New Page
description: A brief description of my new page.
---

# My New Page

This is the content of my new page.
```

If you're interested in contributing to the documentation in a more advanced way, please refer to the [Nextra documentation](https://nextra.site/docs) for more information on how to use MDX and customize the documentation layout.

> It is highly encouraged to add documentation for any new features or components you add to the project. This helps maintain a clear understanding of the project's capabilities and usage.

### Testing

Tests are ran utilizing [Vitest](https://vitest.dev/). The tests are located in the `packages/main/tests/` directory. You can run the tests using the following command:

```bash
pnpm test
```

Whenever you add new features or make changes to existing code, please ensure that you also add or update the corresponding tests to maintain code quality and reliability.

If you add new features or components, please make sure to add corresponding tests for them as well.

- Include unit tests for individual components and hooks.
- Include integration tests for components that interact with each other.
- If there is internal logic that needs to be tested, consider adding unit tests for those as well.

---

## Submitting a Pull Request

When you're ready to submit your changes, please follow these guidelines:

### Code Review Checklist

- [ ] Code follows the [ESlint](https://eslint.org/) and [Prettier](https://prettier.io/) coding standards.
  - Run `pnpm lint` to check for linting errors.
  - Run `pnpm prettier` to format the code.
- [ ] Tests are written and passing.
  - Run `pnpm test` to ensure all tests pass.
- [ ] Documentation is updated if necessary.
- [ ] Run `pnpm build` to ensure the package/app builds successfully.
- [ ] Changes are described in a changeset.
  - Run `pnpm changeset` to create a new changeset.

### Pull Request Guidelines

- [ ] Pull requests should be opened against the [`main`](https://github.com/clxrityy/react-audio/tree/main) branch.
- [ ] Pull requests should have a concise title and description of the changes made.
  - [ ] Include a link to the issue being addressed, if applicable.
  - [ ] If extra context and/or external resources are needed as references, they should be included in the description.
- [ ] Use the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) format for commit messages.
- [ ] Your pull request should be self-contained and not include unrelated changes.

---

##### Thank you for your interest in contributing!
