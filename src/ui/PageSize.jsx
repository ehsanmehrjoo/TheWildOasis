import React from 'react';
import usePageSize from '../hooks/usePageSize'; // مسیر فایل هوک سفارشی

function PageSize() {
  const { pageSize, pageSizes, handlePageSizeChange } = usePageSize();

  return (
    <div>
      <select
        onChange={handlePageSizeChange} // استفاده از تابع handlePageSizeChange
        value={pageSize} // مقدار انتخاب‌شده را به state متصل می‌کند
        id="size"
        className="p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
      >
        {/* تولید خودکار گزینه‌ها با استفاده از map */}
        {pageSizes.map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </select>
      <p>Selected Page Size: {pageSize}</p> {/* نمایش مقدار انتخاب‌شده */}
    </div>
  );
}

export default PageSize;
