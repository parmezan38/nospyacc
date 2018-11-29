# NoSpyAcc
This is a service for making non-crucial, spying free, anonymous, static accounts.
Accounts created by NoSpyAcc are made to be used for sites that don't require any personal user information.
Username and Password can not be changed after creating the Account.

## Getting Started

Install dependencies:

```npm install```

Install sequelize-cli:
```npm install sequelize-cli```
or install it globally if the above method is giving you issues:
```npm install -g sequelize-cli```

Initialize sequelize:
```sequelize init```

Change your user, password,database and dialect info from /config/config.json, NoSpyAcc uses PostgreSQL with Sequelize, but there should be no problems with using other Sequelize supported dialects.
```
"username": "yourusername",
"password": "yourpassword",
"database": "databasename",
"host": "yourhostname",
"dialect": "postgres"
```

Migrate the database:

```sequelize db:migrate```

Start the server:

```node app.js```
