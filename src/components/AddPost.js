import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Modal from './Modal'

function SaveDataToLocalStorage(data, key) {
    let a = [];

    a = JSON.parse(localStorage.getItem(key)) || [];
    // Push the new data (whether it be an object or anything else) onto the array
    a.push(data);
    // Alert the array value

    localStorage.setItem(key, JSON.stringify(a));
}

const AddPost = () => {


    const [show, setShow] = useState(false);
    const [checked, setChecked] = useState(false)

    console.log(checked)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [value, setValue] = useState({
        title: "",
        desc: ""
    });
    const [valueError, setValueError] = useState({
        title: "",
        desc: ""
    })
    const [blog, setBlog] = useState('')
    const [blogError, setBlogError] = useState('')

    const handleChange = (e) => {
        const { name, value } = e.target
        setValue(prev => ({
            ...prev, [name]: value
        }))
        setValueError(prev => ({
            ...prev, [name]: ""
        }))
    }

    console.log(blog)

    const handleBlog = () => {
        setBlog()
        setBlogError("")
    }

    const handleClick = () => {
        window.alert("Submitted")
        handleClear()
        SaveDataToLocalStorage({
            title: value.title, desc: value.desc, blog, isPublish: checked
        }, "postItems")
        setShow(false)
        setChecked(false)
    }

    const handlePublish = () => {
        if (checked) {
            setShow(true)
        }else{
            handleClick()
        }
        
    }

    const handlePost = () => {
        if (!value.title) {
            setValueError(prev => ({
                ...prev, title: "Please Enter Title."
            }))
        }
        else if (!value.desc) {
            setValueError(prev => ({
                ...prev, desc: "Please Enter Description."
            }))
        }
        else if (!blog) {
            setBlogError("Please Enter Blog.")
        } else {
            handlePublish()
        }

    }

    const handleClear = () => {
        setBlog("")
        setValue({
            title: "",
            desc: ""
        })
    }




    return (
        <div className='blog-container'>
            <h3>Add Post</h3>
            <div className='title-input-box-container'>
                <label className='title-label'>Title</label>
                <input value={value.title} name='title' onChange={handleChange} className='input-box' placeholder='Enter title' />
                {valueError.title && <span className='error-msg'>{valueError.title}</span>}
            </div>
            <div className='title-input-box-container'>
                <label className='title-label'>Description</label>
                <input value={value.desc} name='desc' onChange={handleChange} placeholder='Enter description' className='input-box' />
                {valueError.desc && <span className='error-msg'>{valueError.desc}</span>}
            </div>
            <div className='title-input-box-container'>
                <label className='title-label'>Blog</label>

                <ReactQuill theme="snow" value={blog} onChange={setBlog
                } onE />

                {blogError && <span className='error-msg'>{blogError}</span>
                }
            </div>


            <div className='title-input-box-container'>
                <input type='checkbox' checked={checked} onChange={e => setChecked(e.target.checked)} />
                <button className='btn' onClick={handlePost}>Post</button>
                <button className='btn clear-btn' onClick={handleClear}>Clear</button>
            </div>

            {
                show && <Modal handleClick={handleClick} show={show} handleClose={() => setShow(false)} />
            }
        </div>
    )
}

export default AddPost