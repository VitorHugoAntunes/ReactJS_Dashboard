import Box from "../../components/Box";
import Question from "../../components/Question";
import { Container } from "./styles";

const faqs = [
    {
        id: 1,
        question: 'Como faço para exportar meus dados?',
        answer: 'Clique no menu de Todos os Clientes e depois clique em "Exportar dados". Os dados serão exportados para uma planilha de Excel e você pode visualizar, editar ou compartilhar.'
    },
    {
        id: 2,
        question: 'Como faço para exportar meus dados?',
        answer: 'Clique no menu de Todos os Clientes e depois clique em "Exportar dados". Os dados serão exportados para uma planilha de Excel e você pode visualizar, editar ou compartilhar.'
    },
    {
        id: 3,
        question: 'Como faço para exportar meus dados?',
        answer: 'Clique no menu de Todos os Clientes e depois clique em "Exportar dados". Os dados serão exportados para uma planilha de Excel e você pode visualizar, editar ou compartilhar.'
    },
    {
        id: 4,
        question: 'Como faço para exportar meus dados?',
        answer: 'Clique no menu de Todos os Clientes e depois clique em "Exportar dados". Os dados serão exportados para uma planilha de Excel e você pode visualizar, editar ou compartilhar.'
    },
    {
        id: 5,
        question: 'Como faço para exportar meus dados?',
        answer: 'Clique no menu de Todos os Clientes e depois clique em "Exportar dados". Os dados serão exportados para uma planilha de Excel e você pode visualizar, editar ou compartilhar.'
    }
]

export default function Help() {
    return (
        <Container>
            <h1>Help</h1>
            <Box>
                <h3>
                    Perguntas frequentes
                </h3>

                <section>
                    <ul>
                        {faqs.map((faq) => (
                            <Question key={faq.id} id={faq.id} question={faq.question} answer={faq.answer} />
                        ))}
                    </ul>
                </section>
            </Box>
        </Container>
    )
}