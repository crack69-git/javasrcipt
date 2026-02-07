function gonoVote(array) {
    if (!Array.isArray(array)) {
        return "Invalid";
    }
    
    let haCount = 0;
    let naCount = 0;
    
    for (let item of array) {
        if (item === "ha") {
            haCount++;
        } else if (item === "na") {
            naCount++;
        }
    }
    
    if (haCount > naCount) {
        return true;
    } else if (haCount === naCount) {
        return "equal";
    } else {
        return false;
    }
}
let res = gonoVote(["ha", "ha", "ha", "na", "ha"]);