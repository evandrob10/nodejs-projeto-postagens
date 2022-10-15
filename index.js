const express = require('express');
const app = express();
let engine = require('express-handlebars');
let bodyParser = require('body-parser');
//Controllers
let Postagem = require('./controllers/Postagem');

// Config
    // Template Engine
        app.engine('handlebars', engine.engine({defaultLayout: 'main'}));
        app.set('view engine', 'handlebars');
        app.set('views', './views');

        app.use(bodyParser.urlencoded({extended:false}));
        app.use(bodyParser.json());

        app.get('/',(req,res)=>{
            Postagem.todas_postagens().then((post)=>{
                res.render('home', { posts : post.map(post => post.toJSON())});
            })
        })
        app.get('/cadastrar', (req , res)=>{
            Postagem.todas_postagens().then((post)=>{
                res.render('formulario', { posts : post.map(post => post.toJSON())});
            })
        })
        app.get('/del_postagem/:id',(req,res)=>{
            Postagem.deletar_postagem(req.params.id);
            res.redirect('/cadastrar');
        })
        app.post('/add_postagem',(req , res)=>{
            let dados_postagem = {
                titulo: req.body.titulo,
                conteudo: req.body.conteudo
            }
            Postagem.criar_postagem(dados_postagem).then(()=>{
                res.redirect('/cadastrar')
            });
        })

app.listen(process.env.PORT,()=>{
    let data = new Date();
    console.log(`Servidor iniciado em ${data}`);
})