function produceDrivingRange(range) {
  return function(beginning, ending) {
    const blockRange = parseFloat(ending) - parseFloat(beginning);
    const totalRange = range - blockRange;
    if (totalRange > 0) {
      return `within range by ${totalRange}`
    } else {
      return `${Math.abs(totalRange)} blocks out of range`
    }
  }
}

function produceTipCalculator(percent) {
  return function(fareAmount) {
    return fareAmount * percent;
  }
}

function createDriver() {
  let driverId = 0;

  return class {
    constructor(name) {
      this.name = name;
      this.id = ++driverId;
    }
  }
}
