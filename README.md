Решила изучить взаимодействие бека с бд через Objection.js https://vincit.github.io/objection.js/

Используется тестовая бд.

npm i => npm run dev

http://localhost:3002/api/contact/getAll - вернет все контакты

http://localhost:3002/api/contact/getById - находит контакт с ID = 5(вшито)

http://localhost:3002/api/contact/getLastId - находит последний созданный айдишник

http://localhost:3002/api/contact/create - создает новую запись с ID = 10(вшито)

http://localhost:3002/api/contact/update - апдейтит запись с ID = 10(вшито)

http://localhost:3002/api/contact/deleteRow - удаляет запись с ID = 10(вшито)
