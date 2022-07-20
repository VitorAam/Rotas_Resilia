import { Database } from "../infra/Database.js";

class DatabaseMetodos{

    static randomizar(){
        function pegarIndice(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        }
        return Database.Dicas[pegarIndice(0, Database.Dicas.length)]
    }

    static inserirDica(dica){
        Database.Dicas = [...Database.Dicas, dica];
        return Database.Dicas
    }
}

export default DatabaseMetodos
