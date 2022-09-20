## Развертывание проекта

1. Создание базы данных:
```
cat scripts/schema.pg.sql | sudo -u postgres psql
```
2. Запуск миграций:
```
npx sequelize-cli db:migrate
```
3. Запуск сидов:
```
npx sequelize-cli db:seed:all
```
Старт сервера в дев режиме
```
npm run dev
```
Страница входа: http://127.0.0.1:3000/signin

Данные пользователя:
```
login: admin
password: 123123
```