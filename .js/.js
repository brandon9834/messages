function generateRandomNumber(num) {
    return Math.floor(math.random() * num) 
}

    const workoutPlan = {
        day: ['Monday', 'Tuesday', 'wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        bodyPart: ['chest', 'shoulders', 'back', 'arms', 'legs'],
        cardio: ['2 miles', 'stairmaster', 'Abs', 'basketball', 'HIT']
    }

    let trainingDay = []

    for (let prop in workoutPlan) {
        let optionIdx = generateRandomNumber(workoutPlan[prop].length)
    }
    