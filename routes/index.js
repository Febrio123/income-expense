const route = require('express').Router()

route.get('/', (req, res) => {
    res.json({
        message: "Home pages"
    })
})


const incomeRoutes = require('../routes/income')
const expenseRoutes = require('../routes/expense')

route.use('/incomes', incomeRoutes)
route.use('/expenses', expenseRoutes)


module.exports = route;