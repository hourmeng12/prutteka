import { useCallback, useEffect, useRef } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  const handleClose = useCallback(() => {
    onClose();
    document.body.classList.remove('overflow-hidden');
  }, [onClose]);

  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!sidebarRef?.current?.contains(e.target as Node)) handleClose();
  };

  useEffect(() => {
    if (isOpen) document.body.classList.add('overflow-hidden');
    else document.body.classList.remove('overflow-hidden');
  }, [isOpen]);

  useEffect(() => {
    const closeModal = () => {
      if (window.innerWidth > 1024) {
        handleClose();
      }
    };

    window.addEventListener('resize', closeModal);

    return () => {
      window.removeEventListener('resize', closeModal);
    };
  }, [handleClose]);

  return (
    <div
      className={`fixed left-0 top-0 h-screen w-screen bg-black transition-all lg:hidden ${
        isOpen
          ? 'pointer-events-auto bg-opacity-50'
          : 'pointer-events-none bg-opacity-0'
      }`}
      onClick={handleClickOutside}
    >
      <div
        ref={sidebarRef}
        className={`fixed right-0 flex max-h-96 flex-col items-center gap-8 rounded-b-2xl bg-white py-8 transition-all duration-500 ${
          isOpen
            ? 'pointer-events-auto translate-y-0'
            : 'pointer-events-none -translate-y-full'
        }`}
      >
        <div className="flex w-full justify-end px-4">
          <button onClick={handleClose}>
            <XMarkIcon width={24} />
          </button>
        </div>
        <div className="flex max-h-56 w-screen flex-col items-center gap-4 px-4">
          {children}
        </div>
      </div>
    </div>
  );
};
