import React,{useState} from 'react';
import TipForm from "./components/TipForm";
import BillModal from "./components/BillModal";
import icon from "./cash.svg"

function App() {
    // Input States
    const [bill,setBill] = useState('')
    const [tipState,setTipState] = useState(0)
    const [persons,setPersons] = useState(5);
    const [percent,setPercent] = useState(10);
    // Calc States
    const [calcBill,setCalcBill] = useState('0');
    const [tip,setTip] = useState(0);
    // Total & Individual Share States
    const [total,setTotal] = useState(0);
    const [individualShare,setIndividualShare] = useState(0)
    // Animation State
    const [show,setShow] = useState(false);
 

  return (
    <div className="container contain">
      <div className="card">
        <div className="card-header">
          <img src={icon} alt="Icon" className="img-fluid icon" />
          <h1 className="text-center">Quicktip.io</h1>
        </div>

        <TipForm 
          bill={bill}
          setBill={setBill}
          persons={persons}
          setPersons={setPersons}
          percent={percent}
          setPercent={setPercent}
          total={total}
          setTotal={setTotal}
          individualShare={individualShare}
          setIndividualShare={setIndividualShare}
          tip={tip}
          setTip={setTip}
          calcBill={calcBill}
          setCalcBill={setCalcBill}
          show={show}
          setShow={setShow}
          tipState={tipState}
          setTipState={setTipState}
        />

        {show?(<BillModal setShow={setShow} setPersons={setPersons} total={total} calcBill={calcBill} individualShare={individualShare} persons={persons} tip={tip} tipState={tipState}  />):null}
      </div>

    </div>
  );
}

export default App;
