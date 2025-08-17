<<<<<<< HEAD
'use client';

import { useEffect, useRef } from "react";
import maplibregl, { Map as MapLibreMap } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

type MapViewProps = {
  className?: string;
  center?: [number, number]; // [lng, lat]
  zoom?: number;
  deals?: any[]; // Add deals prop for compatibility
};

export default function MapView({
  className = "h-96 w-full rounded-xl border border-green-500/20",
  center = [13.388, 52.517], // Berlin (change if you like)
  zoom = 9.5,
}: MapViewProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<MapLibreMap | null>(null);
  const initializedRef = useRef(false);

  useEffect(() => {
    // Prevent double-initialization during hot reloads and re-renders
    if (!containerRef.current || mapRef.current || initializedRef.current) return;

    // Mark as initialized to prevent re-initialization
    initializedRef.current = true;

    const map = new maplibregl.Map({
      container: containerRef.current,
      style: "https://tiles.openfreemap.org/styles/liberty",
      center,
      zoom,
    });
    mapRef.current = map;

    // Controls
    map.addControl(new maplibregl.NavigationControl(), "top-right");
    map.addControl(new maplibregl.FullscreenControl());

    // Demo marker + popup at the center
    const marker = new maplibregl.Marker()
      .setLngLat(center)
      .setPopup(
        new maplibregl.Popup().setHTML(
          "<strong>Sample Property</strong><br/>You can put details here."
        )
      )
      .addTo(map);

    // Resize when container or window size changes (helps with tabs)
    const ro = new ResizeObserver(() => map.resize());
    ro.observe(containerRef.current);
    const onResize = () => map.resize();
    window.addEventListener("resize", onResize);

    // Cleanup only on unmount, not on re-renders
    return () => {
      if (initializedRef.current) {
        marker.remove();
        ro.disconnect();
        window.removeEventListener("resize", onResize);
        map.remove();
        mapRef.current = null;
        initializedRef.current = false;
      }
    };
  }, []); // Empty dependency array - only run once on mount

  return <div ref={containerRef} className={className} />;
=======
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
>>>>>>> dfa74fe6c9fc29bf7c76b775d708af73bbff812d
}
