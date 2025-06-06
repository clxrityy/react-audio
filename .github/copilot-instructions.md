# Copilot Instructions


##### This file contains instructions for Copilot to follow when generating code.

# Copilot should generate code that is:
- **Correct**: The code should be syntactically and semantically correct.
- **Efficient**: The code should be optimized for performance and resource usage.
- **Readable**: The code should be easy to read and understand, with appropriate comments and documentation.
- **Consistent**: The code should follow the project's coding standards and conventions.

# Copilot should avoid generating code that is:
- **Overly complex**: The code should not be unnecessarily complicated or convoluted.
- **Redundant**: The code should not contain duplicate logic or unnecessary repetition.
- **Insecure**: The code should not introduce security vulnerabilities or risks.
- **Outdated**: The code should not use deprecated or obsolete libraries, functions, or practices.


# Copilot should focus on:
- **Completing the task**: The code should address the specific requirements and objectives of the task at hand.
- **Providing examples**: The code should include examples where appropriate to illustrate usage and functionality.
- **Testing**: The code should include tests to verify correctness and functionality, where applicable.

# Copilot should not:
- **Assume context**: The code should not make assumptions about the context or environment unless explicitly stated.
  - If context is needed, it should be requested by Copilot.
- **Generate boilerplate code**: The code should not include unnecessary boilerplate or scaffolding unless specifically requested.
- **Use non-standard libraries**: The code should avoid using libraries or frameworks that are not widely accepted or used in the industry unless specifically requested.


# Copilot should prioritize:
- **Clarity**: The code should be clear and understandable, even to someone unfamiliar with the specific task.
- **Maintainability**: The code should be easy to maintain and modify in the future.
- **Scalability**: The code should be designed to handle growth and increased complexity over time.

# Copilot should ensure that:
- **Documentation**: The code is well-documented, with clear explanations of functions, classes, and complex logic.
- **Error handling**: The code includes appropriate error handling to manage exceptions and edge cases.
- **Performance**: The code is optimized for performance, avoiding unnecessary computations and memory usage.
- **Compatibility**: The code is compatible with the target environment and adheres to relevant standards and practices.

---

- This codebase/repository's primary language is **TypeScript**, and it is built utilizing React and Next.js. The codebase is structured to follow best practices in modern web development, with a focus on modularity, reusability, and maintainability.
- This project is a turborepo, which means it is designed to manage multiple packages and applications within a single repository, streamlining development and collaboration.
  - The primary purpose is to:
    1. Deploy the package (`@clxrity/react-audio`) to npm.
      - The package is a React component library for audio playback and manipulation.
      - It can be found at `packages/main`.
    2. Deploy the documentation site to Vercel.
      - This is a Next.js application that serves as the documentation for the `@clxrity/react-audio` package.
        - It utilizes [Nextra](https://nextra.vercel.app/) for documentation generation.
      - It can be found at `apps/docs`.

The project utilizes the following technologies and tools:
- [React](https://reactjs.org/) for building user interfaces.
- [TypeScript](https://www.typescriptlang.org/) for static type checking.
- [Vitest](https://vitest.dev/) for testing React components.
- [Next.js](https://nextjs.org/) for server-side rendering and static site generation of the documentation.
- [Nextra](https://nextra.site/) for documentation generation.
- [ESLint](https://eslint.org/) for linting JavaScript and TypeScript code.
- [Prettier](https://prettier.io/) for code formatting.
- [Turborepo](https://turborepo.org/) for managing the monorepo structure and optimizing build processes.
- [Changesets](https://changesets.dev/) for versioning and changelog management.
