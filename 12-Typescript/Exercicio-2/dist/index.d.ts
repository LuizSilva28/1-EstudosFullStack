/** @format */
declare const users: user[];
declare const reposList: repos[][];
interface user {
    id: number;
    login: string;
    name: string;
    bio: string;
    public_repos: number;
    repos_url: string;
}
interface repos {
    name: string;
    description: string;
    fork: boolean;
    stargazers_count: number;
}
declare function getUser(nameUser: string): Promise<void>;
declare function getRepo(repos_url: string, userMatch: number): Promise<void>;
declare function menuUser(): void;
declare function menuShowInfoUser(): Promise<void>;
declare function menu(): void;
//# sourceMappingURL=index.d.ts.map