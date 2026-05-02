# Architecture Site

A modern React-based architecture portfolio site with mobile support via Capacitor.

## Project Structure

- **`client/`** - React application with Capacitor for mobile (iOS/Android)
- **`.github/workflows/`** - GitHub Actions for automated deployment

## 🚀 Deployment to GitHub Pages

The project is configured to automatically deploy to GitHub Pages on every push to `main` or `master` branch.

### Prerequisites

Ensure your repository settings are configured:

1. Go to **Settings** → **Pages**
2. Set **Source** to "Deploy from a branch"
3. Select **Branch**: `gh-pages` (will be created automatically)
4. Click **Save**

### Automatic Deployment

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will:
- ✅ Trigger on push to `main` or `master`
- ✅ Install dependencies
- ✅ Build the React app
- ✅ Deploy to GitHub Pages automatically

**Live Site URL**: https://sahithm2006.github.io/Home-project/

### Local Development

```bash
cd client

# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Deploy manually (requires gh-pages package)
npm run deploy
```

## 📱 Mobile Development

The project includes Capacitor for native iOS/Android apps:

```bash
cd client

# Build and sync to native platforms
npm run build
npx cap add ios
npx cap add android
npx cap sync
```

## Technology Stack

- **Frontend**: React 19, React Router, Tailwind CSS
- **Animations**: Framer Motion
- **Mobile**: Capacitor
- **Build**: React Scripts, Vite, Tailwind
- **Deployment**: GitHub Pages

## Available Scripts

Inside the `client/` directory:

- `npm start` - Run dev server
- `npm run build` - Build for production
- `npm run deploy` - Deploy to GitHub Pages
- `npm test` - Run tests

---

**Note**: All deployment happens automatically via GitHub Actions. Just push to `main` or `master` branch!
