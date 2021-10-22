//authentication
//url endpoint: path ??

const {Router} = require('express');

//ROUTES
const router = Router ();


//NEW USERS
router.post( '/new', (req, res) => {

    res.json({
        ok: true,
        msg: 'new'
    })

});

//LOGIN
router.post('/',(req, res) => {

    res.json({
        ok: true,
        msg: 'login'
    });
})

//Revalidate TOKEN

router.get('/renew',(req, res) => {

    res.json({
        ok: true,
        msg: 'renew'
    });
})


module.exports = router;