import React, { useState, useEffect } from 'react'
import Header from './_Header'
import imgInfo from '../../../images/info.svg'

const styles = {
    input: {
        marginLeft: '30px',
        marginTop: '60px',
        marginBottom: '30px'
    },

}

export default function MVP({ data, setData }) {
    const [form, setForm] = useState({
        input1: '', input2: '', input3: '', input4: '', text: '', select1: 'который', select2: 'помогает'
    })
    let classes = ['form-active']
    let userClasses = ['user-form']
    const [edit, setEdit] = useState('true')

    useEffect(() => {
        if (!edit) {
            setData(data[4].textFill =
                `MVP Это ${form.input1} ${form.select1} ${form.select2} ${form.input2} решить проблему, при помощи ${form.input3} и даёт ${form.input4}
                
                MVP
                
                ${form.text}`)
        }
    }, [edit])

    const handleInputChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        setForm({
            ...form,
            [name]: value
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        setEdit(!edit)
    }

    if (!edit) {
        userClasses.push('user-form-active')
        classes.push('form')
    }

    return (
        <div className="main">
            <Header />
            <div className="pattern-title strings">Шаблон MVP<div className="team-info" data-title="Используй подсказки для заполнения или не используй"><img src={imgInfo} alt="information" /></div> </div>
            <form style={styles.form} className={classes.join(' ')}>
                <div className="pattern" onSubmit={handleSubmit}>
                    <div className="strings child"> Это </div>
                    <div className="child">
                        <input name="input1" value={form.input1} onChange={handleInputChange} type="text" placeholder="сервис, приложение, объект" className="text-small" />
                    </div>
                    <select value={form.select1} onChange={handleInputChange} name="select1" className="touch-selector child">
                        <option value="который">который</option>
                        <option value="которая">которая</option>
                        <option value="которые">которые</option>
                        <option value="которое">которое</option>
                    </select>
                    <select value={form.select2} onChange={handleInputChange} name="select2" className="touch-selector child">
                        <option value="помогает">помогает</option>
                        <option value="помогают">помогают</option>
                        <option value="помогага">помогага</option>
                        <option value="помощьь">помощьь</option>
                    </select>
                    <input name='input2' value={form.input2} onChange={handleInputChange} type="text" placeholder="кому" className="mini-text child" />
                    <div className="strings child">решить проблему, при помощи</div>
                    <input name='input3' value={form.input3} onChange={handleInputChange} type="text" placeholder="решение" className="mini-text child" />
                    <div className="strings child">и даёт</div>
                    <input name='input4' value={form.input4} onChange={handleInputChange} type="text" placeholder="выгода, ценность для клиента" className="text-small child" />
                </div>
                <div className="pattern-title strings">MVP</div>
                <textarea value={form.text} onChange={handleInputChange} name="text" id="" cols="30" rows="10" placeholder="Текст" className="pattern-title textarea"></textarea>
            </form>
            <div className={userClasses.join(' ')}>
                Это <strong>{`${form.input1 || '...'} ${form.select1} ${form.select2} 
        ${form.input2 || '...'} `}</strong>решить проблему, при помощи <strong>
                    {`${form.input3 || '...'}`}</strong> и даёт <strong>{`${form.input4 || '...'}`}</strong>
                <br />
                MVP
                <br />
                <strong>{`${form.text || '...'}`}</strong>
            </div>
            <input type="submit" className='button' style={styles.input} onClick={handleSubmit} />
        </div>
    )
} 