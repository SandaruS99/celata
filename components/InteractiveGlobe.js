"use client";

import React, { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';

const Globe = dynamic(() => import('react-globe.gl'), { ssr: false });

const InteractiveGlobe = () => {
    const globeRef = useRef();
    const [countries, setCountries] = useState({ features: [] });
    const [hoverD, setHoverD] = useState();

    const activeCountries = ['US', 'LK', 'BD'];
    const locationDetails = {
        'US': {
            company: 'Celata Tech Inc.',
            address: 'Suit 413A, 1603 Capitol Avenue, 3097<br/>Laramie, Cheyenne,<br/>Wyoming, USA 820001.'
        },
        'LK': {
            company: 'Celata Tech (Pvt) Ltd.',
            address: 'No: 16B, Rawatawatta,<br/>Moratuwa, Sri Lanka.'
        },
        'BD': {
            company: 'Celata Tech',
            address: 'Dhaka, Bangladesh.'
        }
    };
    const locations = [
        { lat: 38.0, lng: -97.0, name: 'USA' },
        { lat: 7.8731, lng: 80.7718, name: 'Sri Lanka' },
        { lat: 23.6850, lng: 90.3563, name: 'Bangladesh' }
    ];

    useEffect(() => {
        // Load GeoJSON data for countries for the linear map
        fetch('https://raw.githubusercontent.com/vasturiano/react-globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson')
            .then(res => res.json())
            .then(data => {
                setCountries(data);
            });
    }, []);

    useEffect(() => {
        // We wait a brief moment for the Globe to mount and have controls initialized
        const setControls = () => {
            if (globeRef.current && globeRef.current.controls) {
                const controls = globeRef.current.controls();
                if (controls) {
                    controls.autoRotate = true;
                    // Slow majestic rotation
                    controls.autoRotateSpeed = 0.5;
                    controls.enableZoom = true;
                    // Prevent zooming in too close so it doesn't crop the sphere or clip near-plane
                    controls.minDistance = 250;
                    controls.maxDistance = 800;
                }
            } else {
                setTimeout(setControls, 500);
            }
        };
        setControls();
    }, []);

    const [dimensions, setDimensions] = useState({ width: 650, height: 650 });

    useEffect(() => {
        const updateDimensions = () => {
            if (window.innerWidth < 640) {
                setDimensions({ width: 350, height: 350 });
            } else if (window.innerWidth < 1024) {
                setDimensions({ width: 450, height: 450 });
            } else {
                setDimensions({ width: 650, height: 650 });
            }
        };

        updateDimensions();
        window.addEventListener('resize', updateDimensions);
        return () => window.removeEventListener('resize', updateDimensions);
    }, []);

    return (
        <div className="w-full h-full flex items-center justify-center cursor-move active:cursor-grabbing hover:scale-[1.02] transition-transform duration-700">
            <Globe
                ref={globeRef}
                height={dimensions.height}
                width={dimensions.width}
                backgroundColor="rgba(0,0,0,0)"
                showGlobe={false} // Hide solid core to achieve "linear" wireframe map effect
                showAtmosphere={false} // Removed glowing effect

                polygonsData={countries.features}
                polygonAltitude={d => (activeCountries.includes(d.properties.ISO_A2) && d === hoverD ? 0.05 : 0.01)}
                polygonCapColor={d => (activeCountries.includes(d.properties.ISO_A2) && d === hoverD ? '#DB2A33' : 'rgba(3, 69, 178, 0.08)')} // Red hover, light blue base
                polygonSideColor={() => 'rgba(3, 69, 178, 0.05)'}
                polygonStrokeColor={() => '#0345B2'} // Linear mapping border

                onPolygonHover={d => {
                    // Only trigger hover state if strictly an active country
                    if (d && activeCountries.includes(d.properties.ISO_A2)) {
                        setHoverD(d);
                    } else {
                        setHoverD(null);
                    }
                }}

                polygonLabel={({ properties: d }) => {
                    if (!activeCountries.includes(d.ISO_A2)) return '';
                    const details = locationDetails[d.ISO_A2];
                    return `
                      <div style="background-color: #DB2A33; color: white; padding: 10px 14px; border-radius: 4px; font-size: 14px; font-family: var(--font-poppins), sans-serif; white-space: nowrap; box-shadow: 0 10px 25px rgba(219,42,51,0.25);">
                        <div style="margin-bottom: 2px;"><span style="font-weight: 500;">${d.ADMIN}</span> &nbsp;- ${details.company}</div>
                        <div style="font-size: 13px; line-height: 1.4;">${details.address}</div>
                      </div>
                    `;
                }}

                htmlElementsData={locations}
                htmlElement={d => {
                    const el = document.createElement('div');
                    el.innerHTML = `
                      <div style="width: 14px; height: 14px; background-color: #DB2A33; border-radius: 50%; border: 2px solid white; box-shadow: 0 0 10px rgba(219,42,51,0.6);"></div>
                    `;
                    el.style.pointerEvents = 'none';
                    return el;
                }}
            />
        </div>
    );
};

export default InteractiveGlobe;
