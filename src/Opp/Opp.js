import React from "react";

const Opp = () => {
  class code {
    constructor(n) {
        this.new = n
    }

    message(p) {
      return p + " kashan " + this.new;
    }
  }

  const a = new code("iqbal");
console.log(a.message("muhammed"));
  return <div>Opp</div>;
};

export default Opp;
