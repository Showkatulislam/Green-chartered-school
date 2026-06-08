import React, { useState } from "react";

const getGrade = (percent) => {
    if (percent >= 80) return "A+";
    if (percent >= 70) return "A";
    if (percent >= 60) return "A-";
    if (percent >= 50) return "B";
    if (percent >= 40) return "C";
    if (percent >= 33) return "D";
    return "F";
};

// 🎓 Grade Point System (Bangladesh style)
const getGradePoint = (percent) => {
    if (percent >= 80) return 5.0;
    if (percent >= 70) return 4.0;
    if (percent >= 60) return 3.5;
    if (percent >= 50) return 3.0;
    if (percent >= 40) return 2.0;
    if (percent >= 33) return 1.0;
    return 0.0;
};

const GradeCalculator = () => {
    const [obtained, setObtained] = useState("");
    const [total, setTotal] = useState("");
    const [result, setResult] = useState(null);

    const handleCalculate = () => {
        const ob = parseFloat(obtained);
        const tot = parseFloat(total);

        if (isNaN(ob) || isNaN(tot) || tot <= 0) {
            setResult({ error: "Please enter valid numbers" });
            return;
        }

        const percent = (ob / tot) * 100;

        setResult({
            obtained: ob,
            total: tot,
            percent: percent.toFixed(2),
            grade: getGrade(percent),
            gpa: getGradePoint(percent),
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-sm">

                <h2 className="text-xl font-bold text-center mb-4">
                    Grade Calculator
                </h2>

                {/* Input */}
                <input
                    type="number"
                    placeholder="Obtained Marks"
                    value={obtained}
                    onChange={(e) => setObtained(e.target.value)}
                    className="w-full border p-2 mb-3 rounded"
                />

                <input
                    type="number"
                    placeholder="Total Marks"
                    value={total}
                    onChange={(e) => setTotal(e.target.value)}
                    className="w-full border p-2 mb-3 rounded"
                />

                {/* Button */}
                <button
                    onClick={handleCalculate}
                    className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
                >
                    Calculate
                </button>

                {/* Result */}
                {result && (
                    <div className="mt-4 text-center">
                        {result.error ? (
                            <p className="text-red-500">{result.error}</p>
                        ) : (
                            <>
                                <p>
                                    Marks: {result.obtained}/{result.total}
                                </p>
                                <p>Percentage: {result.percent}%</p>

                                <p className="font-bold text-lg">
                                    Grade: {result.grade}
                                </p>

                                <p className="text-blue-600 font-semibold">
                                    GPA: {result.gpa}
                                </p>
                            </>
                        )}
                    </div>
                )}

            </div>
        </div>
    );
};

export default GradeCalculator;