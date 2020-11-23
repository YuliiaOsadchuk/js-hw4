const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

const getPairs = () => {
    const pairs = [];
    for (let i = 0; i < students.length;) {
        pairs.push([students[i], students[i + 1]]);
        i += 2;
    }
    return pairs;
}

const getThemes = (pairs = []) => {
    const pairsWithThemes = [...pairs];
    for (let i = 0; i < pairsWithThemes.length; i++) {
        pairsWithThemes[i].push(themes[i]);
    }
    return pairsWithThemes;
}

const getMarks = () => {
    const studentMark = [];
    for (let i = 0; i < students.length; i++) {
        studentMark.push([students[i], marks[i]]);
    }
    return studentMark;
}

const getPairMark = (pairsThemes = []) => {
    const pairMark = [...pairsThemes];

    for (let i = 0; i < pairMark.length; i++) {
        const minMark = 1;
        const maxMark = 5;
        const randomMark = minMark + Math.random() * (maxMark + 1 - minMark);
        pairMark[i].push(Math.floor(randomMark));
    }

    return pairMark;
}

console.log(getPairs());
console.log(getThemes(getPairs()));
console.log(getMarks());
console.log(getPairMark(getThemes(getPairs())));