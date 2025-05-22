import './globals.css';

export const metadata = {
  title: 'MindMap',
  description: 'Collaborative Mind Mapping Tool',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
