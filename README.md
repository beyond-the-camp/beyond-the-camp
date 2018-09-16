# Beyond the camp

This is the repo for the Beyond the Camp website.

## Prerequisites

To run or build this project locally, you'll need a DatoCMS API token to retrieve content.

- Create a file called `.env` in the project root.
- Add a line to the file: `DATO_API_TOKEN=abc123`, where `abc123` is the read-only API token for the DatoCMS project.

## Usage

Install dependencies using yarn:

```
yarn install
```

Start a development server that will update as you make changes to the source:

```
yarn dev
```

Build the final production version of the project:

```
yarn build
```

The result will be saved in the `public` directory.

Serve the output of the last build locally:

```
yarn serve
```
