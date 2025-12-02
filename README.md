# keyhan.multican.com
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

