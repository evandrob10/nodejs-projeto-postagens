const Postagens = require('../modules/Postagens');

module.exports = {
    criar_postagem: (dados_postagem)=>{
        if(dados_postagem.titulo && dados_postagem.conteudo){
            if(dados_postagem.titulo != "" && dados_postagem.conteudo != ""){
                return Postagens.criar_postagem(dados_postagem);
            }
        }
    },
    todas_postagens: ()=>{
        return Postagens.todas_postagem();
    },
    deletar_postagem: (id) =>{
        if(id){
            Postagens.deletar_postagem(id);
        }
    }
}

