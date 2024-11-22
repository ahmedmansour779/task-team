export interface RootLayoutProps {
    children: React.ReactNode;
    params: Promise<{ lang: string }>
}

export interface Task {
    id: number;
    name: string;
    description: string;
    lastUpDate: string
}
