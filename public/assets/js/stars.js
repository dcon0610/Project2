//code for stars thing

class starsfunction {
constructor(ratings){
ratings=this.ratings
this.ratings= {
    hotel_a : 2.8,
    hotel_b : 3.3,
    hotel_c : 1.9,
    hotel_d : 4.3,
    hotel_e : 4.74
  };

}
stars() {

    const starTotal = this.ratings.length

    for(i=0; i<starTotal; i++) {  
      const starPercentage = (ratings[i] / starTotal) * 100;
      const starPercentageRounded = `${(Math.round(starPercentage / 10) * 10)}%`;
      document.querySelector(`.${rating} .stars-inner`).style.width = starPercentageRounded; 
    }
}

}

module.exports=stars