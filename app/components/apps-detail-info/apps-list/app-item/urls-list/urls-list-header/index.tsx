export default function URLsListHeader() {
    return (
      <div className="urls-list-row urls-list-header-row d-flex align-items-center" style={{ width: '100%' }}>
        
        {/* Fixed width for 3rd Party Apps column */}
        <div className="urls-list-row-item url-link-and-desc">
          URL
        </div>
        
        {/* Flexible columns */}
        <div className="urls-list-row-item flex-1">
          Transfer Size
        </div>
        <div className="urls-list-row-item flex-1">
          Total CPU Time 
        </div>
        <div className="urls-list-row-item flex-1">
          Script Evaluation
        </div>
      </div>
    );
}
  