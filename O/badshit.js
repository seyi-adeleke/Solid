class shape {
    constructor(height, width, type) {
      this.height = height;
      this.width = width;
      this.type = type; 
    }
    area() {
       if (this.type === 'rectangle') {
           return this.height * this.width;
       }
       if (this.type === 'square') {
            return Math.pow(this.height, 2);
        }
        // and so on..
    };
}


const square = new shape(10, 10, 'rectangle');
console.log(square.area());