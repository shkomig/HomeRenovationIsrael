import { MessageCircle } from 'lucide-react';

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/972524577274"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}
