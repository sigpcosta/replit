import FAQItem from '../FAQItem'

export default function FAQItemExample() {
  return (
    <div className="p-8 max-w-2xl">
      <FAQItem
        question="Como posso fazer uma reserva?"
        answer="Pode fazer uma reserva através do nosso formulário online, por telefone ou email. Respondemos rapidamente a todos os pedidos."
      />
    </div>
  )
}
