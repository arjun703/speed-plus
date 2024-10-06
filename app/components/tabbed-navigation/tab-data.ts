export interface Tab{
    path: string;
    name: string;
    badge?: number;
}

export const tabsData: Tab[] = [
    {
        path: "/app/additional",
        name: "Dashboard"
    },
    {
        path: "/app/features",
        name: "Features",
        badge: 8
    },
    {
        path: "/app",
        name: "Analytics",
    },
    {
        path: "/app/notifications",
        name: "Notifications"
    },
    {
        path: "/app/settings",
        name: "Settings"
    }
]