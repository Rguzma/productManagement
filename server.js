const express = require('express');
const app = express();
app.use( express.urlencoded({extended:true}) );
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
const {ProductsRouter} = require( './server/routes/productsRouter.js' );
const cors = require('cors');

app.use(express.static(__dirname + "/static"));
// app.set('views', __dirname + '/views');
// app.set('view engine', 'ejs');
app.use( cors());

require( './server/config/database.js' );

app.use('/',ProductsRouter);
// app.all("*", (req,res,next) => {
// 	res.sendFile(path.resolve("./public/dist/public/index.html"))
//   });




app.listen(8080, function (){//este es el cierre

	console.log("the user server is running in port 8080");
});
