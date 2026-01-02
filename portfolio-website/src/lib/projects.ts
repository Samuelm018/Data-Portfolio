
export interface Project {
  slug: string;
  title: string;
  description: string;
  businessProblem: string;
  dataset: string;
  approach: string;
  keyInsights: string[];
  techStack: string[];
  imageUrl: string;
  githubUrl: string;
  downloadUrl?: string; // For power bi / excel
}

export const projects: Project[] = [
  {
    slug: "bank-customer-churn",
    title: "Bank Customer Churn Analysis",
    description: "Interactive Power BI dashboard identifying high-risk customers and churn factors.",
    businessProblem: "Customer churn is a major challenge. The bank needed to understand who is leaving, when, and why, to take action on retention.",
    dataset: "10,000 bank customers (Age, Credit Score, Balance, Products, Active Status).",
    approach: "Used Power Query for cleaning, DAX for measures, and Power BI for visualization. Analyzed demographics, product usage, and credit scores against churn rates.",
    keyInsights: [
      "Inactive customers have a significantly higher churn rate.",
      "Lower credit scores correlate with higher churn.",
      "Age groups show distinct churn patterns.",
      "Product usage is a strong retention driver."
    ],
    techStack: ["Power BI", "DAX", "Power Query", "Excel"],
    imageUrl: "/projects/bank-churn.png",
    githubUrl: "https://github.com/Samuelm018/Bank-Customer-Churn-Analysis",
    downloadUrl: "https://github.com/Samuelm018/Bank-Customer-Churn-Analysis" // Pointing to repo for now
  },
  {
    slug: "hr-analytics",
    title: "HR Analytics Dashboard",
    description: "Workforce presence and attendance trends analysis using Power BI.",
    businessProblem: "Understanding employee attendance, WFH patterns, and sick leave trends to optimize workforce planning.",
    dataset: "HR attendance data.",
    approach: "Developed DAX measures for Presence %, WFH %, and SL %. Visualized trends over time and by day of week.",
    keyInsights: [
      "Overall Presence Rate: 91.83%.",
      "WFH usage peaks on Fridays (10%).",
      "Mondays and Tuesdays have highest office presence.",
      "Identified attendance anomalies for specific employees."
    ],
    techStack: ["Power BI", "DAX", "HR Analytics"],
    imageUrl: "/projects/hr-analytics.png",
    githubUrl: "https://github.com/Samuelm018/HR-Presence-Insights-"
  },
  {
    slug: "superstore-sales",
    title: "Superstore Sales Dashboard",
    description: "Comprehensive sales performance dashboard built in Excel.",
    businessProblem: "Need for a unified view of sales, profit, and shipping metrics to identify growth areas.",
    dataset: "Superstore Sales Data (Orders, Customers, Products).",
    approach: "Data cleaning and pivot tables in Excel. Created dynamic charts for sales by region, category, and time.",
    keyInsights: [
      "Identified top performing regions and categories.",
      "Analyzed profit margins across different product lines.",
      "Tracked shipping times and their impact on sales."
    ],
    techStack: ["Excel", "Pivot Tables", "Data Visualization"],
    imageUrl: "/projects/superstore-sales.png",
    githubUrl: "https://github.com/Samuelm018/Superstore-sales"
  },
  {
    slug: "walmart-sales",
    title: "Walmart Sales Analysis",
    description: "SQL-based analysis of Walmart sales data to solve key business problems.",
    businessProblem: "Walmart wanted to improve branch performance by understanding sales patterns, customer ratings, and revenue trends.",
    dataset: "Walmart Sales Data (Branch, City, Customer type, Gender, Product line, Unit price, Quantity, Tax, Total, Date, Time, Payment, Rating).",
    approach: "Used MySQL to run advanced queries. Analyzed sales by time of day, branch performance, and product line profitability.",
    keyInsights: [
      "Identified busiest turnover times (Morning/Afternoon/Evening).",
      "Found highest rated categories per branch.",
      "Analyzed revenue decrease ratios compared to previous years.",
      "Determined most common payment methods by branch."
    ],
    techStack: ["MySQL", "SQL", "Data Analysis"],
    imageUrl: "/projects/walmart-sales.png",
    githubUrl: "https://github.com/Samuelm018/walmart_sales"
  }
];
