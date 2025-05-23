const sigmoid = x => 1 / (1 + Math.exp(x));
const rounder = x => round(1 / (1 + Math.exp(x)));

class Network {
  
  constructor(learning_rate) {
    this.learning_rate = learning_rate || 0.1;
  }
  
  fromLayers(input_nodes, hidden_nodes, output_nodes) {
    this.input_nodes = input_nodes;
    this.hidden_nodes = hidden_nodes;
    this.output_nodes = output_nodes;
    this.weights_ih = new Matrix(this.hidden_nodes, this.input_nodes);
    this.weights_ho = new Matrix(this.output_nodes, this.hidden_nodes);
    this.weights_ih.randomize();
    this.weights_ho.randomize();
    this.bias_h = new Matrix(this.hidden_nodes, 1);
    this.bias_o = new Matrix(this.output_nodes, 1);
    this.bias_h.randomize();
    this.bias_o.randomize();
  }
  
  ffor (input) {
    let inputs = Matrix.fromArray(input);
    let hidden = Matrix.multiply(this.weights_ih, inputs);
    hidden.add(this.bias_h);
    hidden.map(sigmoid);
    
    let output = Matrix.multiply(this.weights_ho, hidden);
    output.add(this.bias_o);
    output.map(rounder);

    return output.toArray();
  }

  copy() {
    let clone = new Network(this.learning_rate);
    clone.fromLayers(this.input_nodes, this.hidden_nodes, this.output_nodes);
    clone.weights_ih = this.weights_ih.copy();
    clone.weights_ho = this.weights_ho.copy();
    clone.bias_h = this.bias_h.copy();
    clone.bias_o = this.bias_o.copy();
    return clone;
  }
}
