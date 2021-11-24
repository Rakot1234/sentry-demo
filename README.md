# sentry-demo

Sentry demonstration project

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

# Как потестить самому

Нужно создать учетную запись на https://sentry.io/welcome/ и, уже в ней, создать свой тестовый проект.

Чтобы уведомления шли в него, нужно в корневой директории, в файле .env заменить значение переменной REACT_APP_SENTRY_DSN на ваш dsn. Он формируется автоматически при создании проекта и найти его можно внутри интерфейса сентри.

Для этого надо зайти в Projects, провалиться в нужный проект и нажать в верхнем правом углу шестеренку, далее заходим в Client Keys (DSN) и забираем его оттуда.

Так же, нужно в /config/webpack.config.js найти new SentryWebpackPlugin() и заменить в нем authToken, его можно найти если провалиться в Setting, в левом общем меню интерфейса сентри, далее Developer settings -> Internal intergrations -> New internal Integration. 

При создании интеграции указываем ее имя (произвольное), после создания забираем из нее сформированный токен и добавляем его в new SentryWebpackPlugin() в свойство authToken. Так же, крайне желательно, заменить свойства org и project.

# Внимание !

При локально тестировании работает простая отправка ошибок, но сентри отказывается принимать от localhost-a source-maps и user feedback, чтобы их протестировать нужно раскатывать проект использую github pages.
