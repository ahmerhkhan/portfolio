
# QR Pay Demo (Ionic + React PWA)

A minimal offline/online QR-based payment demo. No backend. All data in localStorage.

## Features
- One-time profile setup (full name, alias, IBAN) with duplicate checking against the local registry.
- Main screen with Scan QR, Send Money, Receive Money.
- Receive Money shows your profile QR and optional Payment Request QR (with amount + expiry).
- Send Money via QR scan or entering alias/IBAN. Deducts your local balance; credits payee in local registry.
- Online/Offline toggle. Online enables **Add Tokens** (prefund) to increase your balance.
- Local transaction history.

## Run (PWA)
```bash
npm install
npm run dev
# open http://localhost:5173
```
For mobile camera permissions, test on a phone (same LAN) or deploy to HTTPS.

## Build PWA
```bash
npm run build
# dist/ can be hosted statically; add HTTPS for camera.
```

## Package to Android APK (Capacitor)
1. Install Capacitor CLI globally (optional):
```bash
npm i -g @capacitor/cli
```
2. Add Capacitor and Android platform:
```bash
npm i @capacitor/core @capacitor/cli
npx cap init qr-pay-demo com.example.qrpay
npm run build
npx cap add android
npx cap copy
npx cap open android
```
3. In Android Studio, build & run on device/emulator. Grant camera permission.

> Note: The demo uses `html5-qrcode` for scanning and `qrcode.react` for generating QR codes.

## Reset / Clear Data
Clear browser storage for the site to reset profile and balances.
