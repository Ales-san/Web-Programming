let navperf = performance.getEntriesByType('navigation')[0]
alert(navperf.domContentLoadedEventEnd - navperf.domContentLoadedEventStart)