# Consult Change — Brand Identity Package
*Wersja 1.0 · lipiec 2026 · zbudowana na żywym DNA marki: kolory i fonty wyciągnięte z produkcyjnego kodu consultchange.pl*

---

## 1. Logo

**Konstrukcja:** ikona (pętla „C" w gradiencie marki) + wordmark „consult change" złożony w Plus Jakarta Sans ExtraBold, dwie linie, małymi literami. Nazwa zawsze pisana małymi literami w logo — w tekście ciągłym normalnie: Consult Change.

**Warianty w pakiecie** (`/logo/png`, każdy w @1x i @2x, wszystkie z przezroczystym tłem):

| Plik | Kiedy używać |
|---|---|
| `logo-horizontal-color` | **Podstawowy.** Jasne tła: strona, dokumenty, oferty |
| `logo-horizontal-white` | Ciemne tła: hero, bannery, slajdy, zdjęcia |
| `logo-horizontal-dark` | Gdy fiolet niepożądany (druk 1-kolorowy, dokumenty formalne) |
| `logo-horizontal-mono-black` | Faks, pieczątki, czarno-białe kopie, grawer |
| `logo-stacked-color` / `-white` | Formaty kwadratowe i wąskie: awatary, stopki, roll-upy |
| `icon-color` / `-white` / `-mono-black` | Sama ikona: favicon, awatar, sygnet, znak wodny |

**SVG** (`/logo/svg`): wersja kolorowa i biała — do druku wielkoformatowego i tam, gdzie potrzeba skalowania bez utraty jakości.

### Zasady
- **Pole ochronne:** minimum wysokość ikony ÷ 2 z każdej strony. Nic nie wchodzi w tę strefę.
- **Minimalna wielkość:** logo poziome — 120 px szerokości (druk: 30 mm). Sama ikona — 24 px.
- **Na zdjęciach:** tylko wariant biały, na przyciemnionym obszarze (min. 40% czerni).
- **Nie wolno:** rozciągać nieproporcjonalnie, zmieniać kolorów, dodawać cienia/obrysu, obracać, umieszczać w ramce, rekonstruować wordmarku innym fontem, zmieniać odstępu ikona–tekst.

---

## 2. Kolory

| Nazwa | HEX | RGB | Rola |
|---|---|---|---|
| **Honey** | `#F4C362` | 244, 195, 98 | Akcent główny, CTA, liczby, wyróżnienia |
| **CC Purple** | `#C985F0` | 201, 133, 240 | Akcent marki, linki, hover, tagi |
| **CC Blue** | `#BFE6F2` | 191, 230, 242 | Akcent chłodny, tagi, warianty |
| **Deep Blue** | `#0F172A` | 15, 23, 42 | Tło główne, tekst nagłówków |
| **Light Grey** | `#EDEDED` | 237, 237, 237 | Tła sekcji, separatory |
| **Ink** | `#0B0B0B` | 11, 11, 11 | Druk monochromatyczny |

**Proporcje:** ~60% Deep Blue / biel jako baza, ~25% szarości i tła, ~15% akcenty (Honey + Purple). Akcenty mają być rzadkie — wtedy działają.

**Gradient marki:** Purple → CC Blue → Honey (poziomo). Używany jako pasek akcentowy na dole materiałów i w słowach kluczowych („adopcję" w hero). Podgląd palety: `/palette/consultchange-paleta.png`.

**Dostępność:** Honey i CC Blue na bieli mają zbyt niski kontrast dla tekstu — używaj ich na Deep Blue albo jako elementy graficzne, nie jako kolor tekstu na jasnym tle.

---

## 3. Typografia

| Krój | Zastosowanie | Grubości w pakiecie |
|---|---|---|
| **Plus Jakarta Sans** | Nagłówki, logo, liczby, przyciski | ExtraBold 800, Bold 700, Medium 500 |
| **DM Sans** | Tekst ciągły, opisy, podpisy | Regular 400, Medium 500 |

Pliki TTF: `/fonts` (licencja SIL Open Font License — wolno używać komercyjnie, także w druku i u podwykonawców).
Web: już podpięte przez Google Fonts na stronie.

**Hierarchia:** H1 — Jakarta ExtraBold, ciasny tracking, duże skoki wielkości. Body — DM Sans Regular, interlinia 1.6. Liczby i statystyki — zawsze Jakarta ExtraBold w kolorze Honey.

---

## 4. Materiały gotowe do użycia

### LinkedIn (`/social/linkedin`)
- `linkedin-company-banner-1128x191.png` — baner profilu firmowego
- `linkedin-personal-patryk-1584x396.png` — baner osobisty Patryka
- `linkedin-personal-grzegorz-1584x396.png` — baner osobisty Grzegorza

### Open Graph (`/social/og`) — podglądy linków w social i komunikatorach
- `og-image-default.png` (PL) i `og-image-default-en.png` (EN)
- Per kategoria: `og-image-change.png`, `og-image-legal.png`, `og-image-ai.png`, `og-image-casestudy.png`
- **Wdrożenie:** podmień `og-image.png` w repo na `og-image-default.png`; dla artykułów wskaż w `<meta property="og:image">` obraz właściwej kategorii.

### Szablony postów (`/social/post-templates`) — 1080×1080
- `post-quote-dark` / `post-quote-light` — cytat/teza (wersja ciemna i jasna)
- `post-stat-3000` / `post-stat-11lat` — pojedyncza liczba + opis
Format kwadratowy, bo na LinkedInie zajmuje najwięcej miejsca w feedzie.

### Prezentacje (`/social`)
- `slide-cover-1920x1080.png` — okładka do decków

### Druk (`/print`) — 90×50 mm, 300 dpi, CMYK-ready
- `wizytowka-front-90x50mm-300dpi.png` — awers (logo na ciemnym tle)
- `wizytowka-patryk-back-90x50mm-300dpi.png` — rewers z danymi
**Uwaga dla drukarni:** dodać 3 mm spadu z każdej strony.

### Favicony i ikony aplikacji (`/favicon`)
Komplet: `favicon.ico`, PNG 16/32/48/64/180/192/512, `apple-touch-icon.png` (białe tło — wymóg iOS), `maskable-512x512.png` (Android PWA).

---

## 5. Głos marki

**Jesteśmy:** konkretni, praktyczni, oparci na dowodach. Mówimy językiem klienta, nie metodyki.
**Nie jesteśmy:** korporacyjni, ogólnikowi, sprzedażowi na siłę.

- **Tagline PL:** Wdrożenie to dzień pierwszy. My odpowiadamy za adopcję.
- **Tagline EN:** Go-live is day one. We own adoption.
- **Pozycjonowanie:** Change Management · CLM & Legal Ops · Industrial Sales
- **Zasada tekstu:** każde zdanie ma nieść informację. Jeśli można je usunąć bez straty — usuń.

---

## 6. Szybka ściąga

| Potrzebuję… | Weź |
|---|---|
| Logo na jasny dokument | `logo-horizontal-color@2x.png` |
| Logo na ciemny slajd | `logo-horizontal-white@2x.png` |
| Awatar (LinkedIn, Teams) | `icon-color@2x.png` |
| Podgląd linku do artykułu | `og-image-<kategoria>.png` |
| Post z cytatem | `post-quote-dark-1080.png` |
| Wizytówka do drukarni | `/print` + 3 mm spadu |
| Font dla podwykonawcy | `/fonts` (OFL — można przekazywać) |
