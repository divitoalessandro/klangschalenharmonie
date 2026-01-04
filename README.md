# Klangschalen Harmonie

Website für Klangschalen Harmonie von Roberta Di Vito - Klangschalenmassagen in Schaffhausen, Schweiz.

## 🌿 Features

- **Responsive Design** - Optimiert für alle Geräte (Desktop, Tablet, Mobile)
- **Smooth Animations** - Fade-in Effekte beim Scrollen
- **Interaktive Vorteile-Section** - Expandierbare Cards mit Accordion-Verhalten
- **FAQ Accordion** - Interaktive häufig gestellte Fragen
- **Kontaktformular** - Integriert mit HubSpot CRM
- **Online-Terminbuchung** - Integriert mit Calendly
- **Deutsche Inhalte** - Vollständig für den Schweizer Markt lokalisiert

## 📁 Projektstruktur

```
klangschalentherapie/
├── index.html              # Hauptseite
├── impressum.html          # Impressum
├── datenschutz.html        # Datenschutzerklärung
├── css/
│   └── styles.css          # Custom Styles und Animationen
├── js/
│   └── main.js             # JavaScript Funktionalität
├── favicon/                # Favicon Dateien
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── favicon-48x48.png
│   ├── favicon-96x96.png
│   └── apple-touch-icon.png
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions für FTP Deployment
└── README.md
```

## 🚀 Getting Started

1. Repository klonen
2. `index.html` im Browser öffnen

Kein Build-Prozess erforderlich - statische Website mit:
- [Tailwind CSS](https://tailwindcss.com/) via CDN
- [Lucide Icons](https://lucide.dev/) für Icons
- [Google Fonts](https://fonts.google.com/) (Inter & Playfair Display)

## 🔧 Externe Dienste

### HubSpot (Kontaktformular)
Das Kontaktformular sendet Daten an HubSpot CRM. Konfiguration erfolgt in `js/main.js`.

### Calendly (Terminbuchung)
Die Buchungslinks verweisen auf Calendly. Links können in `index.html` angepasst werden.

### Supabase (Medien-Hosting)
Bilder werden über Supabase Storage gehostet.

## 🚢 Deployment

### Automatisches Deployment (GitHub Actions)

Bei jedem Push auf den `main` Branch wird automatisch via FTP deployed.

**Benötigte GitHub Secrets:**
- `FTP_SERVER` - FTP Server Adresse
- `FTP_USERNAME` - FTP Benutzername
- `FTP_PASSWORD` - FTP Passwort

### Manuelles Deployment

Alle Dateien per FTP in das `public_html` Verzeichnis hochladen.

## 📝 Anpassungen

### Kontaktinformationen
In `index.html` und `datenschutz.html`:
- Telefonnummer
- E-Mail Adresse
- Standort/Adresse

### Preise
In `index.html` im Pricing-Bereich:
- Erste Klangreise: CHF 60 (45 Min)
- Intensive Klangreise: CHF 120 (60 Min)

### Bilder
Bild-URLs können in `index.html` angepasst werden:
- Logo (in `css/styles.css`)
- Hero Hintergrundbild
- About Section Profilbild

## 📄 Seiten

| Seite | Beschreibung |
|-------|--------------|
| `index.html` | Hauptseite mit allen Sections |
| `impressum.html` | Rechtliche Informationen |
| `datenschutz.html` | Datenschutzerklärung (DSGVO-konform) |

## 🎨 Design System

- **Farbschema**: Stone/Orange (Tailwind CSS)
- **Schriften**: Playfair Display (Serif), Inter (Sans-serif)
- **Icons**: Lucide Icons

## 📄 Lizenz

© 2026 Klangschalen Harmonie. Alle Rechte vorbehalten.
