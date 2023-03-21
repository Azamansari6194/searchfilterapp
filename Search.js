import React, { useState } from 'react'
import data from './data'
const Search = () => {
  const [searchname, setsearchname] = useState("");
  const searchTextvalue = (event) => {
    setsearchname(event.target.value)
  }

  const dataSearch = data.cardData.filter(item => {
    return Object.keys(item).some(key =>
      item[key].toString().toLowerCase().includes(searchname.toString().toLowerCase()))
  })

  // console.warn(filter)
  return (
    <>
      <section className='py-5 container'>
        <div className='row justify-content-center'>

          <div className='col-12 mb-5'>
            <div className='mb-4 col-5 mx-auto text-center d-flex'>
              <label className='form-label h4 m-2'>Search</label>
              <input type="text"
                className='form-control'
                value={searchname}
                onChange={searchTextvalue.bind(this)}
                placeholder="search"
              />
            </div>
          </div>

          {dataSearch.map((item, index) => {
            return (
              <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4'>
                <div className='card p-0 overflow-hidden h-100 shadow'>
                  <img src={item.img} className='card-img-top' alt="card" />
                  <div className='card-body'>
                  <h5 className='card-title'> {item.type}</h5>
                    <h6 className='card-title'><i>Category : {item.title}</i></h6>
                    
                    <p className='card-text'>{item.desc}</p>
                  </div>
                </div>
              </div>
            )
          })}

        </div>
      </section>
    </>
  )
}

export default Search
