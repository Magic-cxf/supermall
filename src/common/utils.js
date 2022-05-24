export class goodInfo{
    constructor(){
        this.carouselImgs = []
        this.description = null
        this.price = 0
        this.oldPrice = 0
        this.collect = []
        this.detailInfo=[]
        this.shopInfo={}
        this.comments = []
        this.recommends = []
    }
}

export const timeFormate = {
    changeTime(number){
        let date = new Date(number)
        let year = date.getFullYear()
        let month = date.getMonth()
        let day = date.getDate()
        
        return `${year}-${month+1}-${day}`
    }
}