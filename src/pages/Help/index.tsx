import Box from "../../components/Box";
import Question from "../../components/Question";
import { Container } from "./styles";

const faqs = [
    {
        id: 1,
        question: 'Como faço para resetar minha senha?',
        answer: 'Clique em "Esqueci minha senha" na tela de login e siga as instruções.'
    },
    {
        id: 2,
        question: 'Como faço para alterar meu nome de usuário?',
        answer: 'Clique em "Editar perfil" na tela de configurações e altere o campo "Nome de usuário".'
    },
    {
        id: 3,
        question: 'Como faço para alterar minha foto de perfil?',
        answer: 'Clique em "Editar perfil" na tela de configurações e altere o campo "Foto de perfil".'
    },
    {
        id: 4,
        question: 'Como faço para alterar meu e-mail?',
        answer: 'Clique em "Editar perfil" na tela de configurações e altere o campo "E-mail".'
    },
    {
        id: 5,
        question: 'Como faço para alterar minha senha?',
        answer: 'Clique em "Editar perfil" na tela de configurações e altere o campo "Senha".'
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