class matrix{
    constructor(rows, cols){
        this.rows = rows;
        this.cols = cols;

        this.data = [];
        for(let i = 0; i < rows; i++){
            let array = [];
            for(let j = 0; j < cols; j++){
                array.push(0)
                
            }
            this.data.push(array);
        }
    }
    
    static arrayToMatrix(array){
        let matriz = new matrix(array.length, 1);
        matriz.map((elemento, i, j) => {
            return array[i];
        })
        return matriz;
    }

    print(){
        console.table(this.data);
    }

    randomize(){
        this.map((elemento, i, j) =>{
            return Math.random() * 2 - 1;
        })
    }

    static map(A, funcao){
        let matriz = new matrix(A.rows, B.rows)
        matriz.data = matriz.data.map((array, i) =>{
            return array.map((numero, j) =>{
                return funcao(numero, i, j);
            })
        })

        return matriz;
    }

    map(funcao){
        this.data = this.data.map((array, i) =>{
            return array.map((numero, j) =>{
                return funcao(numero, i, j);
            })
        })

        return this;
    }

    static add(A, B){
        var matriz = new matrix(A.rows, A.cols);

        matriz.map((numero, i, j) =>{
            return A.data[i][j] + B.data[i][j];
        });

        return matriz;
    }

    static multiplicar(A, B){
        var matriz = new matrix(A.rows, B.cols);

        matriz.map((numero, i, j) =>{
            let soma = 0;
            for(let k = 0; k < A.cols; k++){
                let elemento1 = A.data[i][k];
                let elemento2 = B.data[k][j];
                soma += elemento1 * elemento2;
            }
            return soma;
        })

        return matriz;
    }
}

