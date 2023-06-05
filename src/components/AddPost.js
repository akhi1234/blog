import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const AddPost = () => {

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
            window.alert("Submitted")
            handleClear()
            console.log("dsd")
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
                } onE/>

                {  blogError && <span className='error-msg'>{blogError}</span>
                }
            </div>
            <div className='title-input-box-container'>
                <button className='btn' onClick={handlePost}>Post</button>
                <button className='btn clear-btn' onClick={handleClear}>Clear</button>
            </div>
        </div>
    )
}

export default AddPost