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
    const pairsCopy = [...pairs];
    const pairsWithThemes = [];
    pairsCopy.forEach((pair, index) => {
        pairsWithThemes[index] = [pair.join(' i '), themes[index]];
    })
    return pairsWithThemes;
}

const getMarks = () => {
    const studentMark = [];
    students.forEach((student, index) => {
        studentMark[index] = [student, marks[index]];
    })
    return studentMark;
}

const getPairMark = (pairsThemes = []) => {
    const pairMark = [...pairsThemes];
    const minMark = 1;
    const maxMark = 5;

    pairMark.forEach((pair) => {
        const randomMark = minMark + Math.random() * (maxMark + 1 - minMark);
        pair.push(Math.floor(randomMark));
    })
    return pairMark;
}

console.log(getPairs());
console.log(getThemes(getPairs()));
console.log(getMarks());
console.log(getPairMark(getThemes(getPairs())));