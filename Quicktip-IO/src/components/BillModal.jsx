import React from 'react'
import "../stylesheets/BillModal.css"

const BillModal = (props) => {
    function handleClick(){
        props.setPersons(5)
        props.setShow(false)
    }
    return (
        <div className="myModal">
            <i onClick={handleClick} className="fas fa-times"></i>
            <div className="result">
                <h1 className="text-center">Total Amount</h1>
                <h2 className="text-center">${props.total}</h2>
                <h3 className="text-center">Summary</h3>
                <h4 className="text-center">Bill Amount : ${(props.calcBill).toFixed(2)}</h4>
                <h4 className="text-center">Tip<small>({props.tipState}%)</small> : ${(props.tip).toFixed(2)}</h4>
                <h4 className="text-center">Individual Share : ${(props.individualShare).toFixed(2)}</h4>
            </div>
        </div>
    )
}

export default BillModal
