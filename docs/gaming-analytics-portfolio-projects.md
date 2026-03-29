# Gaming Analytics Portfolio Projects (Resume-Ready)

**Author:** Your Name  
**Role Target:** Data Analyst / Business Analyst / Product Analyst  
**Date:** March 29, 2026

---

## How to Use This File

- This document is intentionally written so you can export it directly to **PDF**.
- If you use VS Code: open this `.md` file → Markdown preview → print to PDF.
- If you use Pandoc: `pandoc docs/gaming-analytics-portfolio-projects.md -o gaming-analytics-portfolio-projects.pdf`.

---

## Portfolio Overview (What Recruiters Will See)

You will build 3 focused analytics projects that demonstrate:

1. **Revenue analytics and trend decomposition** (Fortnite).
2. **Growth metrics, retention proxies, and executive dashboarding** (Roblox).
3. **Sales performance analytics and pricing insights** (Steam).

These projects are designed to be completed quickly while still looking professional, measurable, and business-oriented.

---

# Project 1 — Analyze Fortnite Revenue Trends

## 1) Problem Statement

Epic Games runs Fortnite using a free-to-play model with monetization through in-game purchases, seasonal battle passes, and collaborations. Your goal is to analyze how revenue changes over time and identify likely drivers (seasonality, new content releases, events/collabs, and platform mix).

## 2) Business Questions

- What is the month-over-month (MoM) and year-over-year (YoY) revenue trend?
- Which periods show abnormal spikes or drops?
- How much variance can be explained by seasonality vs. one-time events?
- If platform/region data exists, where is growth concentrated?

## 3) Data Sources (Choose one path)

### Fast path (public/secondary data)
- Quarterly/yearly estimates from reputable market reports and financial commentary.
- Google Trends as a demand proxy.
- Public event timeline (major seasons, collaborations, live events).

### Stronger path (semi-simulated analytics case)
- Build a synthetic daily transaction table with realistic distributions:
  - `date`
  - `platform` (PC, Console, Mobile)
  - `region` (NA, EU, APAC, LATAM)
  - `transactions`
  - `avg_purchase_value`
  - `revenue = transactions * avg_purchase_value`
  - `event_flag` (0/1)

> For interview settings, clearly label synthetic data as synthetic and explain the assumptions.

## 4) KPIs

- Total Revenue
- MoM Revenue Growth %
- YoY Revenue Growth %
- Revenue Volatility (std. dev. by month)
- Event Lift % (event period vs baseline)
- Platform Revenue Share %

## 5) Suggested Tech Stack

- **SQL**: aggregation and growth calculations
- **Python (Pandas + Matplotlib/Seaborn)**: decomposition + outlier detection
- **Power BI or Tableau**: executive dashboard

## 6) Data Model

- `fact_revenue_daily` (grain: date-platform-region)
- `dim_date`
- `dim_platform`
- `dim_region`
- `dim_event`

## 7) SQL Starter Queries

```sql
-- Monthly revenue + MoM growth
WITH monthly AS (
  SELECT
    DATE_TRUNC('month', date) AS month,
    SUM(revenue) AS revenue
  FROM fact_revenue_daily
  GROUP BY 1
)
SELECT
  month,
  revenue,
  ROUND(
    (revenue - LAG(revenue) OVER (ORDER BY month))
    / NULLIF(LAG(revenue) OVER (ORDER BY month), 0) * 100,
    2
  ) AS mom_growth_pct
FROM monthly
ORDER BY month;
```

```sql
-- Event lift analysis
SELECT
  event_flag,
  AVG(revenue) AS avg_daily_revenue
FROM fact_revenue_daily
GROUP BY event_flag;
```

## 8) Dashboard Layout

- KPI cards: Revenue, MoM %, YoY %
- Line chart: monthly revenue trend
- Heatmap: month vs year performance
- Bar chart: revenue by platform
- Annotation layer: season launches/collab events

## 9) Resume Bullets (Copy/Paste)

- Built a Fortnite revenue trend analysis pipeline using SQL and Python, tracking MoM/YoY performance and identifying high-impact event windows.
- Designed an executive dashboard in Power BI/Tableau with KPI cards, trend decomposition, and platform-level contribution analysis.
- Quantified event-driven revenue lift and separated seasonal effects from abnormal spikes to support forecast-ready decision making.

## 10) Interview Narrative (30 seconds)

“I analyzed Fortnite monetization trends by building a daily-to-monthly revenue model, then layered event annotations and growth metrics to distinguish recurring seasonality from one-off spikes. The final dashboard made it easy to explain where revenue momentum came from and which platforms contributed most to growth.”

---

# Project 2 — Roblox User Growth Dashboard

## 1) Problem Statement

Roblox is a user-generated gaming ecosystem. Your goal is to evaluate user growth quality (not just raw growth), including activity trends, engagement proxies, and retention signals.

## 2) Business Questions

- Is growth accelerating or slowing over time?
- How do DAU/MAU and engagement metrics trend?
- Is growth broad-based across regions/devices or concentrated?
- Are new users retained after their first month?

## 3) Data Design

Create a user activity table (real or synthetic):

- `date`
- `user_id`
- `country`
- `device_type`
- `session_count`
- `minutes_played`
- `robux_spend`
- `signup_date`

Derived tables:
- `daily_active_users`
- `monthly_active_users`
- `cohort_retention`

## 4) KPIs

- DAU (Daily Active Users)
- MAU (Monthly Active Users)
- DAU/MAU stickiness ratio
- Avg session minutes per active user
- New users per month
- M1/M2/M3 cohort retention
- ARPDAU (if spend data available)

## 5) SQL Starter Queries

```sql
-- DAU
SELECT
  date,
  COUNT(DISTINCT user_id) AS dau
FROM fact_user_activity
GROUP BY date
ORDER BY date;
```

```sql
-- MAU
SELECT
  DATE_TRUNC('month', date) AS month,
  COUNT(DISTINCT user_id) AS mau
FROM fact_user_activity
GROUP BY 1
ORDER BY 1;
```

```sql
-- DAU/MAU stickiness (month-level)
WITH dau_month AS (
  SELECT
    DATE_TRUNC('month', date) AS month,
    AVG(dau) AS avg_dau
  FROM (
    SELECT date, COUNT(DISTINCT user_id) AS dau
    FROM fact_user_activity
    GROUP BY date
  ) d
  GROUP BY 1
),
mau AS (
  SELECT
    DATE_TRUNC('month', date) AS month,
    COUNT(DISTINCT user_id) AS mau
  FROM fact_user_activity
  GROUP BY 1
)
SELECT
  d.month,
  d.avg_dau,
  m.mau,
  ROUND(d.avg_dau / NULLIF(m.mau, 0), 4) AS stickiness_ratio
FROM dau_month d
JOIN mau m USING (month)
ORDER BY d.month;
```

## 6) Dashboard Layout

- KPI cards: DAU, MAU, stickiness, retention M1
- Time series: DAU/MAU trend lines
- Funnel/cohort grid: retention by signup month
- Segmentation: country/device filters
- Scatter plot: engagement vs spend by cohort

## 7) Insights You Should Aim to Show

- Growth quality improved if DAU/MAU rises alongside MAU.
- A fall in stickiness despite MAU growth suggests weak engagement.
- Device/region outliers indicate where product optimization is needed.

## 8) Resume Bullets (Copy/Paste)

- Built a Roblox user growth dashboard tracking DAU, MAU, stickiness, cohort retention, and engagement segmentation by country/device.
- Modeled monthly cohorts and retention curves in SQL to evaluate growth quality beyond top-line user counts.
- Delivered stakeholder-ready visuals that highlighted high-growth segments and engagement risks for product prioritization.

## 9) Interview Narrative (30 seconds)

“I focused on growth quality, not vanity metrics. I built a DAU/MAU and cohort-retention dashboard to show whether Roblox user growth was sustainable. That helped identify segments where acquisition was high but engagement depth was weaker.”

---

# Project 3 — Steam Game Sales Analysis

## 1) Problem Statement

Steam has thousands of titles with varying prices, genres, review scores, and launch windows. Your goal is to analyze what factors are associated with stronger sales and better monetization efficiency.

## 2) Business Questions

- Which genres/tags generate the highest total and median sales?
- How does price correlate with unit sales and gross revenue?
- Are discounts linked with higher total revenue or only unit volume?
- Does review sentiment align with stronger sales performance?

## 3) Data Fields

Use a Steam games dataset (public or synthetic):

- `game_id`
- `title`
- `release_date`
- `genre`
- `price`
- `discount_pct`
- `estimated_units_sold`
- `gross_revenue`
- `review_score`
- `review_count`

## 4) KPIs

- Total Gross Revenue
- Units Sold
- Avg Selling Price (ASP)
- Discounted vs Non-discounted revenue share
- Genre revenue contribution %
- Revenue per review (proxy for conversion quality)

## 5) SQL Starter Queries

```sql
-- Genre performance
SELECT
  genre,
  SUM(gross_revenue) AS total_revenue,
  SUM(estimated_units_sold) AS total_units,
  AVG(price) AS avg_price
FROM fact_steam_sales
GROUP BY genre
ORDER BY total_revenue DESC;
```

```sql
-- Discount impact
SELECT
  CASE WHEN discount_pct > 0 THEN 'Discounted' ELSE 'No Discount' END AS pricing_bucket,
  SUM(gross_revenue) AS revenue,
  SUM(estimated_units_sold) AS units
FROM fact_steam_sales
GROUP BY 1;
```

```sql
-- Monthly launch revenue trend
SELECT
  DATE_TRUNC('month', release_date) AS release_month,
  SUM(gross_revenue) AS launch_revenue
FROM fact_steam_sales
GROUP BY 1
ORDER BY 1;
```

## 6) Dashboard Layout

- KPI cards: revenue, units, ASP
- Treemap/bar: genre contribution
- Scatter: price vs units (bubble = review count)
- Boxplot: revenue distribution by genre
- Discount analysis panel with slicers (year/genre)

## 7) Resume Bullets (Copy/Paste)

- Built a Steam sales analytics model evaluating genre performance, pricing elasticity, and discount impact using SQL and BI dashboards.
- Performed correlation-driven analysis of price, review score, and sales outcomes to identify monetization patterns.
- Presented portfolio-level insights on genre concentration risk and promotion effectiveness for release strategy planning.

## 8) Interview Narrative (30 seconds)

“I analyzed Steam game sales by combining pricing, discount, and review signals. The dashboard explained not just which genres made money, but why—through pricing patterns, review momentum, and discount behavior.”

---

# Delivery Package (What to Upload)

For each project create:

1. `README.md` (business context + KPI definitions)
2. `sql/analysis.sql` (core SQL transformations)
3. `notebooks/analysis.ipynb` (EDA + visuals)
4. `dashboard/` screenshots
5. `insights.md` (top 5 findings + recommended actions)

Use this naming structure in your portfolio:

- `fortnite-revenue-trends/`
- `roblox-growth-dashboard/`
- `steam-sales-analysis/`

---

# Resume Section Template

## Projects

**Fortnite Revenue Trends Analysis** | SQL, Python, Power BI  
Built a time-series revenue analysis model with event lift decomposition and platform-level contribution tracking; produced an executive dashboard for MoM/YoY trend monitoring.

**Roblox User Growth Dashboard** | SQL, Tableau/Power BI  
Developed DAU/MAU stickiness and cohort-retention analytics to evaluate growth quality; identified high-growth but low-engagement segments by region and device.

**Steam Game Sales Analysis** | SQL, Python, Tableau  
Analyzed game sales drivers across genre, pricing, and discount behavior; delivered monetization insights and genre-level revenue concentration analysis.

---

# 14-Day Execution Plan (Fast Completion)

## Days 1–2
- Finalize data source/simulation assumptions for all 3 projects.
- Build raw tables and validate schema.

## Days 3–5
- Write SQL transformations and KPI calculations.
- Lock definitions for growth, retention, and revenue measures.

## Days 6–9
- Build dashboards and chart layouts.
- Add annotations and executive summaries.

## Days 10–12
- Create polished README + insights for each project.
- Add screenshots and final QA.

## Days 13–14
- Push to GitHub with clean commits.
- Publish portfolio links in resume + LinkedIn.

---

# Quality Checklist (Before Applying)

- [ ] KPI definitions are explicit and consistent.
- [ ] Each chart answers a business question.
- [ ] Findings include a measurable business implication.
- [ ] README explains assumptions and limitations.
- [ ] Resume bullets use action verbs + impact language.
- [ ] Portfolio repo structure is clean and easy to review.

---

# Optional Extras (to stand out)

- Add a forecasting tab (Prophet/ARIMA) for Fortnite revenue.
- Add funnel + cohort heatmap animation for Roblox.
- Add pricing elasticity regression for Steam.
- Record a 2–3 minute walkthrough video for each project.

---

## Final Note

If you want, next step I can generate the **actual starter files** (`README`, SQL scripts, and notebook scaffolds) for all 3 project folders so you can push to GitHub immediately.
