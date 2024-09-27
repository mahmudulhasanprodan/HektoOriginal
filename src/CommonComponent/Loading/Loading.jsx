import React from 'react'

const Loading = ({className}) => {
     
  return (
    <>
      {[...new Array(4)].map((_, index) => (
        <div className={className}>
          <div className="flex items-center gap-x-4 justify-center h-full animate-pulse">
            <div className="1/4">
            <div className="rounded-full bg-slate-500 h-10 w-10"></div>
            </div>
            <div className="w-3/4">
              <div className="h-2 bg-slate-500 rounded"></div>
              <div className="flex items-center gap-x-3 mt-4">
                <div className="h-2 bg-slate-500 rounded w-2/3"></div>
                <div className="h-2 bg-slate-500 rounded w-1/3"></div>
              </div>
              <div className="h-2 bg-slate-500 rounded mt-4"></div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Loading
