import React from 'react'
import CodeMirror from "@uiw/react-codemirror";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { javascript } from "@codemirror/lang-javascript";
import { useCallback, useState } from "react";
import Output from './Output';

const Editor = () => {

    const [editHtml, setEditHtml] = useState('');
    const [editCss, setEditCss] = useState('');
    const [editJs, setEditJs] = useState('');

    const onChangeHtml = useCallback((value) => {
        setEditHtml(value);
    },[]);

    const onChangeCss = useCallback((value) => {
        setEditCss(value);
    },[]);

    const onChangeJs = useCallback((value) => {
        setEditJs(value);
    },[]);

    const srcCode = `
    <html>
        <body>${editHtml}</body>
        <style>${editCss}</style>
        <script>${editJs}</script>
    </html>
    `;

    return (
        <div className="p-2">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
                <div className="bg-[#282c34] p-4 rounded-lg shadow">
                    <h2 className="text-lg font-semibold mb-2 text-white">HTML</h2>
                    <CodeMirror
                        className="text-xl"
                        value={editHtml}
                        height="342px"
                        theme="dark"
                        extensions={[html(true)]}
                        onChange={onChangeHtml}
                    />
                </div>

                <div className="bg-[#282c34] p-4 rounded-lg shadow">
                    <h2 className="text-lg font-semibold mb-2 text-white">CSS</h2>
                    <CodeMirror
                        className="text-xl"
                        value={editCss}
                        height="342px"
                        theme="dark"
                        extensions={[css(true)]}
                        onChange={onChangeCss}
                    />
                </div>

                <div className="bg-[#282c34] p-4 rounded-lg shadow">
                    <h2 className="text-lg font-semibold mb-2 text-white">JavaScript</h2>
                    <CodeMirror
                        className="text-xl"
                        value={editJs}
                        height="342px"
                        theme="dark"
                        extensions={[javascript(true)]}
                        onChange={onChangeJs}
                    />
                </div>
            </div>
            <Output srcCode={srcCode} />
        </div>
    )
}

export default Editor