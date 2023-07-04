const path = require('path')
const express = require('express')
const exphbs = require('express-handlebars')
const routes = require('./controllers')
const session = require('express-session')
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sequelize = require('./config/connection')


const app = express()
const PORT = process.env.PORT || 3001

const sessionConfig = {
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60 * 60 * 1000,
        httpOnly: true,
        secure: false,
        sameSite: 'strict',
    },
    store: new SequelizeStore({
        db: sequelize
      })
}

app.use(session(sessionConfig))

const hbs = exphbs.create({})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))

app.use(routes)

sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => console.log('Now listening...'))
})

