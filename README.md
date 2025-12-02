# keyhan.multican.com

Static website for keyhan.multican.com - fast, validated, and automatically deployed.

## Features

- **HTML/CSS/JS** - Simple static site structure
- **Validation** - HTML validation using html-validate
- **Linting** - CSS linting (Stylelint) and JS linting (ESLint)
- **Spell Check** - Grammar and spelling checks using cspell
- **CI/CD** - Automated testing and deployment via GitHub Actions
- **SFTP Deployment** - Automatic deployment to Loopia.se on push to main

## Project Structure

```
src/
├── index.html    # Main HTML page
├── styles.css    # CSS styles
└── main.js       # JavaScript functionality
```

## Development

### Prerequisites

- Node.js 18+ 
- npm

### Setup

```bash
npm install
```

### Commands

| Command | Description |
|---------|-------------|
| `npm run lint` | Run all linters (HTML, CSS, JS) |
| `npm run lint:html` | Validate HTML files |
| `npm run lint:css` | Lint CSS files |
| `npm run lint:js` | Lint JavaScript files |
| `npm run spell` | Check spelling and grammar |
| `npm test` | Run all validation and tests |

## CI/CD Pipeline

The GitHub Actions workflow runs on every push and pull request:

1. **Validate** - Runs all linters and spell checks
2. **Deploy** - Deploys to Loopia.se via SFTP (only on main branch)

### Required Secrets

For deployment, configure these secrets in your GitHub repository:

- `FTP_SERVER` - Your Loopia FTP server address
- `FTP_USERNAME` - Your FTP username
- `FTP_PASSWORD` - Your FTP password

## Adding Content

1. Add or edit HTML files in the `src/` directory
2. Update CSS in `src/styles.css`
3. Add JavaScript functionality in `src/main.js`
4. Commit and push - CI/CD will validate and deploy automatically

## License

Apache License 2.0
Sandbox for keyhan's static pages

## FTP Deployment

This repository automatically deploys to FTP on push to the `main` branch.

### FTP Configuration
- **Server:** ftpcluster.loopia.se
- **Username:** keyhan
- **Server Directory:** public_html/

### Setting Up the FTP Password

The FTP password should be stored as a GitHub Secret named `FTP_PASSWORD`:

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Set the name as `FTP_PASSWORD`
5. Enter your FTP password as the value
6. Click **Add secret**

Once configured, any push to the `main` branch will automatically deploy the repository contents to the FTP server.

