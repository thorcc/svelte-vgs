# Svelte-VGS

Svelte-VGS er en utvidelse til VS Code, laget for programfagene IT1 og IT2 på VGS. 

Ved kjøring av `Create Svelte project` kopieres malen `https://github.com/thorcc/svelte-eksamen-starter`. 
Ved kjøring av `Build Svelte` bygges hele Svelte-prosjektet til en kjørbar HTML-fil, som kopieres inn i mappen `LEVERING`. Innholdet i src-mappen kopieres også inn i mappen `LEVERING/Kode`.


<p>
  <img src="https://raw.githubusercontent.com/thorcc/svelte-vgs/master/example.png" alt="logo" width="300">
</p>

## Dette trenger du:

- [Node.js](https://nodejs.org/en/)
- Git
  - [Git (mac)](https://sourceforge.net/projects/git-osx-installer/)
  - [Git (windows)](https://git-scm.com/download/windows)

> Restart VS Code etter du har installert node og git.

## create svelte
```
npx degit https://github.com/thorcc/svelte-eksamen-starter .
npm install
npm run dev
```

## run svelte
```
npm run dev
```

## build svelte

```
npm run build
```
