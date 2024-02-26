## INTRODUZIONE

L'intento di questo progetto è quello di fornire una POC navigabile che sfrutti le funzionalità di diverse librerie di 3D per implementare la realtà aumentata e la visualizzazione del modello.

## DESCRIZIONE

Il progetto è stato creato con NextJS e le cartelle sono così strutturate:

- *src*:
  - *app*: app contiene il layout della pagina principale e dello stile fondamentale per la visualizzazione della pagina
    - *api*: sfruttando i [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers) sono stati creati due endpoints:
      - ```/api/checkMobile``` verifica che il dispositivo sia di tipo mobile come indica il nome e ritorna un valore booleano ed un messaggio.
      -  ```/api/redirect``` si occupa della redirect verso gli assets 3D da caricare in modalità realtà aumentata. Per quanto riguarda il mondo Apple basta indicare l'url che fa da host al modello 3D *IN FORMATO . ```.usdz```*, per Android invece basta sostituire il link al modello con quello contenente il modello da voler visualizzare, questa volta *IN FORMATO ```.gltf``` o ```.glb```*.
  -*components*: questa cartella comprende i file ```scene.tsx``` e ```shoe.tsx``` che integrano e sfruttano la libreria *three.js* la creazione della scena e dell'ambiente in cui visualizzare il modello 3D. Il file ``ìnfo.tsx``` contiene la card che viene visualizzata al centro della pagina.

## VISUALIZZAZIONE

Per il corretto funzionamento della POC si consiglia fortemente di utilizzare Vercel. In modalità di sviluppo è presente solo la parte di three.js e quindi la visualizzazione del modello 3D. *L'AR e gli endpoint non avranno il funzionamento atteso*.

## CONSIGLI

Si congilia inoltre, di utilizzare una versione di npm > 18, così com'è indicato nel file ```.npmrc```.
