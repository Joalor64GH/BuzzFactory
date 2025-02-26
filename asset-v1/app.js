/* busy bees */
var app = new function() {
    this.name = "Buzz Factory",
       this.version = "🐝",
       this.date = "2025",
       this.folder = "asset-v1/",
       this.looptime = 7384,
       this.bpm = 130,
       this.totalframe = 256,
       this.nbpolo = 7,
       this.nbloopbonus = 2,
       this.bonusloopA = true,
       this.bonusendloopA = true,
       this.recmaxloop = 34,
       this.recminloop = 4,
       this.recmintime = Math.round(this.looptime / 1000) * this.recminloop,
       this.spritepolo = "polo-sprite.png",
       this.spritepicto = "game-picto.png",
       this.colBck = "#121212",
       this.col0 = "#919191",
       this.col1 = "#5f5f5f",
       this.col2 = "#4b4b4b",
       this.col3 = "#373737",
       this.col4 = "#232323",
       this.animearray = [{
          name: "1_lead",
          color: "828282",
          uniqsnd: true
       }, {
          name: "2_deux",
          color: "828282",
          uniqsnd: true
       }, {
          name: "3_kosh",
          color: "828282",
          uniqsnd: true
       }, {
          name: "4_shpok",
          color: "828282",
          uniqsnd: true
       }, {
          name: "5_tom",
          color: "828282",
          uniqsnd: true
       }, {
          name: "6_nouana",
          color: "828282",
          uniqsnd: true
       }, {
          name: "7_scratch",
          color: "828282",
          uniqsnd: true
       }, {
          name: "8_trill",
          color: "828282",
          uniqsnd: true
       }, {
          name: "9_bass",
          color: "828282",
          uniqsnd: true
       }, {
          name: "10_uh",
          color: "828282",
          uniqsnd: true
       }], this.bonusarray = [];
    for (var n = 0, o = this.animearray.length; n < o; n++) {
       var a = this.animearray[n].name;
       this.animearray[n].soundA = a + "_a", this.animearray[n].soundB = this.animearray[n].uniqsnd ? a + "_a" : a + "_b", this.animearray[n].anime = a + "-sprite.png", this.animearray[n].animeData = a + ".json"
    }
 };