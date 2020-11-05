# Project name <!-- omit in toc -->

Project description.

## Table of contents <!-- omit in toc -->

- [1. Project information](#1-project-information)
  - [1.1. Packages version](#11-packages-version)
- [2. Contributing](#2-contributing)
  - [2.1. Prerequisites](#21-prerequisites)
  - [2.2. Setting up the project](#22-setting-up-the-project)
  - [2.3. Gitflow](#23-gitflow)
  - [2.4. Code linting and formatting](#24-code-linting-and-formatting)
  - [2.5. Running tests](#25-running-tests)
  - [2.6. Production build](#26-production-build)
- [3. Contributors](#3-contributors)

## 1. Project information

- Tag: **TAG**
- Type: **React.js**
- Language: **Javascript**
- Package name: **package-name**

### 1.1. Packages version

- react: **17.x**
- react-scripts: **4.x**
- eslint: **7.x**
- prettier: **2.x**

## 2. Contributing

### 2.1. Prerequisites

The following softwares must be installed and configured before contributing:

- Node.js **14.x**
- NPM

The following **Visual Studio Code** plugins are **HIGHLY RECOMMENDED**:

- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [vscode-styled-components](https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components)

### 2.2. Setting up the project

Install dependencies with NPM:

```bash
$ npm install
```

Start the local development server by running:

```bash
$ npm start
```

Open your browser and go to http://localhost:3000/

### 2.3. Gitflow

This project follow the Gitflow workflow with the following branches:

- `main` Production branch. Code must be tested and validated before pushing.
- `hotfix/{name}` Branch where bug fixes are added when they are detected in production.
- `release/{version}` No feature are added in the release branch except bug fixes.
- `develop` Branch where feature are integrated for the next release.
- `feature/{feature-name}` All new features must be in branches prefixed with **feature/** and feature name must be in **spinal-case**.

### 2.4. Code linting and formatting

To run Eslint, run the following command:

```bash
$ npm run lint
```

If you want to automatically fix your code, run:

```bash
$ npm run lint:fix
```

To format your code, run the following command:

```bash
$ npm run format
```

### 2.5. Running tests

To run unit tests, execute the following command:

```bash
$ npm test
```

### 2.6. Production build

To create a production build, run the following command:

```bash
$ npm run build
```

The production build are available in the `build/` folder.

## 3. Contributors

- [Julien PAPINI](mailto:julien.papini@gmail.com)
