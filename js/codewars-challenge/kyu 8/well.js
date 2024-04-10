function well(x){
    let good = 0;
    if (x.find("good")){
        for (let i = 0; i < x.length; i++) {
            if (x[i] == "good") {
                good += 1
            }
        }
        return (good>2)? "i smell a series!" : "Publish";

    }
    return ("Fail!")
}