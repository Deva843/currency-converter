import React, { useState,useEffect } from "react";
import axios from "axios";




const CurrencyCunverter = () =>{
    const [amount,setAmount]=useState(1);
    const [fromCountries,setFromCountries] = useState("USD")
    const [toCountries,setToCountries] = useState("INR")
    const [calCulatedAmount,setCalCulatedAmount] = useState(null)



    useEffect(()=>{

        fetchDetails();

    },[fromCountries,toCountries,amount])


   async function fetchDetails(){
    try{
     const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${fromCountries}`)
     console.log(response.data)
     setCalCulatedAmount(
        ()=> {
           let res = response.data.rates[toCountries] * amount 
           return res.toFixed(2)
        
        })
    }
    catch(err){
        console.log(err)
    }
    }
    function handleAmount(e){
        console.log(e)
        let amt  = e.target.value;
        if(isNaN(amt)){
            return null;
        }
        !amt ? setAmount(""): setAmount(amt);
    }

    return (
        <div className="body">
            <div className="box">
                <h1>Currency Converter</h1>
                <div className="input">
                    <label>Amout</label>
                    <input type="number"  placeholder="enter Amount"
                    value = {amount} onChange={handleAmount} />
                </div>
                <div className="countries">
                <label htmlFor="fromCurrency">From Currency:</label>
                <select id="fromCurrency" value={fromCountries} onChange={(e)=>setFromCountries(e.target.value)}>
                    <option value="USD">USD - United States Dollar</option>
                    <option value="EUR">EUR - Euro</option>
                    <option value="GBP">GBP- British Pound Sterling</option>
                    <option value="JPY">JPY - Japanese Yen</option>
                    <option value="AUD">AUD - Australian Dollar</option>
                    <option value="CAD">CAD - Canadian Dollar</option>
                    <option value="CNY">CNY - Chinese Yuan</option>
                    <option value="INR">INR - Indian Rupee</option>
                    <option value="BRL">BRL - Brazilian Real</option>
                    <option value="ZAR">ZAR - South African Rand</option>
                </select>

                <label htmlFor="fromCurrency">To Currency:</label>
                <select id="fromCurrency"  value ={toCountries}onChange={(e)=>setToCountries(e.target.value)}>
                    <option value="USD">USD - United States Dollar</option>
                    <option value="EUR">EUR - Euro</option>
                    <option value="GBP">GBP- British Pound Sterling</option>
                    <option value="JPY">JPY - Japanese Yen</option>
                    <option value="AUD">AUD - Australian Dollar</option>
                    <option value="CAD">CAD - Canadian Dollar</option>
                    <option value="CNY">CNY - Chinese Yuan</option>
                    <option value="INR">INR - Indian Rupee</option>
                    <option value="BRL">BRL - Brazilian Real</option>
                    <option value="ZAR">ZAR - South African Rand</option>
                </select>
                </div>
                {calCulatedAmount && amount && <p>{amount}  {fromCountries} = {calCulatedAmount} {toCountries}</p>}
            </div>
        </div>
    )
}
export default CurrencyCunverter;





{/* <label htmlFor="fromCurrency">From Currency:</label>
<select id="fromCurrency">
  <option value="USD">USD - United States Dollar</option>
  <option value="EUR">EUR - Euro</option>
  <option value="GBP">GBP- British Pound Sterling</option>
  <option value="JPY">JPY - Japanese Yen</option>
  <option value="AUD">AUD - Australian Dollar</option>
  <option value="CAD">CAD - Canadian Dollar</option>
  <option value="CNY">CNY - Chinese Yuan</option>
  <option value="INR">INR - Indian Rupee</option>
  <option value="BRL">BRL - Brazilian Real</option>
  <option value="ZAR">ZAR - South African Rand</option>
</select> */}