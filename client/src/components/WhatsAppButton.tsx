const WHATSAPP_NUMBER = "5511999999999";
const WHATSAPP_TEXT = encodeURIComponent(
  "Olá, gostaria de entender melhor os serviços da Elara Tecnologia."
);

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_TEXT}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="whatsapp-float"
      title="Falar no WhatsApp"
    >
      <svg viewBox="0 0 32 32" aria-hidden="true" className="h-5 w-5">
        <path
          fill="currentColor"
          d="M19.1 17.5c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2s-.8 1-1 1.2c-.2.2-.4.2-.7.1-.3-.2-1.4-.5-2.6-1.6-1-1-1.6-2.1-1.8-2.4-.2-.3 0-.5.1-.7.1-.1.3-.4.4-.6.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.7-1.7-1-2.4-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.8 4.3.7.3 1.2.5 1.6.7.7.2 1.4.2 1.9.1.6-.1 1.9-.8 2.2-1.6.3-.8.3-1.5.2-1.6-.1-.1-.3-.2-.6-.4Z"
        />
        <path
          fill="currentColor"
          d="M16 4.3c-6.4 0-11.7 5.2-11.7 11.7 0 2.1.6 4.2 1.7 6l-1.1 4 4.1-1.1c1.8 1 3.8 1.6 5.9 1.6 6.4 0 11.7-5.2 11.7-11.7S22.4 4.3 16 4.3Zm0 20.9c-1.9 0-3.7-.5-5.2-1.5l-.3-.2-2.4.6.6-2.3-.2-.3c-1-1.6-1.6-3.4-1.6-5.3 0-5 4.1-9.1 9.1-9.1s9.1 4.1 9.1 9.1-4.1 9-9.1 9Z"
        />
      </svg>
      <span>WhatsApp</span>
    </a>
  );
}
