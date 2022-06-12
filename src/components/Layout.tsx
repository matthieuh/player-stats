import Link from 'next/link';
import { FC } from 'react';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-full">
      <div className="bg-indigo-600 pb-32">
        <header className="py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/" passHref>
              <a>
                <h1 className="text-3xl font-bold text-white">Player Stats</h1>
              </a>
            </Link>
          </div>
        </header>
      </div>

      <main className="-mt-32">
        <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Layout;
