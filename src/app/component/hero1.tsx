import React from 'react'

function Hero1() {
return (
<>
<div className='hero-main'>
    <div className='main-div1'>
        <div className='div1-sect1'>
        <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
        <p>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
        <button>Shop Now</button>
        </div>
        <div className='div1-sect2'>
            <div>
                <h1 className='figure-no'>200+</h1>
                <p className='figure-para'>International Brands</p>
            </div>
            <div className='figure-pipe'></div>
            <div>
                <h1 className='figure-no'>2,000+</h1>
                <p figure-para>International Brands</p>
            </div>
            <div className='figure-pipe'></div>
            <div>
                <h1 className='figure-no'>30,000+</h1>
                <p figure-para>International Brands</p>
            </div>
        </div>
    </div>
       <div className='main-div2'>
        <img src='star-large.png' className='star-large'></img>
        <img src='star-small.png' className='star-small'></img>

       </div>
</div>

<div className='logo-div'>
    <img src='/versace.png' className='w-166.48px h-33.16px'></img>
    <img src='/zara-logo.png' className='w-91px h-38px'></img>
    <img src='/gucci-logo.png' className='w-156px h-36px'></img>
    <img src='/prada-logo.png' className='w-194px h-32px'></img>
    <img src='/CK-logo.png' className='w-206.79px h-33.35px'></img>
</div>
</>
)
}

export default Hero1