import {
  BarChart,
  BrainCircuit,
  Calendar,
  Combine,
  FileUp,
  LayoutDashboard,
  PieChart,
  Settings,
  SlidersHorizontal,
} from "lucide-react";

export const kpiData = [
  {
    title: "Net Margin",
    value: "18.2%",
    change: "+2.5%",
    changeType: "increase",
    description: "Compared to last month",
  },
  {
    title: "CPI",
    value: "1.08",
    change: "-0.02",
    changeType: "decrease",
    description: "Cost Performance Index",
  },
  {
    title: "Break-Even Point",
    value: "$12,450",
    change: "-$500",
    changeType: "decrease",
    description: "Revenue needed to cover costs",
  },
  {
    title: "Total Revenue",
    value: "$58,920",
    change: "+12%",
    changeType: "increase",
    description: "This fiscal quarter",
  },
];

export const salesChartData = [
  { month: "Jan", sales: 4200, profit: 1200 },
  { month: "Feb", sales: 4800, profit: 1350 },
  { month: "Mar", sales: 5500, profit: 1600 },
  { month: "Apr", sales: 5300, profit: 1550 },
  { month: "May", sales: 6100, profit: 1800 },
  { month: "Jun", sales: 6500, profit: 2100 },
];

export const comboSuggestions = [
  {
    id: 1,
    name: "The Classic Deal",
    items: "Cheeseburger, Fries, Soda",
    profitMargin: "45%",
    imageId: "combo-1",
  },
  {
    id: 2,
    name: "Pizza Party",
    items: "Large Pizza, Garlic Knots",
    profitMargin: "52%",
    imageId: "combo-2",
  },
  {
    id: 3,
    name: "Morning Boost",
    items: "Coffee, Croissant",
    profitMargin: "65%",
    imageId: "combo-3",
  },
];

export const recentSales = [
  {
    id: "SALE-001",
    product: "The Classic Deal",
    amount: 12.99,
    netProfit: 5.85,
    timestamp: "2 minutes ago",
  },
  {
    id: "SALE-002",
    product: "Morning Boost",
    amount: 7.5,
    netProfit: 4.88,
    timestamp: "5 minutes ago",
  },
  {
    id: "SALE-003",
    product: "Large Pizza",
    amount: 18.0,
    netProfit: 8.1,
    timestamp: "10 minutes ago",
  },
  {
    id: "SALE-004",
    product: "The Classic Deal",
    amount: 12.99,
    netProfit: 5.85,
    timestamp: "12 minutes ago",
  },
];

export const navLinks = [
  {
    href: "/dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    href: "/analysis",
    label: "Cost Analysis",
    icon: PieChart,
  },
  {
    href: "/pricing",
    label: "Pricing & Discounts",
    icon: SlidersHorizontal,
  },
  {
    href: "/lab",
    label: "Combo Laboratory",
    icon: Combine,
  },
  {
    href: "/suggestions",
    label: "AI Suggestions",
    icon: BrainCircuit,
  },
  {
    href: "/tasks",
    label: "Task Calendar",
    icon: Calendar,
  },
  {
    href: "/import",
    label: "Import Data",
    icon: FileUp,
  },
  {
    href: "/mind-map",
    label: "Mental Map",
    icon: BarChart
  }
];

export const tasks = [
    {
        id: 'TASK-8782',
        title: "Review Q2 ingredient costs",
        status: "In Progress",
        label: "Finance",
        priority: "High",
    },
    {
        id: 'TASK-7878',
        title: "Plan July promotional campaign",
        status: "Todo",
        label: "Marketing",
        priority: "Medium",
    },
    {
        id: 'TASK-4322',
        title: "Update menu pricing based on new costs",
        status: "Todo",
        label: "Operations",
        priority: "High",
    },
    {
        id: 'TASK-1020',
        title: "Finalize EOM sales report",
        status: "Done",
        label: "Reporting",
        priority: "Low",
    },
]
