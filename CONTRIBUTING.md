# Contributing

Thanks for helping improve Green Drive Thru.

## Development workflow

1. Create a focused branch from `main`.
2. In `frontend/`, run `npm ci` and `npm run dev`.
3. Keep changes scoped and avoid committing credentials, personal data, build output, or `node_modules/`.
4. Before opening a pull request, run:

   ```bash
   npm test
   npm run build
   ```

5. Explain the reason for the change, how it was verified, and any data or asset licensing implications.

Use specific, imperative commit subjects such as `Fix dashboard year selection` or `Document local build requirements`.

Report security vulnerabilities privately according to [SECURITY.md](SECURITY.md).
