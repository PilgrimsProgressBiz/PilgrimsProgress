import React from 'react';
import Script from 'next/script';

const GoogleAnalytics = () => {
    return (
        <>
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=G-VVW4CML9XJ`}
            />

            <Script id=''>
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-VVW4CML9XJ', {
                    page_path: window.location.pathname,
                    });
                `}
            </Script>
        </>
    );
};

export default GoogleAnalytics;
