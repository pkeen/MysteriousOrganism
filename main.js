// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

const pAequorFactory = (speciminNum, dna) => {
  return {
    speciminNum,
    dna,
    mutate() {
      randIndex = Math.floor(Math.random() * 15);
      
      do {
        newBase = returnRandBase();
      } while (newBase === this.dna[randIndex]);

      this.dna[randIndex] = newBase;
    },
    compareDNA(otherPA) {
      let commonDNA = [];
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === otherPA.dna[i]) {
          commonDNA.push(this.dna[i])
        }
      }
      const percentShared = commonDNA.length / 15 * 100;
      console.log(`Specimin ${this.speciminNum} and specimin ${otherPA.speciminNum} have ${percentShared.toFixed(2)}% in common`);
    },
    willLikelySurvive() {
      const cAndG = this.dna.filter(d => {
        return d === 'C' || d === 'G'
      });
      //console.log(cAndG);
      const percentCG = cAndG.length / 15 * 100;
      return percentCG >= 60 ? true : false;
    }
  }
}


const create30Survivors = () => {
  survivors = [];
  let counter = 0;
  while (survivors.length < 30) {
    counter++;
    pA = pAequorFactory(counter, mockUpStrand());
    if (pA.willLikelySurvive() === true) {
      survivors.push(pA);
    }
  }
  return survivors;
}

const pAsLikelyToSurvive = create30Survivors();

console.log(pAsLikelyToSurvive);
