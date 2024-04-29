import React from 'react'

function Output({srcCode}) {
    return (
        <div>
            <div className="bg-[#282c34] p-4 shadow mt-2 rounded-lg">
                <h2
                    className="text-lg font-semibold mb-2 text-white">
                    Output
                </h2>
                <iframe
                    className="w-full h-60 rounded-md"
                    srcDoc={srcCode}
                    title="output"
                    sandbox="allow-scripts"
                    width="100%"
                    height="100%"
                />
            </div>
        </div>
    )
}

export default Output