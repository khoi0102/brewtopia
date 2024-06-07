import React from 'react';

function Button(props) {
    return (
        <>
            <div>
              <button className="px-6 py-1 border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white transition-all rounded-full">{props.title}</button>
            </div>
        </>
    )
}
export default Button;