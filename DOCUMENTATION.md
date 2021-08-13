# Budget tracker

## Egyéni költségeket nyilvántartó rendszer - Dokumentáció
---
---

## 1. Az alkalmazás célja

Az alkalmazás feladata, hogy az egyéni költségeket nyilvántartsa és kezelje olyan módon, hogy a bevételek, a kiadások, továbbá a befizetendő számlák külön követhetőek.

## 2. Az alkalmazás telepítése

- Fork-olást követően, a gépre le kell klónozni a [GitHub repository](https://github.com/dorczy/budget-tracker) tartalmát.
- Az almappákba (`/backend`, `/frontend`) belépve telepíteni kell az alkalmazás függőségeit az `npm i` paranccsal mindkét helyen.
- Amennyiben további fejlesztések szükségesek, akkor telepíteni kell az Angular keretrendszert az `npm i -g @angular/cli` paranccsal.
- A kész Angular alkalmazást az `ng build --prod` paranccsal le kell build-elni.
- Ezután a `/frontend/dist` mappa tartalmát át kell másolni a `/backend/public` mappába.

## 3. Az alkalmazás konfigurálása

A _base.service.ts_ állományban be kell állítani az API végpont elérési útvonalát:  

[comment]: <> (Kiegészítés később - pl. http://localhost:3000)

## 4. Az alkalmazás indítása

A megadott Docker container indítása és inicializálása az alábbi lépéseket követve:
- [Docker Desktop](https://www.docker.com/products/docker-desktop) alkalmazás letöltése, telepítése, majd elindítása.
- A `/backend` mappa megnyitásával és itt az `npm run docker-compose:up` parancs kiadásával alkalmazásunk elindul.


## 5. A végpontok dokumentációja

- A [Swagger](https://swagger.io/) dokumentáció elérhetősége: `http://localhost:3000/api-docs`

---
---
## Linkek:

- [A User Story (adminisztrátori szerepkör) itt érhető el.](https://github.com/dorczy/budget-tracker/blob/main/README.md)
- A kiegészítő anyagok itt érhetők el.
