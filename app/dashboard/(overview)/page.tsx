
import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import { fetchCardData } from '@/app/lib/data';
import { Suspense } from 'react';
import { 
  RevenueChartSkeleton, 
  LatestInvoicesSkeleton, 
  CardsSkeleton 
} from '@/app/ui/skeletons';
import CardsWrapper from '@/app/ui/dashboard/cards';

export default async function init(){
  await initPage();
}

async function initCards(){
 return (
        <Suspense fallback={<CardsSkeleton />}>
          <CardsWrapper />
        </Suspense>
 )
}

async function initRevenueChart(){
   return(
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart/>
        </Suspense>
   )
}

async function initLatestInvoices(){
  return(
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense>
  )
}
 
export async function initPage() {
  const Cards = await initCards();
  const RevenueChart = await initRevenueChart();
  const LatestInvoices = await initLatestInvoices();

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {Cards}
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        {RevenueChart}
        {LatestInvoices}
      </div>
    </main>
  );
}