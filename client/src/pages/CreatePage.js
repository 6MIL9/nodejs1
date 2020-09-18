import React, { useState, useEffect } from 'react'
import { useHttp } from './../hooks/http.hook';

const CreatePage = () => {

    const { request } = useHttp();
    const [link, setLink] = useState('');

    const pressHandler = async event => {
        if (event.key === "Enter") {
            try {
                const data = await request('/api/link/generate', 'POST', { from: link });
                console.log(data)
            } catch (e) {

            }
        }
    }

    useEffect(() => {
        window.M.updateTextFields();
    }, [])

    return (
        <div className="row">
            <div className="col s8 offset-s2" style={{ paddingTop: '2rem' }}>
                <div className="input-field">
                    <input placeholder="Введите ссылку" id="link" type="text" className="input"
                        onChange={e => setLink(e.target.value)} onKeyPress={pressHandler} value={link} />
                    <label htmlFor="link">Введите ссылку</label>
                </div>
            </div>
        </div>
    )
}

export default CreatePage
