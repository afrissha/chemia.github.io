function toggleEquation(equationType) {
    const equations = ['salt', 'acid', 'base'];
    equations.forEach(equation => {
        if (equation !== equationType) {
            document.getElementById(`${equation}-equation`).classList.add('hidden');
        }
    });
    document.getElementById(`${equationType}-equation`).classList.toggle('hidden');
}

document.getElementById("answer1Btn").addEventListener("click", function() {
    document.getElementById("answer1").classList.toggle("hidden");
});

document.getElementById("answer2Btn").addEventListener("click", function() {
    document.getElementById("answer2").classList.toggle("hidden");
});

document.getElementById("sourceBtn").addEventListener("click", function() {
    document.getElementById("sourceList").classList.toggle("hidden");
});
