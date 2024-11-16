
// Google Maps initialization function
function initMap() {
    // Check if map element exists
    const mapElement = document.getElementById('map');
    if (!mapElement) {
        console.error('Map container not found');
        return;
    }

    // Map configuration
    const mapConfig = {
        // Taiwan center coordinates
        center: { lat: 23.5937, lng: 120.9191 },
        zoom: 7,
        minZoom: 6,
        maxZoom: 18,
        scrollwheel: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: true,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
            position: google.maps.ControlPosition.TOP_RIGHT
        },
        fullscreenControl: true,
        streetViewControl: true,
        zoomControl: true,
        zoomControlOptions: {
            position: google.maps.ControlPosition.RIGHT_CENTER
        },
        styles: [
            {
                featureType: 'all',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#7c93a3' }]
            },
            {
                featureType: 'administrative',
                elementType: 'geometry.fill',
                stylers: [{ visibility: 'on' }]
            },
            // Add more custom styles as needed
        ]
    };

    // Initialize map
    const map = new google.maps.Map(mapElement, mapConfig);

    // Taiwan major cities data
    const locations = [
        {
            name: 'Taipei',
            position: { lat: 25.0330, lng: 121.5654 },
            description: 'Capital City of Taiwan',
            address: 'Taipei City, Taiwan',
            url: 'https://www.travel.taipei/',
            type: 'capital'
        },
        {
            name: 'Kaohsiung',
            position: { lat: 22.6273, lng: 120.3014 },
            description: 'Largest Harbor City in Taiwan',
            address: 'Kaohsiung City, Taiwan',
            url: 'https://khh.travel/',
            type: 'major'
        },
        {
            name: 'Taichung',
            position: { lat: 24.1477, lng: 120.6736 },
            description: 'Cultural City of Taiwan',
            address: 'Taichung City, Taiwan',
            url: 'https://travel.taichung.gov.tw/',
            type: 'major'
        },
        {
            name: 'Tainan',
            position: { lat: 22.9999, lng: 120.2269 },
            description: 'Historical City of Taiwan',
            address: 'Tainan City, Taiwan',
            url: 'https://tourism.tainan.gov.tw/',
            type: 'major'
        },
        {
            name: 'Hsinchu',
            position: { lat: 24.8138, lng: 120.9675 },
            description: 'Technology Hub of Taiwan',
            address: 'Hsinchu City, Taiwan',
            url: 'https://tourism.hccg.gov.tw/',
            type: 'tech'
        }
    ];

    // Custom marker icons
    const markerIcons = {
        capital: {
            url: 'images/marker-capital.png',
            scaledSize: new google.maps.Size(40, 40),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(20, 40)
        },
        major: {
            url: 'images/marker-city.png',
            scaledSize: new google.maps.Size(32, 32),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(16, 32)
        },
        tech: {
            url: 'images/marker-tech.png',
            scaledSize: new google.maps.Size(32, 32),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(16, 32)
        }
    };

    // Create info window
    const infoWindow = new google.maps.InfoWindow();

    // Create markers for each location
    const markers = locations.map(location => {
        // Create marker
        const marker = new google.maps.Marker({
            position: location.position,
            map: map,
            title: location.name,
            icon: markerIcons[location.type],
            animation: google.maps.Animation.DROP
        });

        // Create info window content
        const content = `
            <div class="map-info-window">
                <h3>${location.name}</h3>
                <p>${location.description}</p>
                <p><strong>Address:</strong> ${location.address}</p>
                <p><a href="${location.url}" target="_blank" rel="noopener noreferrer">Visit Website</a></p>
            </div>
        `;

        // Add click listener to marker
        marker.addListener('click', () => {
            infoWindow.setContent(content);
            infoWindow.open(map, marker);
        });

        return marker;
    });

    // Add marker clustering
    new MarkerClusterer(map, markers, {
        imagePath: 'images/cluster/m',
        maxZoom: 15,
        minimumClusterSize: 2
    });

    // Make map responsive
    google.maps.event.addDomListener(window, 'resize', () => {
        const center = map.getCenter();
        google.maps.event.trigger(map, 'resize');
        map.setCenter(center);
    });
}

// Error handler
function handleGoogleMapsError() {
    const mapElement = document.getElementById('map');
    if (mapElement) {
        mapElement.innerHTML = `
            <div class="map-error">
                <h3>Map Loading Error</h3>
                <p>Sorry, we couldn't load the map at this time. Please try again later.</p>
            </div>
        `;
    }
    console.error('Google Maps failed to load');
}
