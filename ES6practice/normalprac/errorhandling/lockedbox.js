const box = {
    locked: true,
    unlock() { this.locked = false; },
    lock() { this.locked = true;  },
    _content: [],
    get content() {
      if (this.locked) throw new Error("Locked!");
      return this._content;
    }
  };
  
  function withBoxUnlocked(body) {
    let toLock = true;
    if(box.locked===false){
        toLock = false;
    }
    box.unlock();
    try{
        body();
    }
    finally{
        if(toLock){
            box.lock();
        }
 
    }

  }
  //passing function value 
  withBoxUnlocked(function() {
    box.content.push("gold piece");
  });
  
  try {
    withBoxUnlocked(function() {
      throw new Error("Pirates on the horizon! Abort!");
    });
  } catch (e) {
    console.log("Error raised:", e);
  }
  console.log(box.locked);
  // → true