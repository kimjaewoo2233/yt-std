import { create } from 'zustand';

interface UIState {
  homeCategory: string;
  headerImageSrc: string;
  setHomeCategory: (value: string) => void;
  setHeaderImageSrc: (src: string) => void;
}

const useUIState = create<UIState>((set) => ({
  homeCategory: '',
  headerImageSrc: 'https://images.unsplash.com/photo-1487956382158-bb926046304a',
  setHomeCategory: (value: string) => set({ homeCategory: value }),
  setHeaderImageSrc: (src: string) => set({ headerImageSrc: src }),
}));

export default useUIState;
