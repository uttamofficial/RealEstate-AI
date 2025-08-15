import { rankDeals, type RankDealsInput } from '@/ai/flows/deal-ranking';
import MapView from '@/components/map-view';
import { Suspense } from 'react';
import Loading from '../loading';

export default async function MapPage() {
  // Mock data for AI flows
  const rankDealsInput: RankDealsInput = {
    deals: [
      {
        mlsListing: '4 bed, 3 bath single family home in Austin, TX. 2500 sqft. Recently renovated.',
        taxData: 'Assessed value: $750,000. Annual tax: $15,000.',
        zoningInsights: 'Zoned for single-family residential. Potential for ADU.',
      },
      {
        offMarketListing: 'Duplex in a developing neighborhood of Miami, FL. Needs some work.',
        taxData: 'Assessed value: $450,000. Annual tax: $7,000.',
        zoningInsights: 'Multi-family zoning. High rental demand area.',
      },
      {
        mlsListing: 'Modern downtown condo in Denver, CO. 1200 sqft, 2 bed, 2 bath. Great amenities.',
        taxData: 'Assessed value: $600,000. Annual tax: $9,000.',
        zoningInsights: 'High-density residential. Strong appreciation potential.',
      },
       {
        mlsListing: 'Suburban home in Raleigh, NC. 3 bed, 2.5 bath. 2200 sqft. Good school district.',
        taxData: 'Assessed value: $500,000. Annual tax: $6,500.',
        zoningInsights: 'Standard residential zoning. Stable rental market.',
      },
      {
        offMarketListing: 'Fixer-upper in Phoenix, AZ. Large lot. High potential for flip.',
        taxData: 'Assessed value: $300,000. Annual tax: $3,500.',
        zoningInsights: 'Zoning allows for expansion. Popular area for developers.',
      },
    ],
    migrationPatterns: 'High influx of tech workers to Austin and Raleigh. Miami sees international investment growth.',
    marketEconomics: 'Interest rates are stable. Strong job growth in tech and healthcare sectors in target cities.',
  };
  
  const { rankedDeals } = await rankDeals(rankDealsInput);

  return (
    <Suspense fallback={<Loading />}>
      <div className="flex flex-col h-screen">
        <main className="flex-1 flex flex-col">
          <MapView deals={rankedDeals} />
        </main>
      </div>
    </Suspense>
  );
}
