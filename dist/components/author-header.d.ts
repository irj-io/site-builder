interface AuthorHeaderProps {
    author: {
        avatarUrl: string;
        name: string;
    };
    date: string;
}
export declare function AuthorHeader({ author, date }: AuthorHeaderProps): import("react").JSX.Element;
export {};
