import React, { useState } from 'react';

const Quiz: React.FC = () => {
    const [questionIndex, setQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<string[]>([]);
    
    const questions = [
        {
            question: "What's your favorite flavor?",
            options: ["Sweet", "Savory", "Spicy", "Sour"]
        },
        {
            question: "Choose a protein:",
            options: ["Chicken", "Tofu", "Beef", "Fish"]
        },
        {
            question: "What's your ideal cooking method?",
            options: ["Grilled", "Baked", "Fried", "Raw"]
        },
        {
            question: "Pick a side dish:",
            options: ["Salad", "Fries", "Rice", "Pasta"]
        }
    ];

    const handleAnswer = (answer: string) => {
        setAnswers([...answers, answer]);
        if (questionIndex < questions.length - 1) {
            setQuestionIndex(questionIndex + 1);
        } else {
            // Here you can handle the final result based on answers
            alert(`Your answers: ${answers.join(', ')} and ${answer}`);
        }
    };

    return (
        <div className="quiz-container">
            {questionIndex < questions.length ? (
                <div>
                    <h2>{questions[questionIndex].question}</h2>
                    <div className="options">
                        {questions[questionIndex].options.map((option, index) => (
                            <button key={index} onClick={() => handleAnswer(option)}>
                                {option}
                            </button>
                        ))}
                    </div>
                </div>
            ) : (
                <h2>Thank you for completing the quiz!</h2>
            )}
        </div>
    );
};

export default Quiz;