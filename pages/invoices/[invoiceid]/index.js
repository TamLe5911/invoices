import React from 'react'
import {useRouter} from "next/router"
const InvoiceDetails = () => {
    const router = useRouter()
    const goBack =  ()=> router.push("/")
  return (
    <div className='main__container'>
        <div className='back__btn'>
            <h6 onClick={goBack}>Go Back</h6>
        </div>

        <div className='invoice__details-header'>
            <div className='details__status'>
                <p>Status</p>
            <button className='pending__status'>
                pending
            </button>
            </div>
            <div className='details__btns'>
                <button className='edit__btn'>
                        Edit
                </button>
                <button className='delete__btn'>
                    Delete
                </button>
                <button className='mark__as-btn'>
                        Mark as Paid
                </button>
            </div>
        </div>


      
        {/* ========= invoice details =========== */}

      <div className="invoice__details">
        <div className="details__box">
          <div>
            <h4></h4>
            <p></p>
          </div>
          <div>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
          </div>
        </div>

        {/* =========== details box 2 =========== */}
        <div className="details__box">
          <div>
            <div className="invoice__created-date">
              <p>Invoice Date</p>
              <h4></h4>
            </div>
            <div>
              <p className="invoice__payment">Payment Due</p>
              <h4></h4>
            </div>
          </div>

          {/* ======= invoice client address ========== */}
          <div className="invoice__client-address">
            <p>Bill to</p>
            <h4></h4>
            <div>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
            </div>
          </div>

          <div>
            <p>Send to</p>
            <h4></h4>
          </div>
        </div>
    </div>
    <div className="invoice__item-box">
    <ul className="list">
            <li className="list__item">
              <p className="item__name-box">Item Name</p>
              <p className="list__item-box">Qty</p>
              <p className="list__item-box">Price</p>
              <p className="list__item-box">Total</p>
            </li>

            <li className="list__item">
                <div className='item__name-box'>
                    <h5>Ecomerce</h5>
                </div>
                <div className='list__item-box'>
                    <p>2</p>
                </div>
                <div className='list__item-box'>
                    <p>2</p>
                </div>
                <div className='list__item-box'>
                    <p>2</p>
                </div>
            </li>
     </ul>       
    </div>
    <div className='grand__total'>
        <h5>Grand Total</h5>
        <h2>$450</h2>
    </div>
    </div>
  )
}

export default InvoiceDetails