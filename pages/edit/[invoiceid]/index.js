import React, { useRef, useState } from 'react'
import {useRouter} from "next/router"


const EditItem = () => {
    const router = useRouter()
    const [items, setItems] = useState([])
    const addItem = () => {
        setItems([...items, {name:"", quanlity:0,price:0, total:0, }])
        console.log(items)
    }
    const handlerChange = (event, i) =>{
        const {name, value} = event.target
        const list = [...items]
        list[i][name] = value
        list[i]["total"] =  list[i]["quanlity"] *  list[i]["price"]
        setItems(list)
    }
    const delteItems = (i)=>{
        const inputData = [...items]
        inputData.splice(i, 1)
        setItems(inputData)
    }

    const totalAmount = items.reduce((acc, curr)=>(acc + curr.total), 0) 
    const senderStreet = useRef("")
    const senderCity = useRef("")
    const senderPostalCode = useRef("")
    const senderCountry = useRef("")
    const clientName = useRef("")
    const clientEmail = useRef("")
    const clienStreet = useRef("")
    const clientCity = useRef("")
    const clientPostalCode = useRef("")
    const clientCountry = useRef("")
    const description = useRef("")
    const createAt = useRef("")
    const paymentTerms = useRef("")
  return (
    <div className='main__container'>
        <div className='new_invoice'>
            <div className='new__invoice-header'>
                <h3>Edit </h3>
            </div>
            <div className='new__invoice-body'>
                <div className='bill_from'>
                    <p className='bill__title'>Bill from</p>
                    <div className='form__group'>
                        <p>Street Address</p>
                        <input type="text" ref={senderStreet}  />
                    </div>
                    </div>

                    <div className='bill__to'>
                    <div className='form__group inline__form-group'>
                        <div>
                            <p>City</p>
                            <input type="text" ref={senderCity}  />
                        </div>
                        <div>
                            <p>Postal Code</p>
                            <input type="text" ref={senderPostalCode} />
                        </div>
                        <div>
                            <p>Country</p>
                            <input type="text" ref={senderCountry}  />
                        </div>
                    </div>

                    <div className='form__group'>
                        <p>Bill to</p>
                        <p>Client Name</p>
                        <input type="text" ref={clientName}  />
                    </div>
                    <div className='form__group'>
                        <p>Client Email</p>
                        <input type="text" ref={clientEmail}  />
                    </div>
                    <div className='form__group'>
                        <p>Client Address</p>
                        <input type="text" ref={clienStreet}  />
                    </div>
                    <div className='form__group'>
                        <p>Client City</p>
                        <input type="text" ref={clientCity}  />
                    </div>
                    <div className='form__group'>
                        <p>Client Postal Code</p>
                        <input type="text" ref={clientPostalCode}  />
                    </div>
                    <div className='form__group'>
                        <p>Client Country</p>
                        <input type="text" ref={clientCountry}  />
                    </div>
                    <div className='form__group inline__form-group'>
                        <div className='inline__group'>
                            <p>Invoice Date</p>
                            <input type="date" ref={createAt} />
                        </div>
                        <div  className='inline__group'>
                            <p>Payment Terms</p>
                            <input type="text" ref={paymentTerms}  />
                        </div>
                        <div  className='inline__group'>
                            <p>Project Description</p>
                            <input type="text" ref={description}  />
                        </div>
                    </div>
                    </div>
                   
                <div className='invoice__items'>
                    <h3>Item List</h3>
                    {
                        items.map((item, i) =>(
                            <div className='item' key={i}>
                            <div className='form__group inline__form-group'>
                                <div>
                                    <p>Item Name</p>
                                    <input type="text" name="name"  onChange={e => handlerChange(e, i)}/>
                                </div>
    
                                <div>
                                    <p>Qty</p>
                                    <input type="number" name="quanlity" onChange={e => handlerChange(e, i)} />
                                </div>
                                <div>
                                    <p>Price</p>
                                    <input type="number" name="price" onChange={e => handlerChange(e, i)} />
                                </div>
                                <div>
                                    <p>Total</p>
                                    <h4>{item.total}</h4>
                                </div>
                                <button className='edit__btn' onClick={()=>delteItems(i)}>Delete</button>
                            </div>
                        </div>
                        ))
                    }
                   
                </div>   
               <button className='add__item-btn' onClick={addItem}>
                Add New Item
               </button>
               <div className='new__invoice__btns' style={{justifyContent:"end"}}>
                        <div>
                            <button className='draft__btn' onClick={() => router.push(`/invoices/${invoice.id}`)}>Canel</button>
                            <button className='mark__as-btn'>Send Save</button>
                        
                        </div>
                    
               </div>
            </div>
        </div>
    </div>
  )
}

export default EditItem