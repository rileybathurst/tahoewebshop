import * as React from "react";

const TahoeSvg = () => {
  return (
    <svg
      // enable-background="new 0 0 300 300"
      viewBox="0 0 300 300"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMinYMin meet"
      className="tahoe-svg"
    >
      <defs>
        <mapGradient id="map-gradient" gradientTransform="rotate(90)">
          <stop
            offset="0%"
            stopColor="rgba(242, 201, 76, 0.5)"
            stopOpacity="50%"
          />
          <stop
            offset="100%"
            stopColor="rgba(242, 153, 74, 0.5)"
            stopOpacity="50%"
          />
        </mapGradient>
      </defs>

      <path viewBox="0 0 300 300" d="m3083.2 105.7c53.9-2.3 130.3 19.3 173.2 5.9 169 63.8 371.5 103.8 537.9 237.9 90.3 50.2 14 86.5 46.2 148.6 15.2-2.6 25.3 13.4 30.9 28.6 39 3.9 29.7 42.2 39.8 65.4 5.6 9.8-37.9 52.7-15.6 59.8 1.7 6.9 4.6 17.3 1.3 27.5 19.6 26.7-21 37.6-17.9 57.9 14.9 13 15 56.6-11.2 57.6-5.5 6.5 55.1 112.8-11.8 93.1-13.8 12 25.4 9.4 4.2 26.9-11.9-11.1-37.8 26.4-14.8 29.8 14.1-29.5 67.7 17.6 83.3 46.2-2.7 63.9-13.8 125.8 4.6 184.9 28.6 47.7 9.2 78.5-12.1 120.4-15.6 5.7-27.4-4.3-41.2 8.3-10.6-6.6-3.3 33.8-11.2 38.3 6.5 8-11.9 23.6 2.5 24.7 2.2 5.7-3.7.5-5.1 4.4-12 11.1 1.1 37.8-5.2 51.4-15.7 2.7 4.6 25-5.3 32.6 49.4 39.5-1.4 97.6-5.3 151.8-1.8 9.1 12.6 12.9 16 23.8 3.7-8.9 13.5-6.7 12 2.1 6.5 2.2-21.8 15.7-4.9 21.2-11.9 31.9 26 60 8.4 89.1-27.6.2-8.2 40.3-35 36.4-3.4-8.4-24.9-1.5-9.8 1.1 7 5.6-6.6 15.4-10.3 17.8-6.8 37.2-21.7 38.5-52.9 49.7-117.4 93.8-16.2 94.6-13.8 198.8 10 27.1-21.4 8.1-34.4 29.5-22.7-5.7-30.5 33.8-55.3 5.9-17.8 32.1-81.8 61.4-34.2 109.1-11.1 75.2-37.6 151.4-73 219.3-40.2 34.1-3.6 71.7 18.8 73.9 18.2 8.7 25.5 48.1 53.1 38.7 94.2 15 146.5 45 181.1 165 45.3 153.3-154.7-15.3-80 258.2 14 26.8 81.3 55.3 68.2 110.5 2.6 40.6-71.4 84.8-17.4 105.6 14.5 32-29.3 62.7-9.8 99.1 10.2 29.9-26.1 71.2-10.3 101.7-5 32.6-54 52.8-32.5 90.2-9.2 40.8 24.7 69.3-11.9 103.3-23 34-12.9 69.8 4.2 101.6 24.3 26.5-4.7 45.4 20.8 77.2-11.2 29.2 1.2 90.5-39.1 107.9-7 13.8-39.4-5.3-26.8 14.9 23.8-9.5 2.1 43.4 13.5 56.8 7.3 8-7.5 20.4 2.5 20.8 45.5 5.2 100.3 238.7-4.8 187.9-3-1.9-6.1-9.1-7.8-1.6 2.6 16-22.9-2.6-30.2 8.1-15.3-5.4-1.5 16.3-10.9 20.6-14.1 9.9-39.2 18.3-43.6 33.8 63.9 46.4 172.2 210.2 53.1 235.1 206.5 347.6 130.8 679.2-332.3 712.5-221.6 45.6-402.8 202.2-655.2 126.2-256.9-42.2-607.3-29.3-556.3-387.1-8.5-164.1-146.6 251.2-282.7 234.6-30.2-10.3-50.2-.5-70.6-30.6-8.5-37.7 17.6 14.4 1.6-19-18.3-92.1 139-108.5 176.5-200.3 16.1-37.6 60.3.3 78.2-26.9 64-27.7-29.2-59.3-54.3-56 1.5-24.9-13.4-9.8-21.1-22.4-14-3.8-8.4-23-28.4-20.4-23.4-76.2 10.3-148.8-11.3-226.8-22.2-58.6-10.5-45-1.8-97.4 17.3-28.8-18.9-31.3-8.1-54.4 2.3-26.7-9.4-54.2-26.8-81.2-175-20.1-318.1-273.3-316-431.6-17.2-53.7 98.1-97.2 36.1-130.2-9.8-21.3-22.5-41.7-49.4-28.4-29-8-42.7-89.8-1.8-73.1 3.4-11.8-18-32 3.6-43.7 186.8-90 52.9-140.8 69.7-285.5-55.9-147.7-273.2-105.2-363.9-218.4-97.2-9.6-194.8-45.7-223.7-159.3-160.8-338.4-17.7-196.2-12.9-468.5 8.1-19.6 4.2-93.8-15.6-98-46.5-38.5-57.5-196.9 34.8-173.6 20.9-16.7 33.7-47.8 44.9-73.8-42.9-297.5 90.4-85.3 112.7-389.9 54-232.7-92.6-118.4 108-317.7 55.3-141.6 207-69.7 298.2-139.9 41.3-38.8 264.2 8.6 220.8-70.3-65.8-60.2-35.3-135.1-41.7-211.5-29.1-108.6 92.6-127 95.2-215.6-10.1-73.2 19.6-238.3 78.3-218.8 294.5-10.6 63.1-115.8 161.3-177.7 120.6-30.3 158.5-80.9 278.3-47 19 50.3 78.6-23.9 103.8 14.2 78.5-7.6 190.3 27.5 263.6 72.2 33.7 52.7 57.3 111.6 101.3 144.8 3.8 7.2 13.8 27.9 17.7 17.8 32-36.6 85.4 62 98 12.1 2.3-21.3-5.5-24.8-5.6-42.6 17.2-100.4-18.5-395.1 126.7-411.9z" 
      // fill="#00f"
      transform="matrix(.05447536 0 0 .05447537 18.27535 1.99437)"/>
    </svg>
  );
};

export default TahoeSvg;
