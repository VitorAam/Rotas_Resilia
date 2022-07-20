import { Database } from "../infra/Database.js";

class DatabaseMetodos{

    static randomizar(){
        function pegarIndice() {
            return Math.floor(Math.random() * Database.Dicas.length);
        }
        return Database.Dicas[pegarIndice()]
    }

    static inserirDica(dica){
        Database.Dicas = [...Database.Dicas, dica];
        return Database.Dicas
    }
}

export default DatabaseMetodos
