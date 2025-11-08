# Exercice – Explication de code et utilisation des Hooks

## Partie 1 – Compréhension du code

Voici un code que vous devez **analyser et expliquer**, en vous appuyant sur le cours et la documentation de React.

---

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React – useEffect & useState</title>

    <!-- React, ReactDOM et Babel -->
    <script
      src="https://unpkg.com/react@18/umd/react.development.js"
      crossorigin
    ></script>
    <script
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
      crossorigin
    ></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

    <!-- TailwindCSS -->
    <script src="https://cdn.tailwindcss.com"></script>
  </head>

  <body
    class="bg-slate-900 text-white min-h-screen flex flex-col items-center justify-center p-4"
  >
    <h1 class="text-3xl font-bold mb-6">Suivi de température</h1>
    <div id="root" class="w-full max-w-xl"></div>

    <script type="text/babel">
      const { useState, useEffect } = React;

      function Counter() {
        const [count, setCount] = useState(0);

        useEffect(() => {
          console.log("MONTAGE / MISE À JOUR :", count);

          // Fonction de nettoyage (appelée au démontage)
          return () => {
            console.log("NETTOYAGE :", count);
          };
        });

        return (
          <React.Fragment>
            <p>Compteur : {count}</p>
            <button
              onClick={() => setCount(count + 1)}
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded mt-2"
            >
              +1
            </button>
          </React.Fragment>
        );
      }

      function App() {
        const [status, setStatus] = useState(true);

        return (
          <div className="bg-slate-800 p-4 rounded-xl shadow-lg">
            <button
              onClick={() => setStatus(!status)}
              className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded mb-4"
            >
              Changer le statut
            </button>

            {status && <Counter />}
          </div>
        );
      }

      ReactDOM.createRoot(document.getElementById("root")).render(<App />);
    </script>
  </body>
</html>
```

---

### ✏️ Travail demandé

1. **Expliquez le fonctionnement du code** :

   - Quel est le rôle de `useState` dans `Counter` et `App` ?

     useState permet de créer des variables d'état. il gere un compteur (int) dans Counter et un statut (bool) dans App.

   - À quoi sert `useEffect` ici ?

     Ici il affiche dans la console le compteur a chaque rendu et lors du démontage du composant.

   - Quand la fonction de nettoyage est-elle appelée ?

     Elle est appelée lors du démontage du composant Counter.

   - Que se passe-t-il quand on clique sur "Changer le statut" ?

     Le statut passe de true à false ou de false à true, ce qui monte ou démonte le composant Counter.

   - Quelle est la différence entre le **montage**, la **mise à jour**, et le **démontage** du composant `Counter` ?

     Le montage est l'initialisation du composant, la mise à jour est le rerender du composant suite a un changement d'état, et le démontage est la suppression du composant de l'interface.

2. Appuyez-vous sur les concepts vus en cours :

   - Le cycle de vie d'un composant fonctionnel.

     un composant fonctionnel à 3 phases : le montage (affichage à l'écran), la mise à jour (modification de valeur d'un useState) et le démontage (suppression de l'affichage).

   - Le comportement de `useEffect` à chaque rendu.

     useEffect est appelé à chaque rendu du composant, il retourne aussi une fonction de nettoyage qui est appelée lors du démontage du composant.

---

## Partie 2 – Exemple d'utilisation de `useReducer`

Donnez un **exemple simple** d'un composant React utilisant le hook `useReducer` pour gérer un compteur, `useReducer` est un super `useState`
Vous pouvez vous inspirer de ce modèle :

```jsx
import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    // TODO
    default:
      return state;
  }
}

export default function CounterReducer() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return <div className="p-4 bg-slate-800 rounded-lg text-white"></div>;
}
```

Voici un exemple simple d'un compteur utilisant `useReducer` :

```jsx
import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
}

export default function Counter() {
  const [state, dispatch] = React.useReducer(reducer, { count: 0 });

  return (
    <div>
      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}
```
