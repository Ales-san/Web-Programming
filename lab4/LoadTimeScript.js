let navperf = performance.getEntriesByType('navigation')[0]
alert(navperf.loadEventEnd - navperf.loadEventStart)