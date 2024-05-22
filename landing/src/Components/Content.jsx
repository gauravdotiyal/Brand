import React from 'react'
 


export default function Content() {
  return (
    <div>
      <div className="everything">
        <section>
          <div className="content">
            <h1>This is the best shoe brand in india </h1>
            <p>
              Latest shoes and footwears are also available at very reasonable
              price
            </p> 
            <button>Shop now</button> 

            <span >Also available on</span>
            <div className="online">
              <img src="/Images/flipkart.png" alt="" />
              <img src="/Images/amazon.png" alt="" />
            </div>

          </div>
        </section>
        <section>
          <div className="img">
            <img src="/Images/hero_image.png" alt="" />
          </div>
        </section>  
        
        
      </div>
    </div>
  )
}
