# Budget tracker

## Egyéni költségeket nyilvántartó rendszer - Dokumentáció
---
---

## 1. Az alkalmazás célja

Az alkalmazás feladata, hogy az egyéni vagy háztartásonkénti költségvetést nyilvántartsa és kezelje olyan módon, hogy a bevételek, a kiadások, továbbá a befizetendő számlák külön követhetőek legyenek.

## 2. Az alkalmazás telepítése

1. Fork-olást követően, a gépre le kell klónozni a [GitHub repository](https://github.com/dorczy/budget-tracker) tartalmát.
1. Az almappákba (`/backend`, `/frontend`) belépve telepíteni kell az alkalmazás függőségeit az `npm i` paranccsal mindkét helyen.
1. Amennyiben további fejlesztések szükségesek, akkor telepíteni kell az Angular keretrendszert az `npm i -g @angular/cli` paranccsal.
1. A kész Angular alkalmazást az `ng build --prod` paranccsal le kell build-elni.
1. Ezután a `/frontend/dist/budget-tracker` mappa tartalmát át kell másolni a `/backend/public` mappába.

## 3. Az alkalmazás konfigurálása

A `/frontend` mappában, a `config.service.ts` állományban található `apiUrl` változóban be kell állítani az API végpont elérési útvonalát: `http://localhost:3000`

## 4. Az alkalmazás indítása

A megadott Docker container indítása és inicializálása az alábbi lépéseket követve tehető meg:
- [Docker Desktop](https://www.docker.com/products/docker-desktop) alkalmazás letöltése, telepítése, majd elindítása.
- A `/backend` mappa megnyitásával és itt az `npm run docker-compose:up` parancs kiadásával az API elindul.

Amennyiben fejlesztés alatt áll az alkalmazás:
- A `/frontend` mappába lépve ki kell adni az `ng serve -o` parancsot.
- Ezzel az alapértelmezett porton elindul az Angular alkalmazás a böngészőben.

Ha a build-elt Angular alkalmazással dolgozik:
- Ebben az esetben a külön indítás nem szükséges.
- Az alkalmazás elérhető a böngészőből a `http://localhost:3000` URL-en.

**Megjegyzés:**
- Az alkalmazásban lehetősége van a regisztrációra.
- Előre elkészített, a belépéshez érvényes email és jelszó párosok:

Jogosultság | Email | Jelszó
------------ | ------------ | -------------
admin | admin@gmail.com | admin_pw
user | user@gmail.com | user_pw




## 5. A végpontok dokumentációja

- A [Swagger](https://swagger.io/) dokumentáció elérhetősége: `http://localhost:3000/api-docs`

---
---
## Linkek:

- A projekt [User Story-ja (adminisztrátori szerepköre) itt érhető el](https://github.com/dorczy/budget-tracker/blob/main/README.md).
