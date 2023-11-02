function CountingVowels(Inpustring) {
    vowels ="aeiouAEIOU"
    vowelsCount =0;

    for (let i = 0; i < Inpustring.length; i++) {
        let inputChar = Inpustring[i] 
           if (vowels.includes(inputChar)) {
            vowelsCount++
           }
    }
    return vowelsCount
}

console.log(CountingVowels("oops"));