import { Roboto_Mono } from 'next/font/google';
import './globals.css';

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

export const metadata = {
  title: 'Diagnóstico PAINHUNTER™',
  description: 'Descubra a dor oculta do seu negócio e transforme-a em uma promessa irresistível.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={robotoMono.className}>{children}</body>
    </html>
  );
}
