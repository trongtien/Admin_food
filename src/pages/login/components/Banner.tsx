import React from 'react'


const Banner = (): JSX.Element => {
  return (
    <>
       {console.log("redner Banner")}
      <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          className="w-full"
          alt="Phone image"
        />
      </div>
    </>
  )
}

export default React.memo(Banner);