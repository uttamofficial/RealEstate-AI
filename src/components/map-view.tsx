"use client"

import type { RankedDeal } from "@/lib/types"
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import Link from "next/link"

export default function MapView({ deals }: { deals: RankedDeal[] }) {
  const [selectedDeal, setSelectedDeal] = useState<RankedDeal | null>(null)

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
  if (!apiKey) {
    return (
      <div className="flex items-center justify-center h-full bg-muted">
        <p className="text-destructive">
          Google Maps API key is missing. Please add it to your .env file.
        </p>
      </div>
    )
  }

  const center =
    deals.length > 0
      ? { lat: deals[0].coordinates.lat, lng: deals[0].coordinates.lng }
      : { lat: 34.0522, lng: -118.2437 } // Default to LA

  return (
    <APIProvider apiKey={apiKey}>
      <Map
        mapId="realestate-ai-map"
        defaultCenter={center}
        defaultZoom={10}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
        className="w-full h-full"
      >
        {deals.map((deal) => (
          <AdvancedMarker
            key={deal.taxData}
            position={deal.coordinates}
            onClick={() => setSelectedDeal(deal)}
          >
            <Pin
              background={"hsl(var(--primary))"}
              borderColor={"hsl(var(--primary-foreground))"}
              glyphColor={"hsl(var(--primary-foreground))"}
            />
          </AdvancedMarker>
        ))}
        {selectedDeal && (
          <InfoWindow
            position={selectedDeal.coordinates}
            onCloseClick={() => setSelectedDeal(null)}
          >
            <Card className="border-none shadow-none max-w-sm">
              <CardHeader className="p-2">
                <CardTitle className="text-base">{selectedDeal.address}</CardTitle>
              </CardHeader>
              <CardContent className="p-2 text-sm">
                <p><strong>AI Score:</strong> {selectedDeal.score}</p>
                <p><strong>ROI:</strong> {selectedDeal.roi}%</p>
                <p><strong>Category:</strong> {selectedDeal.dealCategory}</p>
                <Button asChild variant="link" size="sm" className="p-0 h-auto mt-2">
                  <Link href="/">View Details</Link>
                </Button>
              </CardContent>
            </Card>
          </InfoWindow>
        )}
      </Map>
    </APIProvider>
  )
}
