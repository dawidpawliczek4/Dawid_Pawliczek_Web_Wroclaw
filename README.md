# Zadanie rekrutacyjne: Uproszczona wersja klienta sklepu internetowego

## Założenia i podejście

* **Modułowa struktura**: kod podzielony jest na foldery `app`, `products`, `cart` i `checkout`, co ułatwia rozwój kolejnych feature’ów.
* **React + TypeScript**: użyto Vite do szybkiego bootstrapu projektu z typowaniem.
* **Zarządzanie stanem**: koszyk obsługiwany jest przez `React Context` + `useReducer`, z automatyczną synchronizacją do `localStorage`.
* **Routing**: React Router do nawigacji wewnątrz aplikacji.
* **Oddzielna strona potwierdzenia**: statyczny plik `confirmation.html` w `public/`, aby zagwarantować pełne odświeżenie.
  * **Alternatywy**: rozważałem wykorzystanie trasy SPA z React Router (`reloadDocument`) lecz finalnie zdecydowałem się na osobny plik HTML, ponieważ odświeżany jest cały dokument, a nie tylko komponent, co najpełniej odpowiada wymogom projektu.
* **Stylizacja**: CSS modułowe pliki dla poszczególnych stron oraz globalne style w `index.css`.

## Struktura folderów

```
src/
├── app/                      # Punkt wejścia i konfiguracja React Router
├── cart/
│   ├── components/          # komponenty koszyka
│   └── providers/           # context, reducer
├── checkout/
│   └── components/          # komponenty podsumowania zamówienia
├── products/
│   ├── components/          # komponenty listy produktów
│   ├── data/                # products.json
│   └── types/               # definicje typów
├── index.css                 # Podstawowe style, reset, itd.
└── public/
    └── confirmation.html     # Strona potwierdzenia zamówienia
```

## Instrukcje uruchomienia

1. **Zainstaluj zależności**:

   ```bash
   npm install
   ```

2. **Uruchom środowisko deweloperskie**:

   ```bash
   npm run dev
   ```

3. **Otwórz przeglądarkę** i przejdź do: [http://localhost:5173](http://localhost:5173)