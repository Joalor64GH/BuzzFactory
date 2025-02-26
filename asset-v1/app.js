/* busy bees */
var app = new function() {
    this.name = "Buzz Factory",
       this.version = "🐝",
       this.date = "2025",
       this.folder = "asset-v1/",
       this.looptime = 7384,
       this.bpm = 130,
       this.totalframe = 256,
       this.nbpolo = 8,
       this.nbloopbonus = 2,
       this.bonusloopA = true,
       this.bonusendloopA = true,
       this.recmaxloop = 34,
       this.recminloop = 4,
       this.recmintime = Math.round(this.looptime / 1000) * this.recminloop,
       this.spritepolo = "polo-sprite.png",
       this.spritepicto = "game-picto.png",
       this.colBck = "#000000",
       this.col0 = "#ffdd00",
       this.col1 = "#ffdd00",
       this.col2 = "#9e8900",
       this.col3 = "#574b00",
       this.col4 = "#574b00",
       this.animearray = [{
          name: "1_lead",
          color: "ffca18",
          uniqsnd: true
       }, {
          name: "2_deux",
          color: "ffca18",
          uniqsnd: true
       }, {
          name: "3_kosh",
          color: "ffca18",
          uniqsnd: true
       }, {
          name: "4_shpok",
          color: "ffca18",
          uniqsnd: true
       }, {
          name: "5_tom",
          color: "ffca18",
          uniqsnd: false
       }, {
          name: "6_nouana",
          color: "ffca18",
          uniqsnd: false
       }, {
          name: "7_scratch",
          color: "ffca18",
          uniqsnd: false
       }, {
          name: "8_trill",
          color: "ffca18",
          uniqsnd: false
       }, {
          name: "9_bass",
          color: "ffca18",
          uniqsnd: false
       }, {
          name: "10_uh",
          color: "ffca18",
          uniqsnd: true
       }], this.bonusarray = [];
    for (var n = 0, o = this.animearray.length; n < o; n++) {
       var a = this.animearray[n].name;
       this.animearray[n].soundA = a + "_a", this.animearray[n].soundB = this.animearray[n].uniqsnd ? a + "_a" : a + "_b", this.animearray[n].anime = a + "-sprite.png", this.animearray[n].animeData = a + ".json"
    }
 };