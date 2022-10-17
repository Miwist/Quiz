import React, { useState } from "react";
import "./App.scss";
import Game from "./components/Game";
import Result from "./components/Result";

const questions = [
  {
    title: "Сколько было высадок на Луну ?",
    variants: ["восемь", "пять", "шесть", "ноль"],
    correct: 2,
  },
  {
    title: "В каком году была подписана Декларация независимости США?",
    variants: [
      "1676",
      "1678",
      "1776",
      "1775"
    ],
    correct: 2,
  },
  {
    title: "Когда пала Берлинская стена?",
    variants: [
      "1989",
      "1990",
      "1991",
    ],
    correct: 0,
  },
  {
    title: "Каково было первоначальное название Нью-Йорка?",
    variants: [
      "Готэм",
      "Новое яблоко",
      "Новый Амстердам",
      "Имперский штат"
    ],
    correct: 2,
  },
  {
    title: "Как долго длилась Столетняя война?",
    variants: [
      "100 лет",
      "180 лет",
      "89 лет",
      "116 лет"
    ],
    correct: 3,
  },
  {
    title: "Символом какого ресторана является клоун?",
    variants: [
      "КФС",
      "Макдональдс",
      "Бургер кинг",
      "Курочка рядом"
    ],
    correct: 1,
  },
  {
    title: "Какая планета находится ближе всего к Солнцу?",
    variants: [
      "Меркурий",
      "Земля",
      "Марс",
      "Венера"
    ],
    correct: 0,
  },
  {
    title: "Кто был первым человеком, увидевшим луны Юпитера?",
    variants: [
      "Галилео Галилей",
      "Исаак Ньютон",
      "Альберт Эйнштейн",
      "Николай Коперник"
    ],
    correct: 0,
  },
  {
    title: "Из какой страны родом Шакира?",
    variants: [
      "Колумбия",
      "Аргентина",
      "Испания",
      "Бразилия"
    ],
    correct: 0,
  },
  {
    title: "Какая страна является самой подверженной землетрясениям страной в мире?",
    variants: [
      "Корея",
      "Малайзия",
      "Тайвань",
      "Япония"
    ],
    correct: 3,
  },
];

function App() {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const question = questions[step];

  const onClickVariant = (index) => {
    setStep(step + 1);
    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  };

  return (
    <div className="App">
      {step !== questions.length ? (
        <Game
          step={step}
          question={question}
          onClickVariant={onClickVariant}
          questions={questions}
        />
      ) : (
        <Result correct={correct} questions={questions} />
      )}
    </div>
  );
}

export default App;
