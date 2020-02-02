function sigmoid(x){
    return 1 / (1 + Math.exp(- x));
}

class RedeNeural {
    constructor(i_nodes, h_nodes, o_nodes){
        this.i_nodes = i_nodes;
        this.h_nodes = h_nodes;
        this.o_nodes = o_nodes;

        this.bias_ih = new matrix(this.h_nodes, 1);
        this.bias_ih.randomize();

        this.bias_ho = new matrix(this.o_nodes, 1);
        this.bias_ho.randomize();

        this.weights_ih = new matrix(this.h_nodes, this.i_nodes);
        this.weights_ih.randomize();

        this.weights_ho = new matrix(this.o_nodes, this.h_nodes);
        this.weights_ho.randomize();

    }

    feedforward(array){
        //INPUT -> HIDDEN

        let input = matrix.arrayToMatrix(array);
        let hidden = matrix.multiplicar(this.weights_ih, input);

        hidden = matrix.add(hidden, this.bias_ih);

        hidden.map(sigmoid);

        //HIDDEN -> OUTPUT

        let output = matrix.multiplicar(this.weights_ho, hidden);
        output = matrix.add(output, this.bias_ho)
        output.map(sigmoid);

        output.print()
    }
}