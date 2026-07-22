# Green Drive Thru

Green Drive Thru is a Traditional Chinese website for an NTU Innovation & Entrepreneurship Program team. It presents the team's ESG services, a dashboard for exploring bundled ESG report data from Taiwanese public companies, and a domestic-timber carbon-reduction calculator.

The production site is [green-drive-thru.netlify.app](https://green-drive-thru.netlify.app/). This repository contains a client-side React application; it does not contain an API or database service.

## Features

- Configurable bar, pie, and summary views over the bundled ESG dataset
- A domestic-timber carbon-reduction calculator
- Team, service, privacy-policy, and educational-content pages
- Static-site routing support for hosts such as Netlify

## Requirements

- Node.js 22.13 or newer
- npm 10 or newer

## Quick start

```bash
cd frontend
npm ci
npm run dev
```

Open the local URL printed by Vite (normally `http://localhost:5173`). No environment variables are required.

## Test and build

From `frontend/`:

```bash
npm test
npm run build
npm run preview
```

The production bundle is written to `frontend/build/`. The output directory intentionally matches the previous Create React App deployment contract.

The same test and build commands can be launched from the repository root:

```bash
npm test
npm run build
```

## Project layout

```text
frontend/
  public/       Static host files, icons, and social metadata images
  src/
    Components/ Reusable navigation, footer, feed, and dashboard UI
    Containers/ Route-level pages
    Data/       Bundled ESG dataset
    Images/     Project and team images
    Utils/      Timber calculator reference data
```

## Data and third-party services

The site loads a YouTube video, Google AdSense, Facebook links, and Instagram links. Those services have their own privacy policies and may receive browser metadata when a visitor loads or follows their content.

The timber carbon-conversion factors come from the Taiwan Ministry of Agriculture's [forest carbon calculation guide](https://www.moa.gov.tw/ws.php?id=17871). The provenance and redistribution terms for `frontend/src/Data/data.json` and the project images are not documented in this repository. Maintainers should verify and document those rights before reusing the data or assets outside this project.

## Contributing and security

See [CONTRIBUTING.md](CONTRIBUTING.md) for the development workflow. Please report security issues privately as described in [SECURITY.md](SECURITY.md); do not open a public issue for an undisclosed vulnerability or credential.

## License

The project is licensed under the [MIT License](LICENSE). The bundled data, photos, logos, and other third-party material may require separate permission or notices.
