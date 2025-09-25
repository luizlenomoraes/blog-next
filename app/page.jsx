'use client';

import { useState, useEffect } from 'react';

export default function PainHunterQuizPage() {
    // -- ESTADO DO COMPONENTE --
    const [screen, setScreen] = useState('start'); 
    const [userScore, setUserScore] = useState(0);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [feedback, setFeedback] = useState('');
    const [resultText, setResultText] = useState('');
    
    // -- DADOS DO QUIZ --
    const quizData = [
        {
            question: "Sua promessa principal para o cliente é...",
            options: [
                { text: "Uma lista de funcionalidades e características técnicas.", score: 1 },
                { text: "Uma solução genérica, como 'melhorar a vida' ou 'economizar tempo'.", score: 2 },
                { text: "Um benefício claro, mas ainda um pouco vago.", score: 3 },
                { text: "Uma transformação específica, que ataca uma dor profunda e mensurável.", score: 4 }
            ]
        },
        {
            question: "Quando um cliente em potencial diz 'Vou pensar', o que você acredita que aconteceu?",
            options: [
                { text: "Ele realmente precisa de tempo. É um processo normal.", score: 1 },
                { text: "Faltou explicar melhor o produto, talvez um detalhe técnico.", score: 2 },
                { text: "O preço pode ter assustado. Talvez eu devesse oferecer um desconto.", score: 3 },
                { text: "A dor que eu toquei não foi aguda o suficiente. A urgência era zero.", score: 4 }
            ]
        },
        {
            question: "Como você descreve seu público-alvo?",
            options: [
                { text: "Todos que possam se interessar pelo meu mercado.", score: 1 },
                { text: "Com dados demográficos: idade, gênero, localização.", score: 2 },
                { text: "Com base em interesses e comportamentos gerais.", score: 3 },
                { text: "Pela angústia que eles não conseguem resolver sozinhos.", score: 4 }
            ]
        },
        {
            question: "Sua última campanha de marketing focou em...",
            options: [
                { text: "Mostrar como minha empresa é incrível e inovadora.", score: 1 },
                { text: "Educar o mercado sobre a importância do que eu faço.", score: 2 },
                { text: "Apresentar os benefícios e as vantagens do meu produto.", score: 3 },
                { text: "Agitar uma dor específica e apresentar a única rota de fuga.", score: 4 }
            ]
        },
        {
            question: "Qual metáfora descreve melhor seu produto no mercado?",
            options: [
                { text: "Uma vitamina: 'é bom ter', mas a vida segue sem ela.", score: 1 },
                { text: "Um item de conveniência: útil, mas facilmente substituível.", score: 2 },
                { text: "Um analgésico forte: alivia uma dor conhecida, mas não cura a causa.", score: 3 },
                { text: "Um bisturi cirúrgico: remove a causa raiz de um problema crítico.", score: 4 }
            ]
        }
    ];

    // -- EFEITOS --
    useEffect(() => {
        if (screen === 'analysis') {
            const timer = setTimeout(() => {
                setScreen('result');
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [screen]);

    // -- FUNÇÕES DE LÓGICA --
    const handleStartQuiz = () => {
        setScreen('question');
    };

    const handleSelectOption = (score) => {
        setSelectedOption(score);
        setFeedback('');
    };
    
    const handleNextQuestion = () => {
        if (selectedOption === null) {
            setFeedback('A indecisão é um sintoma. Escolha uma opção.');
            return;
        }

        const newScore = userScore + selectedOption;
        setUserScore(newScore);
        setSelectedOption(null);

        if (currentQuestionIndex < quizData.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            showResult(newScore);
            setScreen('analysis');
        }
    };
    
    const showResult = (finalScore) => {
        let diagnosis = '';
         if (finalScore <= 8) {
            diagnosis = "Sintomas de Anemia de Proposta. Sua oferta é uma vitamina em um mercado que precisa de cirurgia. A comunicação é vaga, a dor do cliente é ignorada e suas vendas sofrem de hemorragia crônica.";
        } else if (finalScore <= 14) {
            diagnosis = "Quadro de Miopia Estratégica. Você enxerga o problema, mas de longe. Usa analgésicos quando o caso é cirúrgico. Sua mensagem alivia, mas não cura, e por isso, não comanda lealdade ou urgência.";
        } else if (finalScore <= 18) {
            diagnosis = "Potencial Cirúrgico em Observação. Você tem o instinto, a lâmina está na mão, mas hesita em fazer o corte profundo. Falta precisão e a coragem de ignorar o superficial para atacar a causa raiz da dor.";
        } else {
            diagnosis = "DNA de Predador Clínico. Você já opera em outro nível. Entende que o lucro não está no produto, mas na extração precisa da dor. Seu instinto é afiado, mas precisa do arsenal completo para dominar o território.";
        }
        setResultText(diagnosis);
    };
    
    const restartQuiz = () => {
        setScreen('start');
        setUserScore(0);
        setCurrentQuestionIndex(0);
        setSelectedOption(null);
        setFeedback('');
    };

    // -- RENDERIZAÇÃO DO COMPONENTE --
    return (
        <main className="flex items-center justify-center min-h-screen p-4">
            <div className="w-full max-w-2xl mx-auto bg-[#111111] rounded-lg p-6 md:p-10 container-glow">
                
                {/* Tela de Ativação */}
                {screen === 'start' && (
                    <div className="text-center fade-in">
                        <div className="flex justify-center mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#0891b2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-syringe text-cyan-glow"><path d="m18 2 4 4"/><path d="m17 7 3-3"/><path d="M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-2.6-2.6c-1-1-1-2.5 0-3.4L15 1"/><path d="m9 15 4-4"/><path d="m12 12 4-4"/></svg>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-cyan-400 text-cyan-glow">PAINHUNTER™</h1>
                        <p className="mt-4 text-gray-400">LUZ FRIA, BISTURI.</p>
                        <p className="mt-6 text-lg text-gray-300">Sua ideia está na mesa de cirurgia. O diagnóstico será preciso e o tratamento, brutalmente eficaz. Você está pronto para expor a ferida e transformá-la em receita?</p>
                        <button onClick={handleStartQuiz} className="w-full md:w-auto mt-8 px-8 py-3 text-lg font-bold rounded-md btn-primary">Iniciar Diagnóstico</button>
                    </div>
                )}

                {/* Tela do Quiz */}
                {screen === 'question' && (
                    <div className="fade-in">
                        <div className="mb-6">
                            <p className="text-sm font-bold text-cyan-400">PERGUNTA {currentQuestionIndex + 1} / {quizData.length}</p>
                            <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                                <div className="h-2 rounded-full progress-bar-inner" style={{ width: `${((currentQuestionIndex + 1) / quizData.length) * 100}%` }}></div>
                            </div>
                        </div>
                        
                        <h2 className="text-xl md:text-2xl font-semibold mb-8 text-gray-100 h-24">{quizData[currentQuestionIndex].question}</h2>
                        
                        <div className="space-y-4">
                            {quizData[currentQuestionIndex].options.map((option, index) => (
                                <button 
                                    key={index}
                                    onClick={() => handleSelectOption(option.score)}
                                    className={`w-full p-4 rounded-md text-left option-btn ${selectedOption === option.score ? 'selected' : ''}`}
                                >
                                    {option.text}
                                </button>
                            ))}
                        </div>

                        <div className="mt-10 text-center">
                            <p className="text-red-400 h-6 mb-4 text-sm">{feedback}</p>
                            <button onClick={handleNextQuestion} className="w-full md:w-auto px-10 py-3 text-lg font-bold rounded-md btn-primary">
                                {currentQuestionIndex === quizData.length - 1 ? 'Ver Diagnóstico' : 'Próximo Corte'}
                            </button>
                        </div>
                    </div>
                )}
                
                {/* Tela de Análise */}
                {screen === 'analysis' && (
                     <div className="text-center fade-in">
                        <div className="flex justify-center mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#0891b2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-activity pulse-animation"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                        </div>
                        <h2 className="text-3xl font-bold text-cyan-400 text-cyan-glow">Analisando suas respostas...</h2>
                        <p className="mt-4 text-gray-400">Cruzando dados. Expondo padrões. Localizando a necrose na sua estratégia.</p>
                    </div>
                )}

                {/* Tela de Resultado */}
                {screen === 'result' && (
                    <div className="text-center fade-in">
                        <div className="flex justify-center mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#67e8f9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text text-cyan-glow"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></svg>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-cyan-400">DIAGNÓSTICO PRÉVIO:</h2>
                        <p className="mt-4 text-lg text-gray-200 bg-gray-900/50 p-4 rounded-md border border-cyan-700/50">{resultText}</p>
                        
                        <div className="mt-8 text-left p-6 bg-black/30 rounded-lg border border-gray-700">
                            <h3 className="text-xl font-bold text-center text-white mb-4">O TRATAMENTO</h3>
                            <p className="text-gray-300 mb-4">A dor que você sente é um ativo. PAINHUNTER™ é o instrumento cirúrgico que a transforma em uma promessa irresistível. Com ele, você irá:</p>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <span className="text-cyan-400 mr-3 mt-1">&#10003;</span>
                                    <span><strong>Dissecar sua oferta:</strong> Encontrar o nervo exposto do seu cliente e construir sua mensagem em volta dele.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-cyan-400 mr-3 mt-1">&#10003;</span>
                                    <span><strong>Calibrar sua copy:</strong> Substituir clichês por gatilhos psicológicos que forçam uma decisão.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-cyan-400 mr-3 mt-1">&#10003;</span>
                                    <span><strong>Estruturar uma oferta irrecusável:</strong> Transformar features em benefícios e benefícios em resultados inevitáveis.</span>
                                </li>
                            </ul>
                        </div>
                        
                        <p className="mt-8 text-lg font-semibold text-white">Chega de amadorismo. É hora da cirurgia.</p>
                        <button onClick={restartQuiz} className="w-full md:w-auto mt-6 px-8 py-3 text-lg font-bold rounded-md btn-primary">Refazer Diagnóstico</button>
                    </div>
                )}
            </div>
        </main>
    );
}
