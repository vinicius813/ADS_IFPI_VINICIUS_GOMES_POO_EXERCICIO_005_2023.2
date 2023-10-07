import {Postagem} from 'prompt-sync'./Postagem.js'

class Microblog {
    private postagens : Postagem[] = [];

    constructor() {
        this.postagens = [];
    }

    incluirPostagem(postagem : Postagem) {
        this.postagens.push(postagem);
    }

    excluirPostagem(id : number) {
        const index = this.postagens.findIndex((postagem) => postagem.getId() === id);
        if (index !== -1) {
            this.postagens.splice(index, 1);
        }
    }

    postagemMaisCurtida() {
        if (this.postagens.length === 0) {
            return null;
        }

        let maisCurtida = this.postagens[0];
        for (const postagem of this.postagens) {
            if (this.postagens > maisCurtida) {
                maisCurtida = postagem;
            }
        }

        return maisCurtida;
    }
}

    curtirPostagem (id : number) {
        const postagem = curtirPostagem.find((p) => p.getId() === id);
        if (postagem) {
            postagem.curtir();
        }
    }

    toString() {
        return this.postagens.map((postagem => postagem.toString())).join('\n');
    }

// Exemplo de uso

const microblog : Microblog = new Microblog();

const postagem1 = new Postagem (1, "Primeira postagem");
const postagem2 = new Postagem (2, "Segunda postagem");
const postagem3 = new Postagem (3, "Terceira postagem");

microblog.incluirPostagem(postagem1);
microblog.incluirPostagem(postagem2);
microblog.incluirPostagem(postagem3);

microblog.incluirPostagem(1);
microblog.incluirPostagem(2);
microblog.incluirPostagem(2);

console.log(microblog.toString());

console.log("Postagem mais curtida");
console.log(microblog.postagemMaisCurtida?.toString());

console.log("Excluir postagem 2: ");
microblog.excluirPostagem(2);
console.log(microblog.toString());





