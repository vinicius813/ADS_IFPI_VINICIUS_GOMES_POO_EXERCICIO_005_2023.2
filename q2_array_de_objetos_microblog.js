var _a;
var Postagem = /** @class */ (function () {
    function Postagem(id, texto, quantidadeCurtidas) {
        this.id = 551;
        this.texto = "Hello, friends!";
        this.quantidadeCurtidas = 108;
        this.id = id;
        this.texto = texto;
        this.quantidadeCurtidas = quantidadeCurtidas;
    }
    Postagem.prototype.curtir = function () {
        var curtidas = this.texto += this.quantidadeCurtidas;
        this.quantidadeCurtidas++;
    };
    Postagem.prototype.toString = function () {
        return "".concat(this.texto, " - ").concat(this.quantidadeCurtidas, " curtidas.");
    };
    Postagem.prototype.getId = function () {
        return this.id;
    };
    return Postagem;
}());
var Microblog = /** @class */ (function () {
    function Microblog() {
        this.postagens = [];
    }
    Microblog.prototype.incluirPostagem = function (postagem) {
        this.postagens.push(postagem);
    };
    Microblog.prototype.excluirPostagem = function (id) {
        var index = this.postagens.findIndex(function (postagem) { return postagem.getId() === id; });
        if (index !== -1) {
            this.postagens.splice(index, 1);
        }
    };
    Microblog.prototype.postagemMaisCurtida = function () {
        if (this.postagens.length === 0) {
            return null;
        }
        var maisCurtida = this.postagens[0];
        for (var _i = 0, _a = this.postagens; _i < _a.length; _i++) {
            var postagem = _a[_i];
            if (postagem.curtidas > maisCurtida.curtidas) {
                maisCurtida = postagem;
            }
        }
        return maisCurtida;
    };
    return Microblog;
}());
curtirPostagem(id, number);
{
    var postagem = this.postagem.find(function (p) { return p.getId() === id; });
    if (postagem) {
        postagem.curtir();
    }
}
toString();
{
    return this.postagens.map((function (postagem) { return postagem.toString(); })).join('\n');
}
// Exemplo de uso
var microblog = new Microblog();
var postagem1 = new Postagem(1, "Primeira postagem");
var postagem2 = new Postagem(2, "Segunda postagem");
var postagem3 = new Postagem(3, "Terceira postagem");
microblog.incluirPostagem(postagem1);
microblog.incluirPostagem(postagem2);
microblog.incluirPostagem(postagem3);
microblog.curtirPostagem(1);
microblog.curtirPostagem(2);
microblog.curtirPostagem(2);
console.log(microblog.toString());
console.log("Postagem mais curtida");
console.log((_a = microblog.postagemMaisCurtida) === null || _a === void 0 ? void 0 : _a.toString());
console.log("Excluir postagem 2: ");
microblog.excluirPostagem(2);
console.log(microblog.toString());
