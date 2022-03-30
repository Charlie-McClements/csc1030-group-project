function randomChallenge() {
    if(getRndInteger(100) > 70) { // Guarantees challenge on every movement right now to see randomness
        if(challengeStarted == false) {

        // Change below var when adding a new challenge
        var numOfChallenges = 4;
        var r = getRndInteger(numOfChallenges);
        console.log("starting puzzle number", r);

        switch (r) {
        case 0:
            startChallenge1();
            break;
        case 1:
            startPressurePChal();
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