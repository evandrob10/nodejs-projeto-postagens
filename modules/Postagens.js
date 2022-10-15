let conexao = require('../conexao');

const Postagens = conexao.sequelize.define('postagens',{
    titulo:{
        type: conexao.Sequelize.STRING
    },
    conteudo:{
        type: conexao.Sequelize.TEXT
    }
});
module.exports = {
    criar_banco: ()=>{
        Postagens.sync({force:true});
    },
    criar_postagem: (dados_postagem)=>{
        return Postagens.create({
            titulo:dados_postagem.titulo,
            conteudo:dados_postagem.conteudo
        });
    },
    todas_postagem: async ()=>{
        const all_postagens = await Postagens.findAll();
        return all_postagens;
    },
    deletar_postagem: (id)=>{
        Postagens.destroy({where:{
            id: id
        }})
    }
};
