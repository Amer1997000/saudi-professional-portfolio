import { readFileSync } from 'node:fs'
const source=readFileSync(new URL('../src/App.tsx',import.meta.url),'utf8')
const projects=['AI-Assisted Business Document Review','Namaa Operations Intelligence','Riyadah Sales CRM & Business Development Intelligence','Tawreed Procurement Intelligence','BudgetWise Saudi']
const links=['https://amer1997000.github.io/ai-business-research-dashboard/','https://github.com/Amer1997000/ai-business-research-dashboard','https://amer1997000.github.io/saudi-corporate-operations-system/','https://github.com/Amer1997000/saudi-corporate-operations-system','https://amer1997000.github.io/saudi-sales-crm-business-intelligence/','https://github.com/Amer1997000/saudi-sales-crm-business-intelligence','https://amer1997000.github.io/saudi-procurement-supplier-management/','https://github.com/Amer1997000/saudi-procurement-supplier-management','https://amer1997000.github.io/saudi-business-expense-budget-tracker/','https://github.com/Amer1997000/saudi-business-expense-budget-tracker']
for(const value of [...projects,...links]) if(!source.includes(value)) throw new Error(`Missing required portfolio content: ${value}`)
for(const section of ['home','about','projects','skills','contact']) if(!source.includes(`id="${section}"`)) throw new Error(`Missing navigation section: ${section}`)
for(const value of ['AMIR MOHAMMED SHAFI','https://www.linkedin.com/in/amir-shafi1','mailto:amirshafi214@gmail.com','https://github.com/Amer1997000']) if(!source.includes(value)) throw new Error(`Missing verified identity or contact: ${value}`)
if(!source.includes('Five interactive business applications demonstrating practical solutions in operations, sales, procurement, budgeting, and business analytics.')) throw new Error('Required homepage positioning is missing')
if(/(?:\+?966|05\d{8})/.test(source)) throw new Error('Phone number must not be published')
console.log(`Verified ${projects.length} projects, ${links.length} project links, and 5 navigation sections.`)
