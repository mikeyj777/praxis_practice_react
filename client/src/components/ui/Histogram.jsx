// src/components/ui/Histogram.jsx
const Histogram = ({ data, maxValue }) => {
  return (
    <div className="histogram">
      <div className="histogram-bars">
        {[1, 2, 3, 4, 5].map((level) => (
          <div key={level} className="histogram-bar-container">
            <div 
              className="histogram-bar"
              style={{
                height: `${(data[level] || 0) / maxValue * 100}%`
              }}
            >
              <span className="histogram-value">{data[level] || 0}</span>
            </div>
            <span className="histogram-label">{level}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Histogram;