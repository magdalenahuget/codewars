function DNAtoRNA(dna) {
    // create a function which returns an RNA sequence from the given DNA sequence
    let result = dna.replaceAll('T', 'U');
    return result;
  }