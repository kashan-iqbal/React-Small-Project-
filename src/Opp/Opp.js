import React from "react";

const Opp = () => {
  //   class code {
  //     constructor({ n }) {
  //       this.new = n;
  //     }

  //     message(p) {
  //       return p + " kashan " + this.new;
  //     }
  //     static my() {
  //       console.log(`i am static `);
  //     }
  //   }
  //   const normal = {
  //     n: "iqbal",
  //     v: "6",
  //   };

  //   const a = new code(normal);
  //   // console.log(a.message("muhammed"));
  //   console.log(code.my());

  class first {
    constructor() {
      console.log(`i am constructor`);
    }

    info() {
      console.log(`i am info`);
    }

    info2() {
      console.log(`i am info 2`);
    }

    static formula() {
      console.log(`i am static formula`);
    }
  }

  class second extends first {
    constructor() {
      super();
      super.info2();
      console.log(`i am second construtor`);
    }
  }

  const a = new second();

  a.info();

  return <div>Opp</div>;
};

export default Opp;
