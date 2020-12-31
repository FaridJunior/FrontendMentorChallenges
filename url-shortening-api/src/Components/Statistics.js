import React from "react";

function Statistics() {
  return (
    <section className="statistics">
      <h2 className="statistics__heading tp"> Advanced Statistics</h2>
      <p className="statistics__subtitles ts">
        Track how your links are performing across the web with our advanced statistics dashboard.
      </p>
      <div className="statistic">
        <div className="statistic__icon"></div>
        <h3 className="statistic__heading tp">Brand Recognition</h3>
        <p className="statistic__suptitle ts">
          Boost your brand recognition with each click. Generic links don’t mean a thing. Branded
          links help instil confidence in your content.
        </p>
      </div>
      <div className="statistic">
        <div className="statistic__icon"></div>
        <h3 className="statistic__heading tp">Detailed Records</h3>
        <p className="statistic__suptitle ts">
          Gain insights into who is clicking your links. Knowing when and where people engage with
          your content helps inform better decisions.
        </p>
      </div>
      <div className="statistic">
        <div className="statistic__icon"></div>
        <h3 className="statistic__heading tp">Fully Customizable</h3>
        <p className="statistic__suptitle ts">
          Improve brand awareness and content discoverability through customizable links,
          supercharging audience engagement.
        </p>
      </div>
    </section>
  );
}

export default Statistics;
