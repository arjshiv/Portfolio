class Portfolio {
  name: String;
  positions: Array<Holding>;

  constructor(args: Portfolio | Array<Holding> | ConstructorArgs | void) {
    this.name = 'Portfolio ' + Math.floor(Date.now() / 1000);
    if (args instanceof Portfolio) {
      this.name = args.name;
      this.setPositions(args.positions);
    } else if (args instanceof Array) {
      this.setPositions(args);
    } else {
      console.log();
    }
  }

  emptyPositions() {
    this.positions.length = 0;
  }

  setPositions(value: Array<Holding>) {
    this.emptyPositions();
    this.positions.push.apply(this.positions, value);
  }

  /*  clone(other:Portfolio) {
   var cloned:Portfolio = new Portfolio();
   for (var key in other) {
   if (other.hasOwnProperty(key)) {
   cloned[key] = other[key]
   }
   }
   return cloned;
   }*/

}

export = Portfolio;
