class Anotacoes {
    constructor(titulo, notas) {
        this.titulo = this.verifica(titulo);
        this.notas = this.verifica(notas);
    }

    verifica(item) {
        try {
            if (typeof item === "string") {
                return item;
            } else {
                throw new Error("Criação de notas - dados inválidos");
            }
        } catch (e) {
            console.error(e);
        }
    }
}

const anotacoes = new Anotacoes("nota1", "minha nota");

console.log(anotacoes);