export default function AppsListHeader() {
    return (
      <div className="app-list-row app-list-header-row d-flex align-items-center" style={{ width: '100%' }}>
        
        {/* Fixed width for 3rd Party Apps column */}
        <div className="app-list-row-item third-party-apps">
          3rd Party Apps
        </div>
        
        {/* Flexible columns */}
        <div className="app-list-row-item flex-1">
          Transfer Size
        </div>
        <div className="app-list-row-item flex-1">
          Last Usage
        </div>
        <div className="app-list-row-item flex-1">
          Average Load Time
        </div>
        
        {/* Fixed width for the last two items */}
        <div className="app-list-row-item" style={{ width: '80px' }}>
          {/* Empty content */}
        </div>
        <div className="app-list-row-item" style={{ width: '80px' }}>
          {/* Empty content */}
        </div>
      </div>
    );
}
  