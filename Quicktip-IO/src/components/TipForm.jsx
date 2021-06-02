import React, { useEffect, useRef } from 'react'
import '../stylesheets/form.css'

const TipForm = (props) => {
    const initial = useRef(true);
    // The Million Dollar Function
    function generateTip(bill,percentage){
        // This will provide the Total Tip Value - corresponding to the Total Bill & Selected Percentage
        let tip = ((percentage/100)*bill).toFixed(2);
        return tip;
    }

    useEffect(()=>{
        if(initial.current){
            initial.current=false;
        }
        else{
            props.setTotal((parseFloat(props.calcBill + props.tip)).toFixed(2))
            props.setIndividualShare(parseFloat(props.total/props.persons));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[props.tip,props.show,props.total])

    // OnChange Event Functions
    function billHandlder(e){
        let value = parseFloat(e.target.value);
        let floatValue = parseFloat(value.toFixed(2));
        props.setBill(value)
        props.setCalcBill(floatValue);
    }
    function personsChangeHandler(e){
        props.setPersons(e.target.value)
    }
    function percentChangeHandler(e){
        props.setPercent(e.target.value)
    }
    // OnSubmit Function
    function submitHandler(e){
        e.preventDefault();
        props.setTip(parseFloat(generateTip(props.calcBill,props.percent)))
        props.setTipState(props.percent);

        props.setBill('');
        props.setShow(true);
        props.setPercent(10);
    }


    // JSX
    return (
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <label htmlFor="bill">Enter Bill Amount</label>
                <input style={props.show?{visibility:"hidden"}:null} onChange={billHandlder} type="number" min="1" step="any" className="form-control" id="bill" required value={props.bill} />
                <span className="dollar">$</span>
            </div>

            <div className="form-group">
                <label htmlFor="persons">Enter No.of People</label>
                <input onChange={personsChangeHandler} type="range" className="form-range" id="persons" min="1" max="20" value={props.persons} />
                <p className="text-center people">{props.persons} People</p>
            </div>

            <div className="form-group">
                <label htmlFor="percent">Enter Gratuity</label>
                <input onChange={percentChangeHandler} type="range" className="form-range" id="percent" min="0" max="20" value={props.percent} />
                <p className="text-center people">{props.percent}%</p>
            </div>

            <div className="form-group">
                <button className="btn btn-secondary">Calculate</button>
            </div>
        </form>
    )
}

export default TipForm
