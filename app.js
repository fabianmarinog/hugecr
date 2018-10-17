const express = require('express'),
    logger = require('morgan'),
    path = require('path'),
    app = express();


app.use( logger('dev') );
app.use( express.static(path.join(__dirname, 'public')) );
app.set('view engine', 'pug');

app.get('/', function (req, res) {
    res.render('index', {
        menu: [{
                0: {
                    "item": "Work",
                },
                1:{
                    "item": "About",
                    "submenu": {
                        0: "What we do",
                        1: "How we work",
                        2: "Leadership"
                    }
                },
                2:{
                    "item": "Careers",
                    "submenu":{
                        0: "Client Services",
                        1: "Creative",
                        2: "Motion Media",
                        3: "Operations",
                        4: "People",
                        5: "Strategy",
                        6: "Technology",
                        7: "UX Product Design"
                    }
                },
                3:{
                    "item": "Ideas",
                    "submenu": {
                        0: "Reports",
                        1: "Perspectives",
                        2: "Books",
                        3: "Videos"
                    }
                },
                4:{
                    "item": "News"
                },
                5:{
                    "item": "Events"
                },
                6:{
                    "item": "Contact",
                    "submenu":{
                        0:"Atlanta" ,
                        1:"Brooklyn",
                        2:"DC" ,
                        3:"London",
                        4:"Los Angeles",
                        5:"Oakland" ,
                        6:"Toronto"
                    }
                }
            }]
        })
})

app.listen(3000, () =>  {
    console.log('Huge Nav Exercise listening on http://localhost:3000/');
});
