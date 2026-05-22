interface MajorCredits {
    _brand: 'Major'
    credits: number
}

interface MinorCredits {
    _brand: 'Minor'
    credits: number
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {_brand: 'Major', credits: (subject1.credits + subject2.credits)};
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return{_brand: 'Minor', credits: (subject1.credits + subject2.credits)};
}

// Code de vérification pour les crédits
const major1 = { credits: 20 } as MajorCredits;
const major2 = { credits: 25 } as MajorCredits;
const totalMajor = sumMajorCredits(major1, major2);

console.log("--- Test Task 5 (Major Credits) ---");
console.log(`Résultat : ${totalMajor.credits}`); // Doit afficher : 45

const minor1 = { credits: 10 } as MinorCredits;
const minor2 = { credits: 5 } as MinorCredits;
const totalMinor = sumMinorCredits(minor1, minor2);

console.log("--- Test Task 5 (Minor Credits) ---");
console.log(`Résultat : ${totalMinor.credits}`); // Doit afficher : 15