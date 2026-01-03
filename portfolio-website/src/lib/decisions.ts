
export interface Decision {
    slug: string;
    title: string;
    description: string;
    businessQuestion: string;
    analysisSummary: string;
    decisionEnabled: string;
    tools: string[];
    dashboardImage: string;
    githubUrl: string;
    powerBiFile?: string;
}

export const decisions: Decision[] = [
    {
        slug: "bank-customer-churn",
        title: "Bank Customer Churn Analysis",
        description: "Identifying high-risk customers and churn drivers to improve retention strategies.",
        businessQuestion: "Why are customers leaving the bank, and which segments are at the highest risk?",
        analysisSummary: "Analyzed 10,000 customer records using Power BI and DAX. Segmented customers by credit score, age, and product usage to identify correlation with churn.",
        decisionEnabled: "Targeted retention campaigns for inactive members and low-credit score segments, potentially reducing churn by addressing key dissatisfaction drivers.",
        tools: ["Power BI", "DAX", "Power Query", "Excel"],
        dashboardImage: "/projects/bank-churn.png",
        githubUrl: "https://github.com/Samuelm018/Bank-Customer-Churn-Analysis",
        powerBiFile: "https://github.com/Samuelm018/Bank-Customer-Churn-Analysis"
    },
    {
        slug: "hr-analytics",
        title: "HR Analytics Dashboard",
        description: "Optimizing workforce planning by tracking attendance and work-from-home trends.",
        businessQuestion: "How can we optimize workforce availability and office space utilization based on attendance patterns?",
        analysisSummary: "Developed DAX measures to calculate Presence %, WFH %, and Sick Leave % across weekdays. Visualized trends to identify peak WFH days (Fridays) and office presence (Mondays/Tuesdays).",
        decisionEnabled: "Adjusted office resource allocation for peak days (Mon-Tue) and promoted flexible policies for Fridays, optimizing facility costs.",
        tools: ["Power BI", "DAX", "HR Analytics"],
        dashboardImage: "/projects/hr-analytics.png",
        githubUrl: "https://github.com/Samuelm018/HR-Presence-Insights-"
    },
    {
        slug: "superstore-sales",
        title: "Superstore Sales Dashboard",
        description: "Unified view of sales, profit, and shipping metrics to drive growth.",
        businessQuestion: "Where are the most profitable growth opportunities across regions and product categories?",
        analysisSummary: "Cleaned Superstore sales data in Excel and created dynamic pivot tables/charts. Analyzed profit margins by region and shipping impact on sales volume.",
        decisionEnabled: "Shifted marketing focus to high-margin product lines in top-performing regions and renegotiated shipping contracts to improve margins.",
        tools: ["Excel", "Pivot Tables", "Data Visualization"],
        dashboardImage: "/projects/superstore-sales.png",
        githubUrl: "https://github.com/Samuelm018/Superstore-sales"
    },
    {
        slug: "walmart-sales",
        title: "Walmart Sales Analysis",
        description: "SQL-driven analysis of sales patterns to improve branch performance.",
        businessQuestion: "How can we improve branch performance and customer satisfaction based on sales time patterns?",
        analysisSummary: "Executed advanced SQL queries on large sales dataset. Analyzed peak sales hours, product line profitability, and customer rating trends per branch.",
        decisionEnabled: "Optimized staffing during peak turnover times (Morning/Evening) and stocked high-rated product categories to maximize revenue per branch.",
        tools: ["MySQL", "SQL", "Data Analysis"],
        dashboardImage: "/projects/walmart-sales.png",
        githubUrl: "https://github.com/Samuelm018/walmart_sales"
    }
];
