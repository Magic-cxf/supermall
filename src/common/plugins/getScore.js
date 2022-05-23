const obj={
    getScore(number){
        let score = String(number)
        if(score.length !== 3){
            if(score.length == 1){
                return score + ".0"
            }else if(score.length == 4){
                return score.slice(0,3)
            }
        }else{
            return score
        }
        return score
    },
    getEvaluate(value){
        if(value){
            return "高"
        }else{
            return "低"
        }
    }
}

export default obj