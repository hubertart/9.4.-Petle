function drawTree(pietra) {

    for (var i = 1; i <= pietra; i++) {
        //console.log("*" +i)

        var star = "";
        for (var j = 1; j <= i; j++) {
            star += "*";
        }
        console.log(star);

    }

}

drawTree(5);
