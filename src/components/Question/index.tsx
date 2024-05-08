import { useState } from 'react';
import { FiArrowDown, FiArrowUp } from 'react-icons/fi'
import { ListItem, QuestionHeader } from './styles';

interface QuestionProps {
  id: number;
  question: string;
  answer: string;
}

export default function Question({ id, question, answer }: QuestionProps) {
  const [openQuestion, setOpenQuestion] = useState<boolean>(false);

  function changeOpenQuestion() {
    setOpenQuestion(!openQuestion);
  }

  return (
    <ListItem open={openQuestion} onClick={changeOpenQuestion}>
      <QuestionHeader>
        <div>
          <span>0{id}.</span>
          <h3>{question}</h3>
        </div>
        {openQuestion ? <FiArrowUp size={24} /> : <FiArrowDown size={24} />}
      </QuestionHeader>
      <div className={openQuestion ? 'answer visible' : 'answer invisible'}>
        <p>{answer}</p>
      </div>
    </ListItem>
  );
}