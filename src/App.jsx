
import './App.css'
import first from "./assets/img/1.png"
import second from "./assets/img/2.png"
import third from "./assets/img/3.png"
import fourth from "./assets/img/logo.png"


function App() {
  return (
    <>
      <div id='hero'>

        <div id='img1'>
          <img src={first} alt="" />
        </div>

        <div id='main'>
          <img src={fourth} />

          <h1>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h1>

          <h2> C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</h2>
          <h2>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</h2>

          <img src={second} alt="" id='grp' />

          <h2 id='h'>Government of India has awarded the "National Energy Conservation Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</h2>
        </div>

      </div>



      <h3>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </h3>
      <img src={third} id='img3' />
      <h4>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </h4>
      <hr />

      <h2 id='h2'>
        C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h2>
        <h4 id='c'>CHEMICALS & PROCESS POWER WATER & WASTE WATER OILS & GAS PHARMA SUGARS & DISTILLERIES PAPER & PULP MARINE & DEFENCE METAL & MINING FOOD & BEVERAGE PETROCHEMICAL & REFINERIES SOLAR BUILDING HVAC FIRE FIGHTING AGRICULTURE & RESIDENTIAL</h4>
        <div id='footer'>
          <p>Toll Free 1800 200 1234</p>
          <p><a href="www.facebook.com/cripumps">www.facebook.com/cripumps</a></p>
          <p><a href="www.crigroups.com">www.crigroups.com</a></p>
        </div>
    </>
  )
}

export default App
