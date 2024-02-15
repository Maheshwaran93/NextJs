import './globals.css';
import Header from '@/components/header';
import Header2 from '@/components/header2';
export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
       <Header2/>
        <Header/>
        {children}
      </body>
    </html>
  );
}
