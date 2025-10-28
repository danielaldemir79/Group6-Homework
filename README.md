# Grupp 6 Hemläxa - Status Update 📊
**Deltagare:** Aygen, Jenny, John, Axel, Frans, Charlie och Daniel A

## 🎯 Projektöversikt
Vi har nu en **Project Hub** på `index.html` som visar alla funktioner och deras status. Använd denna som startsida för navigation mellan olika features.

## ✅ Vad som är klart:
- **Project Hub** (`index.html`) - Översikt över alla funktioner
- **Modern CSS-design** (`style.css`) - Gemensam styling för alla sidor
- **Sök på förnamn** (`firstname-filter.html` + `firstname-filter.js`) - Första funktionen är implementerad
- **Navigation** - Tillbaka-knappar mellan sidor

## 📋 Funktioner att implementera:

### 1. ✅ Sök på förnamn (FÄRDIG)
- **Filer:** `firstname-filter.html`, `firstname-filter.js`
- **Status:** Implementerad och fungerar

### 2. 🔨 Åldersberäkning 
- **Filer att skapa:** `age-calculator.html`, `age-calculator.js`
- **Funktion:** Beräkna ålder utifrån födelsedatum

### 3. 🔨 Filtrera på efternamn
- **Filer att skapa:** `lastname-filter.html`, `lastname-filter.js`
- **Funktion:** Filtrera och sortera efter efternamn

### 4. 🔨 Filtrera på e-post
- **Filer att skapa:** `email-filter.html`, `email-filter.js`
- **Funktion:** Filtrera och sortera efter e-postadress

### 5. 🔨 Filtrera på ålder
- **Filer att skapa:** `age-filter.html`, `age-filter.js`
- **Funktion:** Filtrera och sortera efter ålder (visa åldern)

### 6. 🔨 Dynamisk sortering
- **Filer att skapa:** `dynamic-sort.html`, `dynamic-sort.js`
- **Funktion:** Select-element för att välja sorteringsfält

### 7. 🎨 CSS-förbättringar
- **Fil att uppdatera:** `style.css`
- **Funktion:** Förbättra design (pågående process)

### 8. 🧭 Menysystem/Navigation
- **Uppdatera:** Alla HTML-filer
- **Funktion:** Konsekvent navigation mellan sidor

## 🚀 Snabbstart för utvecklare

### Steg 1: Välj din funktion
Öppna `index.html` i webbläsaren och se alla tillgängliga funktioner. Välj en som inte är tagen.

### Steg 2: Kopiera befintlig kod som bas
**ANVÄND `firstname-filter.html` och `firstname-filter.js` som mall!**


### Steg 3: Anpassa din kopia
1. **Uppdatera HTML:**
   - Ändra `<title>` till din funktions namn
   - Uppdatera header-text (`<h1>` och `<p>`)
   - Anpassa innehållet för din specifika funktion
   - Länka till rätt JS-fil i `<script>` taggen

2. **Anpassa JavaScript:**
   - Behåll grundstrukturen för att ladda `people.json`
   - Ändra filterings-/söklogiken för din specifika funktion
   - Uppdatera `displayPeople()` funktionen om behövs

### Steg 4: Uppdatera Hub-sidan
I `index.html`, hitta ditt funktions-kort och uppdatera:
- Ta bort `template` klassen från `<div class="function-card template">`
- Ta bort `disabled` klassen från länken
- Uppdatera länk-attributet `href="din-feature.html"`
- Lägg till ditt namn som utvecklare



## 🔧 Arbetsflöde
- **Diskutera och tilldela** funktioner i teamet
- **Kopiera befintlig kod** som startpunkt (INTE skapa från scratch)
- **Testa din feature** innan du commitar
- **Uppdatera din kod innan push** GÖR EN PULL INNAN DU PUSHAR UPP KOD FÖR ATT UNDVIKA CONFLICT.
- **Uppdatera hub-sidan** när din feature är klar
- **Arbeta i feature-brancher** för att undvika konflikter


- Använd **samma CSS-klass** som redan finns
- **Kommentera din JavaScript-kod** så andra förstår
- **Håll samma struktur** som `firstname-filter.html` för konsistens
