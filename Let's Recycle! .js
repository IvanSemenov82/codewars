function recycle(array) {
    let res = [],
        glass = [],
        paper = [],
        organic = [],
        plastic = [];

    array.forEach((el) => {
        if ((el.material === "glass")||(el.secondMaterial === "glass")) {
            glass.push(el.type);
        }
        if ((el.material === "organic")||(el.secondMaterial === "organic")) {
            organic.push(el.type);
        }
        if ((el.material === "paper")||(el.secondMaterial === "paper")) {
            paper.push(el.type);
        }
        if ((el.material === "plastic")||(el.secondMaterial === "plastic")) {
            plastic.push(el.type);
        }
    })

    res.push(paper, glass, organic, plastic);

    return res;
}