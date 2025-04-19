// hooks/use-likes.ts
import { create } from "zustand";

interface LikesStore {
  likedItems: number[];
  addLike: (id: number) => void;
  removeLike: (id: number) => void;
  toggleLike: (id: number) => void;
}

export const useLikes = create<LikesStore>((set) => ({
  likedItems: [],

  addLike: (id) =>
    set((state) => ({
      likedItems: [...state.likedItems, id],
    })),

  removeLike: (id) =>
    set((state) => ({
      likedItems: state.likedItems.filter((itemId) => itemId !== id),
    })),

  toggleLike: (id) =>
    set((state) => ({
      likedItems: state.likedItems.includes(id)
        ? state.likedItems.filter((itemId) => itemId !== id)
        : [...state.likedItems, id],
    })),
}));
