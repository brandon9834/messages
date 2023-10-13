function generateRandomNumber(num) {
    return Math.floor(Math.random() * num) 
}

    const workoutPlan = {
        day: ['Monday', 'Tuesday', 'wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        bodyPart: ['chest', 'shoulders', 'back', 'arms', 'legs'],
        cardio: ['2 miles', 'stairmaster', 'Abs', 'basketball', 'HIT']
    }

    let trainingDay = []

    for (let prop in workoutPlan) {
        let optionIdx = generateRandomNumber(workoutPlan[prop].length)
    

        switch(prop) {
            case 'day':
                trainingDay.push(`Today's day is ${workoutPlan[prop][optionIdx]}.`)
                break
            case 'bodyPart': 
                trainingDay.push(`You should do a ${workoutPlan[prop][optionIdx]} workout.`)
                break
            case 'cardio':
                trainingDay.push(`we should also finish with ${workoutPlan[prop][optionIdx]}. `)
                break
            default: 
                trainingDay.push('There is not enough info.')
        }
    }

    function formatWisdom(wisdom) {
        const formatted = trainingDay.join('\n')
        console.log(formatted)
      }
      
      formatWisdom(trainingDay);