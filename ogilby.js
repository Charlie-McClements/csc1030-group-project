function randomChallenge() {
    if(getRndInteger(100) > 1) { // Guarantees challenge on every movement right now to see randomness
        if(challengeStarted == false) {
        // When you add a new challenge, add it also to the below array (only seen in console)
        var challenges = ["trapdoor", "water", "other puzzle", "thing"];
        var r = Math.floor(Math.random() * challenges.length);
        console.log("starting puzzle", r, challenges[r]);

        switch (r) {
        case 0:
            startChallenge1();
            break;
        case 1:
            //startChallenge2();
            break;
        case 2:
            //startChallenge3();
            break;
        case 3:
            //startChallenge4();
            break;
        default:
            return;
            }
        }
    }
}