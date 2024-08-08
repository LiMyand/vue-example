export interface IPerson {
    name: string;
    email: string;
    message: string;
}

export interface Website {
    url: string;
    description: string;
    icon: string;
    title: string;
    index: number;
}

export interface TodoList {
    title: string;
    createTime: string;
    content: string;
    level: number;
    // 截至时间
}