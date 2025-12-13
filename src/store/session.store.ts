import { atom } from "nanostores"

const $session = atom<{
    user: {
        id: string;
        name: string;
        email: string;
        avatarUrl?: string;
    } | null;
    status: "authenticated" | "unauthenticated" | "loading";
}>({
    user: null,
    status: "loading",
})

export { $session }