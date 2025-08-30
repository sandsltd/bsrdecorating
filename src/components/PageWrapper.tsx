import { ReactNode } from 'react';

interface PageWrapperProps {
  children: ReactNode;
}

const PageWrapper = ({ children }: PageWrapperProps) => {
  return (
    <div className="pt-20 md:pt-16 lg:pt-28">
      {children}
    </div>
  );
};

export default PageWrapper;
